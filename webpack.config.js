const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, argv) => {
    const config = {
        entry: path.resolve(__dirname, "index.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].build.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {},
                    exclude: [/node_modules/]
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                }
            ]
        },
        resolve: {
            extensions: [".ts"],
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        devtool: "inline-source-map"
    };
    return config;
}