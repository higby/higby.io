---
title: "Sliver Deck"
date: 2021-02-26 00:05:00
description: "My Sliver Overlord tribal Magic: The Gathering commander deck."
tags: collection
templateEngineOverride: liquid
---

{% capture typeOrder %}Creature,Planeswalker,Artifact,Sorcery,Instant,Enchantment,Land{% endcapture %}
{% assign typeOrder = typeOrder | split: "," %}
{% capture allTypes %}{% for card in cards %}{{ card.type }},{% endfor %}{% endcapture %}
{% assign types = allTypes | split: "," | uniq %}

{% for place in typeOrder %}
{% for type in types %}
{% if type == place %}

<h2>{{type}}</h2>

<div id="{{type | downcase}}list" class="cardList">
  {% for card in cards %}
  {% if card.type == type %}
    {% if card.amount %}
      {% for i in (1..card.amount) %}
  <figure id="{{card.name | slug }}-{{i}}" class="card">
    <img loading="lazy" width="488" height="680" src="/img/cards/sliver/sliver-{{card.name | slug }}-{{i}}.jpeg">
    <span>{{card.name}}</span>
  </figure>
      {% endfor %}
    {% else %}
  <figure id="{{card.name | slug }}" class="card">
    <img loading="lazy" width="488" height="680" src="/img/cards/sliver/{{card.name | slug }}.jpeg">
    <span>{{card.name}}</span>
  </figure>
    {% endif %}
  {% endif %}
  {% endfor %}
</div>
{% endif %}
{% endfor %}
{% endfor %}

<style>
  {% renderTemplate "scss" %}
  @import './src/_styles/vars';

  .card {
    img {
      border-radius: 4.75% / 3.5%;
      width: 100%;
    }
  }
  .cardList {
    column-gap: 1rem;
    background-color: inherit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    text-align: center;
    figure {
      width: 100%;
    }
  }
  .cardList figure {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    .cardList {
      grid-template-columns: repeat(2, 1fr);
    }
    .card img {
      width: 100%;
      margin: 0;
    }
  }

  {% endrenderTemplate %}
</style>
