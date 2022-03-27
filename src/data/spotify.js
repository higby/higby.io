const axios = require('axios');
const qs = require('qs');

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  const response = await axios
  .post(
    "https://accounts.spotify.com/api/token",
    qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    {
      headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  .then(function (response) {
    return response.data.access_token;
  })
  .catch(function (error) {
   console.log(error);
  });
  
  return response;
};

const getTopTracks = async () => {
  const access_token = await getAccessToken();
  const response = await axios
  .get(
    "https://api.spotify.com/v1/me/top/tracks",
    {
      headers: {
      Authorization: `Bearer ${access_token}`
      }
    }
  )
  .then(function (response) {
    var tracks = [];
    for (var i = 0; i < response.data.items.length; i++) {
      let track = {
        name: response.data.items[i].name,
        artist: response.data.items[i].artists,
        url: response.data.items[i].external_urls.spotify
      };
      tracks.push(track);
    }
    return tracks;
  })
  .catch(function (error) {
   console.log(error);
  });

  return response;
  
};

module.exports = async function() {
  return await getTopTracks();
};