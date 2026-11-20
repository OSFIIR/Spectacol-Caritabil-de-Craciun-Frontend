import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser", () => ({ sendForm: jest.fn() }));

process.env.REACT_APP_EMAILJS_SERVICE_ID = "sandbox-service";
process.env.REACT_APP_EMAILJS_TEMPLATE_ID = "sandbox-template";
process.env.REACT_APP_EMAILJS_PUBLIC_KEY = "sandbox-public-key";
const ContactForm = require("./ContactForm").default;

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(window, "alert").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

function fillForm() {
  const { container } = render(<ContactForm />);
  const values = {
    name: "Sandbox test",
    phone: "0700000000",
    email: "sandbox@example.test",
    message: "Automated sandbox check; no email is sent.",
  };
  for (const [name, value] of Object.entries(values)) {
    fireEvent.change(container.querySelector(`[name="${name}"]`), { target: { value } });
  }
  return { form: container.querySelector("form"), values };
}

test("sends all fields with configured identifiers and clears after success", async () => {
  let submitted;
  emailjs.sendForm.mockImplementation((service, template, form) => {
    submitted = Object.fromEntries(new FormData(form));
    return Promise.resolve({ text: "OK" });
  });
  const { form, values } = fillForm();
  fireEvent.submit(form);
  expect(emailjs.sendForm).toHaveBeenCalledWith(
    "sandbox-service", "sandbox-template", form, "sandbox-public-key"
  );
  expect(submitted).toEqual(values);
  await waitFor(() => expect(window.alert).toHaveBeenCalledWith("Mesaj trimis cu succes"));
  expect(screen.getByLabelText("Email").value).toBe("");
  expect(screen.getByLabelText("Mesaj").value).toBe("");
});

test("preserves the message and shows failure when delivery is rejected", async () => {
  emailjs.sendForm.mockRejectedValue({ text: "Sandbox rejection" });
  const { form, values } = fillForm();
  fireEvent.submit(form);
  await waitFor(() => expect(window.alert).toHaveBeenCalledWith("Trimitere esuata"));
  expect(screen.getByLabelText("Mesaj").value).toBe(values.message);
  expect(screen.getByLabelText("Email").value).toBe(values.email);
});

test("requires name, valid email and message before browser submission", () => {
  const { container } = render(<ContactForm />);
  const form = container.querySelector("form");
  expect(form.checkValidity()).toBe(false);
  fireEvent.change(screen.getByLabelText("Nume"), { target: { value: "Sandbox" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "invalid" } });
  fireEvent.change(screen.getByLabelText("Mesaj"), { target: { value: "Test" } });
  expect(form.checkValidity()).toBe(false);
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "sandbox@example.test" } });
  expect(form.checkValidity()).toBe(true);
  expect(emailjs.sendForm).not.toHaveBeenCalled();
});
