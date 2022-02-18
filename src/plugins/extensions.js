const { EleventyRenderPlugin } = require("@11ty/eleventy");
const sass = require('sass');
const path = require('path');

module.exports = function(config) {
  config.addTemplateFormats("scss");

  // Creates the extension for use
  config.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

		compileOptions: {
      permalink: false,
    },

    // `compile` is called once per .scss file in the input directory
    compile: function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      let result = sass.compileString(
        inputContent, 
        {
          loadPaths: [
            parsed.dir || ".",
            this.config.dir.includes
          ],
          style: "compressed"
        }
      );

      return (data) => {
        return result.css.replace(/^\uFEFF/gm, "");
      };
    }
  });

  config.addPlugin(EleventyRenderPlugin);

};