---
title: projects
stylesheet: projects.scss
---

<nav>
  <h2>Coding</h2>
  <ul>{% for project in projects.coding %}
    <li>
      <time>{{ project.year }}</time>
      <span><a href="{{ project.url }}">{{ project.name }}</a></span>
      <p>{{ project.description }}</p>
    </li>{% endfor %}
  </ul>

  <h2>Writing</h2>
  <ul>{% for piece in projects.writing %}
    <li>
      <time>{{ piece.year }}</time>
      <span><a href="{{ piece.url }}">{{ piece.name }}</a></span>
      <p>{{ piece.description }}</p>
    </li>{% endfor %}
  </ul>
</nav>
