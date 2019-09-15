import { Resolve } from '../types'

import { paths } from '../constants'

const POLYFILL = {
    /* When working with linked modules which have their own node_modules we must make sure
  to always load the same React version in all components. So we define an alias here and
  resolve it to node_modules/* to avoid potential issues */
    // 'react': require.resolve('react'),
    // 'react-dom': require.resolve('react-dom'),
    // 'react-router': require.resolve('react-router'),
    // 'react-router-dom': require.resolve('react-router-dom'),
    // 'react-i18next': require.resolve('react-i18next'),
    // 'i18next': require.resolve('i18next'),
}

const resolve: Resolve = {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx', '.css'],
    modules: [paths.CLIENT, paths.SERVER, paths.STORE, paths.APP, paths.SRC, 'node_modules'],
    alias: {
        '^': paths.SRC,
        ...POLYFILL,
    },
}

export default resolve
