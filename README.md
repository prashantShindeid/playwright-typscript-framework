# Playwright TypeScript Automation Framework

A scalable and maintainable Playwright + TypeScript automation framework designed using Page Object Model (POM).

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Fixtures
- Environment Configuration
- JSON Test Data
- HTML Reports

---

# Framework Features

- Page Object Model Architecture
- Reusable Fixtures
- Environment-based Configuration
- JSON Test Data Handling
- Screenshot & Video Capture
- HTML Reporting
- Global Setup Support
- Clean Folder Structure
- Scalable Automation Design

---

# Project Structure

```bash
├── config
├── env-files
├── fixtures
├── pages
├── playwright/.auth
├── playwright-report
├── reports
├── screenshots
├── test-data
├── tests
│   ├── api
│   └── ui
├── utils
└── playwright.config.ts
```

---

# Implemented Test Modules

## Login Module

Covered Scenarios:

- Verify user login with valid credentials
- Verify login functionality using reusable fixtures
- Verify authenticated session handling

---

## Product Order Module

Covered Scenarios:

- Add product to cart
- Verify cart functionality
- Place order successfully
- Verify order confirmation message
- Verify generated order ID
- Compare order ID in Orders page

---

# API Automation

API folder structure is added for future UI+API automation implementation.


---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/prashantShindeid/playwright-typscript-framework.git
```

---

## Install Dependencies

```bash
npm install
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test tests/ui/loginmodule.spec.ts
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# Environment Files

Framework supports multiple environments using:

- .env.dev
- .env.demo

---

# Author

Prashant Shinde
QA Automation Engineer# Playwright TypeScript Automation Framework

A scalable and maintainable Playwright + TypeScript automation framework designed using Page Object Model (POM).

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Fixtures
- Environment Configuration
- JSON Test Data
- HTML Reports

---

# Framework Features

- Page Object Model Architecture
- Reusable Fixtures
- Environment-based Configuration
- JSON Test Data Handling
- Screenshot & Video Capture
- HTML Reporting
- Global Setup Support
- Clean Folder Structure
- Scalable Automation Design

---

# Project Structure

```bash
├── config
├── env-files
├── fixtures
├── pages
├── playwright/.auth
├── playwright-report
├── reports
├── screenshots
├── test-data
├── tests
│   ├── api
│   └── ui
├── utils
└── playwright.config.ts
```

---

# Implemented Test Modules

## Login Module

Covered Scenarios:

- Verify user login with valid credentials
- Verify login functionality using reusable fixtures
- Verify authenticated session handling

---

## Product Order Module

Covered Scenarios:

- Add product to cart
- Verify cart functionality
- Place order successfully
- Verify order confirmation message
- Verify generated order ID
- Compare order ID in Orders page

---

# API Automation

API folder structure is added for future API+UI automation implementation.



# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/prashantShindeid/playwright-typscript-framework.git
```

---

## Install Dependencies

```bash
npm install
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test tests/ui/loginmodule.spec.ts
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# Environment Files

Framework supports multiple environments using:

- .env.dev
- .env.demo

---

# Author

Prashant Shinde
QA Automation Engineer
