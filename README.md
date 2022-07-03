# higby.io

## Filters

- **dateCommon** - returns human readable date

- **toc** - takes in page content and returns table of contents

## Shortcodes

- **currentPage** - evaluates if any of the links in the provided html match the current page's

- **pageSize** - returns an HTML element that will be reused by the pageSize transform

- **timeAgo** - determines how long ago the inputed date was from today

## Transforms

- **images** - evaluates each pages img tag and provides them with their respective width and heights as to avoid layout shift

- **safeLinks** - adds `noopener` and `noreferrer` attributes to the links on each page

- **purgeCSS** - uses PurgeCSS and cssnano to remove each page's unused css

- **beautify** - beautifies each page's HTML (only runs in development)

- **htmlMin** - minimizes each page's HTML (only runs in production)

- **pageSize** - for each page with the pageSize shortcode, it finds the size of the page and replaces the dummy text in the element (has to run last to be accurate)
