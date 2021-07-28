---
permalink: "/index.html"
tags: petals
---

[test outgoing link](https://shera.gay)

{% capture order %}essays,poetry,collections,programming,misc{% endcapture %}
{% assign order = order | split: "," %}

{% capture allTags %}{% for post in collections.petals %}{{ post.data.tags[0] }}{% unless forloop.last == true %},{% endunless %}{% endfor %}{% endcapture %}
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
  {% for petal in collections.petals %}
  {% if petal.data.tags[0] == tag %}
  <tr>
    <td>
      <time>{%- assign date_format = "%b %d, %Y" -%} {{ petal.date | date: date_format }}</time>
    </td>
    <td>
      <a href="{{ petal.url }}" class="internal">{{ petal.data.title }}</a>
    </td>
  </tr>
  {% endif %}
  {% endfor %}

  </tbody>
  {% endif %}
  {% endfor %}
  {% endfor %}
  </table>
