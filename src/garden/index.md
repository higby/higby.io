---
title: "garden 🪴"
permalink: "/garden/" 
eleventyExcludeFromCollections: true
layout: "page"
style: garden
---

<nav>
<div class="garden">
  <ul>
  {% for post in collections.masonryGrid1 %}
  <a href="{{ post.url }}">
  <li>
    <h2>{{ post.data.title }}</h2>
    {% if post.data.tended %}<time datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended | common }}</time>{% else %}<time datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date | common }}</time>{% endif %}
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
    {% if post.data.tended %}<time datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended | common }}</time>{% else %}<time datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date | common }}</time>{% endif %}
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
    {% if post.data.tended %}<time datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended | common }}</time>{% else %}<time datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date | common }}</time>{% endif %}
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
    {% if post.data.tended %}<time datetime='{{ post.data.tended | datetime }}' title='{{ post.data.tended | common }}'>{{ post.data.tended | common }}</time>{% else %}<time datetime='{{ post.data.date | datetime }}' title='{{ post.data.date | common }}'>{{ post.data.date | common }}</time>{% endif %}
     <p>{{ post.data.description }}</p>
  </li>
  </a>
  {% endfor %}
  </ul>
</div>
</nav>