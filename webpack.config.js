
// require('path'), which we add to configure the path 
// where our output files will be saved. 
const path = require('path');

// equire html-webpack-plugin and make it available to our application
const HtmlWebpackPlugin = require('html-webpack-plugin');

// NEW LINE
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line

// module.exports: Property that holds an object with key-value pairs

// entry: './src/index.js': Specific entry point the js file where webpack, 
// will enter our app and the use dependency graph to load all other required JS.

// filename: 'bundle.js', path: path.resolve(__dirname, 'dist'):
// where all our code will go after it's processed.

//NEW LINES 
// First we require the new plugin and save it in a variable.
// Then we add it to module.exports in the plugins section.
// We create a new instance of the plugin and then specify that we'd, 
// like our dist folder cleaned out.

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',  // new line2
    devServer: {                 // new line2
      contentBase: './dist'      // new line2
    },
    plugins: [ // Next we add a section to our configuration file for plugins.
        new CleanWebpackPlugin(), // new line
        new HtmlWebpackPlugin({
            title: 'Shape Tracker', // title: This will be the title of our bundled HTML file.
            template: './src/index.html', //template: This is the HTML file we'll bundle. Here we specify that it should be the index.html file we just moved to the src folder. If we didn't specify a template file, then webpack would just generate a file with a <head> and <title> and <script> tags.
            inject: 'body' // webpack will inject our script at the bottom of our HTML for us. 
        })
    ],
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    }
};
