
var expandCollapse = require('./expand-collapse')

module.exports = function(controlSelector, targetSelector, options) {
	options = options || {}
	options.jQuery = options.jQuery || jQuery || require('jquery')
	options.tripartite = options.tripartite || tripartite || require('tripartite')
	
	return expandCollapse(controlSelector, targetSelector, options)
}