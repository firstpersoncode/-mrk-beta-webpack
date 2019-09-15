import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import WriteFileWebpackPlugin from 'write-file-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { ENV } from '../constants'

const { EnvironmentPlugin, DefinePlugin, IgnorePlugin, HotModuleReplacementPlugin } = webpack

const plugins: any[] = [
    new DefinePlugin({
        __SERVER__: 'false',
        __BROWSER__: 'true',
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
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin({ fileName: 'manifest.json' }),
].filter(Boolean)

export default plugins
