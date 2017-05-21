import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
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
  enableProdMode();
}

const modulePromise=platformBrowserDynamic().bootstrapModule(AppModule);
