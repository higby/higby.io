const toc = require("@higby/eleventy-plugin-nesting-toc");
const moment = require("moment-timezone");

module.exports = function (config) {
  config.addFilter("dateCommon", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });

  // UTC
  config.addFilter("dateTechnical", (date) => {
    if (date == "now") {
      date = Date.now();
    }
    return moment(date).toString();
  });

  config.addPlugin(toc, {
    wrapper: "details",
    wrapperClass: "",
    headingText: "Table of Contents",
    headingTag: "summary",
    headingPlacement: "inside",
  });
};
