module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': './', // allows `@/components` to resolve to root
        '@components': './components',
        '@hooks': './hooks',
        '@constants': './constants',
        '@lib': './lib',
      },
    }],
  ],
};
