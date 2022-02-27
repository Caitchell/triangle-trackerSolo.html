
// require('path'), which we add to configure the path 
// where our output files will be saved. 
const path = require('path');

// module.exports: Property that holds an object with key-value pairs

// entry: './src/index.js': Specific entry point the js file where webpack, 
// will enter our app and the use dependency graph to load all other required JS.

// filename: 'bundle.js', path: path.resolve(__dirname, 'dist'):
// where all our code will go after it's processed.
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                ]
            }
        ]
    }
};
