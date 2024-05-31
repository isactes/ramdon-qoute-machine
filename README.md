# Random Quote Machine

Este es un proyecto de freeCodeCamp para construir una máquina de citas aleatorias. La aplicación muestra citas aleatorias y permite al usuario generar nuevas citas con un botón. También proporciona la opción de compartir la cita en Twitter.

## Descripción

La Random Quote Machine es una aplicación web sencilla que muestra una cita aleatoria de una colección de citas. Al hacer clic en el botón "Nueva cita", se muestra una nueva cita aleatoria. Además, hay un botón de "Twitter" que permite al usuario compartir la cita actual en su cuenta de Twitter.

## Demo en vivo

Puedes ver una demostración en vivo de la aplicación [aquí](#).

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- React
- Vite

## Características

- Muestra una cita aleatoria al cargar la página.
- Genera una nueva cita al hacer clic en el botón "Nueva cita".
- Permite compartir la cita actual en Twitter.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/isactes/ramdon-qoute-machine.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd ramdon-qoute-machine
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

Para ejecutar la aplicación localmente:

1. Inicia la aplicación:
    ```bash
    npm run dev
    ```
2. Abre tu navegador y visita `http://localhost:3000`.

## Estructura del proyecto

```plaintext
random-quote-machine/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── QuoteBox.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
