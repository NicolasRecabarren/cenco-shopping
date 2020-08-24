const path = require('path');
const { join } = require('path');

module.exports = {
    entry: path.join( __dirname,'src','frontend','index.js'),
    output: {
        path: join( __dirname, 'src', 'public'),
        filename: 'bundle.js' // Código convertido de React se guardará en este archivo.
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};