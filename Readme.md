# React Diceware

This is a small project to learn the best practices of React without using any boilerplate.

## Requirements

* node
* yarn (or npm)

This project makes use of (among others):

* [react](https://facebook.github.io/react/)
* [styled-components](https://styled-components.com/)
* [flow](https://flow.org)
* [webpack](webpack.js.org)
* [jest](https://facebook.github.io/jest/)
* [babel](https://babeljs.io/)

### Install

First clone the repo.

```shell
yarn install
yarn global add flow-typed
flow-typed install
```

#### Running the app locally

`yarn start`

##### Available scripts

* `yarn start` will start webpack-dev-server
* `yarn build` will build in the `dist` folder
* `yarn test` runs your tests using `jest`
* `yarn run test:watch` will watch the files for changes and run the tests
* `yarn run lint` will run eslint on your files
* `yarn run flow` will check for flow type errors