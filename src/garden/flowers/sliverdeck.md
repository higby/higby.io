---
title:  "Sliver Deck"
date: 2021-02-26 00:05:00
description: "Branden Higby's MTG Sliver Deck"
setup:
  date: false
tags: collections
---

## Cards

{% capture typeOrder %}Creature,Planeswalker,Artifact,Sorcery,Instant,Enchantment,Land{% endcapture %}
{% assign typeOrder = typeOrder | split: "," %}
{% capture allTypes %}{% for card in slivers %}{{ card.type }},{% endfor %}{% endcapture %}
{% assign types = allTypes | split: "," | uniq %}

{% for place in typeOrder %}
{% for type in types %}
{% if type == place %}
### {{type}}

<div id="{{type | downcase}}list" class="cardList">
  {% for card in slivers %}
  {% if card.type == type %}
    {% if card.amount %}
      {% for i in (1..card.amount) %}
  <figure id="{{card.name | slug }}-{{i}}" class="card">
    <img loading="lazy" width="488" height="680" src="/assets/images/cards/sliver/sliver-{{card.name | slug }}-{{i}}.jpeg">
    <span>{{card.name}}</span>
  </figure>
      {% endfor %}
    {% else %}
  <figure id="{{card.name | slug }}" class="card">
    <img loading="lazy" width="488" height="680" src="/assets/images/cards/sliver/{{card.name | slug }}.jpeg">
    <span>{{card.name}}</span>
  </figure>
    {% endif %}
  {% endif %}
  {% endfor %}
</div>
{% endif %}
{% endfor %}
{% endfor %}
