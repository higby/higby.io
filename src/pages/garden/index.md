---
title: "garden 🪴"
permalink: "/garden/"
eleventyExcludeFromCollections: true
layout: "page"
---

<nav>
<div class="garden">
  <ul>
  {% for post in collections.masonryGrid1 %}
  <a href="{{ post.url }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    <time>{% if post.data.tended %}{{ post.data.tended | relative }}{% else %}{{ post.data.date | relative }}{% endif %}</time>
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul>
  {% for post in collections.masonryGrid2 %}
  <a href="{{ post.url }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    <time>{% if post.data.tended %}{{ post.data.tended | relative }}{% else %}{{ post.data.date | relative }}{% endif %}</time>
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul>
  {% for post in collections.masonryGrid3 %}
  <a href="{{ post.url }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    <time>{% if post.data.tended %}{{ post.data.tended | relative }}{% else %}{{ post.data.date | relative }}{% endif %}</time>
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul class="mobile">
  {% for post in collections.garden %}
  <a href="{{ post.url }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    <time>{% if post.data.tended %}{{ post.data.tended | relative }}{% else %}{{ post.data.date | relative }}{% endif %}</time>
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
</div>
</nav>
