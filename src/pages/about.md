---
title: about
stylesheet: about.scss
---

Branden Higby is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon.

## Tracks

These are the top tracks I've been listening to recently
{.subheading}

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Artist</th>
    </tr>
  </thead>
  <tbody>{% for track in spotify %}
    <tr>
      <td>{{ loop.index }}</td>
      <td><a href='{{track.external_urls.spotify}}'>{{ track.name }}</a></td>
      <td>{% for artist in track.artists %}{% if loop.last %}{{artist.name}}{% else %}{{artist.name}}, {% endif %}{% endfor %}</td>
    </tr>{% endfor %}
  </tbody>
</table>
