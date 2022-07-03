---
title: About
---

Branden Higby is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon.

## Tracks

These are the top tracks I've been listening to recently
{.subheading}

<table class='tracks'>
  <thead>
    <tr>
      <th>#</th>
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
  </thead>
  <tbody>{% for track in spotify %}
    <tr>
      <td>{{ loop.index }}</td>
      <td style="text-align:left">
        <span>
          <a title='{{ track.name }}' href='{{track.external_urls.spotify}}'>{{ track.name }}</a>
        </span>
      </td>
      <td style="text-align:left">
        <span title='{% for artist in track.artists %}{% if loop.last %}{{artist.name}}{% else %}{{artist.name}}, {% endif %}{% endfor %}'>
          {% for artist in track.artists %}{% if loop.last %}{{artist.name}}{% else %}{{artist.name}}, {% endif %}{% endfor %}
        </span>
      </td>
    </tr>{% endfor %}
  </tbody>
</table>

<style>
  {% renderTemplate "scss" %}
  @import './src/_styles/vars';

  .tracks {
    * {
      background-color: $background-color;
    }
    td:first-of-type, td:last-of-type {
      font-size: .95em;
      color: $code-color;
    }
    td:first-of-type {
      padding-right: 1rem;
    }
    td {
      vertical-align: middle;
      padding: .25rem 0;
    }
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      max-width: 275px;
    }
  } 


  {% endrenderTemplate %}
</style>
