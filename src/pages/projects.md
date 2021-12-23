---
title: 'projects'
---

<nav class="resume">
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

<style>{% renderFile "./src/components/styles/modules/resume.scss" %}</style>