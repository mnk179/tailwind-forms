const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        client_bundle: path.resolve("./src/js/index.js"),
    },
    output: {
        filename: "[name]-[fullhash].js",
        path: path.resolve("./build"),
    },
    devtool: "eval",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[fullhash].css",
        }),
        new HtmlWebpackPlugin({
            title: "Tailwind Forms",
            template: path.resolve("./src/template.html"),
        }),
    ],
    target: "web",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ],
                include: [path.resolve("./src"), path.resolve("./node_modules")],
            },
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ]
                    },
                },
            },
        ],
    },
};
