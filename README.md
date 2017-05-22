# AngularWebpackStarter

Assuming following is already installed on your system
1. node js
2. Visual Studio 2015 Update 3

Set npm Corporate proxy configuration, proxy server details will be available in .pac file. If this below steps are done already, then no need to repeat them. 
Note: You may have to repeat below steps, if you have changed your password.

```
npm config set proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port

npm config set https-proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port

npm config set registry=http://registry.npmjs.org/

npm config set strict-ssl=false
```
Navigate to AngularWebpackStarter project folder and install node module dependencies

```
npm install
```

Before starting development, Enable WebPack Watch. Navigate to AngularWebpackStarter project folder in cmd and type

```
npm run watch-webpack-dev
```

Install Webdriver-Manager for e2e testing

```
npm install -g webdriver-manager
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
