---
permalink: "/index.html"
tags: flowers
time: false
toc: false
---

{% capture order %}essays,poetry,collections,programming,misc{% endcapture %}
{% assign order = order | split: "," %}

{% capture allTags %}{% for post in collections.flowers %}{{ post.data.tags[0] }}{% unless forloop.last == true %},{% endunless %}{% endfor %}{% endcapture %}
{% assign allTags = allTags | split: "," | uniq %}

{% assign flowers = collections.flowers | reverse %}

**Hello!** Welcome to my website. I am a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon. 💜

<nav>

{% for heading in order %}
{% for tag in allTags %}
{% if tag == heading %}
<b>
  {{ tag | capitalize }}
</b>
<ul>
  {% for flower in flowers %}
  {% if flower.data.tags[0] == tag and flower.data.draft != true %}
  <li>
    <a href="{{ flower.url }}">{{ flower.data.title }}</a>
    <time datetime='{{ page.date | datetime }}'>{{ flower.date | common }}</time>
  </li>

  {% endif %}
  {% endfor %}
  </ul>
{% endif %}
{% endfor %}
{% endfor %}
</nav>
