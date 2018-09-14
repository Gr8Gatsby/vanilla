# Tomas [![License][LicenseIMGURL]][LicenseURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![NPM version][NPMIMGURL]][NPMURL]

Save data to storage and read from it to speed up computing.

## Install

```
npm i tomas --save
```
## How to use?

```js
const fs = require('fs'),
const tomas = require('tomas'),
const path = './package.json',
const log = (error, data, str) => {
     if (error)
            console.error(error.message);
        else
            console.log(str, data);

    return error;
};

tomas.check(path, (is) => {
    if (is)
        return tomas.read(name, (error, data) => {
           log(error, data, 'tomas read:\n');
        });
    
    fs.readFile(name, 'utf8', (error, data) => {
        if (!log(error))
            tomas.write(name, data, (error) => {
                log(error, data, 'tomas written:\n');
            });
    });
});
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/tomas.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/node-tomas/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/node-tomas.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPM_INFO_IMG]:             https://nodei.co/npm/tomas.png?stars
[NPMURL]:                   http://npmjs.org/package/tomas
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[BuildStatusURL]:           http://travis-ci.org/coderaiser/node-tomas  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/node-tomas "Dependency Status"

