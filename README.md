# higby.io

## Transforms

### purgeCSS

This utilizes both [PurgeCSS](https://github.com/FullHuman/purgecss/) and [cssnano](https://github.com/cssnano/cssnano/) to reduce the inlined CSS stylings. It removes any styling that goes unused on each page, significantly reducing page size.

**Reduction Testing**

|               File | Original Size | PurgeCSS + cssnano Size | Reduction |
| -----------------: | ------------- | ----------------------- | :-------- |
|    garden/alquari/ | 23.70kB       | 20.50kB                 | 14.48%    |
|  garden/favorites/ | 12.40kB       | 9.00kB                  | 31.78%    |
|     garden/oscana/ | 20.30kB       | 17.50kB                 | 14.81%    |
|    garden/pokemon/ | 14.60kB       | 11.30kB                 | 25.48%    |
|  garden/short-url/ | 20.50kB       | 18.90kB                 | 8.12%     |
| garden/sliverdeck/ | 29.40kB       | 26.20kB                 | 11.51%    |
|  garden/small-css/ | 14.60kB       | 11.50kB                 | 23.75%    |
|               ocd/ | 13.00kB       | 9.60kB                  | 30.09%    |
|      paleontology/ | 18.00kB       | 14.80kB                 | 19.51%    |
|            garden/ | 16.40kB       | 13.10kB                 | 22.37%    |
|        humans.txt/ | 19.10kB       | 17.10kB                 | 11.05%    |
|            resume/ | 13.70kB       | 10.30kB                 | 28.33%    |
|        styleguide/ | 17.00kB       | 16.10kB                 | 5.44%     |
|           404.html | 12.40kB       | 9.30kB                  | 28.57%    |
|         index.html | 11.60kB       | 7.80kB                  | 39.18%    |

### htmlMin

In production deploys each HTML page will be minimized using [HTMLMinifier](https://github.com/kangax/html-minifier/).

Any code that needs to be ignored, such as comments, should be surrounded by `<!-- htmlmin:ignore -->` and `<!-- htmlmin:ignore -->`.

### beautify

In development environments each HTML page will be instead beautified using [js-beautify](https://github.com/beautify-web/js-beautify/) in order to more easily test and debug.

## Shortcodes

### currentPage

(Test) (attack)

[Test] [attack]

This will test if the href matches the pages url.

Given `{% currentPage "<a href='/foo'>bar</a>" %}` on page `/foo` it will return `<span>bar</bar>`.

Given `{% currentPage "<a href='/foo'>bar</a>" %}` on page `/404` it will return `<a href='/foo'>bar</a>`.
