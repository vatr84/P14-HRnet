# HRnet React Refactoring

## Project Overview
This repository contains two versions of the HRnet employee management system:
- **HRnet-jQuery**: Legacy implementation using jQuery.
- **HRnet-React**: Modern refactored version using React, Redux Toolkit, and Vite.

## Refactoring Highlights
- Migrated from jQuery to React for improved maintainability, scalability, and developer experience.
- State management handled with Redux Toolkit and persistence via redux-persist.
- Modular component structure for better reusability and testing.
- Modern build setup using Vite for fast development and optimized production builds.

## Performance Comparison (Lighthouse)
Lighthouse audits show significant improvements in the React version:

- **React version loads faster and is more accessible.**
- **Code is easier to maintain and extend.**

## Modal Component: vatr84-modal-component
This project uses the custom modal package [`vatr84-modal-component`](https://www.npmjs.com/package/vatr84-modal-component), published on npm.
- Provides a reusable, accessible modal dialog for React applications.
- Easily integrated and customizable.
- Example usage:
  ```jsx
  import Modal from "vatr84-modal-component";
  <Modal isOpen={isOpen} onClose={closeModal} title="Success!" closeText="Close">
    <p>Employee created successfully.</p>
  </Modal>
  ```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure
- `HRnet-jQuery/` — Legacy jQuery version
- `HRnet-React/` — Refactored React version
- `Lighthouse/` — Performance reports

## License
MIT
