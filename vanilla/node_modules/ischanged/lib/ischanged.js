'use strict';

const os = require('os');
const path = require('path');

const check = require('checkup');
const readjson = require('readjson');
const writejson = require('writejson');
const time = require('timem');
const mkdir = require('mkdirp');
const log = require('debug')('ischanged');
const WIN = process.platform === 'win32';

let Times;

const DIR = getDir() || __dirname + '/../json/';
const NAME_SHORT = DIR           + 'changes';
const NAME = NAME_SHORT    + '.json';

function getTimes(callback) {
    if (Times)
        return callback(Times);
    
    readjson(NAME, (error, data) => {
        Times = data || {};
        callback();
    });
}

function getDir() {
    let dir = path.join(os.tmpdir(), '/ischanged');
    
    if (!WIN)
        dir += path.sep + process.getuid();
    
    return dir + path.sep;
}

function makeDir(dir, callback) {
    const ANY_MASK = 0;
    const umask = process.umask(ANY_MASK);
    
    mkdir(dir, (error) => {
        process.umask(umask);
        
        if (error && error.code === 'EEXIST')
            return callback();
        
        callback(error);
    });
}

module.exports = (name, callback) => {
    check
        .type('name', name, 'string')
        .type('callback', callback, 'function');
    
    getTimes(() => {
        let readTime = Times[name];
        
        time(name, 'raw', (error, fileTime) => {
            let timeChanged;
            let msg = 'changed';
            let changed = readTime !== fileTime;
            
            log('name: '     + name);
            log('readTime: ' + readTime + ' ' + error);
            log('fileTime: ' + fileTime);
            
            if (!changed)
                msg = 'not ' + msg;
            
            log(msg + ' ' + name);
            
            if (!error && changed) {
                timeChanged     = true;
                Times[name]     = fileTime;
                
                makeDir(DIR, (error) => {
                    if (error)
                        log('makedir ' + DIR + ' ' + error);
                    
                    writejson(NAME, Times, (error) => {
                        log('writeFile ' + NAME + ' ' + error);
                    });
                });
            }
            
            callback(error, timeChanged);
        });
    });
};
