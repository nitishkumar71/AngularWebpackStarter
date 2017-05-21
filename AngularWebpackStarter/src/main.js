"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
/*
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => {
        // before restarting the app, we create a new root element and dispose the old one
        const oldRootElem = document.querySelector('my-app');
        const newRootElem = document.createElement('my-app');
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        modulePromise.then(appModule => appModule.destroy());
    });
}*/
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
var modulePromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map