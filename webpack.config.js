import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinimizePlugin from 'image-minimizer-webpack-plugin';

export default {
    entry: {
        index: './src/index.js',
    },
    mode: "production",
    plugins: [
        new webpack.ProvidePlugin({ m: "mithril" }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Index',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            filename: 'index.html',
            chunks: ['index']
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        clean: true
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    ],
            },
            //assets
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            }
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizePlugin({
                minimizer: {
                    implementation: ImageMinimizePlugin.imageminMinify,
                }
            })
        ]
    }
}