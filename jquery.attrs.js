/* 
 * jQuery.attrs v.1.0
 * Copyright 2011 Gilles Cochez
 * Released under the MIT, BSD, and GPL Licenses.
 */

// bof closure
;(function($) {
	
	// jQuery plugin wrapper
	$.fn.attrs = function() {
		return attrs(this[0]);
	};
	
	// return a map of the element attributes
	function attrs(e) {
		
		var a = e.attributes, // attributes object shorcut
			l = a.length, // object length
			map = {}, // map object
			i = 0, // for the loop
			v; // hold current node value in the loop
		
		// loop through attributes and build our map
		for (;i < l; i++) {
			v = a[i].nodeValue;
			if (v) map[a[i].nodeName] = v;
		};
		
		// for contentEditable we check that it is really set due to IE
		if (map.contentEditable) {
			var div = document.createElement('<div />').appendChild(e);
			if (!(div.innerHTML.toLowerCase().indexOf('contenteditable') !== -1)) {
				delete map.contentEditable;
			};
		};
		
		// return the map object
		return map;
	};
	
// eof closure
})( jQuery );