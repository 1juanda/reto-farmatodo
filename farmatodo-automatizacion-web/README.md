# 🧪 FARMATODO - AUTOMATIZACIÓN WEB (Playwright E2E)

Proyecto de automatización de pruebas End-to-End (E2E) utilizando **Playwright + TypeScript**, basado en el flujo de compra del sitio de demo [https://www.saucedemo.com/](https://www.saucedemo.com/).

El objetivo del proyecto es validar un flujo completo de compra utilizando el patrón **Page Object Model (POM)** para mantener el código escalable, limpio y reutilizable.

---

## Estructura del proyecto

```
FARMATODO-AUTOMATIZACION-WEB
│
├── .github/workflows # CI/CD (GitHub Actions)
├── models # Interfaces y datos de prueba
│ ├── Credentials.ts
│ ├── Product.ts
│ └── User.ts
│
├── pages # Page Object Model (POM)
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ ├── CartPage.ts
│ ├── CheckoutPage.ts
│ ├── OverviewPage.ts
│ └── CompletePage.ts
│
├── tests # Casos de prueba E2E
│ └── saucedemo.spec.ts
│
├── playwright-report # Reportes HTML generados
├── test-results # Evidencias (screenshots, videos)
│
├── playwright.config.ts # Configuración de Playwright
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Flujo automatizado (E2E)

El test principal simula un flujo completo de compra:

1. Login con usuario estándar
2. Selección de producto
3. Validación de producto en carrito
4. Checkout (datos del usuario)
5. Confirmación de compra
6. Validación de orden completada

---

## Arquitectura del proyecto

Este proyecto utiliza **Page Object Model (POM)**:

- Cada página del sistema tiene su propia clase
- La lógica de UI está separada de los tests
- Los modelos (`models/`) contienen los datos de entrada

### Ejemplo:

- `LoginPage.ts` → login del usuario
- `InventoryPage.ts` → catálogo de productos
- `CartPage.ts` → carrito de compras
- `CheckoutPage.ts` → formulario de usuario
- `OverviewPage.ts` → confirmación de compra
- `CompletePage.ts` → validación final

---

## Test principal

Archivo: `tests/saucedemo.spec.ts`

### Qué valida:

- Login exitoso
- Selección de producto
- Validación de nombre y precio
- Proceso de checkout
- Confirmación de orden

---

## Configuración de Playwright

Archivo: `playwright.config.ts`

```ts
baseURL: 'https://www.saucedemo.com/',
browserName: 'chromium',
headless: false,
viewport: null,
workers: 1
Características:
Browser: Chromium
Ejecución visual (headless: false)
Reporte HTML
Videos y screenshots habilitados
Timeout: 8 segundos
Ejecución paralela (6 workers)
```

---

## Instalación del proyecto
1. Clonar repositorio
```bash
git clone <url-del-repo>
cd FARMATODO-AUTOMATIZACION-WEB
```
2. Instalar dependencias
```bash
npm install
```
3. Instalar Playwright browsers
```bash
npx playwright install
```

---

## ejecución de pruebas
Ejecutar todos los tests
```bash
npx playwright test
```
Ejecutar en modo UI
```bash
npx playwright test --ui
```
Ejecutar un archivo específico
```bash
npx playwright test --grep "saucedemo"
```
---

## Reportes
Después de ejecutar las pruebas:
Generar reporte HTML
```bash
npx playwright show-report
```
El reporte se guarda en:
playwright-report/
---
## Buenas prácticas aplicadas
* Page Object Model (POM)
* Separación de datos (models)
* Reutilización de código
* Validaciones con expect
* Estructura escalable
* Tests independientes
## Tecnologías usadas
*Playwright
*TypeScript
*Node.js
*GitHub Actions (CI/CD)
*HTML Reporter