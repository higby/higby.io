const { EleventyRenderPlugin } = require("@11ty/eleventy");
const sass = require('sass');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",

        compile: function (contents, inputPath) {
            let includePaths = [this.config.dir.includes];

            return (data) => {
                let ret = sass.renderSync({
                    file: inputPath,
                    includePaths,
                    data: contents,
                    outputStyle: "compressed"
                });
                return Buffer.from(ret.css, 'utf-8').toString().replace(/^\uFEFF/gm, "");
            };
        }
    });
};