export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './index.html',
          './public/**/*.html'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['html', 'body', /^bg-/, /^text-/, /^border-/, /^hover:/, /^focus:/, /^active:/],
          deep: [/lucide-icon$/],
          greedy: [/lucide-/, /embla-/]
        }
      },
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      }
    } : {})
  },
}
