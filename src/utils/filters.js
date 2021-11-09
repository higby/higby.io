const moment = require('moment-timezone');
const toc = require('@higby/eleventy-plugin-nesting-toc');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('common', (date) => {
        const utc = date.toUTCString();
        return moment.utc(utc).format('MMM DD, YYYY');
    })
    eleventyConfig.addFilter('technical', (date) => {
      const utc = Date.now();
      return moment.utc(utc).tz('America/Los_Angeles').format('YYYY-MM-DD, HH:mm:ss z');
    })
    eleventyConfig.addFilter('datetime', (date) => {
      const utc = date.toUTCString();
      return moment.utc(utc).tz('America/Los_Angeles').format();
    })
    eleventyConfig.addPlugin(toc, {
        wrapper: 'details',
        wrapperClass: '',
        headingText: 'Table of Contents', 
        headingTag: 'summary',     
        headingPlacement: 'inside'
    });
}