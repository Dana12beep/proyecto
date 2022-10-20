module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,eot,svg,ttf,woff,woff2,otf,txt,html,jpg,png,js,json,gif,rb,less,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};