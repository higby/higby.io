---
title: "Pokemon"
date: 2021-04-06 00:18:46
description: "Branden Higby's Wonderful Pokemon Collection"
setup:
  date: false
tags: collections
---

<div class="boxList">
{% for pokemon in pokemon %}
  <div id="{{pokemon.name | downcase}}" class="box">
    <div class="imgHolder">
    <img width="32" height="32" class="ball" src="../img/pokemon/balls/{{pokemon.ball | slug }}.png">
      <img width="512" height="512" class="poke" id="{{ pokemon.name | slug }}" src="../img/pokemon/{{pokemon.name | slug }}.png">
    </div>
    <span><b>{{pokemon.name}}</b> - <i>{{pokemon.species}}</i></span>
    <span>Caught: <i>{{pokemon.original_game}}</i></span>
  </div>
{% endfor %}
</div>
