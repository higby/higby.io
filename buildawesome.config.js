import { EleventyHtmlBasePlugin, IdAttributePlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import { VentoPlugin } from "eleventy-plugin-vento"
import { bundle, Features } from "lightningcss"

export default async function ($config) {
	$config.setInputDirectory("source")
	$config.addPassthroughCopy({ "source/_static/": "/" })
	$config.ignores.add("source/_static/")

	$config.addExtension("css", {
		compile: async (_, inputPath) => async () =>
			bundle({
				filename: inputPath,
				minify: true,
				exclude: Features.DirSelector | Features.LightDark
			}).code,
		outputFileExtension: "css",
		useLayouts: false
	})
	$config.addTemplateFormats("css")

	$config.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpeg"],
		transformOnRequest: false
	})

	$config.addPlugin(EleventyHtmlBasePlugin)
	$config.addPlugin(IdAttributePlugin)
	$config.addPlugin(VentoPlugin)

	$config.setHtmlTemplateEngine("vto")
	$config.setMarkdownTemplateEngine("vto")
	$config.setTemplateFormats(["html", "md", "css", "vto"])
}
