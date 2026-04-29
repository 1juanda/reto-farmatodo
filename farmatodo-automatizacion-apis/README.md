# 🧪 Automatización de APIs con Playwright + TypeScript (PokeAPI)

Este proyecto implementa una suite de automatización de pruebas de APIs utilizando **Playwright Test** con **TypeScript**, consumiendo la API pública de Pokémon (PokeAPI).
El objetivo es validar información de Pokémon, sus cadenas de evolución y manipulación de datos mediante utilidades propias como ordenamiento.

---

# Arquitectura del Proyecto

El proyecto sigue una **arquitectura por capas (Layered Architecture)**, separando responsabilidades para mantener el código escalable, reutilizable y fácil de mantener.

```
src/
│
├── api/
│ ├── data/ # Datos estáticos de entrada (Pokémon base)
│ ├── models/ # Interfaces TypeScript (tipado de datos)
│ ├── services/ # Lógica de consumo de API (PokeAPI)
│ ├── utils/ # Utilidades (ordenamientos, helpers)
│
tests/
│ └── api/ # Pruebas automatizadas
```
---

# Tecnologías utilizadas

- Node.js
- TypeScript
- Playwright Test
- PokeAPI (API externa REST)

---

# Instalación del proyecto

Clona el repositorio:

```bash
git clone <url-del-repo>
cd FARMATODO-AUTOMATIZACION-APIS
```

# Instala dependencias:

```bash
npm install
```

# Instala Playwright:

```bash
npx playwright install
```

# Ejecución de pruebas

## Ejecutar todas las pruebas:

```bash
npx playwright test
```
## Ejecutar en modo debug:

```bash
npx playwright test --debug
```
## Ejecutar reporte HTML:

```bash
npx playwright show-report
```