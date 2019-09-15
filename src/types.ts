export interface Entry {
    [key: string]: any[]
}

export interface Output {
    path: string
    filename: string
    publicPath: string
    chunkFilename?: string
}

export interface UseLoader {
    loader: any
    options: any
}

export interface Loader {
    test?: RegExp | RegExp[]
    exclude?: RegExp | RegExp[]
    use: UseLoader[]
}

export interface Module {
    rules: Loader[]
}

export interface Resolve {
    extensions: string[]
    modules: string[]
    alias: any
}

export interface WebpackConfig {
    mode: 'development' | 'production' | 'test'
    name: string
    target: string
    resolve: Resolve
    entry: Entry
    output: Output
    module: Module
    plugins: any[]
    externals?: any[]
    optimization?: any
    devtool?: string | boolean
}
