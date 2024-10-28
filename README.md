
# ETMA (Equipment Monitoring Apps)

ETMA is equipment monitoring web apps that track equipment status and performance, offering alerts, and predictive maintenance(soon) to optimize efficiency and reduce downtime.


## Overview

ETMA is a web-based equipment monitoring app designed to streamline asset management. It provides comprehensive features, including real-time equipment status, performance metrics, runtime tracking, and detailed activity logs. The platform also offers robust master data management and user management functionalities, allowing for secure, organized data storage and efficient oversight of all equipment operations.


## System Requirements

Requirement  | Version
------------- | -------------
[NodeJS](https://github.com/nodejs)  | >= 20.9.0
[Angular CLI](https://github.com/angular/angular-cli)   | >= 17.3.8.


## Dependencies
[Keycloack.js](https://github.com/keycloak/keycloak) for login purposes


## Installation
Install dependencies of TMS (Tools Management System) with npm
 
```bash
npm install
```

or

```bash
yarn install
```

## Usage

 - **Run for development**

```bash
ng serve
```

for a dev server. Navigate to `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

*note: the environment file that will be use for development is :* 

> environtment.ts

- **Run for Production / Build**

```bash
npm run build:prod
```
to build the project. The build artifacts will be stored in the `dist/` directory.

*note: the environment file that will be use for production is :*

> environtment.prod.ts


## Documentation
Run

```bash
npx compodoc -s
```

This will analyze your project's code, generate documentation, and start a local server. You can then access the documentation by opening your web browser and navigating to the provided address.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## 🚀 Contributor

FE : Hilmy Abdurrahim Kaukaby[![instagram](https://img.shields.io/badge/instagram-D50C3F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/abdurrahimhilmy/)

BE : Antonio Saiful Islam [![instagram](https://img.shields.io/badge/instagram-D50C3F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/antoniosai/)

BE : Mochamad Dimas Editya  [![instagram](https://img.shields.io/badge/instagram-D50C3F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/dimaseditiya/)



