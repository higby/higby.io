---
permalink: '/index.html'
eleventyExcludeFromCollections: true
layout: 'base'
---

Branden Higby is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon. 💜

<nav>
<h2>Writing</h2>
<ul>
  {% for post in collections.writing %}
  <li>
    <time datetime='{{ post.date | datetime }}'>{{ post.date | common }}</time>
    <span><a href="{{ post.url }}">{{ post.data.title }}</a></span>
    <p>{{ post.data.description }}</p>
  </li>
  {% endfor %}
</ul>

<h2>Projects</h2>
<ul>
  {% for post in collections.projects %}
  <li>
    <time datetime='{{ post.date | datetime }}'>{{ post.date | common }}</time>
    <span><a href="{{ post.url }}">{{ post.data.title }}</a></span>
    <p>{{ post.data.description }}</p>
  </li>
  {% endfor %}
</ul>
</nav>