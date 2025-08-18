# Proyecto CI/CD con Node.js y Express

## Descripción
Este proyecto es un ejemplo de integración continua (CI) y entrega continua (CD) usando Node.js, Express, Jest y GitHub Actions. Permite automatizar tests, generar cobertura de código y construir la aplicación.

## Requisitos
- Node.js v18 o superior
- npm
- Git

## Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/yordalis2023-1719/mika-ci-cd
cd mika-ci-cd
````

2. Instalar dependencias:

```bash
npm install
```

## Uso

1. Para ejecutar la aplicación en desarrollo:

```bash
npm run dev
```

2. Para ejecutar la aplicación en producción:

```bash
npm start
```

## Tests y cobertura

1. Ejecutar tests con Jest:

```bash
npm test
```

2. Ejecutar tests con cobertura:

```bash
npm run test:ci
```

3. Ver la cobertura de código:

* Abrir `coverage/lcov-report/index.html` 

## Build

1. Construir el proyecto (copiar archivos de `src` a `dist`):

```bash
npm run build
```

2. Los archivos construidos estarán en la carpeta `dist`.

## Pipeline de GitHub Actions

* El workflow se encuentra en `.github/workflows/ci.yml`.
* Acciones que realiza:

  1. Instala dependencias (`npm install`)
  2. Ejecuta tests con cobertura (`npm run test:ci`)
  3. Construye la aplicación (`npm run build`)

## Estructura de carpetas

```
mika-ci-cd/
│   package.json
│   server.js
│
├───node_modules
├───src
│       index.js
├───dist
├───tests
│       app.test.js
├───coverage
└───.github
        workflows/ci.yml

Notas adicionales

El proyecto usa ES Modules ("type": "module").

Si Jest falla con require, asegurarse de que los imports estén en formato import.

Babel está configurado para que Jest interprete ES Modules (babel.config.js con @babel/preset-env).
