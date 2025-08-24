# P14 HRnet React Refactoring

## Project Overview
This repository contains two versions of the HRnet employee management system:
- **HRnet-jQuery**: Legacy implementation using jQuery.
- **HRnet-React**: Modern refactored version using React, Redux Toolkit, and Vite.

## Technologies used

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,vite,github,html,css,js,jquery,nodejs,vscode" />
  </a>
</p>

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [@tanstack/react-table](https://tanstack.com/table/latest)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

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
- Installation
  ```bash
  npm install vatr84-modal-component
  ```
  OR
  ```bash
  npm i https://github.com/vatr84/vatr84-modal-component.git
  ```
- Example usage:
  ```jsx
  import Modal from "vatr84-modal-component";
  <Modal isOpen={isOpen} onClose={closeModal} title="Success!" closeText="Close">
    <p>Employee created successfully.</p>
  </Modal>
  ```

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/vatr84/P14-HRnet.git
   ```
2. Go to the HRnet-React folder:
   ```bash
   cd P14-HRnet/HRnet-React
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Build the project for production:
   ```bash
   npm run build
   ```
6. Preview the production build locally (for Lighthouse performance comparison):
   ```bash
   npm run preview
   ```

## Folder Structure
- `HRnet-jQuery/` — Legacy jQuery version
- `HRnet-React/` — Refactored React version
- `Lighthouse/` — Performance reports

## License
MIT
