import path from 'path'

import { Entry } from '../types'
import { CWD, paths } from '../constants'

const POLYFILL = [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime')]

const entry: Entry = {
    bundle: [...POLYFILL, path.resolve(CWD, path.resolve(paths.CLIENT, 'index.tsx'))],
}

export default entry
