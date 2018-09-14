
```
$ npm install
$ npm run build
$ npm test
```

yields following (using webpack 4.19.0)

```
----------
target = web
module with browser field (string) => browser.js
module with browser field (object) => browser.js
----------
target = electron-renderer
module with browser field (string) => browser.js
module with browser field (object) => index.js
```
