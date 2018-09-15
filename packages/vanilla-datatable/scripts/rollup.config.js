/* eslint-env node */

const path = require("path");
const rollupUglify = require("rollup-plugin-uglify");
const replace = require("rollup-plugin-replace");
const es6Uglify = require("uglify-js-harmony");

const isProduction = process.env.NODE_ENV === "production";
const fileName = `main${isProduction ? ".min" : ""}.js`;

const plugins = [
  replace({
    "process.env.NODE_ENV": JSON.stringify(
      isProduction ? "production" : "development"
    )
  })
];

if (isProduction) {
  plugins.push(rollupUglify({ warnings: false }, es6Uglify.minify));
}

module.exports = {
  input: path.resolve(__dirname, "../src/main.js"),
  output: {
    file: path.resolve(__dirname, `../public/js/${fileName}`),
    format: "iife"
  },
  plugins
};
