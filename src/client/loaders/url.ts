import { Loader } from '../../types'

const TEST: RegExp = /\.(png|jpe?g|gif|svg)$/

const OPT: any = {
    limit: 2048,
    name: 'assets/[name].[hash:8].[ext]',
}

export const urlLoader: Loader = {
    test: TEST,
    use: [
        {
            loader: require.resolve('url-loader'),
            options: OPT,
        },
    ],
}
