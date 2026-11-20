# EmailJS in the Docker build

The React build embeds EmailJS configuration into public JavaScript. The Apache
container only serves the compiled files: setting runtime environment variables
or copying a .env file into that container cannot change the configuration.
Use only the EmailJS public key, never an account password or private API key.

## Jenkins

Before pushing the updated Jenkinsfile, create three credentials visible to the
main multibranch job (Manage Jenkins > Credentials, or the job folder's credentials).
Choose **Secret text** for each:

| Credential ID | Value from the existing local application .env |
| --- | --- |
| spectacol-emailjs-service-id | REACT_APP_EMAILJS_SERVICE_ID |
| spectacol-emailjs-template-id | REACT_APP_EMAILJS_TEMPLATE_ID |
| spectacol-emailjs-public-key | REACT_APP_EMAILJS_PUBLIC_KEY |

The pipeline requires Jenkins Credentials Binding support. It loads these values
only in the Validate and build stage. Compose passes them as Docker build args;
React consumes them during npm run build. Jenkins storage/masking does not make
these frontend values private once published in the browser bundle.

Commit and push the infrastructure changes after creating the credentials.
Run Build with Parameters with DEPLOY unchecked to validate without publishing.
The job's existing DEPLOY default is true, so an automatic main build may deploy.
HTTP checks include /contact but do not prove actual email delivery.

Once checks pass, run with DEPLOY enabled. Verify direct navigation and refresh
at /contact. Submit one clearly marked test message and confirm receipt at the
recipient configured in the EmailJS template. The form's email field is the
sender's address; it does not necessarily select the recipient. A sandbox test
requires a separate template/service configured for the test recipient.

Changing any value requires rebuilding the image. Missing or empty build values
stop the Docker build; this check does not verify the values against EmailJS.

## Manual build

From the repository root, use the existing application .env explicitly:

```sh
docker compose --env-file spectacol-caritabil-de-craciun/.env build --pull
```

Alternatively, fill a private copy of deploy.env.example outside the repository
and pass its path with --env-file. Do not commit actual environment files.
Compose may start an already built image without these values; they are only
needed when building. Keep APP_VERSION consistent when building and deploying.

To roll back, set APP_VERSION to the previous recorded image tag and run
`docker compose up -d --no-build --pull never --wait`; do not rebuild that tag.
