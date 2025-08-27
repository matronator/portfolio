const postcssLightningcss = require('postcss-lightningcss');
const simpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [
    postcssLightningcss({
        browsers: "> 0.3%, last 2 versions, Firefox ESR, not dead",
        lightningcssOptions: {
            drafts: {
                nesting: true,
                customMedia: true,
            }
        }
    }),
  ],
};
