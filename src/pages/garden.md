---
title: 'Garden'
permalink: '/garden/'
eleventyExcludeFromCollections: true
layout: 'page'
---
<section>
<ul>
  {% for post in collections.garden %}

  <a href="{{ post.url }}">
  <li>
    <span>
      <p>{{ post.data.title }}</p>
      <p>{{ post.data.description }}</p>
    </span>
    <p>#{{ post.data.tags }}</p>
  </li>
  </a>

  {% endfor %}
</ul>
</section>