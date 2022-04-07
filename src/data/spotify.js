const { AssetCache } = require("@11ty/eleventy-fetch");
const fetch = require('node-fetch');
const qs = require('qs');

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', { 
      method: 'POST', 
      body: qs.stringify({
        grant_type: 'refresh_token',
        refresh_token
      }),
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const getTracks = async () => {
  const access_token = await getAccessToken();

  const response = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10', { 
    headers: {
      Authorization: `Bearer ${access_token.access_token}`
    }
  });

  let tracks = await response.json();
  return tracks.items;
};

module.exports = async function() {

  let asset = new AssetCache("spotify_tracks");

  if(asset.isCacheValid("1d")) {
    return asset.getCachedValue();
  } else {

    console.log('Fetching new data for Spotify Tracks...');

    let tracks = await getTracks();

    await asset.save(tracks, "json");

    console.log('Fetched new data for Spotify Tracks');

    return tracks;

  }
};