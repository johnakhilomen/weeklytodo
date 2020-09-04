const path = require("path");

// We are telling webpack to grab the main source file.
module.exports = { entry: './src/index.js', 
output: { filename: 'main.js',  // and bundle the source file into main.js
          path: path.resolve(__dirname, 'public'), // and keep the main.js file inside of the public folder of the root project.
          library: 'mainLib', } // mainLib would be the access to all my source file.
        };