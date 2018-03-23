const webpack = require('webpack');

console.log(process.env.NODE_ENV);

let appConfig = {};
(() => {
        const env = process.env.NODE_ENV.toString().trim();
        appConfig = require(`./conf/app-conf.${env}.json`);
})();

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                __API_URL__: JSON.stringify(appConfig.__API_URL__),
                __SERVICE_WORKER_NAME__: JSON.stringify(appConfig.__SERVICE_WORKER_NAME__)
            }),
        ],
    },
};
