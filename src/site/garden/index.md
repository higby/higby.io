---
permalink: "/index.html"
tags: petals
---

<ul>
{% for petal in collections.petals %}
  {% unless petal.url == "/" %}
  <li><a class="internal" href="{{ petal.url }}">{{ petal.data.title }}</a><br> {{ petal.data.tags }}</li>
  {% endunless %}
{% endfor %}
</ul>

{{ site.collections.all }}
