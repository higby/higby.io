---
permalink: "/index.html"
tags: flowers
setup:
  toc: false
---

{% capture order %}essays,poetry,collections,programming,misc{% endcapture %}
{% assign order = order | split: "," %}

{% capture allTags %}{% for post in collections.flowers %}{{ post.data.tags[0] }}{% unless forloop.last == true %},{% endunless %}{% endfor %}{% endcapture %}
{% assign allTags = allTags | split: "," | uniq %}

{% assign flowers = collections.flowers | reverse %}

**Branden Higby** is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon. 💜

<nav>

{% for heading in order %}
{% for tag in allTags %}
{% if tag == heading %}
<b>
  {{ tag | capitalize }}
</b>
<ul style="list-style:none">
  {% for flower in flowers %}
  {% if flower.data.tags[0] == tag and flower.data.draft != true %}
  <li>
    <time>{{ flower.date | common }}</time>
    <a href="{{ flower.url }}" {% unless flower.data.stylesheet != "main" %}class="internal"{% endunless %}>{{ flower.data.title }}</a>
  </li>

  {% endif %}
  {% endfor %}
  </ul>
{% endif %}
{% endfor %}
{% endfor %}
</nav>
