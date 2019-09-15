import nodeExternals from 'webpack-node-externals'

import { WebpackConfig } from '../types'
import { ENV } from '../constants'

import resolve from './resolve'
import entry from './entry'
import output from './output'
import loaders from './loaders'
import plugins from './plugins'

const webpackConfig: WebpackConfig = {
    mode: ENV.NODE_ENV || 'production',
    name: 'client',
    target: 'web',
    resolve,
    entry,
    output,
    module: {
        rules: loaders,
    },
    plugins,
    externals: [nodeExternals()],
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
        minimize: true,
    },
    devtool: ENV.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-inline-source-map',
}

export default webpackConfig
