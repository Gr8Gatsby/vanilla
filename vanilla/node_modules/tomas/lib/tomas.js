'use strict';

const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');
const ischanged = require('ischanged');
const exec = require('execon');
const check = require('checkup');

module.exports.check = (name, callback) => {
    check
        .type('name', name, 'string')
        .type('callback', callback, 'function');
    
    const nameCrypt = getName(name);
    const isChanged = exec.with(ischanged, name);
    const isExist = exec.with(fs.lstat, nameCrypt);
    
    exec.parallel([isChanged, isExist], (error, changed, exists) => {
        callback(!changed && exists);
    });
};

module.exports.read = (name, options, callback) => {
    if (!callback)
        callback = options;
    
    check
        .type('name', name, 'string')
        .type('callback', callback, 'function');
    
    const nameCrypt = getName(name);
    
    if (options === 'name')
        return callback(null, nameCrypt);
    
    if (options === 'stream')
        return callback(null, fs.createReadStream(nameCrypt));
    
    fs.readFile(nameCrypt, 'utf8', callback);
};

module.exports.write = (name, data, callback) => {
    check
        .type('name', name, 'string')
        .type('callback', callback, 'function');
    
    const nameCrypt = getName(name);
    
    makeDir(() => {
        fs.writeFile(nameCrypt, data, (error) => {
            callback(error);
        });
    });
};

function getDir() {
    const tmp = os.tmpdir();
    const dir = path.join(tmp, 'tomas');
    const win = process.platform === 'win32';
    const sep = path.sep;
    
    if (!win)
        return path.join(dir, String(process.getuid())) + sep;
    
    return dir + sep;
}

function makeDir(callback) {
    const ANY_MASK = 0;
    const umask = process.umask(ANY_MASK);
    
    mkdirp(getDir(), (error) => {
        process.umask(umask);
        
        if (error && error.code === 'EEXIST')
            return callback();
        
        callback(error);
    });
}

/**
 * function get name of file in min folder
 * 
 * @param name
 */
function getName(name) {
    const ext = path.extname(name);
    
    const nameCrypt = crypto.createHash('sha1')
        .update(name)
        .digest('hex') + ext;
    
    return getDir() + nameCrypt;
}

