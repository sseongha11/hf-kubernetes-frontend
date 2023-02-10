# Ui Application Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Projec Setup

1. install angular

```bash
sudo npm install -g @angular/cli
```
2. ng version
3. ng new ui
4. ng add @angular/material
5. ng g c assetList
6. ng g c assetDialog
7. ng g c historyDialog
8. ng g s services/http

## Implementing UI functionalities

1. Start application

```bash
ng s
```
2. open url http://localhost:4200/

3. update app.component.html

4. update asset-list.component.html

5. update asset-list.component.ts

6. update asset-list.component.css

7. update asset-dialog

8. Update history-dialog

## Integrating API's and Testing UI Application

1. Open up the new window on MAC CLI
2. kubectl port-forward services/api 4000
3. copy url 127.0.0.1:4000
4. update environment.ts and environment.prod.ts

## Frontend Application Deployment

1. Create Dockerfile
2. Make the Docker Image (I used Ubuntu)
3. cd 11.ui
4. visit dockerhub
5. Create repository-hlf-frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
