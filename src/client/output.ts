import path from 'path'

import { Output } from '../types'
import { CWD, paths } from '../constants'

const output: Output = {
    path: path.resolve(CWD, paths.BUILD_CLIENT),
    filename: '[name].js',
    publicPath: paths.PUBLIC_PATH,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
}

export default output
