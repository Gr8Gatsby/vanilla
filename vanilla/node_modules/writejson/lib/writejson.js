'use strict';

const fs = require('fs');
const tryCatch = require('try-catch');

const getWriteOptions = (options) => ({
    encoding: options.encoding,
    mode: options.mode,
    flag: options.flag,
});

module.exports = (name, json, options, callback) => {
    if (!callback) {
        callback = options;
        options = {};
    }
    
    check(name, json, options);
    checkCB(callback);
    
    const str = stringify(json, options);
    const writeOptions = getWriteOptions(options);
    
    fs.writeFile(name, str, writeOptions, callback);
};

module.exports.sync = sync;

function sync(name, data, options) {
    options = options || {}; 
    check(name, data, options);
    
    const writeOptions = getWriteOptions(options);
    fs.writeFileSync(name, stringify(data, options), writeOptions);
}

module.exports.sync.try = (name, data, options) => {
    options = options || {};
    check(name, data, options);
    
    const result = tryCatch(sync, name, data, options);
    const error = result[0];
    
    return error;
};

function defaultOptions(options) {
    if (typeof options.space === 'undefined')
        options.space = 4;
    
    if (typeof options.eof === 'undefined')
        options.eof = true;
    
    return options;
}

function stringify(data, options) {
    defaultOptions(options);
    
    const result = JSON.stringify(data, options.replacer, options.space);
    const eof = options.eof;
    
    return maybeAddNewLine(result, {
        eof,
    });
}

function maybeAddNewLine(str, options) {
    if (!options.eof)
        return str;
    
    return `${str}\n`;
}

function check(name, json, options) {
    if (typeof name !== 'string')
        throw Error('name should be string!');
    
    if (typeof json !== 'object')
        throw Error('json should be object!');
    
    if (typeof options !== 'object')
        throw Error('options should be object!');
}

function checkCB(callback) {
    if (typeof callback !== 'function')
        throw Error('callback should be function!');
}

