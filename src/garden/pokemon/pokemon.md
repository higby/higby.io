---
title: "Shiny Pokemon"
date: 2021-04-06 00:18:46
tended: 2021-12-03 05:47:00
description: "My collection of wonderful shiny Pokemon."
tags: collection
templateEngineOverride: liquid
---

<h2>Caught</h2>

<div class="boxList">
{% for pokemon in caught %}
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
{% for pokemon in hunting %}
  <div id="{{ pokemon.name | downcase }}" class="box">
    <div class="imgHolder">
      <img width="768" height="768" class="poke" id="{{ pokemon.name | slug }}" src="/img/pokemon/{{ pokemon.name | slug  }}.png">
    </div>
    <span><b>{{ pokemon.name }}</b> - <i>{{ pokemon.species }}</i></span><br>
    <span>Searching In: <i>{{ pokemon.stats.original_game }}</i></span>
  </div>
{% endfor %}
</div>

<style>
  {% renderTemplate "scss" %}
  @import './src/_styles/vars';

  .ball {
    display: block;
    left: .25rem;
    margin: 0 0 -2rem 0;
    position: relative;
    top: .25rem;
    width: 32px;
    z-index: 1;
    background: none;
  }
  .imgHolder {
    background-color: $dark-grey;
    border-radius: .25rem;
    padding: .5rem;
  }
  .poke {
    width: 85%;
    margin: 1rem;
  }
  .boxList {
    gap: 1rem;
    background-color: inherit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    .boxList {
      grid-template-columns: repeat(2, 1fr);
    }
    .poke {
      width: 100%;
      margin: 0;
    }
  }

  {% endrenderTemplate %}
</style>
