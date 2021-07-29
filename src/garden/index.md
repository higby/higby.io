---
permalink: "/index.html"
tags: flowers
---

[test outgoing link](https://shera.gay)

{% capture order %}essays,poetry,collections,programming,misc{% endcapture %}
{% assign order = order | split: "," %}

{% capture allTags %}{% for post in collections.flowers %}{{ post.data.tags[0] }}{% unless forloop.last == true %},{% endunless %}{% endfor %}{% endcapture %}
{% assign allTags = allTags | split: "," | uniq %}

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
  {% for flower in collections.flowers %}
  {% if flower.data.tags[0] == tag %}
  <tr>
    <td>
      <time>{%- assign date_format = "%b %d, %Y" -%} {{ flower.date | date: date_format }}</time>
    </td>
    <td>
      <a href="{{ flower.url }}" class="internal">{{ flower.data.title }}</a>
    </td>
  </tr>
  {% endif %}
  {% endfor %}

  </tbody>
  {% endif %}
  {% endfor %}
  {% endfor %}
  </table>
</nav>
