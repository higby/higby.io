---
title: Short URL Service With Jekyll & Netlify
date: 2021-05-18 19:25:58
description: "Making A Short URL Service With Jekyll & Netlify"
tags: programming
repo: short-url
---

## Original Solution

The original solution for building a Jekyll-based short URL service was to use the [Jekyll Redirect From](https://github.com/jekyll/jekyll-redirect-from) plugin. Then for each file made in the _directory folder the site would create a page that looked like this:

```html
<html>
  <script>location="/address"</script>
  <meta http-equiv="refresh" content="0; url=/address">
  <a href="/address">Click here.</a>
</html>
```

> Some unnecessary lines removed
{.note}

The primary issue with this for me is that the redirects weren’t instant (as in they weren’t proper `301` redirects) and if an individual were to have Javascript disabled they would be sat at a page telling them to click a link.

In addition, the build site ended up being polluted with pages:
```
_site/
├─ 404.html
├─ funnyvid.html
├─ github.html
├─ index.html
├─ pokemon.html
├─ shera.html
├─ spotify.html
```

Each page also contributed to the build time (even though these pages *probably* only added about .001 seconds).

## HTTP Header Solution

Thankfully Netlify provides the very helpful ability to specify HTTP redirects via a little configuration. All one has to do is create a plaintext file named _redirects in the base of the site.

Normally Jekyll ignores any files with a leading underscore so be sure to add this to your config to make sure the file is rendered in the build:

```yaml
include:
  - _redirects
```

To fix the issue of the polluted build site I created a collection for each of the files:

```yaml
collections:
  directory:
    output: false
    permalink: /:title.html
```

> Place this into the config file aswell
{.note}

What’s important about the above is that where you place the files should match the second line, in this example and the GitHub repository linked above, I place the files in a folder name `_directory`.

The `output: false` is also important as that is what stops each page from being generated.

### Redirect file

Jekyll will render anything that you toss a YAML header onto, so after that, we’ll want to tell it to render the file to Netlify’s specifications [which can be read here](https://docs.netlify.com/routing/redirects/).

Essentially we'll want it to look like this:

```
/home              /
/404               /https://www.youtube.com/watch?v=dQw4w9WgXcQ
/shera             https://www.shera.gay
```

Where the left is the link that gets forwarded to the right.

Here's my working redirect file

```md{% raw %}
---
---
{% for post in site.directory %}

/{{ post.title | downcase }}     {{ post.redirect_to }}

{% endfor %}
{% endraw %}```

This will generate a working `_redirects` file when the files in the Jekyll site specify a redirect_to in the YAML header, and the title in my config being the files name ie:

```yaml
---
title: '404'
redirect_to: https://www.higby.io/404
---
```

> 404.md
{.note}

One last piece I needed was to add this to the bottom:

```md
{% raw %}/     {% for post in site.directory %}{% if post.title == 'index' %}{{ post.redirect_to }}{% endif %}{% endfor %}

/*     {% for post in site.directory %}{% if post.title == '404' %}{{ post.redirect_to }}{% endif %}{% endfor %}{% endraw %}
```

Because just specifying `/index` and `/404` in the `_redirects` doesn't actually redirect the user should they go to a link that doesn't exist, or if they head to `/`.

So I create two new records, one that matches the index and maps it to `/` and one that matches the 404 and maps it to `/*` which is a wildcard.

The wildcard must come last because it then catches everything not already specified by the other records.

## Bonuses

### Repository

First of all the github repository linked above (and also [here](https://github.com/higby/short-url)) is a working implementation of this. You can easily just fork/ download it and use it for your personal short URL service. Just remember the HTTP headers solution will only work on Netlify.

### Script Kit Script

That header's kinda redundant, huh.

For anyone that might be using [Script Kit](https://github.com/johnlindquist/kit) then you might find some use in this script that automates making a new shortlink: [higby/short-url.js](https://gist.github.com/higby/1c5c226bd6ad5311fd13166fdbeee1eb).
