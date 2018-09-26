# creating project from scratch
git clone (link from github ssh) in local

initialize new npm project(create new package.json)

- npm init

create a src folder

create dist folder. (could be named as public as well)

{{ ~~ create 2 folders (js & scss) in src
{{ ~~ create js folder in public}}  
make 2 files in src and dist (main,js & main.scss)
make an index.js file in src folder ~~ }}
____________________________________________________________

install webpack 4

npm install webpack
npm install webpack-cli

 add dev and production webpack scripts to your package
-- go to package.json and paste this script instead of the one exist  =>  "scripts": {
    "dev": "webpack --mode development ./src/js/main.js --output ./dist/js/main.js",
    "production": "webpack --mode production ./src/js/main.js --output ./dist/js/main.js"
  },
  build scripts in development mode

  npm run dev
s
  - go to main.js src and paste  import '../scss/main.scss';
  ____________________________________________________
create webpack.config.js

  go to webpack.config.js => delete everything before & paste this:

  var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
      rules: [
          { // css / sass / scss loader for webpack
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader' ],
              })
          }
      ]
  },
  plugins: [
      new ExtractTextPlugin({ // define where to save the file
          filename: '../css/style.css',
          allChunks: true,
      }),
  ],
};


 - paste this in terminal: npm install extract-text-webpack-plugin@next
_________________________________________________________________________
add a watcher to watch your changes by pasting this:
 "watch": "npm run dev -- --watch",

 in package.json in the scripts section 

 npm run watch to run the command
 _____________________________________________________________________