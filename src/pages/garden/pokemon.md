---
title: "Shiny Pokemon"
date: 2021-04-06 00:18:46
tended: 2021-12-03 05:47:00
description: "My collection of wonderful shiny Pokemon."
tags: "collections"
templateEngineOverride: liquid
---

<h2>Caught</h2>

<div class="boxList">
{% for pokemon in pokemon.caught %}
  <div id="{{ pokemon.name | downcase }}" class="box">
    <div class="imgHolder">
    <img width="32" height="32" class="ball" src="/img/pokemon/balls/{{ pokemon.stats.ball | slug  }}.png">
      <img width="768" height="768" class="poke" id="{{ pokemon.name | slug }}" src="/img/pokemon/{{ pokemon.name | slug  }}.png">
    </div>
    <span><b>{{ pokemon.name }}</b> - <i>{{ pokemon.species }}</i></span><br>
    <span>Caught: <i>{{ pokemon.stats.original_game }}</i></span>
  </div>
{% endfor %}
</div>

<br>

<h2>Hunting</h2>

<div class="boxList">
{% for pokemon in pokemon.hunting %}
  <div id="{{ pokemon.name | downcase }}" class="box">
    <div class="imgHolder">
      <img width="768" height="768" class="poke" id="{{ pokemon.name | slug }}" src="/img/pokemon/{{ pokemon.name | slug  }}.png">
    </div>
    <span><b>{{ pokemon.name }}</b> - <i>{{ pokemon.species }}</i></span><br>
    <span>Searching In: <i>{{ pokemon.stats.original_game }}</i></span>
  </div>
{% endfor %}
</div>

<style>{% renderFile "./src/components/styles/modules/poke.scss" %}</style>