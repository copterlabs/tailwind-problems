/* eslint-disable */

// const cssnanoConfig = {
//   preset: ['default', { discardComments: { removeAll: true } }]
// };

// module.exports = ({ file, options }) => {
//   return {
//     parser: options.enabled.optimize ? 'postcss-safe-parser' : undefined,
//     plugins: {
//       autoprefixer: true,
//       cssnano: options.enabled.optimize ? cssnanoConfig : false,
//     },
//   };
// };

const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');
module.exports = ({ file, options }) => {
  return {
    parser: options.enabled.optimize ? 'postcss-safe-parser' : undefined,
    plugins: [
      tailwindcss(`${options.paths.assets}/styles/tailwind.config.js`),
      postcssPresetEnv(),
    ]
  };
};
