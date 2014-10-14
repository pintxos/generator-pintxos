(function (window) {

	'use strict';

	// UMD
	if(typeof define !== 'function') {
		window.define = function(deps, definition) {
			window.pintxos = window.pintxos || {};
			window.pintxos.<%= componentName %> = definition();
			define = null;
		};
	}

	define([], function () {


		var <%= componentName %>, _defaults;

		/* Default settings
		----------------------------------------------- */
		_defaults = {

		};


		/* Constructor
		----------------------------------------------- */
		<%= componentName %> = function (el, options) {

		};


		/* Methods
		----------------------------------------------- */

		/**
		 * All bootstrap logic should go here
		 * @return {void}
		 */
		<%= componentName %>.prototype.init = function () {

		};

		/**
		 * All teardown logic should go here
		 * @return {void}
		 */
		<%= componentName %>.prototype.destroy = function () {

		};


		/* Event handlers
		----------------------------------------------- */


		/* Export
		----------------------------------------------- */
		return <%= componentName %>;

	});

})(this);
