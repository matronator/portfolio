module.exports = {
    plugins: [
        require('postcss-lightningcss')({
            browsers: "> 0.3%, last 2 versions, Firefox ESR, not dead",
            lightningcssOptions: {
                drafts: {
                    nesting: true,
                    customMedia: true,
                }
            }
        }),
    ]
};
