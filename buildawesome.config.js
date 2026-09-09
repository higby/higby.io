import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"

export default async function ($config) {
	$config.setInputDirectory("source")
	$config.addPassthroughCopy({ "source/_static/": "/" })
	$config.ignores.add("source/_static/")

	$config.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpeg"],
		transformOnRequest: false
	})
}
