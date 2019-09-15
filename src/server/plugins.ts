import * as path from 'path'
import webpack from 'webpack'
import WriteFileWebpackPlugin from 'write-file-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'

import { ENV, paths } from '../constants'

const { EnvironmentPlugin, DefinePlugin, HotModuleReplacementPlugin } = webpack

const plugins: any[] = [
    new DefinePlugin({
        __SERVER__: 'true',
        __BROWSER__: 'false',
    }),
    new EnvironmentPlugin(ENV || {}),
    ...(ENV.NODE_ENV === 'development'
        ? [new WriteFileWebpackPlugin(), new HotModuleReplacementPlugin()]
        : []),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        // analyzerPort: analyze.port || 8502,
        openAnalyzer: false,
        generateStatsFile: ENV.NODE_ENV === 'production',
    }),
    new CopyPlugin([
        {
            from: paths.LOCALES,
            to: path.join(paths.BUILD_SERVER, 'locales'),
            ignore: '*.missing.json',
        },
    ]),
].filter(Boolean)

export default plugins
