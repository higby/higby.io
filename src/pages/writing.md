---
title: 'writing'
---

<nav class="resume">
<ul>
  {% for piece in writing %}
  <li>
    <time>{{ piece.year }}</time>
    <span><a href="{{ piece.url }}">{{ piece.name }}</a></span>
    <p>{{ piece.description }}</p>
  </li>
  {% endfor %}
</ul>
</nav>

<style>{% renderFile "./src/components/styles/modules/resume.scss" %}</style>