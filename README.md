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
```

## Notas adicionales

El proyecto usa ES Modules ("type": "module").

Si Jest falla con require, asegurarse de que los imports estén en formato import.

Babel está configurado para que Jest interprete ES Modules (babel.config.js con @babel/preset-env).
```
```
## Informe de Implementación del Proyecto CI/CD
Este proyecto tiene como objetivo demostrar la integración continua (CI) y entrega continua (CD) usando Node.js y Express. Incluye pruebas automatizadas con Jest, generación de cobertura de código y construcción de la aplicación.

## Configuración del proyecto
- Se configuró el proyecto para usar ES Modules (`"type": "module"`).
- Se movió `index.js` a la carpeta `src` para poder construir la aplicación en `dist`.
- Se instalaron dependencias de desarrollo: `jest`, `supertest`, `nodemon`, `@babel/core`, `@babel/preset-env`, `babel-jest`.

## Pipeline CI/CD
- El workflow de GitHub Actions (`.github/workflows/ci.yml`) realiza:
  1. Instalación de dependencias (`npm install`)
  2. Ejecución de tests y cobertura (`npm run test:ci`)
  3. Construcción de la aplicación (`npm run build`)
- Se verificó que el pipeline se ejecuta correctamente en GitHub Actions.

## Pruebas
- Se implementó un test básico en `tests/app.test.js` para verificar que la aplicación responde correctamente.
- La cobertura de código se genera en `coverage/lcov-report/index.html`.

## Build
- La construcción copia los archivos de `src` a `dist` usando el script `npm run build`.

## Observaciones
- Es importante mantener Babel configurado correctamente para soportar ES Modules en los tests.
- Se recomienda incluir evidencia del pipeline ejecutándose en GitHub Actions mediante capturas o video.

## Conclusión
El proyecto cumple con los objetivos de la práctica: automatización de tests, cobertura de código y pipeline CI/CD funcional en GitHub Actions.
```
