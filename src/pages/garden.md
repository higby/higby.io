---
title: 'Garden'
permalink: '/garden/'
eleventyExcludeFromCollections: true
layout: 'page'
---
<nav>
<ul>
  {% for post in collections.garden %}
  <li>
    <time datetime='{{ post.date | datetime }}'>{{ post.date | common }}</time>
    <div>
      <span><a href="{{ post.url }}">{{ post.data.title }}</a></span>
      <span><a href='/garden/{{post.data.tags}}'>#{{ post.data.tags }}</a></span>
    </div>
    <p>{{ post.data.description }}</p>
  </li>
  {% endfor %}
</ul>
</nav>