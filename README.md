# Spectacolul Caritabil - OSFIIR (Ediția de Crăciun 2026)

**Contribuitori:** Iulian și Victor

Acesta este repository-ul pentru platforma web oficială a **Spectacolului Caritabil** organizat de OSFIIR. 

Aplicația are scopul de a prezenta evenimentul, artiștii, sponsorii echipei și de a facilita direcționarea donațiilor într-un mod sigur prin integrarea cu Donorbox.

## Features

- **Integrare Donații:** Flow de plată adaptiv — widget Donorbox direct în pagină pe Desktop pentru viteză, respectiv "Action Card" cu redirecționare externă securizată pe Mobil pentru a evita problemele de rendering/scroll ale iframe-urilor pe iOS/Android.
- **Design Custom & SVG Layouts:** Am implementat o interfață "plaque-style" folosind fundaluri SVG, asigurând proporții vizuale corecte (`aspect-ratio`) la scalare.
- **Responsive Artists Carousel:** Slider interactiv (swipe/snap-scrolling pe mobil) cu elemente grafice și text centrate dinamic folosind calcule precise (`calc()`) în CSS.
- **Componente Reutilizabile:** Structuri modulare precum componenta "Coming Soon" pentru a fi refolosită rapid pe paginile aflate în dezvoltare.

## Tech Stack

- **Frontend:** React.js
- **Styling:** SCSS (Sass) / CSS Flexbox & Grid
- **Responsive Media:** HTML5 tags pentru manipularea eficientă a resurselor grafice în funcție de viewport.

## Rulare Locală

1. Clonează repository-ul:
   ```bash
   git clone https://github.com/OSFIIR/Spectacol-Caritabil-de-Craciun-Frontend
