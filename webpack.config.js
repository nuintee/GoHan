const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,"src/index.js"),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-transform-runtime"]
                        },
                    }
                ]
            },
            {
                test: [/\.css$/],
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: [/\.(jpg|png)$/],
                use: [
                    'url-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        open: true,
        hot: true,
        historyApiFallback: true,
    }
}