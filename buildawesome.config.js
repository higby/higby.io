export default async function ($config) {
	$config.setInputDirectory("source")
	$config.addPassthroughCopy({ "source/_static/": "/" })
	$config.ignores.add("source/_static/")
}
