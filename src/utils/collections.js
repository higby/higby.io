module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("writing", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/pages/writing/**/*.md");
    });
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/pages/projects/**/*.md");
    });
    //https://github.com/11ty/eleventy/issues/411#issuecomment-603858110
    eleventyConfig.addCollection("garden", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/pages/garden/**/*.md").sort(function(a, b) {
            let nameA = a.data.tags;
            let nameB = b.data.tags;
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });
    });
    //https://github.com/philhawksworth/hawksworx.com/blob/master/src/site/_filters/getTagList.js
    eleventyConfig.addCollection("tagList", function(collectionApi) {
        let tagSet = new Set();
        collectionApi.getAllSorted().forEach(function(item) {
            if( "tags" in item.data ) {
            let tags = item.data.tags;
            if( typeof tags === "string" ) {
                tags = [tags];
            }

            tags = tags.filter(function(item) {
                switch(item) {
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