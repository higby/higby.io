---
title: "humans.txt"
description: "The Many Tools That Helped Me Make This"
setup:
  toc: false
---

<div class="info">
  <h2> higby.io <code> Major Revision 3</code></h2>
  <p>v1 Inital Commit: <code>2017-10-12, 17:56:00 PDT</code></p>
  <p>v3 Last Updated: <code>{{ "now" | technical }}</code></p>
</div>


### General

Built with [Eleventy](https://github.com/11ty/eleventy/) and hosted on [Netlify](https://www.netlify.com/)
- File directory structure inspired by [11ty-blog-starter](https://github.com/kohrongying/11ty-blog-starter/) by [Rong Ying](https://github.com/kohrongying/)
- [eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc/) for table of contents
- My image-dimensions plugin is inspired (programming-wise) by [LazyImages](https://github.com/liamfiddler/eleventy-plugin-lazyimages/) and (reasoning-wise) by [Images, Correctly.](https://robert-buchberger.com/blog/2021/responsive_images.html), written by [Robert Buchberger](https://github.com/rbuchberger/)
  - Uses [sharp](https://github.com/lovell/sharp/) and [Node Fetch](https://github.com/node-fetch/node-fetch/)
- Dates plugin is a modified version of [Mark Thomas Miller's](https://mtm.dev/eleventy-date-off-by-one-day/) method
  - Uses [Moment Timezone](https://github.com/moment/moment-timezone/)
- Build scripts use [rimraf](https://github.com/isaacs/rimraf/) and [npm-run-all](https://github.com/mysticatea/npm-run-all/)
- HTML files cleaned via [js-beautify](https://github.com/beautify-web/js-beautify/)
- DOM manipulation done in my plugins uses [jsdom](https://github.com/jsdom/jsdom/)

Pages written in [Markdown](https://daringfireball.net/projects/markdown/) and rendered with [markdown-it](https://github.com/markdown-it/markdown-it/) using the following plugins:

- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote/)
- [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark/)
- [markdown-it-image-figures](https://github.com/Antonio-Laguna/markdown-it-image-figures/)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- A [modified](https://github.com/higby/higby.io/blob/main/src/config/plugins/src/src/cite.js) version of [markdown-it-attribution](https://github.com/dweidner/markdown-it-attribution/)

### CSS

CSS rendered with [SASS](https://sass-lang.com/)
- **[Natural Selection](https://github.com/frontaid/natural-selection/)** - this is perfection, everyone should use this
- [Design Systems](https://leerob.io/blog/style-guides-component-libraries-design-systems/) (source of several of the following links)
- [Grid System](https://tanzu.vmware.com/content/built-to-adapt/intro-to-the-8-point-grid-system-2/)
- [Homebrewery](https://github.com/naturalcrit/homebrewery/) - DnD background & colors
- [Print Styles](https://www.matuzo.at/blog/i-totally-forgot-about-print-style-sheets/)
- [Typographic Scale](https://spencermortensen.com/articles/typographic-scale/)
- Uses [The New CSS Reset](https://github.com/elad2412/the-new-css-reset/), but still uses bits and snippets from:
  - [destyle.css](https://github.com/nicolas-cusan/destyle.css/)
  - [normalize.css](https://github.com/necolas/normalize.css/) *probably*
  - [reseter.css](https://github.com/krishdevdb/reseter.css/)

### JS:

- [jQuery](https://github.com/jquery/jquery/)
- [anime.js](https://github.com/juliangarnier/anime/)
- [Letterize.js](https://github.com/WojciechKrakowiak/letterize/)
- [particles.js](https://github.com/VincentGarreau/particles.js/)
- [tinykeys](https://github.com/jamiebuilds/tinykeys/)

### Fonts:

- [Open Sans](https://fonts.google.com/specimen/Open+Sans) - hosted via Google Fonts
- [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro) - hosted via Google Fonts
- [Solbera's DND5e fonts](https://github.com/jonathonf/solbera-dnd-fonts)

### Images:

- [Scryfall](https://scryfall.com/) - Magic: The Gathering Cards
- [PokéSprite](https://github.com/msikma/pokesprite) - Pokemon Ribbons
- [Pokémon Image rips by TehPerson](https://bulbapedia.bulbagarden.net/wiki/User:TehPerson)

### Software:

- Atom

## Thanks

[MDN Web Docs](https://developer.mozilla.org/en-US/) - the best reference

[w3schools](https://www.w3schools.com/) - for helping a kid get started

[JSFiddle](https://jsfiddle.net/) - perfect for on the fly testing
