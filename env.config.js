const path = require('path');

const outputConfig = {
    destPath: "./dist"
};

// Entry points
// https://webpack.js.org/concepts/entry-points/ 
const entryConfig = [
    "./src/App.ts",
];

// Dev server setup
// https://webpack.js.org/configuration/dev-server/
const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    // https: true,
    // port: "8080",
    // host: "0.0.0.0",
    // disableHostCheck: true
};

// Production terser config options
// https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions
const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.entryConfig = entryConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;