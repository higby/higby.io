const fetch = require('node-fetch');
const { schedule } = require('@netlify/functions');

const handler = async function(event, context) {
  try {
    await fetch(process.env.deploy_url, { method: 'POST' });
  } catch (err) {
    console.log(err);
  }
}; 

module.exports.handler = schedule("@daily", handler);

