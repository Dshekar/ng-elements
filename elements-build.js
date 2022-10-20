const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
    const files = [
        './dist/ng-elements/runtime.js',
        './dist/ng-elements/polyfills.js',
        './dist/ng-elements/main.js'
    ];

    await fs.ensureDir('ng-elements');
    await concat(files,'ng-elements/hello-world-element.js');
    await fs.copyFile(
        './dist/ng-elements/styles.css',
        'ng-elements/styles.css'
    );
})();