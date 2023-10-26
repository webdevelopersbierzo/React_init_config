const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Webapck configuration

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.bundle-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'sass-loader'},
                ]
              },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    mode: process.env.NODE_ENV || 'development',

    plugins:[
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html'
        })
    ]
}