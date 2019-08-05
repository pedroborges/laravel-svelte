const mix = require('laravel-mix')

require('laravel-mix-purgecss')
require('laravel-mix-tailwind')

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css')
   .tailwind('./tailwind.config.js')
   .purgeCss({
        extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'php', 'vue', 'svelte'],
        whitelist: ['html', 'body', 'nanobar', 'bar'],
   })
   .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            extensions: ['.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main'],
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(svelte)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            hotReload: true,
                        },
                    },
                },
            ],
        },
    })
