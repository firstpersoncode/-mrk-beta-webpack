import nodeExternals from 'webpack-node-externals'

import { WebpackConfig } from '../types'
import { ENV } from '../constants'

import resolve from './resolve'
import entry from './entry'
import output from './output'
import loaders from './loaders'
import plugins from './plugins'

const webpackConfig: WebpackConfig = {
    mode: ENV.NODE_ENV,
    name: 'server',
    target: 'node',
    resolve,
    entry,
    output,
    module: {
        rules: loaders,
    },
    plugins,
    externals: [nodeExternals()],
    optimization: {
        minimize: true,
    },
    devtool: ENV.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-inline-source-map',
}

export default webpackConfig
