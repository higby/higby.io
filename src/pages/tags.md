---
permalink: '/garden/tags/'
eleventyExcludeFromCollections: true
layout: 'base'
---
<h1>Tags</h1>

<ul class='tags'>
  {% for tag in collections.tagList %}
  <li>
    <span><a href="/garden/{{ tag }}">#{{ tag }}</a></span>
    <span>{{ collections[tag].length }}</span>
  </li>
  {% endfor %}
</ul>