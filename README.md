# AngularWebpackStarter

Assuming following is already installed on your system
1. node js
2. Visual Studio 2015 Update 3


## Set npm Corporate proxy configuration
Corporate proxy server details will be available in .pac file or Contact infrastructure team. If this below steps are done already, then no need to repeat them. 
Note: You may have to repeat below steps, if you have changed your password.

```
npm config set proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port

npm config set https-proxy http://"INT%5CYOUR_ID":"YOUR_PASS"@proxyserver:port

npm config set registry=http://registry.npmjs.org/

npm config set strict-ssl=false
```
## install node modules
Navigate to AngularWebpackStarter project folder and install node module dependencies using

```
npm install
```

## Webpack Watch
Before starting development, Enable WebPack Watch. It's required only for Angular2 UI code
Navigate to AngularWebpackStarter project folder in cmd and type

```
npm run watch-webpack-dev
```
## Webdriver-Manager
Install Webdriver-Manager for e2e testing

```
npm install -g webdriver-manager
```

## To Produce Production build

```
npm run prod:build
```

## Unit test project 

```
npm test
```

## e2e Test

```
npm run e2e
```

## use ts lint

```
npm run lint
```

## Run Project using Webpack Dev server
```
npm start
```

## URl Rewrite for IIS server for Angular Routing
Below content is already included in web.config, advised to customize as per the project need

```
<system.webServer>
  <rewrite>
    <rules>
      <rule name="Angular Routes" stopProcessing="true">
        <match url=".*" />
        <conditions logicalGrouping="MatchAll">
          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          <add input="{REQUEST_URI}" pattern="^/(api)" negate="true" />
          <!-- In IIS you may need to install a url-rewrite module -->
        </conditions>
        <action type="Rewrite" url="/" />
      </rule>
    </rules>
  </rewrite>
</system.webServer>

```

## import styles
1. Vendor(3rd party) css should be included in vendor.ts, as shown for bootstrap
2. application specific custom css and css files should be included in styles.css

Example for both is included in project


## Typings Setting (optional)
1. create .typingsrc in your project folder
2. include below configuration in .typingsrc file and change user name and password

```
proxy = http://INT%5CUserName:Password@proxyserver:port
https-proxy = http://INT%5CUserName:Password@proxyserver:port
rejectUnauthorized: false
strict-ssl=false
registryURL: http://api.typings.org/
```

