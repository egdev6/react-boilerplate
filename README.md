[react-boilerplate.jpg](https://postimg.cc/ZCffFWMR)

## Stack

Boilerplate para proyectos con React / Typescript y varias librerías ya configuradas:

<ul>
<li>Vite</li>
<li>Typescript</li>
<li>React</li>
<li>React-Query</li>
<li>Axios</li>
<li>React-router-dom</li>
<li>Styled-components</li>
<li>React-loader-spinner</li>
<li>Eslint</li>
<li>Prettier</li>
<li>Lint-staged</li>
<li>Husky</li>
</ul>

## Estructura 

src/
├── app/                     # Carpeta para la configuración de la app
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Archivo principal para inicialización
│
├── assets/                  # Recursos estáticos (iconos, fuentes, imágenes, etc.)
│   ├── icons/               # Iconos
│   ├── fonts/               # Fuentes
│   └── images/              # Imágenes
│
├── components/              # Componentes reutilizables siguiendo Atomic Design
│   ├── atoms/               # Componentes atómicos
│   ├── molecules/           # Componentes moleculares
│   ├── organisms/           # Componentes orgánicos
│   └── templates/           # Plantillas de UI
│
├── config/                  # Configuración general de la aplicación
│   ├── routes.ts            # Configuración de rutas
│   ├── axios.ts             # Configuración de Axios
│   ├── react-query.ts       # Configuración de React Query
│   └── zustand.ts           # Configuración de Zustand
│
├── infrastructure/          # Implementación de servicios técnicos
│   ├── api/                 # Servicios relacionados con la API
│   ├── hooks/               # Custom hooks
│   ├── models/              # Tipos de TypeScript
│   └── store/               # Gestión del estado global
│
├── mocks/                   # Datos de pruebas y mocks
│   ├── server.ts            # Configuración del servidor mock
│   └── data/                # Modelos mockeados organizados por entidad
│       ├── characters.json  # Mock de datos por entidad
│       └── gender.json      # Mock de datos por entidad
│
├── pages/                   # Páginas principales de la aplicación con subrutas
│   ├── home/                # Carpeta de subrutas de la home
│   │   ├── about/           # Subruta
│   │   │    ├── index.tsx   # Lógica
│   │   │    └── view.tsx    # Visualización
│   │   ├── index.tsx        # Lógica
│   │   └── view.tsx         # Visualización
│   └── not-found/           # Carpeta de ruta
│       ├── index.tsx        # Lógica
│       └── view.tsx         # Visualización
│
├── styles/                  # Estilos globales (Tailwind y CSS)
│   └── globals.css          # Estilos globales
│
├── tests/                   # Carpeta para las pruebas unitarias/integración
│
├── utils/                   # Utilidades funcionales
│   ├── constants/           # Constantes globales
│   └── helpers/             # Funciones auxiliares (por ejemplo, formateo, validaciones)
│               
└── index.tsx                # Punto de entrada de la app

vite.config.ts             # Configuración de Vite
tsconfig.json              # Configuración de TypeScript
biome.json                 # Configuración de Biome
tailwind.config.ts         # Configuración de Tailwind CSS
postcss.config.js          # Configuración de PostCSS
tailwind.config.ts         # Configuración de Tailwind
lefthook.yml               # Configuración de Lefthook

## Comandos

```js
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "prepare": "husky",
    "pre-commit": "lint-staged"
  }
```
