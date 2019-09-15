import { Loader } from '../../types'

const EXCLUDE: RegExp = /\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/

const OPT: any = {
    name: 'assets/[name].[hash:8].[ext]',
}

export const fileLoader: Loader = {
    exclude: EXCLUDE,
    use: [
        {
            loader: require.resolve('file-loader'),
            options: OPT,
        },
    ],
}
