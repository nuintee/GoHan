const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'ts-loader'
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
        port: 8080,
        host: 'localhost',
    },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx'],
        modules: ['node_modules']
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}