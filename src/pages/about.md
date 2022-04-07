---
date: 2022-03-22 14:42:00
style: spotify
---

Branden Higby is a writer, video producer, computer programmer, procrastinator, dungeon master, and cartoon watcher based in Oregon.

## Favorites

A few of my favorite things

Pokemon: <a class="internal" href="/garden/pokemon">Metroid</a>, my shiny Araquanid

Number: **65**

Book: Dune by Frank Herbert

Movie: Back To The Future

TV Shows:

- Avatar: TLA
- Arrested Development
- She-Ra And The Princesses Of Power
- Gravity Falls
- Adventure Time

## Music

The music I've been listening to

<table class='tracks'>
  <thead>
    <tr>
      <th style="text-align:center">#</th>
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