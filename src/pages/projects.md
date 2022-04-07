---
title: 'projects'
permalink: "/projects/"
style: resume
---

<nav class="resume">
  <h3>Coding</h3>
  <ul>{% for project in resume.projects %}
    <li>
      <time>{{ project.year }}</time>
      <span><a href="{{ project.url }}">{{ project.name }}</a></span>
      <p>{{ project.description }}</p>
    </li>{% endfor %}
  </ul>

  <h3>Writing</h3>
  <ul>{% for piece in resume.writing %}
    <li>
      <time>{{ piece.year }}</time>
      <span><a href="{{ piece.url }}">{{ piece.name }}</a></span>
      <p>{{ piece.description }}</p>
    </li>{% endfor %}
  </ul>
</nav>