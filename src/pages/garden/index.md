---
title: "garden 🪴"
permalink: "/functions/cache/garden/"
eleventyExcludeFromCollections: true
layout: "page"
---

<nav>
<div class="garden">
  <ul>
  {% for post in collections.masonryGrid1 %}
  <a href="/garden/{{ post.fileSlug }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    {% if post.data.tended %}<time serverless datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended }}</time>{% else %}<time serverless datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date }}</time>{% endif %}
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul>
  {% for post in collections.masonryGrid2 %}
  <a href="/garden/{{ post.fileSlug }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    {% if post.data.tended %}<time serverless datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended }}</time>{% else %}<time serverless datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date }}</time>{% endif %}
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul>
  {% for post in collections.masonryGrid3 %}
  <a href="/garden/{{ post.fileSlug }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    {% if post.data.tended %}<time serverless datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended }}</time>{% else %}<time serverless datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date }}</time>{% endif %}
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
  <ul class="mobile">
  {% for post in collections.garden %}
  <a href="/garden/{{ post.fileSlug }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    {% if post.data.tended %}<time serverless datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended }}</time>{% else %}<time serverless datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date }}</time>{% endif %}
    <p>#{{ post.data.tags }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
</div>
</nav>
