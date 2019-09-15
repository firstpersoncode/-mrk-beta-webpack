import path from 'path'

import { Loader } from '../../types'
import { CWD, paths } from '../../constants'

const TEST: RegExp = /\.(js|jsx|ts|tsx|mjs)$/
const EXCLUDE: RegExp = /node_modules/

const OPT: any = {
    transpileOnly: true,
    configFile: path.resolve(CWD, paths.TS_CONFIG),
}

export const jsLoader: Loader = {
    test: TEST,
    exclude: EXCLUDE,
    use: [
        {
            loader: require.resolve('babel-loader'),
            options: {},
        },
        {
            loader: require.resolve('awesome-typescript-loader'),
            options: OPT,
        },
    ],
}
