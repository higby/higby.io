---
title: "humans.txt"
permalink: "/humans.txt/"
description: "The many tools, sites, and people that helped me make this site."
---

<div class="neonsign">
  <h2><span>higby.io <code> Major Revision 3</code></span></h2>
  <p>v1 Inital Commit: <code>{{ "2017-10-12, 17:56:00 PDT" | dateTechnical }}</code></p>
  <p>v3 Last Updated: <code>{{ "now" | dateTechnical }}</code></p>
</div>

## Site

Built with [Eleventy](https://github.com/11ty/eleventy/) and hosted on [Netlify](https://www.netlify.com/). Each page is written in [Markdown](https://daringfireball.net/projects/markdown/) and rendered with [markdown-it](https://github.com/markdown-it/markdown-it/). In addition, the following plugins are used:

### Eleventy

- [eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc/)
- A [custom plugin](https://github.com/higby/higby.io/blob/main/src/config/plugins/src/image-dimensions.js) inspired by [LazyImages](https://github.com/liamfiddler/eleventy-plugin-lazyimages/) and [Images, Correctly.](https://robert-buchberger.com/blog/2021/responsive_images.html)
- A [modified](https://github.com/higby/higby.io/blob/main/src/config/plugins/src/dates.js) version of [Mark Thomas Miller's date fix](https://mtm.dev/eleventy-date-off-by-one-day/)

### markdown-it

- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote/)
- [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark/)
- [markdown-it-image-figures](https://github.com/Antonio-Laguna/markdown-it-image-figures/)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- A [modified](https://github.com/higby/higby.io/blob/main/src/config/plugins/src/src/cite.js) version of [markdown-it-attribution](https://github.com/dweidner/markdown-it-attribution/)

### NPM Packages

- [js-beautify](https://github.com/beautify-web/js-beautify/) (for HTML cleaning)
- [jsdom](https://github.com/jsdom/jsdom/)
- [rimraf](https://github.com/isaacs/rimraf/)
- [npm-run-all](https://github.com/mysticatea/npm-run-all/)
- [sharp](https://github.com/lovell/sharp/)
- [Node Fetch](https://github.com/node-fetch/node-fetch/)
- [Moment Timezone](https://github.com/moment/moment-timezone/)

## Design

### Typography

[Inter](https://github.com/rsms/inter/) for general use
<code>[Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro) for code</code>

### CSS

CSS rendered with [SASS](https://sass-lang.com/).

The site theme is built from [Natural Selection](https://github.com/frontaid/natural-selection/), _which is perfection and everyone should use_. Adheres to [The 8 Point Grid System](https://tanzu.vmware.com/content/built-to-adapt/intro-to-the-8-point-grid-system-2/), uses [The New CSS Reset](https://github.com/elad2412/the-new-css-reset/), and heading sizes were calculated using [Typographic Scale Tool](https://spencermortensen.com/articles/typographic-scale/).

### Images

Magic cards come from [Scryfall](https://scryfall.com/).
Pokemon icons are from the wonderful [PokéSprite](https://github.com/msikma/pokesprite) repository.
Pokemon renders were ripped by [TehPerson](https://bulbapedia.bulbagarden.net/wiki/User:TehPerson).

## Thanks

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - the best reference
- [w3schools](https://www.w3schools.com/) - for helping a kid get started
- [JSFiddle](https://jsfiddle.net/) - perfect for on the fly testing
- File directory structure inspired by [11ty-blog-starter](https://github.com/kohrongying/11ty-blog-starter/) by [Rong Ying](https://github.com/kohrongying/)
- [Design Systems](https://leerob.io/blog/style-guides-component-libraries-design-systems/) - source of many good design references
- [Print Styles](https://www.matuzo.at/blog/i-totally-forgot-about-print-style-sheets/) - perfect reference for CSS print styles

<style>
  {% renderTemplate "scss" %}
  @import './src/_styles/vars';

  .neonsign {
    border-radius: 0.25rem;
    color: $header-color;
    border: 0.25rem solid $space;
    display: grid;
    margin-top: 2.5rem;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    h2 {
      grid-column: span 2;
      margin-top: -1.75rem;
    }
    span {
      background-color: $background-color;
      padding: 0 1rem;
    }
    p {
      display: grid;
      grid-template-rows: 1fr 1fr;
      margin: 0 1rem 1rem 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    .neonsign {
      border-radius: 0;
      display: block;
      margin: 1rem -2rem;
      padding: 2.5rem 1rem 0.5rem 1rem;
      span {
        display: grid;
        grid-gap: 0.25rem;
        grid-auto-rows: auto auto;
      }
    }
  }

  {% endrenderTemplate %}
</style>
