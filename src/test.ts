// import webpack from 'webpack'
import client from './client'
import server from './server'

// jest.mock('webpack', () => ({
//     EnvironmentPlugin: jest.fn(),
//     DefinePlugin: jest.fn(),
//     IgnorePlugin: jest.fn(),
//     HotModuleReplacementPlugin: jest.fn(),
// }))
// jest.mock('webpack-manifest-plugin', () => jest.fn())
// jest.mock('write-file-webpack-plugin', () => jest.fn())
// jest.mock('webpack-bundle-analyzer', () => jest.fn())
// jest.mock('webpack-node-externals', () => jest.fn())

describe('it works', () => {
    console.log('"BASE CLIENT CONFIG" :', client)
    console.log('"BASE SERVER CONFIG" :', server)
    it('should return a webpack client config', () => {
        expect(typeof client).toBe('object')
    })

    it('should return a webpack server config', () => {
        expect(typeof server).toBe('object')
    })
})
