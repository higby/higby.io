const { AssetCache } = require("@11ty/eleventy-fetch");
const fetch = require("node-fetch");
const qs = require("qs");

require("dotenv").config();

const netlify_token = process.env.NETLIFY_TOKEN;

const getSite = async () => {
  const response = await fetch(
    "https://api.netlify.com/api/v1/sites/19d59a21-19b3-40fa-a103-9c8f8d36b3f4",
    {
      headers: {
        Authorization: `Bearer ${netlify_token}`,
      },
    }
  );

  let site = await response.json();
  return site;
};

const cacheCheck = async () => {
  let asset = new AssetCache("site_data");

  if (asset.isCacheValid("*")) {
    return asset.getCachedValue();
  } else {
    console.log("Fetching Netlify Site Data...");

    let site = await getSite();

    await asset.save(site, "json");

    console.log("Fetched Netlify Site Data");

    return site;
  }
};

module.exports = async () => await cacheCheck();
