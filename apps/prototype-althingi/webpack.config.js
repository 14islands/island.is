const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const webpack = require('webpack')

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`

    // Add the plugin
    config.plugins.push(new VanillaExtractPlugin())

    // Add crypto (and related) fallbacks
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve?.fallback || {}),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        vm: require.resolve('vm-browserify'),
        http: false,
        https: false,
        os: false,
        fs: false,
        async_hooks: false,
        v8: false,
        perf_hooks: false,
        dgram: false,
        dns: false,
        net: false,
        cluster: false,
        zlib: false,
        zlib_bindings: false,
        './zlib_bindings': false,
        process: require.resolve('process/browser'),
      },
    }

    // Shim process for browser
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    )

    return config
  },
)
