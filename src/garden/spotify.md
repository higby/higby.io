---
title:  "Spotify"
date: 2022-03-22 14:42:00
---

<ol>
{% for track in spotify %}

<li>
<a  href='{{track.url}}'>{{ track.name }}</a> - 
<span>{% for artist in track.artist %}{% if loop.last %}{{artist.name}}{% else %}{{artist.name}}, {% endif %}{% endfor %}</span>
</li>
{% endfor %}
</ol>