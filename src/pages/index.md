---
permalink: "/index.html"
tags: flowers
setup:
  toc: false
---

<div class="who">

![Me, Awkwardly](/img/squat.jpg)

**Branden Higby** is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon. 💜

</div>

{% capture order %}essays,poetry,collections,programming,misc{% endcapture %}
{% assign order = order | split: "," %}

{% capture allTags %}{% for post in collections.flowers %}{{ post.data.tags[0] }}{% unless forloop.last == true %},{% endunless %}{% endfor %}{% endcapture %}
{% assign allTags = allTags | split: "," | uniq %}

{% assign flowers = collections.flowers | reverse %}

<nav>
<table>

{% for heading in order %}
{% for tag in allTags %}
{% if tag == heading %}
<tbody>
<tr>
<th colspan="2">
  {{ tag | capitalize }}
</th>
</tr>
  {% for flower in flowers %}
  {% if flower.data.tags[0] == tag and flower.data.draft != true %}
  <tr>
  <td>
    <time>{{ flower.date | common }}</time>
  </td>
  <td>
    <a href="{{ flower.url }}" {% unless flower.data.stylesheet != "main" %}class="internal"{% endunless %}>{{ flower.data.title }}</a>
  </td></tr>

  {% endif %}
  {% endfor %}
</tbody>
{% endif %}
{% endfor %}
{% endfor %}
</table>
</nav>
