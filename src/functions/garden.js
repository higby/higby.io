const fs = require("fs");
const moment = require("moment-timezone");
const { JSDOM } = require("jsdom");

exports.handler = async (event, context) => {
  var path  = event.path;
  var lastChar = path.substr(-1); // Selects the last character
  if (lastChar !== '/') {         // If the last character is not a slash
    path += '/';
  }

  const dom = new JSDOM(fs.readFileSync("./build/functions/cache" + path + "index.html"));
  const timeTags = [...dom.window.document.querySelectorAll("time[serverless]")];

  try {
    for (var i = 0; i < timeTags.length; i++) {
      const date = new Date(timeTags[i].innerHTML);
      timeTags[i].innerHTML = moment(date).fromNow();
      timeTags[i].removeAttribute("serverless");
    }
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
      body: dom.serialize(),
    };
  } catch (error) {
    console.log("Serverless Error:", error);
  
    return {
      statusCode: error.httpStatusCode || 500,
      body: JSON.stringify(
        {
          error: error.message,
        },
        null,
        2
      ),
    };
  }
}


