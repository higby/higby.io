function tended(a, b) {
  if (a.data.tended != undefined) {
    if (b.data.tended != undefined) {
      return b.data.tended - a.data.tended;
    } else {
      return b.data.date - a.data.tended;
    }
  } else if (b.data.tended != undefined) {
    return b.data.tended - a.data.date;
  } else {
    return b.data.date - a.data.date;
  }
}

function masonrySplit(count, arr) {
  let previous = count - 1;
  let columns = [];
  let masonry = [];
  while (arr.length) columns.push(arr.splice(0, 3));

  for (i = previous; i < count; i += 1) {
    for (j = 0; j < columns.length; j += 1) {
      if (columns[j][i]) {
        masonry.push(columns[j][i]);
      }
    }
  }
  return masonry;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/pages/writing/**/*.md");
  });
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/pages/projects/**/*.md");
  });
  eleventyConfig.addCollection("garden", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/pages/garden/**/*.md")
      .sort(function (a, b) {
        return tended(a, b);
      });
  });
  //https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array
  eleventyConfig.addCollection("masonryGrid1", function (collectionApi) {
    let arr = collectionApi
      .getFilteredByGlob("./src/pages/garden/**/*.md")
      .sort(function (a, b) {
        return tended(a, b);
      });

    return masonrySplit(1, arr);
  });
  eleventyConfig.addCollection("masonryGrid2", function (collectionApi) {
    let arr = collectionApi
      .getFilteredByGlob("./src/pages/garden/**/*.md")
      .sort(function (a, b) {
        return tended(a, b);
      });

    return masonrySplit(2, arr);
  });
  eleventyConfig.addCollection("masonryGrid3", function (collectionApi) {
    let arr = collectionApi
      .getFilteredByGlob("./src/pages/garden/**/*.md")
      .sort(function (a, b) {
        return tended(a, b);
      });

    return masonrySplit(3, arr);
  });
  //https://github.com/philhawksworth/hawksworx.com/blob/master/src/site/_filters/getTagList.js
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAllSorted().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "writing":
            case "projects":
            case "garden":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet].sort();
  });
};
