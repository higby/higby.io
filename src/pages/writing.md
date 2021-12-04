---
title: 'writing'
permalink: '/writing/'
layout: 'page'
eleventyExcludeFromCollections: true
---

<nav class="list">
<ul>
  {% for piece in writing %}
  <li>
    <time>{{ piece.year }}</time>
    <span><a href="{{ piece.url }}">{{ piece.name }}</a></span>
    <p>{{ piece.description }}</p>
  </li>
  {% endfor %}
</ul>
</nav>