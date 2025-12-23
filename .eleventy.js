module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addPassthroughCopy("./src/static/css/styles.css");
    eleventyConfig.addPassthroughCopy("./src/static/js")
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/static/css/styles.css")
    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}