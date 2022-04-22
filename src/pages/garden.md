---
title: garden
tags: collections
stylesheet: garden.scss
---

<nav>
  <div>
  {% for plant in collections.masonryGrid1 %}
  <a href="{{ plant.url }}">
    <h3>{{ plant.data.title }}</h3>
    {% timeAgo plant.date, plant.data.tended %}
    <p>{{ plant.data.description }}</p>
  </a>
  {% endfor %}
  </div>
  <div>
  {% for plant in collections.masonryGrid2 %}
  <a href="{{ plant.url }}">
    <h3>{{ plant.data.title }}</h3>
    {% timeAgo plant.date, plant.data.tended %}
    <p>{{ plant.data.description }}</p>
  </a>
  {% endfor %}
  </div>
  <div>
  {% for plant in collections.masonryGrid3 %}
  <a href="{{ plant.url }}">
    <h3>{{ plant.data.title }}</h3>
    {% timeAgo plant.date, plant.data.tended %}
    <p>{{ plant.data.description }}</p>
  </a>
  {% endfor %}
  </div>
</nav>
