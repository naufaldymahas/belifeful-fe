module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss':
      process.env.NODE_ENV === 'development'
        ? false
        : {
            content: ['./src/**/*.tsx'],
          },
  },
};
