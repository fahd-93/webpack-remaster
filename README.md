# creating project from scratch
git clone (link from github ssh) in local 

initialize new npm project(create new package.json)

- npm init

create a src folder

create dist folder. (could be named as public as well)
((scss folder only in src ))!!!!!
{{ ~~ create 2 folders (js & scss) in both src and dist folders w
make 2 files in src and dist (main,js & main.scss)
make an index.js file in scss src folder ~~ }}
____________________________________________________________

install wepback 4

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
  - go to main.js src and paste  (import '../scss/main.scss';)
