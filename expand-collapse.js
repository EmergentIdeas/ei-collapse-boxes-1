

function isIn($set, item) {
	for(var i = 0; i < $set.length; i++) {
		if($set.get(i) == item) {
			return true
		}
	}
	return false
}


var createExpandBoxes = function(controlSelector, targetSelector, options) {
	options = options || {}
	var $ = window.jQuery || options.jQuery
	var tripartite = window.tripartite || options.tripartite
	
	
	
	function ExpandoSet(control, target) {
		this.control = control
		this.target = target
		this.isOpen = true
	}

	ExpandoSet.prototype.init = function() {
		var self = this
		$(this.control).click(function(evt) {
			if(self.isOpen) {
				self.close()
				self.isOpen = false
			}
			else {
				self.open()
				self.isOpen = true
			}
		})
		
		self.isOpen = false
		this.close()
	}
	
	if(options.open) {
		ExpandoSet.prototype.open = options.open
	}
	else {
		ExpandoSet.prototype.open = function() {
			$(this.control).addClass('open')
			$(this.target).show().addClass('open')
		}	
	}
	
	if(options.close) {
		ExpandoSet.prototype.close = options.close
	}
	else {
		ExpandoSet.prototype.close = function() {
			$(this.control).removeClass('open')
			$(this.target).hide().removeClass('open')
		}	
	}
	
	
	var control = null
	var target = null
	
	var $set = $(controlSelector + ', ' + targetSelector)
	var $controls = $(controlSelector)
	var $targets = $(targetSelector)
	
	$set.each(function() {
		if(isIn($controls, this)) {
			control = this
		}
		if(isIn($targets, this)) {
			target = this
		}
		
		if(control && target) {
			var es = new ExpandoSet(control, target)
			control = null
			target = null
			es.init()
		}
	})
	
}

module.exports = createExpandBoxes