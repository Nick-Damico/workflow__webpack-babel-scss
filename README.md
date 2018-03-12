# About
This repository provides a workflow for starting a new projects using 'Webpack', 'Webpack Dev Server' for hot reloading during development, 'babel' for writing ES6 code that gets compiled down to browser compatible ES2015 code, and allows for writing SCSS/Sass which will be compiled down to browser compatible CSS.

# Dependencies
NPM,
Node.js,
Webpack,
Babel

# Manual Setup
Initialize with NPM: `npm init -y`
Install Webpack: `npm install webpack --save-dev`
Install Webpack dev server: `npm install webpack-dev-server --save-dev`

SCSS Loaders
Install loaders for compiling .scss files: 'npm install sass-loader node-sass css-loader extract-text-webpack-plugin@4.0.0-beta.0 --save-dev'

Babel Code Transpiling
Install Babel and presets: `npm install babel-core babel-loader babel-preset-env`

## Note
  Above to translate `SCSS` to `CSS`, we have to use sass-loader, node-sass, css-loader. These three packages will let Webpack translate the Scss to CSS for final output. Then using `extract-text-webpack-plugin` instead of following normal Webpack flow where the CSS would be finally output to the <head> elements of the document we output to a separate final .css file which instead can be linked to using a <link> element tag in the head of the document

# Package Scripts

`npm run build` Will run a webpack-dev-server on port `localhost:8080` for development with 'hot' reloading.

`npm run build:prod` will output to `/dist` all production ready js code in `dist/bundle.js` and CSS to `dist/main.css`.
