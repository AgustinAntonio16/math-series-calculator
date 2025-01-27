# Proyecto: Calculadora de Series Matemáticas

Este proyecto es una calculadora de series matemáticas desarrollada con **React** y **Vite**, utilizando **TailwindCSS** para los estilos y **Vitest** para las pruebas unitarias.

## Descripción

El proyecto permite calcular el valor del término \(n\) de una fórmula combinada basada en tres series matemáticas:
1. **Números Primos**: Calcula el n-ésimo número primo.
2. **Serie de Fibonacci**: Calcula el n-ésimo término de la serie de Fibonacci.
3. **Números Triangulares**: Calcula el n-ésimo número triangular.

La fórmula utilizada es:
\[
\text{Resultado} = -3(\text{Primo}(n)) - (\text{Fibonacci}(n)) + 5(\text{Triangular}(n+1))
\]

El programa muestra:
- El resultado del cálculo de la fórmula.
- La fórmula utilizada con los valores sustituidos.
- Información detallada sobre los números primos, Fibonacci y triangulares.

## Características

- **Interfaz interactiva**: Formulario para ingresar el valor de \(n\).
- **Resultados dinámicos**: Desglose visual del cálculo y las series involucradas.
- **Pruebas unitarias**: Validación de las funciones matemáticas y la fórmula general con **Vitest**.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
