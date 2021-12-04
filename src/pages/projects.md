---
title: 'projects'
permalink: '/projects/'
layout: 'page'
eleventyExcludeFromCollections: true
---

<nav class="list">
<ul>
  {% for project in projects %}
  <li>
    <time>{{ project.year }}</time>
    <span><a href="{{ project.url }}">{{ project.name }}</a></span>
    <p>{{ project.description }}</p>
  </li>
  {% endfor %}
</ul>
</nav>