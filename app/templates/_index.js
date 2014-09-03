// UMD
if(typeof define !== 'function') {
  define = function( deps, definition ) {
    window.pintxos = window.pintxos || {};
    window.pintxos.<%= componentName %> = definition();
    define = null;
  };
}

define([], function () {

  'use strict';

  /* Constructor
  ----------------------------------------------- */
  var <%= componentName %> = function () {

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
