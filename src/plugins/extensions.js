const { EleventyRenderPlugin } = require("@11ty/eleventy");
const sass = require("sass");
const path = require("path");

module.exports = function (config) {
  config.addTemplateFormats("scss");
  config.addExtension("scss", {
    outputFileExtension: "css",
    compileOptions: {
      permalink: false,
    },
    compile: function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes],
        style: "compressed",
      });
      return (data) => {
        return result.css.replace(/^\uFEFF/gm, "");
      };
    },
  });

  config.addPlugin(EleventyRenderPlugin);
};
