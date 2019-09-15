// Type definitions for @my-react-kit/core 1.0.0
// Project: @my-react-kit/core
// Definitions by: Nasser <npm@firstpersoncode.com>
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
    }
}

declare module 'webpack'
declare module 'webpack-manifest-plugin'
declare module 'write-file-webpack-plugin'
declare module 'webpack-bundle-analyzer'
declare module 'copy-webpack-plugin'
declare module 'webpack-node-externals'
