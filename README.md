# Proyecto: Calculadora de Series Matemáticas

Este proyecto es una calculadora de series matemáticas desarrollada con **React** y **Vite**, utilizando **TailwindCSS** para los estilos y **Vitest** para las pruebas unitarias.

## Descripción

El proyecto permite calcular el valor del término \( n \) de una fórmula combinada basada en tres series matemáticas:

1. **Números Primos**: Calcula el n-ésimo número primo.
2. **Serie de Fibonacci**: Calcula el n-ésimo término de la serie de Fibonacci.
3. **Números Triangulares**: Calcula el n-ésimo número triangular.

### Fórmula utilizada:
\[
\text{Resultado} = -3(\text{Primo}(n)) - (\text{Fibonacci}(n)) + 5(\text{Triangular}(n+1))
\]

El programa muestra:
- El resultado del cálculo de la fórmula.
- La fórmula utilizada con los valores sustituidos.
- Información detallada sobre los números primos, Fibonacci y triangulares.

## Características

- **Interfaz interactiva**: Formulario para ingresar el valor de \( n \).
- **Resultados dinámicos**: Desglose visual del cálculo y las series involucradas.
- **Pruebas unitarias**: Validación de las funciones matemáticas y la fórmula general con **Vitest**.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**:
   ```bash
   https://github.com/AgustinAntonio16/math-series-calculator.git
   cd math-series-calculator
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   - Accede a la URL que se muestra en la terminal, usualmente `http://localhost:5173`.

## Scripts disponibles

- `npm run dev`: Ejecuta la aplicación en modo desarrollo.
- `npm run build`: Genera la versión optimizada para producción.
- `npm run preview`: Previsualiza la versión optimizada.
- `npm test`: Ejecuta las pruebas unitarias con Vitest.

## Pruebas Unitarias

Las pruebas se realizaron para validar las siguientes funciones:

1. **Números Primos**: Validación del cálculo del n-ésimo número primo.
2. **Serie de Fibonacci**: Validación del cálculo del n-ésimo término.
3. **Números Triangulares**: Verificación de los valores triangulares.
4. **Fórmula General**: Prueba integral de la fórmula combinada para los 10 primeros números naturales.

Para ejecutar las pruebas:
```bash
npm test
```

Las pruebas utilizan **Vitest** y validan tanto las funciones matemáticas individuales como la fórmula combinada.

## Tecnologías utilizadas

- **React**: Para la creación de la interfaz de usuario.
- **Vite**: Para el desarrollo rápido de la aplicación.
- **TailwindCSS**: Para los estilos responsivos.
- **Vitest**: Para las pruebas unitarias.
- **JavaScript (ES6+)**: Lenguaje principal del proyecto.

## Estructura del proyecto

```
├── src
│   ├── assets           # Recursos estáticos (imágenes, íconos, etc.)
│   ├── components       # Componentes React
│   │   ├── InputForm.jsx
│   │   ├── SeriesInfo.jsx
│   │   └── ResultDisplay.jsx
│   ├── functions        # Funciones de cálculo y utilidades
│   │   ├── calculateSeriesTerm.js
│   │   └── calculateSeriesTerm.test.js
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada de la aplicación
└── package.json         # Configuración de dependencias y scripts
```

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
