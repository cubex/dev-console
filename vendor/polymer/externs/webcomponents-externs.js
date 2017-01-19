/**
 * @fileoverview Externs for webcomponents polyfills
 * @externs
 */

/**
 * @constructor
 * @extends {HTMLElement}
 */
function CustomStyle(){}
/**
 * @param {!HTMLStyleElement} style
 */
CustomStyle.prototype.processHook = function(style){};

let HTMLImports = {
  /**
   * @param {function()} callback
   */
  whenReady(callback){}
};

window.HTMLImports = HTMLImports;

let ShadyCSS = {
  /**
   * @param {!HTMLElement} element
   * @param {Object=} overrides
   */
  applyStyle(element, overrides){},
  updateStyles(){},
  /**
   * @param {!HTMLTemplateElement} template
   * @param {string} is
   * @param {string=} extends
   */
  prepareTemplate(template, is, extends){},
  nativeCss: false,
  nativeShadow: false
};
window.ShadyCSS = ShadyCSS;

let ShadyDOM = {
  inUse: false,
  flush(){},
  /**
   * @param {!Node} target
   * @param {function(Array<MutationRecords>, MutationObserver)} callback
   * @return {MutationObserver}
   */
  observeChildren(target, callback){},
  /**
   * @param {MutationObserver} observer
   */
  unobserveChildren(observer){},
  /**
   * @param {Node} node
   */
  patch(node){}
};

window.ShadyDOM = ShadyDOM;

let WebComponents = {};
window.WebComponents = WebComponents;

/** @type {Element} */
HTMLElement.prototype._activeElement;

/**
 * @param {HTMLTemplateElement} template
 */
HTMLTemplateElement.prototype.decorate = function(template){};
