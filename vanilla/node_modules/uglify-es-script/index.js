#!/usr/bin/env node

"use strict"

/**
 * Dependencies
 */

const UglifyJS = require('uglify-es')
const path = require("path")
const fs = require("fs")

/**
 * Constants
 */

const base = path.join(__dirname, "..", "..")
const js_path = path.join(base, "app", "assets", "js")
const js_manifest = path.join(js_path, 'manifest.json')
const output_path = path.join(base, "public", "js", "main.min.js")

/**
 * Check for manifest.js
 */

if (!fs.existsSync(js_manifest)) {
  throw new Error(`Missing ${js_manifest}`)
}

/**
 * Read manifest.js
 */

let manifest = JSON.parse(fs.readFileSync(js_manifest, 'utf-8'))
let manifest_keys = Object.keys(manifest)

/**
 * Read code
 */

let code_path, content
let code = {}

for (let i=0; i < manifest_keys.length; i++) {
  code_path = path.join(js_path, manifest[manifest_keys[i]])

  if (fs.existsSync(code_path)) {
    content = fs.readFileSync(code_path, "utf8")
    code[manifest_keys[i]] = content
  }
}

/**
 * Compress files
 */

let result = UglifyJS.minify(code)

/**
 * Write main.min.js
 */

if (result.error === undefined) {
  fs.writeFileSync(output_path, result.code, "utf8")
} else {
  console.error(result.error)
}
