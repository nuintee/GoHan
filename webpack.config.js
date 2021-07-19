const path = require("path");

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react',
                        // {
                        //     "targets": {
                        //         "node": "current"
                        //     }
                        // }
                    ]
                    }
                }
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
        host: '0.0.0.0',
    },
    resolve: {
        extensions: ['.js','jsx'],
        modules: ['node_modules']
    },
}