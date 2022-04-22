const htmlmin = require("html-minifier");
const advanced = require("cssnano-preset-advanced");
const cssnano = require("cssnano");
const fetch = require("node-fetch");
const sharp = require("sharp");
const { JSDOM } = require("jsdom");
const { PurgeCSS } = require("purgecss");
const beautify = require("js-beautify").html;
const environment = process.env.ENVIRONMENT;

module.exports = function (config) {
  config.addTransform("images", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      const images = [...dom.window.document.querySelectorAll("img:not([width]):not([height])")];
      for (var i = 0; i < images.length; i++) {
        let src = images[i].src;
        if (src.startsWith("http")) {
          try {
            const res = await fetch(src);
            const buffer = await res.buffer();
            elem = await sharp(buffer).metadata();
          } catch (err) {
            console.log(outputPath + ": Couldn't find image over HTTPS (" + src + ")");
            break;
          }
        } else {
          try {
            let url = "./src/assets" + src;
            elem = await sharp(url).metadata();
          } catch (err) {
            console.log(outputPath + ": Couldn't find local image (" + src + ")");
            break;
          }
        }
        images[i].setAttribute("loading", "lazy");
        images[i].setAttribute("width", elem.width);
        images[i].setAttribute("height", elem.height);
      }
      content = dom.serialize();
    }
    return content;
  });

  config.addTransform("safeLinks", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      const links = [...dom.window.document.querySelectorAll("a[href^='http://']:not([rel]),a[href^='https://']:not([rel])")];
      for (var i = 0; i < links.length; i++) {
        links[i].setAttribute("rel", "noopener noreferrer");
      }
      content = dom.serialize();
    }
    return content;
  });

  config.addTransform("purgeCSS", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      const raw = dom.window.document.querySelector("style").innerHTML;
      dom.window.document.querySelector("style").innerHTML = "";
      content = dom.serialize();

      const purgeCSSResults = await new PurgeCSS().purge({
        content: [{ raw: content, extension: "html" }],
        css: [{ raw: raw }],
      });

      await cssnano({
        from: undefined,
        preset: advanced,
      })
        .process(purgeCSSResults[0].css, { from: undefined })
        .then((result) => {
          testVar = result.css;
          dom.window.document.querySelector("style").innerHTML = result.css;
          content = dom.serialize();
        });
    }
    return content;
  });

  if (environment == "development") {
    config.addTransform("beautify", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return beautify(content, {
          indent_size: "2",
          max_preserve_newlines: "-1",
          preserve_newlines: false,
          keep_array_indentation: true,
          space_before_conditional: false,
          indent_inner_html: true,
          extra_liners: "",
        });
      }
      return content;
    });
  } else {
    config.addTransform("htmlMin", async function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified;
      }
      return content;
    });
  }

  config.addTransform("pageSize", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // https://github.com/11ty/eleventy-plugin-directory-output/blob/main/.eleventy.js
      let sizeStr = (content.length / 1000).toFixed(1) + "kB";
      const dom = new JSDOM(content);
      const tags = [...dom.window.document.querySelectorAll("code.pageSize")];
      for (var i = 0; i < tags.length; i++) {
        if (environment == "development") {
          tags[i].innerHTML = `${sizeStr}*`;
        } else {
          tags[i].innerHTML = sizeStr;
        }
        tags[i].removeAttribute("class");
      }
      content = dom.serialize();
    }
    return content;
  });
};
