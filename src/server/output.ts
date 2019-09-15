import path from 'path'

import { Output } from '../types'
import { CWD, paths } from '../constants'

const output: Output = {
    path: path.resolve(CWD, paths.BUILD_SERVER),
    filename: '[name].js',
    publicPath: paths.PUBLIC_PATH,
}

export default output
