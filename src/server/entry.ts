import * as path from 'path'

import { Entry } from '../types'
import { CWD, paths } from '../constants'

const POLYFILL = [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime')]

const entry: Entry = {
    server: [...POLYFILL, path.resolve(CWD, path.resolve(paths.SERVER, 'index.tsx'))],
}

export default entry
