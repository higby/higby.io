---
title:  "Spotify"
date: 2022-03-22 14:42:00
---

<ol>
{% for track in spotify %}

<li>
<a  href='{{track.external_urls.spotify}}'>{{ track.name }}</a> - 
<span>{% for artist in track.artists %}{% if loop.last %}{{artist.name}}{% else %}{{artist.name}}, {% endif %}{% endfor %}</span>
</li>
{% endfor %}
</ol>

