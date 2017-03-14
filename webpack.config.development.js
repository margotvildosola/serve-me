const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    target: 'electron-renderer',
    devtool: 'eval',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader?modules',
                'postcss-loader',
            ],
        },
        {
            test: /\.png|\.svg$/,
            loaders: ['file-loader'],
        }],
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
        publicPath: 'http://localhost:9000/dist',
    },
    context: path.resolve(__dirname),
    devServer: {
        // enable HMR on the server
        hot: true,
        // match the output path
        contentBase: path.resolve(__dirname, 'dist'),
        // match the output `publicPath`
        publicPath: 'http://localhost:9000/dist',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = config;
