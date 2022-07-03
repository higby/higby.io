---
layout: base
---

{% include 'organisms/header.njk' %}

{% include 'atoms/higby.svg' %}

<style>
  {% renderTemplate "scss" %}
  @import './src/_styles/vars';

  body {
    text-align: center;
    margin-top: 20vh;
    animation: fadeIn 650ms;
    &> header  {
      display: block;
      margin-bottom: 1rem;
    }
  }

  h1 {
    margin-bottom: .5rem;
  }

  svg.higby {
    width: 30%;
  }

  @media screen and (max-width: 700px) {
    svg.higby {
      width: 65%;
    }
  }

  {% endrenderTemplate %}
</style>
