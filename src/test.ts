// import webpack from 'webpack'
import config from '.'

// const { EnvironmentPlugin } = webpack

// jest.mock('webpack', () => ({
//     EnvironmentPlugin: jest.fn(),
//     DefinePlugin: jest.fn(),
//     IgnorePlugin: jest.fn(),
//     HotModuleReplacementPlugin: jest.fn(),
// }))
// jest.mock('circular-dependency-plugin', () => jest.fn())
// jest.mock('fork-ts-checker-webpack-plugin', () => jest.fn())
// jest.mock('webpack-manifest-plugin', () => jest.fn())
// jest.mock('mini-css-extract-plugin', () => jest.fn())
// jest.mock('case-sensitive-paths-webpack-plugin', () => jest.fn())
// jest.mock('write-file-webpack-plugin', () => jest.fn())
// jest.mock('webpack-bundle-analyzer', () => jest.fn())
// jest.mock('webpack-node-externals', () => jest.fn())

describe('it works', () => {
    console.log('"BASE CLIENT CONFIG" :', config.client)
    console.log('"BASE SERVER CONFIG" :', config.server)
    it('should return a webpack client config', () => {
        expect(typeof config.client).toBe('object')
    })

    it('should return a webpack server config', () => {
        expect(typeof config.server).toBe('object')
    })
})
