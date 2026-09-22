import { EleventyHtmlBasePlugin, IdAttributePlugin } from "@11ty/eleventy"
import config from "@higby/eleventy-config"
import { VentoPlugin } from "eleventy-plugin-vento"

export default async function ($config) {
	$config.setInputDirectory("source")
	$config.addPassthroughCopy({ "source/_static/": "/" })
	$config.ignores.add("source/_static/")

	$config.addPlugin(config)
	$config.addPlugin(EleventyHtmlBasePlugin)
	$config.addPlugin(IdAttributePlugin)
	$config.addPlugin(VentoPlugin)

	$config.setHtmlTemplateEngine("vto")
	$config.setMarkdownTemplateEngine("vto")
	$config.setTemplateFormats(["html", "md", "css", "js", "vto"])
}
