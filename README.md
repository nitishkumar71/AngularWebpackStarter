# AngularWebpackStarter

Assuming following is already installed on your system
1. node js
2. Visual Studio 2015 Update 3

Set npm Corporate proxy configuration, proxy server details will be available in .pac file
```
npm config set proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port

npm config set https-proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port
npm config set registry=http://registry.npmjs.org/
npm config set strict-ssl=false
```
install node module dependencies in AngularWebpackStarter folder
```
npm install
```

Install Webdriver-Manager for e2e testing

```
npm install -g webdriver-manager
```

To Enable WebPack Watch navigate to folder AngularWebpackStarter in cmd and type

```
npm run watch-webpack-dev
```

To Produce Production build

```
npm run prod:build
```

Unit test project 

```
npm test
```

e2e Test

```
npm run e2e
```

use ts lint

```
npm run lint
```

Run Project using Webpack Dev server
```
npm start
```
