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
  while (arr.length) {
    columns.push(arr.splice(0, 3));
  }

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
  eleventyConfig.addCollection("garden", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/pages/garden/**/*.md").sort(function (a, b) {
      return tended(a, b);
    });
  });
  //https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array

  for (let i = 0; i < 4; i++) {
    eleventyConfig.addCollection(`masonryGrid${i}`, function (collectionApi) {
      let arr = collectionApi.getFilteredByGlob("./src/pages/garden/**/*.md").sort(function (a, b) {
        return tended(a, b);
      });

      return masonrySplit(i, arr);
    });
  }
};
