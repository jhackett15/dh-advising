

module.exports = {
   plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
         ? {
              '@fullhuman/postcss-purgecss': {
                 // added sections folder and changed extension to jsx
                 content: ['./src/components/**/*.jsx', './src/pages/**/*.js'],
                 defaultExtractor: content =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
              },
           }
         : {}),
   },
}`
