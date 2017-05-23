var path = require('path');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var { AotPlugin } = require('@ngtools/webpack');

var postcssUrl = require('postcss-url');
var cssnano = require('cssnano');
var helpers = require('./helpers');

const minimizeCss = false;
const baseHref = "";
const deployUrl = "";


var postcssPlugins = function () {
    // safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
    const importantCommentRe = /@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i;
    const minimizeOptions = {
        autoprefixer: false,
        safe: true,
        mergeLonghand: false,
        discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
    };
    return [
        postcssUrl({
            url: (URL) => {
                // Only convert root relative URLs, which CSS-Loader won't process into require().
                if (!URL.startsWith('/') || URL.startsWith('//')) {
                    return URL;
                }
                if (deployUrl.match(/:\/\//)) {
                    // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                    return `${deployUrl.replace(/\/$/, '')}${URL}`;
                }
                else if (baseHref.match(/:\/\//)) {
                    // If baseHref contains a scheme, include it as is.
                    return baseHref.replace(/\/$/, '') +
                        `/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                }
                else {
                    // Join together base-href, deploy-url and the original URL.
                    // Also dedupe multiple slashes into single ones.
                    return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
                }
            }
        }),
        autoprefixer(),
    ].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
};


module.exports = {
  "devtool": "source-map",
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
      extensions: ['.ts', '.js'],
      "modules": [
          "./node_modules"
      ]
  },
  "resolveLoader": {
      "modules": [
          "./node_modules"
      ]
  },
  module: {
      rules: [
          {
              "enforce": "pre",
              "test": /\.js$/,
              "loader": "source-map-loader",
              "exclude": [
                  /\/node_modules\//
              ]
          },
          {
              "test": /\.json$/,
              "loader": "json-loader"
          },
          {
              test: /\.html$/,
              loader: 'html-loader'
          },
          {
              "test": /\.(eot|svg|ico)$/,
              "loader": "file-loader?name=[name].[hash:20].[ext]"
          },
          {
              "test": /\.(jpe?g|png|gif|svg|otf|ttf|woff|woff2|cur|ani)$/,
              "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
          },
      {
          "exclude": [
               path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.css$/,
          "use": [
              "exports-loader?module.exports.toString()",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              }
          ]
      },
      {
          "exclude": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.scss$|\.sass$/,
          "use": [
              "exports-loader?module.exports.toString()",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "sass-loader",
                  "options": {
                      "sourceMap": false,
                      "precision": 8,
                      "includePaths": []
                  }
              }
          ]
      },
      {
          "exclude": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.less$/,
          "use": [
              "exports-loader?module.exports.toString()",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "less-loader",
                  "options": {
                      "sourceMap": false
                  }
              }
          ]
      },
      {
          "exclude": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.styl$/,
          "use": [
              "exports-loader?module.exports.toString()",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "stylus-loader",
                  "options": {
                      "sourceMap": false,
                      "paths": []
                  }
              }
          ]
      },
      {
          "include": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.css$/,
          "use": [
              "style-loader",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              }
          ]
      },
      {
          "include": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.scss$|\.sass$/,
          "use": [
              "style-loader",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "sass-loader",
                  "options": {
                      "sourceMap": false,
                      "precision": 8,
                      "includePaths": []
                  }
              }
          ]
      },
      {
          "include": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.less$/,
          "use": [
              "style-loader",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "less-loader",
                  "options": {
                      "sourceMap": false
                  }
              }
          ]
      },
      {
          "include": [
              path.join(process.cwd(), "src\\styles.css"),
              path.join(process.cwd(),"node_modules")
          ],
          "test": /\.styl$/,
          "use": [
              "style-loader",
              {
                  "loader": "css-loader",
                  "options": {
                      "sourceMap": false,
                      "importLoaders": 1
                  }
              },
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": postcssPlugins
                  }
              },
              {
                  "loader": "stylus-loader",
                  "options": {
                      "sourceMap": false,
                      "paths": []
                  }
              }
          ]
      },
      {
          test: /\.ts$/,
          loaders: [
              {
                  loader: 'awesome-typescript-loader',
                  options: {
                      configFileName: helpers.root('src', 'tsconfig.json'),
                      useBabel: true
                  }
              }, 'angular2-template-loader'
          ]
      },
    ]
  },

  plugins: [
    new ProgressPlugin(),
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: "../Views/Home/Index.cshtml",
        title: "Angular2+Webpack2",
        chunksSortMode: 'dependency'
    }),
    new AotPlugin({
        "mainPath": "main.ts",
        "hostReplacementPaths": {
            "environments\\environment.ts": "environments\\environment.ts"
        },
        "exclude": [],
        "tsConfigPath": "src\\tsconfig.json",
        "skipCodeGeneration": true
    })
  ]
};
