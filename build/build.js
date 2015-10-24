/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue, app;
	
	__webpack_require__(1);
	
	Vue = __webpack_require__(2);
	
	Vue.use(__webpack_require__(6));
	
	Vue.config.debug = true;
	
	app = new Vue({
	  el: '#app',
	  components: {
	    'test': __webpack_require__(7)
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * Vue.js v0.12.16
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Vue"] = factory();
		else
			root["Vue"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var extend = _.extend
	
		/**
		 * The exposed Vue constructor.
		 *
		 * API conventions:
		 * - public API methods/properties are prefiexed with `$`
		 * - internal methods/properties are prefixed with `_`
		 * - non-prefixed properties are assumed to be proxied user
		 *   data.
		 *
		 * @constructor
		 * @param {Object} [options]
		 * @public
		 */
	
		function Vue (options) {
		  this._init(options)
		}
	
		/**
		 * Mixin global API
		 */
	
		extend(Vue, __webpack_require__(9))
	
		/**
		 * Vue and every constructor that extends Vue has an
		 * associated options object, which can be accessed during
		 * compilation steps as `this.constructor.options`.
		 *
		 * These can be seen as the default options of every
		 * Vue instance.
		 */
	
		Vue.options = {
		  replace: true,
		  directives: __webpack_require__(25),
		  elementDirectives: __webpack_require__(47),
		  filters: __webpack_require__(50),
		  transitions: {},
		  components: {},
		  partials: {}
		}
	
		/**
		 * Build up the prototype
		 */
	
		var p = Vue.prototype
	
		/**
		 * $data has a setter which does a bunch of
		 * teardown/setup work
		 */
	
		Object.defineProperty(p, '$data', {
		  get: function () {
		    return this._data
		  },
		  set: function (newData) {
		    if (newData !== this._data) {
		      this._setData(newData)
		    }
		  }
		})
	
		/**
		 * Mixin internal instance methods
		 */
	
		extend(p, __webpack_require__(52))
		extend(p, __webpack_require__(53))
		extend(p, __webpack_require__(54))
		extend(p, __webpack_require__(58))
		extend(p, __webpack_require__(60))
	
		/**
		 * Mixin public API methods
		 */
	
		extend(p, __webpack_require__(61))
		extend(p, __webpack_require__(62))
		extend(p, __webpack_require__(63))
		extend(p, __webpack_require__(64))
		extend(p, __webpack_require__(65))
	
		module.exports = _.Vue = Vue
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		var lang = __webpack_require__(2)
		var extend = lang.extend
	
		extend(exports, lang)
		extend(exports, __webpack_require__(3))
		extend(exports, __webpack_require__(4))
		extend(exports, __webpack_require__(6))
		extend(exports, __webpack_require__(7))
		extend(exports, __webpack_require__(8))
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/**
		 * Check if a string starts with $ or _
		 *
		 * @param {String} str
		 * @return {Boolean}
		 */
	
		exports.isReserved = function (str) {
		  var c = (str + '').charCodeAt(0)
		  return c === 0x24 || c === 0x5F
		}
	
		/**
		 * Guard text output, make sure undefined outputs
		 * empty string
		 *
		 * @param {*} value
		 * @return {String}
		 */
	
		exports.toString = function (value) {
		  return value == null
		    ? ''
		    : value.toString()
		}
	
		/**
		 * Check and convert possible numeric strings to numbers
		 * before setting back to data
		 *
		 * @param {*} value
		 * @return {*|Number}
		 */
	
		exports.toNumber = function (value) {
		  if (typeof value !== 'string') {
		    return value
		  } else {
		    var parsed = Number(value)
		    return isNaN(parsed)
		      ? value
		      : parsed
		  }
		}
	
		/**
		 * Convert string boolean literals into real booleans.
		 *
		 * @param {*} value
		 * @return {*|Boolean}
		 */
	
		exports.toBoolean = function (value) {
		  return value === 'true'
		    ? true
		    : value === 'false'
		      ? false
		      : value
		}
	
		/**
		 * Strip quotes from a string
		 *
		 * @param {String} str
		 * @return {String | false}
		 */
	
		exports.stripQuotes = function (str) {
		  var a = str.charCodeAt(0)
		  var b = str.charCodeAt(str.length - 1)
		  return a === b && (a === 0x22 || a === 0x27)
		    ? str.slice(1, -1)
		    : false
		}
	
		/**
		 * Camelize a hyphen-delmited string.
		 *
		 * @param {String} str
		 * @return {String}
		 */
	
		exports.camelize = function (str) {
		  return str.replace(/-(\w)/g, toUpper)
		}
	
		function toUpper (_, c) {
		  return c ? c.toUpperCase() : ''
		}
	
		/**
		 * Hyphenate a camelCase string.
		 *
		 * @param {String} str
		 * @return {String}
		 */
	
		exports.hyphenate = function (str) {
		  return str
		    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		    .toLowerCase()
		}
	
		/**
		 * Converts hyphen/underscore/slash delimitered names into
		 * camelized classNames.
		 *
		 * e.g. my-component => MyComponent
		 *      some_else    => SomeElse
		 *      some/comp    => SomeComp
		 *
		 * @param {String} str
		 * @return {String}
		 */
	
		var classifyRE = /(?:^|[-_\/])(\w)/g
		exports.classify = function (str) {
		  return str.replace(classifyRE, toUpper)
		}
	
		/**
		 * Simple bind, faster than native
		 *
		 * @param {Function} fn
		 * @param {Object} ctx
		 * @return {Function}
		 */
	
		exports.bind = function (fn, ctx) {
		  return function (a) {
		    var l = arguments.length
		    return l
		      ? l > 1
		        ? fn.apply(ctx, arguments)
		        : fn.call(ctx, a)
		      : fn.call(ctx)
		  }
		}
	
		/**
		 * Convert an Array-like object to a real Array.
		 *
		 * @param {Array-like} list
		 * @param {Number} [start] - start index
		 * @return {Array}
		 */
	
		exports.toArray = function (list, start) {
		  start = start || 0
		  var i = list.length - start
		  var ret = new Array(i)
		  while (i--) {
		    ret[i] = list[i + start]
		  }
		  return ret
		}
	
		/**
		 * Mix properties into target object.
		 *
		 * @param {Object} to
		 * @param {Object} from
		 */
	
		exports.extend = function (to, from) {
		  for (var key in from) {
		    to[key] = from[key]
		  }
		  return to
		}
	
		/**
		 * Quick object check - this is primarily used to tell
		 * Objects from primitive values when we know the value
		 * is a JSON-compliant type.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */
	
		exports.isObject = function (obj) {
		  return obj !== null && typeof obj === 'object'
		}
	
		/**
		 * Strict object type check. Only returns true
		 * for plain JavaScript objects.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */
	
		var toString = Object.prototype.toString
		var OBJECT_STRING = '[object Object]'
		exports.isPlainObject = function (obj) {
		  return toString.call(obj) === OBJECT_STRING
		}
	
		/**
		 * Array type check.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */
	
		exports.isArray = Array.isArray
	
		/**
		 * Define a non-enumerable property
		 *
		 * @param {Object} obj
		 * @param {String} key
		 * @param {*} val
		 * @param {Boolean} [enumerable]
		 */
	
		exports.define = function (obj, key, val, enumerable) {
		  Object.defineProperty(obj, key, {
		    value: val,
		    enumerable: !!enumerable,
		    writable: true,
		    configurable: true
		  })
		}
	
		/**
		 * Debounce a function so it only gets called after the
		 * input stops arriving after the given wait period.
		 *
		 * @param {Function} func
		 * @param {Number} wait
		 * @return {Function} - the debounced function
		 */
	
		exports.debounce = function (func, wait) {
		  var timeout, args, context, timestamp, result
		  var later = function () {
		    var last = Date.now() - timestamp
		    if (last < wait && last >= 0) {
		      timeout = setTimeout(later, wait - last)
		    } else {
		      timeout = null
		      result = func.apply(context, args)
		      if (!timeout) context = args = null
		    }
		  }
		  return function () {
		    context = this
		    args = arguments
		    timestamp = Date.now()
		    if (!timeout) {
		      timeout = setTimeout(later, wait)
		    }
		    return result
		  }
		}
	
		/**
		 * Manual indexOf because it's slightly faster than
		 * native.
		 *
		 * @param {Array} arr
		 * @param {*} obj
		 */
	
		exports.indexOf = function (arr, obj) {
		  var i = arr.length
		  while (i--) {
		    if (arr[i] === obj) return i
		  }
		  return -1
		}
	
		/**
		 * Make a cancellable version of an async callback.
		 *
		 * @param {Function} fn
		 * @return {Function}
		 */
	
		exports.cancellable = function (fn) {
		  var cb = function () {
		    if (!cb.cancelled) {
		      return fn.apply(this, arguments)
		    }
		  }
		  cb.cancel = function () {
		    cb.cancelled = true
		  }
		  return cb
		}
	
		/**
		 * Check if two values are loosely equal - that is,
		 * if they are plain objects, do they have the same shape?
		 *
		 * @param {*} a
		 * @param {*} b
		 * @return {Boolean}
		 */
	
		exports.looseEqual = function (a, b) {
		  /* eslint-disable eqeqeq */
		  return a == b || (
		    exports.isObject(a) && exports.isObject(b)
		      ? JSON.stringify(a) === JSON.stringify(b)
		      : false
		  )
		  /* eslint-enable eqeqeq */
		}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		// can we use __proto__?
		exports.hasProto = '__proto__' in {}
	
		// Browser environment sniffing
		var inBrowser = exports.inBrowser =
		  typeof window !== 'undefined' &&
		  Object.prototype.toString.call(window) !== '[object Object]'
	
		exports.isIE9 =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
		exports.isAndroid =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
		// Transition property/event sniffing
		if (inBrowser && !exports.isIE9) {
		  var isWebkitTrans =
		    window.ontransitionend === undefined &&
		    window.onwebkittransitionend !== undefined
		  var isWebkitAnim =
		    window.onanimationend === undefined &&
		    window.onwebkitanimationend !== undefined
		  exports.transitionProp = isWebkitTrans
		    ? 'WebkitTransition'
		    : 'transition'
		  exports.transitionEndEvent = isWebkitTrans
		    ? 'webkitTransitionEnd'
		    : 'transitionend'
		  exports.animationProp = isWebkitAnim
		    ? 'WebkitAnimation'
		    : 'animation'
		  exports.animationEndEvent = isWebkitAnim
		    ? 'webkitAnimationEnd'
		    : 'animationend'
		}
	
		/**
		 * Defer a task to execute it asynchronously. Ideally this
		 * should be executed as a microtask, so we leverage
		 * MutationObserver if it's available, and fallback to
		 * setTimeout(0).
		 *
		 * @param {Function} cb
		 * @param {Object} ctx
		 */
	
		exports.nextTick = (function () {
		  var callbacks = []
		  var pending = false
		  var timerFunc
		  function nextTickHandler () {
		    pending = false
		    var copies = callbacks.slice(0)
		    callbacks = []
		    for (var i = 0; i < copies.length; i++) {
		      copies[i]()
		    }
		  }
		  /* istanbul ignore if */
		  if (typeof MutationObserver !== 'undefined') {
		    var counter = 1
		    var observer = new MutationObserver(nextTickHandler)
		    var textNode = document.createTextNode(counter)
		    observer.observe(textNode, {
		      characterData: true
		    })
		    timerFunc = function () {
		      counter = (counter + 1) % 2
		      textNode.data = counter
		    }
		  } else {
		    timerFunc = setTimeout
		  }
		  return function (cb, ctx) {
		    var func = ctx
		      ? function () { cb.call(ctx) }
		      : cb
		    callbacks.push(func)
		    if (pending) return
		    pending = true
		    timerFunc(nextTickHandler, 0)
		  }
		})()
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
	
		/**
		 * Query an element selector if it's not an element already.
		 *
		 * @param {String|Element} el
		 * @return {Element}
		 */
	
		exports.query = function (el) {
		  if (typeof el === 'string') {
		    var selector = el
		    el = document.querySelector(el)
		    if (!el) {
		      ("development") !== 'production' && _.warn(
		        'Cannot find element: ' + selector
		      )
		    }
		  }
		  return el
		}
	
		/**
		 * Check if a node is in the document.
		 * Note: document.documentElement.contains should work here
		 * but always returns false for comment nodes in phantomjs,
		 * making unit tests difficult. This is fixed byy doing the
		 * contains() check on the node's parentNode instead of
		 * the node itself.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */
	
		exports.inDoc = function (node) {
		  var doc = document.documentElement
		  var parent = node && node.parentNode
		  return doc === node ||
		    doc === parent ||
		    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
		}
	
		/**
		 * Extract an attribute from a node.
		 *
		 * @param {Node} node
		 * @param {String} attr
		 */
	
		exports.attr = function (node, attr) {
		  attr = config.prefix + attr
		  var val = node.getAttribute(attr)
		  if (val !== null) {
		    node.removeAttribute(attr)
		  }
		  return val
		}
	
		/**
		 * Insert el before target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */
	
		exports.before = function (el, target) {
		  target.parentNode.insertBefore(el, target)
		}
	
		/**
		 * Insert el after target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */
	
		exports.after = function (el, target) {
		  if (target.nextSibling) {
		    exports.before(el, target.nextSibling)
		  } else {
		    target.parentNode.appendChild(el)
		  }
		}
	
		/**
		 * Remove el from DOM
		 *
		 * @param {Element} el
		 */
	
		exports.remove = function (el) {
		  el.parentNode.removeChild(el)
		}
	
		/**
		 * Prepend el to target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */
	
		exports.prepend = function (el, target) {
		  if (target.firstChild) {
		    exports.before(el, target.firstChild)
		  } else {
		    target.appendChild(el)
		  }
		}
	
		/**
		 * Replace target with el
		 *
		 * @param {Element} target
		 * @param {Element} el
		 */
	
		exports.replace = function (target, el) {
		  var parent = target.parentNode
		  if (parent) {
		    parent.replaceChild(el, target)
		  }
		}
	
		/**
		 * Add event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */
	
		exports.on = function (el, event, cb) {
		  el.addEventListener(event, cb)
		}
	
		/**
		 * Remove event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */
	
		exports.off = function (el, event, cb) {
		  el.removeEventListener(event, cb)
		}
	
		/**
		 * Add class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */
	
		exports.addClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.add(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    if (cur.indexOf(' ' + cls + ' ') < 0) {
		      el.setAttribute('class', (cur + cls).trim())
		    }
		  }
		}
	
		/**
		 * Remove class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */
	
		exports.removeClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.remove(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    var tar = ' ' + cls + ' '
		    while (cur.indexOf(tar) >= 0) {
		      cur = cur.replace(tar, ' ')
		    }
		    el.setAttribute('class', cur.trim())
		  }
		}
	
		/**
		 * Extract raw content inside an element into a temporary
		 * container div
		 *
		 * @param {Element} el
		 * @param {Boolean} asFragment
		 * @return {Element}
		 */
	
		exports.extractContent = function (el, asFragment) {
		  var child
		  var rawContent
		  /* istanbul ignore if */
		  if (
		    exports.isTemplate(el) &&
		    el.content instanceof DocumentFragment
		  ) {
		    el = el.content
		  }
		  if (el.hasChildNodes()) {
		    exports.trimNode(el)
		    rawContent = asFragment
		      ? document.createDocumentFragment()
		      : document.createElement('div')
		    /* eslint-disable no-cond-assign */
		    while (child = el.firstChild) {
		    /* eslint-enable no-cond-assign */
		      rawContent.appendChild(child)
		    }
		  }
		  return rawContent
		}
	
		/**
		 * Trim possible empty head/tail textNodes inside a parent.
		 *
		 * @param {Node} node
		 */
	
		exports.trimNode = function (node) {
		  trim(node, node.firstChild)
		  trim(node, node.lastChild)
		}
	
		function trim (parent, node) {
		  if (node && node.nodeType === 3 && !node.data.trim()) {
		    parent.removeChild(node)
		  }
		}
	
		/**
		 * Check if an element is a template tag.
		 * Note if the template appears inside an SVG its tagName
		 * will be in lowercase.
		 *
		 * @param {Element} el
		 */
	
		exports.isTemplate = function (el) {
		  return el.tagName &&
		    el.tagName.toLowerCase() === 'template'
		}
	
		/**
		 * Create an "anchor" for performing dom insertion/removals.
		 * This is used in a number of scenarios:
		 * - fragment instance
		 * - v-html
		 * - v-if
		 * - component
		 * - repeat
		 *
		 * @param {String} content
		 * @param {Boolean} persist - IE trashes empty textNodes on
		 *                            cloneNode(true), so in certain
		 *                            cases the anchor needs to be
		 *                            non-empty to be persisted in
		 *                            templates.
		 * @return {Comment|Text}
		 */
	
		exports.createAnchor = function (content, persist) {
		  return config.debug
		    ? document.createComment(content)
		    : document.createTextNode(persist ? ' ' : '')
		}
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = {
	
		  /**
		   * The prefix to look for when parsing directives.
		   *
		   * @type {String}
		   */
	
		  prefix: 'v-',
	
		  /**
		   * Whether to print debug messages.
		   * Also enables stack trace for warnings.
		   *
		   * @type {Boolean}
		   */
	
		  debug: false,
	
		  /**
		   * Strict mode.
		   * Disables asset lookup in the view parent chain.
		   */
	
		  strict: false,
	
		  /**
		   * Whether to suppress warnings.
		   *
		   * @type {Boolean}
		   */
	
		  silent: false,
	
		  /**
		   * Whether allow observer to alter data objects'
		   * __proto__.
		   *
		   * @type {Boolean}
		   */
	
		  proto: true,
	
		  /**
		   * Whether to parse mustache tags in templates.
		   *
		   * @type {Boolean}
		   */
	
		  interpolate: true,
	
		  /**
		   * Whether to use async rendering.
		   */
	
		  async: true,
	
		  /**
		   * Whether to warn against errors caught when evaluating
		   * expressions.
		   */
	
		  warnExpressionErrors: true,
	
		  /**
		   * Internal flag to indicate the delimiters have been
		   * changed.
		   *
		   * @type {Boolean}
		   */
	
		  _delimitersChanged: true,
	
		  /**
		   * List of asset types that a component can own.
		   *
		   * @type {Array}
		   */
	
		  _assetTypes: [
		    'component',
		    'directive',
		    'elementDirective',
		    'filter',
		    'transition',
		    'partial'
		  ],
	
		  /**
		   * prop binding modes
		   */
	
		  _propBindingModes: {
		    ONE_WAY: 0,
		    TWO_WAY: 1,
		    ONE_TIME: 2
		  },
	
		  /**
		   * Max circular updates allowed in a batcher flush cycle.
		   */
	
		  _maxUpdateCount: 100
	
		}
	
		/**
		 * Interpolation delimiters.
		 * We need to mark the changed flag so that the text parser
		 * knows it needs to recompile the regex.
		 *
		 * @type {Array<String>}
		 */
	
		var delimiters = ['{{', '}}']
		Object.defineProperty(module.exports, 'delimiters', {
		  get: function () {
		    return delimiters
		  },
		  set: function (val) {
		    delimiters = val
		    this._delimitersChanged = true
		  }
		})
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var extend = _.extend
	
		/**
		 * Option overwriting strategies are functions that handle
		 * how to merge a parent option value and a child option
		 * value into the final value.
		 *
		 * All strategy functions follow the same signature:
		 *
		 * @param {*} parentVal
		 * @param {*} childVal
		 * @param {Vue} [vm]
		 */
	
		var strats = config.optionMergeStrategies = Object.create(null)
	
		/**
		 * Helper that recursively merges two data objects together.
		 */
	
		function mergeData (to, from) {
		  var key, toVal, fromVal
		  for (key in from) {
		    toVal = to[key]
		    fromVal = from[key]
		    if (!to.hasOwnProperty(key)) {
		      to.$add(key, fromVal)
		    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
		      mergeData(toVal, fromVal)
		    }
		  }
		  return to
		}
	
		/**
		 * Data
		 */
	
		strats.data = function (parentVal, childVal, vm) {
		  if (!vm) {
		    // in a Vue.extend merge, both should be functions
		    if (!childVal) {
		      return parentVal
		    }
		    if (typeof childVal !== 'function') {
		      ("development") !== 'production' && _.warn(
		        'The "data" option should be a function ' +
		        'that returns a per-instance value in component ' +
		        'definitions.'
		      )
		      return parentVal
		    }
		    if (!parentVal) {
		      return childVal
		    }
		    // when parentVal & childVal are both present,
		    // we need to return a function that returns the
		    // merged result of both functions... no need to
		    // check if parentVal is a function here because
		    // it has to be a function to pass previous merges.
		    return function mergedDataFn () {
		      return mergeData(
		        childVal.call(this),
		        parentVal.call(this)
		      )
		    }
		  } else if (parentVal || childVal) {
		    return function mergedInstanceDataFn () {
		      // instance merge
		      var instanceData = typeof childVal === 'function'
		        ? childVal.call(vm)
		        : childVal
		      var defaultData = typeof parentVal === 'function'
		        ? parentVal.call(vm)
		        : undefined
		      if (instanceData) {
		        return mergeData(instanceData, defaultData)
		      } else {
		        return defaultData
		      }
		    }
		  }
		}
	
		/**
		 * El
		 */
	
		strats.el = function (parentVal, childVal, vm) {
		  if (!vm && childVal && typeof childVal !== 'function') {
		    ("development") !== 'production' && _.warn(
		      'The "el" option should be a function ' +
		      'that returns a per-instance value in component ' +
		      'definitions.'
		    )
		    return
		  }
		  var ret = childVal || parentVal
		  // invoke the element factory if this is instance merge
		  return vm && typeof ret === 'function'
		    ? ret.call(vm)
		    : ret
		}
	
		/**
		 * Hooks and param attributes are merged as arrays.
		 */
	
		strats.created =
		strats.ready =
		strats.attached =
		strats.detached =
		strats.beforeCompile =
		strats.compiled =
		strats.beforeDestroy =
		strats.destroyed =
		strats.props = function (parentVal, childVal) {
		  return childVal
		    ? parentVal
		      ? parentVal.concat(childVal)
		      : _.isArray(childVal)
		        ? childVal
		        : [childVal]
		    : parentVal
		}
	
		/**
		 * 0.11 deprecation warning
		 */
	
		strats.paramAttributes = function () {
		  /* istanbul ignore next */
		  ("development") !== 'production' && _.warn(
		    '"paramAttributes" option has been deprecated in 0.12. ' +
		    'Use "props" instead.'
		  )
		}
	
		/**
		 * Assets
		 *
		 * When a vm is present (instance creation), we need to do
		 * a three-way merge between constructor options, instance
		 * options and parent options.
		 */
	
		function mergeAssets (parentVal, childVal) {
		  var res = Object.create(parentVal)
		  return childVal
		    ? extend(res, guardArrayAssets(childVal))
		    : res
		}
	
		config._assetTypes.forEach(function (type) {
		  strats[type + 's'] = mergeAssets
		})
	
		/**
		 * Events & Watchers.
		 *
		 * Events & watchers hashes should not overwrite one
		 * another, so we merge them as arrays.
		 */
	
		strats.watch =
		strats.events = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = {}
		  extend(ret, parentVal)
		  for (var key in childVal) {
		    var parent = ret[key]
		    var child = childVal[key]
		    if (parent && !_.isArray(parent)) {
		      parent = [parent]
		    }
		    ret[key] = parent
		      ? parent.concat(child)
		      : [child]
		  }
		  return ret
		}
	
		/**
		 * Other object hashes.
		 */
	
		strats.methods =
		strats.computed = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = Object.create(parentVal)
		  extend(ret, childVal)
		  return ret
		}
	
		/**
		 * Default strategy.
		 */
	
		var defaultStrat = function (parentVal, childVal) {
		  return childVal === undefined
		    ? parentVal
		    : childVal
		}
	
		/**
		 * Make sure component options get converted to actual
		 * constructors.
		 *
		 * @param {Object} options
		 */
	
		function guardComponents (options) {
		  if (options.components) {
		    var components = options.components =
		      guardArrayAssets(options.components)
		    var def
		    var ids = Object.keys(components)
		    for (var i = 0, l = ids.length; i < l; i++) {
		      var key = ids[i]
		      if (_.commonTagRE.test(key)) {
		        ("development") !== 'production' && _.warn(
		          'Do not use built-in HTML elements as component ' +
		          'id: ' + key
		        )
		        continue
		      }
		      def = components[key]
		      if (_.isPlainObject(def)) {
		        def.id = def.id || key
		        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def))
		      }
		    }
		  }
		}
	
		/**
		 * Ensure all props option syntax are normalized into the
		 * Object-based format.
		 *
		 * @param {Object} options
		 */
	
		function guardProps (options) {
		  var props = options.props
		  if (_.isPlainObject(props)) {
		    options.props = Object.keys(props).map(function (key) {
		      var val = props[key]
		      if (!_.isPlainObject(val)) {
		        val = { type: val }
		      }
		      val.name = key
		      return val
		    })
		  } else if (_.isArray(props)) {
		    options.props = props.map(function (prop) {
		      return typeof prop === 'string'
		        ? { name: prop }
		        : prop
		    })
		  }
		}
	
		/**
		 * Guard an Array-format assets option and converted it
		 * into the key-value Object format.
		 *
		 * @param {Object|Array} assets
		 * @return {Object}
		 */
	
		function guardArrayAssets (assets) {
		  if (_.isArray(assets)) {
		    var res = {}
		    var i = assets.length
		    var asset
		    while (i--) {
		      asset = assets[i]
		      var id = asset.id || (asset.options && asset.options.id)
		      if (!id) {
		        ("development") !== 'production' && _.warn(
		          'Array-syntax assets must provide an id field.'
		        )
		      } else {
		        res[id] = asset
		      }
		    }
		    return res
		  }
		  return assets
		}
	
		/**
		 * Merge two option objects into a new one.
		 * Core utility used in both instantiation and inheritance.
		 *
		 * @param {Object} parent
		 * @param {Object} child
		 * @param {Vue} [vm] - if vm is present, indicates this is
		 *                     an instantiation merge.
		 */
	
		exports.mergeOptions = function merge (parent, child, vm) {
		  guardComponents(child)
		  guardProps(child)
		  var options = {}
		  var key
		  if (child.mixins) {
		    for (var i = 0, l = child.mixins.length; i < l; i++) {
		      parent = merge(parent, child.mixins[i], vm)
		    }
		  }
		  for (key in parent) {
		    mergeField(key)
		  }
		  for (key in child) {
		    if (!(parent.hasOwnProperty(key))) {
		      mergeField(key)
		    }
		  }
		  function mergeField (key) {
		    var strat = strats[key] || defaultStrat
		    options[key] = strat(parent[key], child[key], vm, key)
		  }
		  return options
		}
	
		/**
		 * Resolve an asset.
		 * This function is used because child instances need access
		 * to assets defined in its ancestor chain.
		 *
		 * @param {Object} options
		 * @param {String} type
		 * @param {String} id
		 * @return {Object|Function}
		 */
	
		exports.resolveAsset = function resolve (options, type, id) {
		  var camelizedId = _.camelize(id)
		  var pascalizedId = camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)
		  var assets = options[type]
		  var asset = assets[id] || assets[camelizedId] || assets[pascalizedId]
		  while (
		    !asset &&
		    options._parent &&
		    (!config.strict || options._repeat)
		  ) {
		    options = (options._context || options._parent).$options
		    assets = options[type]
		    asset = assets[id] || assets[camelizedId] || assets[pascalizedId]
		  }
		  return asset
		}
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Check if an element is a component, if yes return its
		 * component id.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {String|undefined}
		 */
	
		exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
		exports.checkComponent = function (el, options) {
		  var tag = el.tagName.toLowerCase()
		  if (tag === 'component') {
		    // dynamic syntax
		    var exp = el.getAttribute('is')
		    el.removeAttribute('is')
		    return exp
		  } else if (
		    !exports.commonTagRE.test(tag) &&
		    _.resolveAsset(options, 'components', tag)
		  ) {
		    return tag
		  /* eslint-disable no-cond-assign */
		  } else if (tag = _.attr(el, 'component')) {
		  /* eslint-enable no-cond-assign */
		    return tag
		  }
		}
	
		/**
		 * Set a prop's initial value on a vm and its data object.
		 * The vm may have inherit:true so we need to make sure
		 * we don't accidentally overwrite parent value.
		 *
		 * @param {Vue} vm
		 * @param {Object} prop
		 * @param {*} value
		 */
	
		exports.initProp = function (vm, prop, value) {
		  if (exports.assertProp(prop, value)) {
		    var key = prop.path
		    if (key in vm) {
		      _.define(vm, key, value, true)
		    } else {
		      vm[key] = value
		    }
		    vm._data[key] = value
		  }
		}
	
		/**
		 * Assert whether a prop is valid.
		 *
		 * @param {Object} prop
		 * @param {*} value
		 */
	
		exports.assertProp = function (prop, value) {
		  // if a prop is not provided and is not required,
		  // skip the check.
		  if (prop.raw === null && !prop.required) {
		    return true
		  }
		  var options = prop.options
		  var type = options.type
		  var valid = true
		  var expectedType
		  if (type) {
		    if (type === String) {
		      expectedType = 'string'
		      valid = typeof value === expectedType
		    } else if (type === Number) {
		      expectedType = 'number'
		      valid = typeof value === 'number'
		    } else if (type === Boolean) {
		      expectedType = 'boolean'
		      valid = typeof value === 'boolean'
		    } else if (type === Function) {
		      expectedType = 'function'
		      valid = typeof value === 'function'
		    } else if (type === Object) {
		      expectedType = 'object'
		      valid = _.isPlainObject(value)
		    } else if (type === Array) {
		      expectedType = 'array'
		      valid = _.isArray(value)
		    } else {
		      valid = value instanceof type
		    }
		  }
		  if (!valid) {
		    ("development") !== 'production' && _.warn(
		      'Invalid prop: type check failed for ' +
		      prop.path + '="' + prop.raw + '".' +
		      ' Expected ' + formatType(expectedType) +
		      ', got ' + formatValue(value) + '.'
		    )
		    return false
		  }
		  var validator = options.validator
		  if (validator) {
		    if (!validator.call(null, value)) {
		      ("development") !== 'production' && _.warn(
		        'Invalid prop: custom validator check failed for ' +
		        prop.path + '="' + prop.raw + '"'
		      )
		      return false
		    }
		  }
		  return true
		}
	
		function formatType (val) {
		  return val
		    ? val.charAt(0).toUpperCase() + val.slice(1)
		    : 'custom type'
		}
	
		function formatValue (val) {
		  return Object.prototype.toString.call(val).slice(8, -1)
		}
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * Enable debug utilities.
		 */
	
		if (true) {
	
		  var config = __webpack_require__(5)
		  var hasConsole = typeof console !== 'undefined'
	
		  /**
		   * Log a message.
		   *
		   * @param {String} msg
		   */
	
		  exports.log = function (msg) {
		    if (hasConsole && config.debug) {
		      console.log('[Vue info]: ' + msg)
		    }
		  }
	
		  /**
		   * We've got a problem here.
		   *
		   * @param {String} msg
		   */
	
		  exports.warn = function (msg, e) {
		    if (hasConsole && (!config.silent || config.debug)) {
		      console.warn('[Vue warn]: ' + msg)
		      /* istanbul ignore if */
		      if (config.debug) {
		        console.warn((e || new Error('Warning Stack Trace')).stack)
		      }
		    }
		  }
	
		  /**
		   * Assert asset exists
		   */
	
		  exports.assertAsset = function (val, type, id) {
		    /* istanbul ignore if */
		    if (type === 'directive') {
		      if (id === 'with') {
		        exports.warn(
		          'v-with has been deprecated in ^0.12.0. ' +
		          'Use props instead.'
		        )
		        return
		      }
		      if (id === 'events') {
		        exports.warn(
		          'v-events has been deprecated in ^0.12.0. ' +
		          'Pass down methods as callback props instead.'
		        )
		        return
		      }
		    }
		    if (!val) {
		      exports.warn('Failed to resolve ' + type + ': ' + id)
		    }
		  }
		}
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
	
		/**
		 * Expose useful internals
		 */
	
		exports.util = _
		exports.config = config
		exports.nextTick = _.nextTick
		exports.compiler = __webpack_require__(10)
	
		exports.parsers = {
		  path: __webpack_require__(20),
		  text: __webpack_require__(13),
		  template: __webpack_require__(22),
		  directive: __webpack_require__(15),
		  expression: __webpack_require__(19)
		}
	
		/**
		 * Each instance constructor, including Vue, has a unique
		 * cid. This enables us to create wrapped "child
		 * constructors" for prototypal inheritance and cache them.
		 */
	
		exports.cid = 0
		var cid = 1
	
		/**
		 * Class inheritance
		 *
		 * @param {Object} extendOptions
		 */
	
		exports.extend = function (extendOptions) {
		  extendOptions = extendOptions || {}
		  var Super = this
		  var Sub = createClass(
		    extendOptions.name ||
		    Super.options.name ||
		    'VueComponent'
		  )
		  Sub.prototype = Object.create(Super.prototype)
		  Sub.prototype.constructor = Sub
		  Sub.cid = cid++
		  Sub.options = _.mergeOptions(
		    Super.options,
		    extendOptions
		  )
		  Sub['super'] = Super
		  // allow further extension
		  Sub.extend = Super.extend
		  // create asset registers, so extended classes
		  // can have their private assets too.
		  config._assetTypes.forEach(function (type) {
		    Sub[type] = Super[type]
		  })
		  return Sub
		}
	
		/**
		 * A function that returns a sub-class constructor with the
		 * given name. This gives us much nicer output when
		 * logging instances in the console.
		 *
		 * @param {String} name
		 * @return {Function}
		 */
	
		function createClass (name) {
		  return new Function(
		    'return function ' + _.classify(name) +
		    ' (options) { this._init(options) }'
		  )()
		}
	
		/**
		 * Plugin system
		 *
		 * @param {Object} plugin
		 */
	
		exports.use = function (plugin) {
		  // additional parameters
		  var args = _.toArray(arguments, 1)
		  args.unshift(this)
		  if (typeof plugin.install === 'function') {
		    plugin.install.apply(plugin, args)
		  } else {
		    plugin.apply(null, args)
		  }
		  return this
		}
	
		/**
		 * Apply a global mixin by merging it into the default
		 * options.
		 */
	
		exports.mixin = function (mixin) {
		  var Vue = _.Vue
		  Vue.options = _.mergeOptions(Vue.options, mixin)
		}
	
		/**
		 * Create asset registration methods with the following
		 * signature:
		 *
		 * @param {String} id
		 * @param {*} definition
		 */
	
		config._assetTypes.forEach(function (type) {
		  exports[type] = function (id, definition) {
		    if (!definition) {
		      return this.options[type + 's'][id]
		    } else {
		      if (
		        type === 'component' &&
		        _.isPlainObject(definition)
		      ) {
		        definition.name = id
		        definition = _.Vue.extend(definition)
		      }
		      this.options[type + 's'][id] = definition
		    }
		  }
		})
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		_.extend(exports, __webpack_require__(11))
		_.extend(exports, __webpack_require__(24))
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var compileProps = __webpack_require__(12)
		var config = __webpack_require__(5)
		var textParser = __webpack_require__(13)
		var dirParser = __webpack_require__(15)
		var templateParser = __webpack_require__(22)
		var resolveAsset = _.resolveAsset
		var componentDef = __webpack_require__(23)
	
		// terminal directives
		var terminalDirectives = [
		  'repeat',
		  'if'
		]
	
		/**
		 * Compile a template and return a reusable composite link
		 * function, which recursively contains more link functions
		 * inside. This top level compile function would normally
		 * be called on instance root nodes, but can also be used
		 * for partial compilation if the partial argument is true.
		 *
		 * The returned composite link function, when called, will
		 * return an unlink function that tearsdown all directives
		 * created during the linking phase.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Object} options
		 * @param {Boolean} partial
		 * @return {Function}
		 */
	
		exports.compile = function (el, options, partial) {
		  // link function for the node itself.
		  var nodeLinkFn = partial || !options._asComponent
		    ? compileNode(el, options)
		    : null
		  // link function for the childNodes
		  var childLinkFn =
		    !(nodeLinkFn && nodeLinkFn.terminal) &&
		    el.tagName !== 'SCRIPT' &&
		    el.hasChildNodes()
		      ? compileNodeList(el.childNodes, options)
		      : null
	
		  /**
		   * A composite linker function to be called on a already
		   * compiled piece of DOM, which instantiates all directive
		   * instances.
		   *
		   * @param {Vue} vm
		   * @param {Element|DocumentFragment} el
		   * @param {Vue} [host] - host vm of transcluded content
		   * @return {Function|undefined}
		   */
	
		  return function compositeLinkFn (vm, el, host) {
		    // cache childNodes before linking parent, fix #657
		    var childNodes = _.toArray(el.childNodes)
		    // link
		    var dirs = linkAndCapture(function () {
		      if (nodeLinkFn) nodeLinkFn(vm, el, host)
		      if (childLinkFn) childLinkFn(vm, childNodes, host)
		    }, vm)
		    return makeUnlinkFn(vm, dirs)
		  }
		}
	
		/**
		 * Apply a linker to a vm/element pair and capture the
		 * directives created during the process.
		 *
		 * @param {Function} linker
		 * @param {Vue} vm
		 */
	
		function linkAndCapture (linker, vm) {
		  var originalDirCount = vm._directives.length
		  linker()
		  return vm._directives.slice(originalDirCount)
		}
	
		/**
		 * Linker functions return an unlink function that
		 * tearsdown all directives instances generated during
		 * the process.
		 *
		 * We create unlink functions with only the necessary
		 * information to avoid retaining additional closures.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Vue} [context]
		 * @param {Array} [contextDirs]
		 * @return {Function}
		 */
	
		function makeUnlinkFn (vm, dirs, context, contextDirs) {
		  return function unlink (destroying) {
		    teardownDirs(vm, dirs, destroying)
		    if (context && contextDirs) {
		      teardownDirs(context, contextDirs)
		    }
		  }
		}
	
		/**
		 * Teardown partial linked directives.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Boolean} destroying
		 */
	
		function teardownDirs (vm, dirs, destroying) {
		  var i = dirs.length
		  while (i--) {
		    dirs[i]._teardown()
		    if (!destroying) {
		      vm._directives.$remove(dirs[i])
		    }
		  }
		}
	
		/**
		 * Compile link props on an instance.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */
	
		exports.compileAndLinkProps = function (vm, el, props) {
		  var propsLinkFn = compileProps(el, props)
		  var propDirs = linkAndCapture(function () {
		    propsLinkFn(vm, null)
		  }, vm)
		  return makeUnlinkFn(vm, propDirs)
		}
	
		/**
		 * Compile the root element of an instance.
		 *
		 * 1. attrs on context container (context scope)
		 * 2. attrs on the component template root node, if
		 *    replace:true (child scope)
		 *
		 * If this is a fragment instance, we only need to compile 1.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */
	
		exports.compileRoot = function (el, options) {
		  var containerAttrs = options._containerAttrs
		  var replacerAttrs = options._replacerAttrs
		  var contextLinkFn, replacerLinkFn
	
		  // only need to compile other attributes for
		  // non-fragment instances
		  if (el.nodeType !== 11) {
		    // for components, container and replacer need to be
		    // compiled separately and linked in different scopes.
		    if (options._asComponent) {
		      // 2. container attributes
		      if (containerAttrs) {
		        contextLinkFn = compileDirectives(containerAttrs, options)
		      }
		      if (replacerAttrs) {
		        // 3. replacer attributes
		        replacerLinkFn = compileDirectives(replacerAttrs, options)
		      }
		    } else {
		      // non-component, just compile as a normal element.
		      replacerLinkFn = compileDirectives(el.attributes, options)
		    }
		  }
	
		  return function rootLinkFn (vm, el) {
		    // link context scope dirs
		    var context = vm._context
		    var contextDirs
		    if (context && contextLinkFn) {
		      contextDirs = linkAndCapture(function () {
		        contextLinkFn(context, el)
		      }, context)
		    }
	
		    // link self
		    var selfDirs = linkAndCapture(function () {
		      if (replacerLinkFn) replacerLinkFn(vm, el)
		    }, vm)
	
		    // return the unlink function that tearsdown context
		    // container directives.
		    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
		  }
		}
	
		/**
		 * Compile a node and return a nodeLinkFn based on the
		 * node type.
		 *
		 * @param {Node} node
		 * @param {Object} options
		 * @return {Function|null}
		 */
	
		function compileNode (node, options) {
		  var type = node.nodeType
		  if (type === 1 && node.tagName !== 'SCRIPT') {
		    return compileElement(node, options)
		  } else if (type === 3 && config.interpolate && node.data.trim()) {
		    return compileTextNode(node, options)
		  } else {
		    return null
		  }
		}
	
		/**
		 * Compile an element and return a nodeLinkFn.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function|null}
		 */
	
		function compileElement (el, options) {
		  // preprocess textareas.
		  // textarea treats its text content as the initial value.
		  // just bind it as a v-attr directive for value.
		  if (el.tagName === 'TEXTAREA') {
		    if (textParser.parse(el.value)) {
		      el.setAttribute('value', el.value)
		    }
		  }
		  var linkFn
		  var hasAttrs = el.hasAttributes()
		  // check terminal directives (repeat & if)
		  if (hasAttrs) {
		    linkFn = checkTerminalDirectives(el, options)
		  }
		  // check element directives
		  if (!linkFn) {
		    linkFn = checkElementDirectives(el, options)
		  }
		  // check component
		  if (!linkFn) {
		    linkFn = checkComponent(el, options)
		  }
		  // normal directives
		  if (!linkFn && hasAttrs) {
		    linkFn = compileDirectives(el.attributes, options)
		  }
		  return linkFn
		}
	
		/**
		 * Compile a textNode and return a nodeLinkFn.
		 *
		 * @param {TextNode} node
		 * @param {Object} options
		 * @return {Function|null} textNodeLinkFn
		 */
	
		function compileTextNode (node, options) {
		  var tokens = textParser.parse(node.data)
		  if (!tokens) {
		    return null
		  }
		  var frag = document.createDocumentFragment()
		  var el, token
		  for (var i = 0, l = tokens.length; i < l; i++) {
		    token = tokens[i]
		    el = token.tag
		      ? processTextToken(token, options)
		      : document.createTextNode(token.value)
		    frag.appendChild(el)
		  }
		  return makeTextNodeLinkFn(tokens, frag, options)
		}
	
		/**
		 * Process a single text token.
		 *
		 * @param {Object} token
		 * @param {Object} options
		 * @return {Node}
		 */
	
		function processTextToken (token, options) {
		  var el
		  if (token.oneTime) {
		    el = document.createTextNode(token.value)
		  } else {
		    if (token.html) {
		      el = document.createComment('v-html')
		      setTokenType('html')
		    } else {
		      // IE will clean up empty textNodes during
		      // frag.cloneNode(true), so we have to give it
		      // something here...
		      el = document.createTextNode(' ')
		      setTokenType('text')
		    }
		  }
		  function setTokenType (type) {
		    token.type = type
		    token.def = resolveAsset(options, 'directives', type)
		    token.descriptor = dirParser.parse(token.value)[0]
		  }
		  return el
		}
	
		/**
		 * Build a function that processes a textNode.
		 *
		 * @param {Array<Object>} tokens
		 * @param {DocumentFragment} frag
		 */
	
		function makeTextNodeLinkFn (tokens, frag) {
		  return function textNodeLinkFn (vm, el) {
		    var fragClone = frag.cloneNode(true)
		    var childNodes = _.toArray(fragClone.childNodes)
		    var token, value, node
		    for (var i = 0, l = tokens.length; i < l; i++) {
		      token = tokens[i]
		      value = token.value
		      if (token.tag) {
		        node = childNodes[i]
		        if (token.oneTime) {
		          value = vm.$eval(value)
		          if (token.html) {
		            _.replace(node, templateParser.parse(value, true))
		          } else {
		            node.data = value
		          }
		        } else {
		          vm._bindDir(token.type, node,
		                      token.descriptor, token.def)
		        }
		      }
		    }
		    _.replace(el, fragClone)
		  }
		}
	
		/**
		 * Compile a node list and return a childLinkFn.
		 *
		 * @param {NodeList} nodeList
		 * @param {Object} options
		 * @return {Function|undefined}
		 */
	
		function compileNodeList (nodeList, options) {
		  var linkFns = []
		  var nodeLinkFn, childLinkFn, node
		  for (var i = 0, l = nodeList.length; i < l; i++) {
		    node = nodeList[i]
		    nodeLinkFn = compileNode(node, options)
		    childLinkFn =
		      !(nodeLinkFn && nodeLinkFn.terminal) &&
		      node.tagName !== 'SCRIPT' &&
		      node.hasChildNodes()
		        ? compileNodeList(node.childNodes, options)
		        : null
		    linkFns.push(nodeLinkFn, childLinkFn)
		  }
		  return linkFns.length
		    ? makeChildLinkFn(linkFns)
		    : null
		}
	
		/**
		 * Make a child link function for a node's childNodes.
		 *
		 * @param {Array<Function>} linkFns
		 * @return {Function} childLinkFn
		 */
	
		function makeChildLinkFn (linkFns) {
		  return function childLinkFn (vm, nodes, host) {
		    var node, nodeLinkFn, childrenLinkFn
		    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
		      node = nodes[n]
		      nodeLinkFn = linkFns[i++]
		      childrenLinkFn = linkFns[i++]
		      // cache childNodes before linking parent, fix #657
		      var childNodes = _.toArray(node.childNodes)
		      if (nodeLinkFn) {
		        nodeLinkFn(vm, node, host)
		      }
		      if (childrenLinkFn) {
		        childrenLinkFn(vm, childNodes, host)
		      }
		    }
		  }
		}
	
		/**
		 * Check for element directives (custom elements that should
		 * be resovled as terminal directives).
		 *
		 * @param {Element} el
		 * @param {Object} options
		 */
	
		function checkElementDirectives (el, options) {
		  var tag = el.tagName.toLowerCase()
		  if (_.commonTagRE.test(tag)) return
		  var def = resolveAsset(options, 'elementDirectives', tag)
		  if (def) {
		    return makeTerminalNodeLinkFn(el, tag, '', options, def)
		  }
		}
	
		/**
		 * Check if an element is a component. If yes, return
		 * a component link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} hasAttrs
		 * @return {Function|undefined}
		 */
	
		function checkComponent (el, options, hasAttrs) {
		  var componentId = _.checkComponent(el, options, hasAttrs)
		  if (componentId) {
		    var componentLinkFn = function (vm, el, host) {
		      vm._bindDir('component', el, {
		        expression: componentId
		      }, componentDef, host)
		    }
		    componentLinkFn.terminal = true
		    return componentLinkFn
		  }
		}
	
		/**
		 * Check an element for terminal directives in fixed order.
		 * If it finds one, return a terminal link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function} terminalLinkFn
		 */
	
		function checkTerminalDirectives (el, options) {
		  if (_.attr(el, 'pre') !== null) {
		    return skip
		  }
		  var value, dirName
		  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
		    dirName = terminalDirectives[i]
		    if ((value = _.attr(el, dirName)) !== null) {
		      return makeTerminalNodeLinkFn(el, dirName, value, options)
		    }
		  }
		}
	
		function skip () {}
		skip.terminal = true
	
		/**
		 * Build a node link function for a terminal directive.
		 * A terminal link function terminates the current
		 * compilation recursion and handles compilation of the
		 * subtree in the directive.
		 *
		 * @param {Element} el
		 * @param {String} dirName
		 * @param {String} value
		 * @param {Object} options
		 * @param {Object} [def]
		 * @return {Function} terminalLinkFn
		 */
	
		function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
		  var descriptor = dirParser.parse(value)[0]
		  // no need to call resolveAsset since terminal directives
		  // are always internal
		  def = def || options.directives[dirName]
		  var fn = function terminalNodeLinkFn (vm, el, host) {
		    vm._bindDir(dirName, el, descriptor, def, host)
		  }
		  fn.terminal = true
		  return fn
		}
	
		/**
		 * Compile the directives on an element and return a linker.
		 *
		 * @param {Array|NamedNodeMap} attrs
		 * @param {Object} options
		 * @return {Function}
		 */
	
		function compileDirectives (attrs, options) {
		  var i = attrs.length
		  var dirs = []
		  var attr, name, value, dir, dirName, dirDef
		  while (i--) {
		    attr = attrs[i]
		    name = attr.name
		    value = attr.value
		    if (name.indexOf(config.prefix) === 0) {
		      dirName = name.slice(config.prefix.length)
		      dirDef = resolveAsset(options, 'directives', dirName)
		      if (true) {
		        _.assertAsset(dirDef, 'directive', dirName)
		      }
		      if (dirDef) {
		        dirs.push({
		          name: dirName,
		          descriptors: dirParser.parse(value),
		          def: dirDef
		        })
		      }
		    } else if (config.interpolate) {
		      dir = collectAttrDirective(name, value, options)
		      if (dir) {
		        dirs.push(dir)
		      }
		    }
		  }
		  // sort by priority, LOW to HIGH
		  if (dirs.length) {
		    dirs.sort(directiveComparator)
		    return makeNodeLinkFn(dirs)
		  }
		}
	
		/**
		 * Build a link function for all directives on a single node.
		 *
		 * @param {Array} directives
		 * @return {Function} directivesLinkFn
		 */
	
		function makeNodeLinkFn (directives) {
		  return function nodeLinkFn (vm, el, host) {
		    // reverse apply because it's sorted low to high
		    var i = directives.length
		    var dir, j, k
		    while (i--) {
		      dir = directives[i]
		      if (dir._link) {
		        // custom link fn
		        dir._link(vm, el)
		      } else {
		        k = dir.descriptors.length
		        for (j = 0; j < k; j++) {
		          vm._bindDir(dir.name, el,
		            dir.descriptors[j], dir.def, host)
		        }
		      }
		    }
		  }
		}
	
		/**
		 * Check an attribute for potential dynamic bindings,
		 * and return a directive object.
		 *
		 * Special case: class interpolations are translated into
		 * v-class instead v-attr, so that it can work with user
		 * provided v-class bindings.
		 *
		 * @param {String} name
		 * @param {String} value
		 * @param {Object} options
		 * @return {Object}
		 */
	
		function collectAttrDirective (name, value, options) {
		  var tokens = textParser.parse(value)
		  var isClass = name === 'class'
		  if (tokens) {
		    var dirName = isClass ? 'class' : 'attr'
		    var def = options.directives[dirName]
		    var i = tokens.length
		    var allOneTime = true
		    while (i--) {
		      var token = tokens[i]
		      if (token.tag && !token.oneTime) {
		        allOneTime = false
		      }
		    }
		    var linker
		    if (allOneTime) {
		      linker = function (vm, el) {
		        el.setAttribute(name, vm.$interpolate(value))
		      }
		    } else {
		      linker = function (vm, el) {
		        var exp = textParser.tokensToExp(tokens, vm)
		        var desc = isClass
		          ? dirParser.parse(exp)[0]
		          : dirParser.parse(name + ':' + exp)[0]
		        if (isClass) {
		          desc._rawClass = value
		        }
		        vm._bindDir(dirName, el, desc, def)
		      }
		    }
		    return {
		      def: def,
		      _link: linker
		    }
		  }
		}
	
		/**
		 * Directive priority sort comparator
		 *
		 * @param {Object} a
		 * @param {Object} b
		 */
	
		function directiveComparator (a, b) {
		  a = a.def.priority || 0
		  b = b.def.priority || 0
		  return a > b ? 1 : -1
		}
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var textParser = __webpack_require__(13)
		var propDef = __webpack_require__(16)
		var propBindingModes = __webpack_require__(5)._propBindingModes
	
		// regexes
		var identRE = __webpack_require__(20).identRE
		var dataAttrRE = /^data-/
		var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
		var literalValueRE = /^(true|false)$|^\d.*/
	
		/**
		 * Compile param attributes on a root element and return
		 * a props link function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Array} propOptions
		 * @return {Function} propsLinkFn
		 */
	
		module.exports = function compileProps (el, propOptions) {
		  var props = []
		  var i = propOptions.length
		  var options, name, attr, value, path, prop, literal, single
		  while (i--) {
		    options = propOptions[i]
		    name = options.name
		    // props could contain dashes, which will be
		    // interpreted as minus calculations by the parser
		    // so we need to camelize the path here
		    path = _.camelize(name.replace(dataAttrRE, ''))
		    if (!identRE.test(path)) {
		      ("development") !== 'production' && _.warn(
		        'Invalid prop key: "' + name + '". Prop keys ' +
		        'must be valid identifiers.'
		      )
		      continue
		    }
		    attr = _.hyphenate(name)
		    value = el.getAttribute(attr)
		    if (value === null) {
		      attr = 'data-' + attr
		      value = el.getAttribute(attr)
		    }
		    // create a prop descriptor
		    prop = {
		      name: name,
		      raw: value,
		      path: path,
		      options: options,
		      mode: propBindingModes.ONE_WAY
		    }
		    if (value !== null) {
		      // important so that this doesn't get compiled
		      // again as a normal attribute binding
		      el.removeAttribute(attr)
		      var tokens = textParser.parse(value)
		      if (tokens) {
		        prop.dynamic = true
		        prop.parentPath = textParser.tokensToExp(tokens)
		        // check prop binding type.
		        single = tokens.length === 1
		        literal = literalValueRE.test(prop.parentPath)
		        // one time: {{* prop}}
		        if (literal || (single && tokens[0].oneTime)) {
		          prop.mode = propBindingModes.ONE_TIME
		        } else if (
		          !literal &&
		          (single && tokens[0].twoWay)
		        ) {
		          if (settablePathRE.test(prop.parentPath)) {
		            prop.mode = propBindingModes.TWO_WAY
		          } else {
		            ("development") !== 'production' && _.warn(
		              'Cannot bind two-way prop with non-settable ' +
		              'parent path: ' + prop.parentPath
		            )
		          }
		        }
		        if (
		          ("development") !== 'production' &&
		          options.twoWay &&
		          prop.mode !== propBindingModes.TWO_WAY
		        ) {
		          _.warn(
		            'Prop "' + name + '" expects a two-way binding type.'
		          )
		        }
		      }
		    } else if (options && options.required) {
		      ("development") !== 'production' && _.warn(
		        'Missing required prop: ' + name
		      )
		    }
		    props.push(prop)
		  }
		  return makePropsLinkFn(props)
		}
	
		/**
		 * Build a function that applies props to a vm.
		 *
		 * @param {Array} props
		 * @return {Function} propsLinkFn
		 */
	
		function makePropsLinkFn (props) {
		  return function propsLinkFn (vm, el) {
		    // store resolved props info
		    vm._props = {}
		    var i = props.length
		    var prop, path, options, value
		    while (i--) {
		      prop = props[i]
		      path = prop.path
		      vm._props[path] = prop
		      options = prop.options
		      if (prop.raw === null) {
		        // initialize absent prop
		        _.initProp(vm, prop, getDefault(options))
		      } else if (prop.dynamic) {
		        // dynamic prop
		        if (vm._context) {
		          if (prop.mode === propBindingModes.ONE_TIME) {
		            // one time binding
		            value = vm._context.$get(prop.parentPath)
		            _.initProp(vm, prop, value)
		          } else {
		            // dynamic binding
		            vm._bindDir('prop', el, prop, propDef)
		          }
		        } else {
		          ("development") !== 'production' && _.warn(
		            'Cannot bind dynamic prop on a root instance' +
		            ' with no parent: ' + prop.name + '="' +
		            prop.raw + '"'
		          )
		        }
		      } else {
		        // literal, cast it and just set once
		        var raw = prop.raw
		        value = options.type === Boolean && raw === ''
		          ? true
		          // do not cast emptry string.
		          // _.toNumber casts empty string to 0.
		          : raw.trim()
		            ? _.toBoolean(_.toNumber(raw))
		            : raw
		        _.initProp(vm, prop, value)
		      }
		    }
		  }
		}
	
		/**
		 * Get the default value of a prop.
		 *
		 * @param {Object} options
		 * @return {*}
		 */
	
		function getDefault (options) {
		  // no default, return undefined
		  if (!options.hasOwnProperty('default')) {
		    // absent boolean value defaults to false
		    return options.type === Boolean
		      ? false
		      : undefined
		  }
		  var def = options.default
		  // warn against non-factory defaults for Object & Array
		  if (_.isObject(def)) {
		    ("development") !== 'production' && _.warn(
		      'Object/Array as default prop values will be shared ' +
		      'across multiple instances. Use a factory function ' +
		      'to return the default value instead.'
		    )
		  }
		  // call factory function for non-Function types
		  return typeof def === 'function' && options.type !== Function
		    ? def()
		    : def
		}
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Cache = __webpack_require__(14)
		var config = __webpack_require__(5)
		var dirParser = __webpack_require__(15)
		var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
		var cache, tagRE, htmlRE, firstChar, lastChar
	
		/**
		 * Escape a string so it can be used in a RegExp
		 * constructor.
		 *
		 * @param {String} str
		 */
	
		function escapeRegex (str) {
		  return str.replace(regexEscapeRE, '\\$&')
		}
	
		/**
		 * Compile the interpolation tag regex.
		 *
		 * @return {RegExp}
		 */
	
		function compileRegex () {
		  config._delimitersChanged = false
		  var open = config.delimiters[0]
		  var close = config.delimiters[1]
		  firstChar = open.charAt(0)
		  lastChar = close.charAt(close.length - 1)
		  var firstCharRE = escapeRegex(firstChar)
		  var lastCharRE = escapeRegex(lastChar)
		  var openRE = escapeRegex(open)
		  var closeRE = escapeRegex(close)
		  tagRE = new RegExp(
		    firstCharRE + '?' + openRE +
		    '(.+?)' +
		    closeRE + lastCharRE + '?',
		    'g'
		  )
		  htmlRE = new RegExp(
		    '^' + firstCharRE + openRE +
		    '.*' +
		    closeRE + lastCharRE + '$'
		  )
		  // reset cache
		  cache = new Cache(1000)
		}
	
		/**
		 * Parse a template text string into an array of tokens.
		 *
		 * @param {String} text
		 * @return {Array<Object> | null}
		 *               - {String} type
		 *               - {String} value
		 *               - {Boolean} [html]
		 *               - {Boolean} [oneTime]
		 */
	
		exports.parse = function (text) {
		  if (config._delimitersChanged) {
		    compileRegex()
		  }
		  var hit = cache.get(text)
		  if (hit) {
		    return hit
		  }
		  text = text.replace(/\n/g, '')
		  if (!tagRE.test(text)) {
		    return null
		  }
		  var tokens = []
		  var lastIndex = tagRE.lastIndex = 0
		  var match, index, value, first, oneTime, twoWay
		  /* eslint-disable no-cond-assign */
		  while (match = tagRE.exec(text)) {
		  /* eslint-enable no-cond-assign */
		    index = match.index
		    // push text token
		    if (index > lastIndex) {
		      tokens.push({
		        value: text.slice(lastIndex, index)
		      })
		    }
		    // tag token
		    first = match[1].charCodeAt(0)
		    oneTime = first === 42 // *
		    twoWay = first === 64  // @
		    value = oneTime || twoWay
		      ? match[1].slice(1)
		      : match[1]
		    tokens.push({
		      tag: true,
		      value: value.trim(),
		      html: htmlRE.test(match[0]),
		      oneTime: oneTime,
		      twoWay: twoWay
		    })
		    lastIndex = index + match[0].length
		  }
		  if (lastIndex < text.length) {
		    tokens.push({
		      value: text.slice(lastIndex)
		    })
		  }
		  cache.put(text, tokens)
		  return tokens
		}
	
		/**
		 * Format a list of tokens into an expression.
		 * e.g. tokens parsed from 'a {{b}} c' can be serialized
		 * into one single expression as '"a " + b + " c"'.
		 *
		 * @param {Array} tokens
		 * @param {Vue} [vm]
		 * @return {String}
		 */
	
		exports.tokensToExp = function (tokens, vm) {
		  if (tokens.length > 1) {
		    return tokens.map(function (token) {
		      return formatToken(token, vm)
		    }).join('+')
		  } else {
		    return formatToken(tokens[0], vm, true)
		  }
		}
	
		/**
		 * Format a single token.
		 *
		 * @param {Object} token
		 * @param {Vue} [vm]
		 * @param {Boolean} single
		 * @return {String}
		 */
	
		function formatToken (token, vm, single) {
		  return token.tag
		    ? vm && token.oneTime
		      ? '"' + vm.$eval(token.value) + '"'
		      : inlineFilters(token.value, single)
		    : '"' + token.value + '"'
		}
	
		/**
		 * For an attribute with multiple interpolation tags,
		 * e.g. attr="some-{{thing | filter}}", in order to combine
		 * the whole thing into a single watchable expression, we
		 * have to inline those filters. This function does exactly
		 * that. This is a bit hacky but it avoids heavy changes
		 * to directive parser and watcher mechanism.
		 *
		 * @param {String} exp
		 * @param {Boolean} single
		 * @return {String}
		 */
	
		var filterRE = /[^|]\|[^|]/
		function inlineFilters (exp, single) {
		  if (!filterRE.test(exp)) {
		    return single
		      ? exp
		      : '(' + exp + ')'
		  } else {
		    var dir = dirParser.parse(exp)[0]
		    if (!dir.filters) {
		      return '(' + exp + ')'
		    } else {
		      return 'this._applyFilters(' +
		        dir.expression + // value
		        ',null,' +       // oldValue (null for read)
		        JSON.stringify(dir.filters) + // filter descriptors
		        ',false)'        // write?
		    }
		  }
		}
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		/**
		 * A doubly linked list-based Least Recently Used (LRU)
		 * cache. Will keep most recently used items while
		 * discarding least recently used items when its limit is
		 * reached. This is a bare-bone version of
		 * Rasmus Andersson's js-lru:
		 *
		 *   https://github.com/rsms/js-lru
		 *
		 * @param {Number} limit
		 * @constructor
		 */
	
		function Cache (limit) {
		  this.size = 0
		  this.limit = limit
		  this.head = this.tail = undefined
		  this._keymap = Object.create(null)
		}
	
		var p = Cache.prototype
	
		/**
		 * Put <value> into the cache associated with <key>.
		 * Returns the entry which was removed to make room for
		 * the new entry. Otherwise undefined is returned.
		 * (i.e. if there was enough room already).
		 *
		 * @param {String} key
		 * @param {*} value
		 * @return {Entry|undefined}
		 */
	
		p.put = function (key, value) {
		  var entry = {
		    key: key,
		    value: value
		  }
		  this._keymap[key] = entry
		  if (this.tail) {
		    this.tail.newer = entry
		    entry.older = this.tail
		  } else {
		    this.head = entry
		  }
		  this.tail = entry
		  if (this.size === this.limit) {
		    return this.shift()
		  } else {
		    this.size++
		  }
		}
	
		/**
		 * Purge the least recently used (oldest) entry from the
		 * cache. Returns the removed entry or undefined if the
		 * cache was empty.
		 */
	
		p.shift = function () {
		  var entry = this.head
		  if (entry) {
		    this.head = this.head.newer
		    this.head.older = undefined
		    entry.newer = entry.older = undefined
		    this._keymap[entry.key] = undefined
		  }
		  return entry
		}
	
		/**
		 * Get and register recent use of <key>. Returns the value
		 * associated with <key> or undefined if not in cache.
		 *
		 * @param {String} key
		 * @param {Boolean} returnEntry
		 * @return {Entry|*}
		 */
	
		p.get = function (key, returnEntry) {
		  var entry = this._keymap[key]
		  if (entry === undefined) return
		  if (entry === this.tail) {
		    return returnEntry
		      ? entry
		      : entry.value
		  }
		  // HEAD--------------TAIL
		  //   <.older   .newer>
		  //  <--- add direction --
		  //   A  B  C  <D>  E
		  if (entry.newer) {
		    if (entry === this.head) {
		      this.head = entry.newer
		    }
		    entry.newer.older = entry.older // C <-- E.
		  }
		  if (entry.older) {
		    entry.older.newer = entry.newer // C. --> E
		  }
		  entry.newer = undefined // D --x
		  entry.older = this.tail // D. --> E
		  if (this.tail) {
		    this.tail.newer = entry // E. <-- D
		  }
		  this.tail = entry
		  return returnEntry
		    ? entry
		    : entry.value
		}
	
		module.exports = Cache
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)
		var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
		var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
		var reservedArgRE = /^in$|^-?\d+/
	
		/**
		 * Parser state
		 */
	
		var str
		var c, i, l
		var inSingle
		var inDouble
		var curly
		var square
		var paren
		var begin
		var argIndex
		var dirs
		var dir
		var lastFilterIndex
		var arg
	
		/**
		 * Push a directive object into the result Array
		 */
	
		function pushDir () {
		  dir.raw = str.slice(begin, i).trim()
		  if (dir.expression === undefined) {
		    dir.expression = str.slice(argIndex, i).trim()
		  } else if (lastFilterIndex !== begin) {
		    pushFilter()
		  }
		  if (i === 0 || dir.expression) {
		    dirs.push(dir)
		  }
		}
	
		/**
		 * Push a filter to the current directive object
		 */
	
		function pushFilter () {
		  var exp = str.slice(lastFilterIndex, i).trim()
		  var filter
		  if (exp) {
		    filter = {}
		    var tokens = exp.match(filterTokenRE)
		    filter.name = tokens[0]
		    if (tokens.length > 1) {
		      filter.args = tokens.slice(1).map(processFilterArg)
		    }
		  }
		  if (filter) {
		    (dir.filters = dir.filters || []).push(filter)
		  }
		  lastFilterIndex = i + 1
		}
	
		/**
		 * Check if an argument is dynamic and strip quotes.
		 *
		 * @param {String} arg
		 * @return {Object}
		 */
	
		function processFilterArg (arg) {
		  var stripped = reservedArgRE.test(arg)
		    ? arg
		    : _.stripQuotes(arg)
		  var dynamic = stripped === false
		  return {
		    value: dynamic ? arg : stripped,
		    dynamic: dynamic
		  }
		}
	
		/**
		 * Parse a directive string into an Array of AST-like
		 * objects representing directives.
		 *
		 * Example:
		 *
		 * "click: a = a + 1 | uppercase" will yield:
		 * {
		 *   arg: 'click',
		 *   expression: 'a = a + 1',
		 *   filters: [
		 *     { name: 'uppercase', args: null }
		 *   ]
		 * }
		 *
		 * @param {String} str
		 * @return {Array<Object>}
		 */
	
		exports.parse = function (s) {
	
		  var hit = cache.get(s)
		  if (hit) {
		    return hit
		  }
	
		  // reset parser state
		  str = s
		  inSingle = inDouble = false
		  curly = square = paren = begin = argIndex = 0
		  lastFilterIndex = 0
		  dirs = []
		  dir = {}
		  arg = null
	
		  for (i = 0, l = str.length; i < l; i++) {
		    c = str.charCodeAt(i)
		    if (inSingle) {
		      // check single quote
		      if (c === 0x27) inSingle = !inSingle
		    } else if (inDouble) {
		      // check double quote
		      if (c === 0x22) inDouble = !inDouble
		    } else if (
		      c === 0x2C && // comma
		      !paren && !curly && !square
		    ) {
		      // reached the end of a directive
		      pushDir()
		      // reset & skip the comma
		      dir = {}
		      begin = argIndex = lastFilterIndex = i + 1
		    } else if (
		      c === 0x3A && // colon
		      !dir.expression &&
		      !dir.arg
		    ) {
		      // argument
		      arg = str.slice(begin, i).trim()
		      // test for valid argument here
		      // since we may have caught stuff like first half of
		      // an object literal or a ternary expression.
		      if (argRE.test(arg)) {
		        argIndex = i + 1
		        dir.arg = _.stripQuotes(arg) || arg
		      }
		    } else if (
		      c === 0x7C && // pipe
		      str.charCodeAt(i + 1) !== 0x7C &&
		      str.charCodeAt(i - 1) !== 0x7C
		    ) {
		      if (dir.expression === undefined) {
		        // first filter, end of expression
		        lastFilterIndex = i + 1
		        dir.expression = str.slice(argIndex, i).trim()
		      } else {
		        // already has filter
		        pushFilter()
		      }
		    } else {
		      switch (c) {
		        case 0x22: inDouble = true; break // "
		        case 0x27: inSingle = true; break // '
		        case 0x28: paren++; break         // (
		        case 0x29: paren--; break         // )
		        case 0x5B: square++; break        // [
		        case 0x5D: square--; break        // ]
		        case 0x7B: curly++; break         // {
		        case 0x7D: curly--; break         // }
		      }
		    }
		  }
	
		  if (i === 0 || begin !== i) {
		    pushDir()
		  }
	
		  cache.put(s, dirs)
		  return dirs
		}
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		// NOTE: the prop internal directive is compiled and linked
		// during _initScope(), before the created hook is called.
		// The purpose is to make the initial prop values available
		// inside `created` hooks and `data` functions.
	
		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var bindingModes = __webpack_require__(5)._propBindingModes
	
		module.exports = {
	
		  bind: function () {
	
		    var child = this.vm
		    var parent = child._context
		    // passed in from compiler directly
		    var prop = this._descriptor
		    var childKey = prop.path
		    var parentKey = prop.parentPath
	
		    this.parentWatcher = new Watcher(
		      parent,
		      parentKey,
		      function (val) {
		        if (_.assertProp(prop, val)) {
		          child[childKey] = val
		        }
		      }, { sync: true }
		    )
	
		    // set the child initial value.
		    var value = this.parentWatcher.value
		    if (childKey === '$data') {
		      child._data = value
		    } else {
		      _.initProp(child, prop, value)
		    }
	
		    // setup two-way binding
		    if (prop.mode === bindingModes.TWO_WAY) {
		      // important: defer the child watcher creation until
		      // the created hook (after data observation)
		      var self = this
		      child.$once('hook:created', function () {
		        self.childWatcher = new Watcher(
		          child,
		          childKey,
		          function (val) {
		            parent.$set(parentKey, val)
		          }, { sync: true }
		        )
		      })
		    }
		  },
	
		  unbind: function () {
		    this.parentWatcher.teardown()
		    if (this.childWatcher) {
		      this.childWatcher.teardown()
		    }
		  }
		}
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Dep = __webpack_require__(18)
		var expParser = __webpack_require__(19)
		var batcher = __webpack_require__(21)
		var uid = 0
	
		/**
		 * A watcher parses an expression, collects dependencies,
		 * and fires callback when the expression value changes.
		 * This is used for both the $watch() api and directives.
		 *
		 * @param {Vue} vm
		 * @param {String} expression
		 * @param {Function} cb
		 * @param {Object} options
		 *                 - {Array} filters
		 *                 - {Boolean} twoWay
		 *                 - {Boolean} deep
		 *                 - {Boolean} user
		 *                 - {Boolean} sync
		 *                 - {Boolean} lazy
		 *                 - {Function} [preProcess]
		 * @constructor
		 */
	
		function Watcher (vm, expOrFn, cb, options) {
		  // mix in options
		  if (options) {
		    _.extend(this, options)
		  }
		  var isFn = typeof expOrFn === 'function'
		  this.vm = vm
		  vm._watchers.push(this)
		  this.expression = isFn ? expOrFn.toString() : expOrFn
		  this.cb = cb
		  this.id = ++uid // uid for batching
		  this.active = true
		  this.dirty = this.lazy // for lazy watchers
		  this.deps = Object.create(null)
		  this.newDeps = null
		  this.prevError = null // for async error stacks
		  // parse expression for getter/setter
		  if (isFn) {
		    this.getter = expOrFn
		    this.setter = undefined
		  } else {
		    var res = expParser.parse(expOrFn, this.twoWay)
		    this.getter = res.get
		    this.setter = res.set
		  }
		  this.value = this.lazy
		    ? undefined
		    : this.get()
		  // state for avoiding false triggers for deep and Array
		  // watchers during vm._digest()
		  this.queued = this.shallow = false
		}
	
		/**
		 * Add a dependency to this directive.
		 *
		 * @param {Dep} dep
		 */
	
		Watcher.prototype.addDep = function (dep) {
		  var id = dep.id
		  if (!this.newDeps[id]) {
		    this.newDeps[id] = dep
		    if (!this.deps[id]) {
		      this.deps[id] = dep
		      dep.addSub(this)
		    }
		  }
		}
	
		/**
		 * Evaluate the getter, and re-collect dependencies.
		 */
	
		Watcher.prototype.get = function () {
		  this.beforeGet()
		  var vm = this.vm
		  var value
		  try {
		    value = this.getter.call(vm, vm)
		  } catch (e) {
		    if (
		      ("development") !== 'production' &&
		      config.warnExpressionErrors
		    ) {
		      _.warn(
		        'Error when evaluating expression "' +
		        this.expression + '". ' +
		        (config.debug
		          ? ''
		          : 'Turn on debug mode to see stack trace.'
		        ), e
		      )
		    }
		  }
		  // "touch" every property so they are all tracked as
		  // dependencies for deep watching
		  if (this.deep) {
		    traverse(value)
		  }
		  if (this.preProcess) {
		    value = this.preProcess(value)
		  }
		  if (this.filters) {
		    value = vm._applyFilters(value, null, this.filters, false)
		  }
		  this.afterGet()
		  return value
		}
	
		/**
		 * Set the corresponding value with the setter.
		 *
		 * @param {*} value
		 */
	
		Watcher.prototype.set = function (value) {
		  var vm = this.vm
		  if (this.filters) {
		    value = vm._applyFilters(
		      value, this.value, this.filters, true)
		  }
		  try {
		    this.setter.call(vm, vm, value)
		  } catch (e) {
		    if (
		      ("development") !== 'production' &&
		      config.warnExpressionErrors
		    ) {
		      _.warn(
		        'Error when evaluating setter "' +
		        this.expression + '"', e
		      )
		    }
		  }
		}
	
		/**
		 * Prepare for dependency collection.
		 */
	
		Watcher.prototype.beforeGet = function () {
		  Dep.target = this
		  this.newDeps = Object.create(null)
		}
	
		/**
		 * Clean up for dependency collection.
		 */
	
		Watcher.prototype.afterGet = function () {
		  Dep.target = null
		  var ids = Object.keys(this.deps)
		  var i = ids.length
		  while (i--) {
		    var id = ids[i]
		    if (!this.newDeps[id]) {
		      this.deps[id].removeSub(this)
		    }
		  }
		  this.deps = this.newDeps
		}
	
		/**
		 * Subscriber interface.
		 * Will be called when a dependency changes.
		 *
		 * @param {Boolean} shallow
		 */
	
		Watcher.prototype.update = function (shallow) {
		  if (this.lazy) {
		    this.dirty = true
		  } else if (this.sync || !config.async) {
		    this.run()
		  } else {
		    // if queued, only overwrite shallow with non-shallow,
		    // but not the other way around.
		    this.shallow = this.queued
		      ? shallow
		        ? this.shallow
		        : false
		      : !!shallow
		    this.queued = true
		    // record before-push error stack in debug mode
		    /* istanbul ignore if */
		    if (("development") !== 'production' && config.debug) {
		      this.prevError = new Error('[vue] async stack trace')
		    }
		    batcher.push(this)
		  }
		}
	
		/**
		 * Batcher job interface.
		 * Will be called by the batcher.
		 */
	
		Watcher.prototype.run = function () {
		  if (this.active) {
		    var value = this.get()
		    if (
		      value !== this.value ||
		      // Deep watchers and Array watchers should fire even
		      // when the value is the same, because the value may
		      // have mutated; but only do so if this is a
		      // non-shallow update (caused by a vm digest).
		      ((_.isArray(value) || this.deep) && !this.shallow)
		    ) {
		      // set new value
		      var oldValue = this.value
		      this.value = value
		      // in debug + async mode, when a watcher callbacks
		      // throws, we also throw the saved before-push error
		      // so the full cross-tick stack trace is available.
		      var prevError = this.prevError
		      /* istanbul ignore if */
		      if (("development") !== 'production' &&
		          config.debug && prevError) {
		        this.prevError = null
		        try {
		          this.cb.call(this.vm, value, oldValue)
		        } catch (e) {
		          _.nextTick(function () {
		            throw prevError
		          }, 0)
		          throw e
		        }
		      } else {
		        this.cb.call(this.vm, value, oldValue)
		      }
		    }
		    this.queued = this.shallow = false
		  }
		}
	
		/**
		 * Evaluate the value of the watcher.
		 * This only gets called for lazy watchers.
		 */
	
		Watcher.prototype.evaluate = function () {
		  // avoid overwriting another watcher that is being
		  // collected.
		  var current = Dep.target
		  this.value = this.get()
		  this.dirty = false
		  Dep.target = current
		}
	
		/**
		 * Depend on all deps collected by this watcher.
		 */
	
		Watcher.prototype.depend = function () {
		  var depIds = Object.keys(this.deps)
		  var i = depIds.length
		  while (i--) {
		    this.deps[depIds[i]].depend()
		  }
		}
	
		/**
		 * Remove self from all dependencies' subcriber list.
		 */
	
		Watcher.prototype.teardown = function () {
		  if (this.active) {
		    // remove self from vm's watcher list
		    // we can skip this if the vm if being destroyed
		    // which can improve teardown performance.
		    if (!this.vm._isBeingDestroyed) {
		      this.vm._watchers.$remove(this)
		    }
		    var depIds = Object.keys(this.deps)
		    var i = depIds.length
		    while (i--) {
		      this.deps[depIds[i]].removeSub(this)
		    }
		    this.active = false
		    this.vm = this.cb = this.value = null
		  }
		}
	
		/**
		 * Recrusively traverse an object to evoke all converted
		 * getters, so that every nested property inside the object
		 * is collected as a "deep" dependency.
		 *
		 * @param {Object} obj
		 */
	
		function traverse (obj) {
		  var key, val, i
		  for (key in obj) {
		    val = obj[key]
		    if (_.isArray(val)) {
		      i = val.length
		      while (i--) traverse(val[i])
		    } else if (_.isObject(val)) {
		      traverse(val)
		    }
		  }
		}
	
		module.exports = Watcher
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var uid = 0
	
		/**
		 * A dep is an observable that can have multiple
		 * directives subscribing to it.
		 *
		 * @constructor
		 */
	
		function Dep () {
		  this.id = uid++
		  this.subs = []
		}
	
		// the current target watcher being evaluated.
		// this is globally unique because there could be only one
		// watcher being evaluated at any time.
		Dep.target = null
	
		/**
		 * Add a directive subscriber.
		 *
		 * @param {Directive} sub
		 */
	
		Dep.prototype.addSub = function (sub) {
		  this.subs.push(sub)
		}
	
		/**
		 * Remove a directive subscriber.
		 *
		 * @param {Directive} sub
		 */
	
		Dep.prototype.removeSub = function (sub) {
		  this.subs.$remove(sub)
		}
	
		/**
		 * Add self as a dependency to the target watcher.
		 */
	
		Dep.prototype.depend = function () {
		  Dep.target.addDep(this)
		}
	
		/**
		 * Notify all subscribers of a new value.
		 */
	
		Dep.prototype.notify = function () {
		  // stablize the subscriber list first
		  var subs = _.toArray(this.subs)
		  for (var i = 0, l = subs.length; i < l; i++) {
		    subs[i].update()
		  }
		}
	
		module.exports = Dep
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Path = __webpack_require__(20)
		var Cache = __webpack_require__(14)
		var expressionCache = new Cache(1000)
	
		var allowedKeywords =
		  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
		  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
		  'encodeURIComponent,parseInt,parseFloat'
		var allowedKeywordsRE =
		  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
		// keywords that don't make sense inside expressions
		var improperKeywords =
		  'break,case,class,catch,const,continue,debugger,default,' +
		  'delete,do,else,export,extends,finally,for,function,if,' +
		  'import,in,instanceof,let,return,super,switch,throw,try,' +
		  'var,while,with,yield,enum,await,implements,package,' +
		  'proctected,static,interface,private,public'
		var improperKeywordsRE =
		  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
		var wsRE = /\s/g
		var newlineRE = /\n/g
		var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
		var restoreRE = /"(\d+)"/g
		var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
		var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
		var booleanLiteralRE = /^(true|false)$/
	
		/**
		 * Save / Rewrite / Restore
		 *
		 * When rewriting paths found in an expression, it is
		 * possible for the same letter sequences to be found in
		 * strings and Object literal property keys. Therefore we
		 * remove and store these parts in a temporary array, and
		 * restore them after the path rewrite.
		 */
	
		var saved = []
	
		/**
		 * Save replacer
		 *
		 * The save regex can match two possible cases:
		 * 1. An opening object literal
		 * 2. A string
		 * If matched as a plain string, we need to escape its
		 * newlines, since the string needs to be preserved when
		 * generating the function body.
		 *
		 * @param {String} str
		 * @param {String} isString - str if matched as a string
		 * @return {String} - placeholder with index
		 */
	
		function save (str, isString) {
		  var i = saved.length
		  saved[i] = isString
		    ? str.replace(newlineRE, '\\n')
		    : str
		  return '"' + i + '"'
		}
	
		/**
		 * Path rewrite replacer
		 *
		 * @param {String} raw
		 * @return {String}
		 */
	
		function rewrite (raw) {
		  var c = raw.charAt(0)
		  var path = raw.slice(1)
		  if (allowedKeywordsRE.test(path)) {
		    return raw
		  } else {
		    path = path.indexOf('"') > -1
		      ? path.replace(restoreRE, restore)
		      : path
		    return c + 'scope.' + path
		  }
		}
	
		/**
		 * Restore replacer
		 *
		 * @param {String} str
		 * @param {String} i - matched save index
		 * @return {String}
		 */
	
		function restore (str, i) {
		  return saved[i]
		}
	
		/**
		 * Rewrite an expression, prefixing all path accessors with
		 * `scope.` and generate getter/setter functions.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */
	
		function compileExpFns (exp, needSet) {
		  if (improperKeywordsRE.test(exp)) {
		    ("development") !== 'production' && _.warn(
		      'Avoid using reserved keywords in expression: ' + exp
		    )
		  }
		  // reset state
		  saved.length = 0
		  // save strings and object literal keys
		  var body = exp
		    .replace(saveRE, save)
		    .replace(wsRE, '')
		  // rewrite all paths
		  // pad 1 space here becaue the regex matches 1 extra char
		  body = (' ' + body)
		    .replace(pathReplaceRE, rewrite)
		    .replace(restoreRE, restore)
		  var getter = makeGetter(body)
		  if (getter) {
		    return {
		      get: getter,
		      body: body,
		      set: needSet
		        ? makeSetter(body)
		        : null
		    }
		  }
		}
	
		/**
		 * Compile getter setters for a simple path.
		 *
		 * @param {String} exp
		 * @return {Function}
		 */
	
		function compilePathFns (exp) {
		  var getter, path
		  if (exp.indexOf('[') < 0) {
		    // really simple path
		    path = exp.split('.')
		    path.raw = exp
		    getter = Path.compileGetter(path)
		  } else {
		    // do the real parsing
		    path = Path.parse(exp)
		    getter = path.get
		  }
		  return {
		    get: getter,
		    // always generate setter for simple paths
		    set: function (obj, val) {
		      Path.set(obj, path, val)
		    }
		  }
		}
	
		/**
		 * Build a getter function. Requires eval.
		 *
		 * We isolate the try/catch so it doesn't affect the
		 * optimization of the parse function when it is not called.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */
	
		function makeGetter (body) {
		  try {
		    return new Function('scope', 'return ' + body + ';')
		  } catch (e) {
		    ("development") !== 'production' && _.warn(
		      'Invalid expression. ' +
		      'Generated function body: ' + body
		    )
		  }
		}
	
		/**
		 * Build a setter function.
		 *
		 * This is only needed in rare situations like "a[b]" where
		 * a settable path requires dynamic evaluation.
		 *
		 * This setter function may throw error when called if the
		 * expression body is not a valid left-hand expression in
		 * assignment.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */
	
		function makeSetter (body) {
		  try {
		    return new Function('scope', 'value', body + '=value;')
		  } catch (e) {
		    ("development") !== 'production' && _.warn(
		      'Invalid setter function body: ' + body
		    )
		  }
		}
	
		/**
		 * Check for setter existence on a cache hit.
		 *
		 * @param {Function} hit
		 */
	
		function checkSetter (hit) {
		  if (!hit.set) {
		    hit.set = makeSetter(hit.body)
		  }
		}
	
		/**
		 * Parse an expression into re-written getter/setters.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */
	
		exports.parse = function (exp, needSet) {
		  exp = exp.trim()
		  // try cache
		  var hit = expressionCache.get(exp)
		  if (hit) {
		    if (needSet) {
		      checkSetter(hit)
		    }
		    return hit
		  }
		  // we do a simple path check to optimize for them.
		  // the check fails valid paths with unusal whitespaces,
		  // but that's too rare and we don't care.
		  // also skip boolean literals and paths that start with
		  // global "Math"
		  var res = exports.isSimplePath(exp)
		    ? compilePathFns(exp)
		    : compileExpFns(exp, needSet)
		  expressionCache.put(exp, res)
		  return res
		}
	
		/**
		 * Check if an expression is a simple path.
		 *
		 * @param {String} exp
		 * @return {Boolean}
		 */
	
		exports.isSimplePath = function (exp) {
		  return pathTestRE.test(exp) &&
		    // don't treat true/false as paths
		    !booleanLiteralRE.test(exp) &&
		    // Math constants e.g. Math.PI, Math.E etc.
		    exp.slice(0, 5) !== 'Math.'
		}
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var pathCache = new Cache(1000)
		var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
		// actions
		var APPEND = 0
		var PUSH = 1
	
		// states
		var BEFORE_PATH = 0
		var IN_PATH = 1
		var BEFORE_IDENT = 2
		var IN_IDENT = 3
		var BEFORE_ELEMENT = 4
		var AFTER_ZERO = 5
		var IN_INDEX = 6
		var IN_SINGLE_QUOTE = 7
		var IN_DOUBLE_QUOTE = 8
		var IN_SUB_PATH = 9
		var AFTER_ELEMENT = 10
		var AFTER_PATH = 11
		var ERROR = 12
	
		var pathStateMachine = []
	
		pathStateMachine[BEFORE_PATH] = {
		  'ws': [BEFORE_PATH],
		  'ident': [IN_IDENT, APPEND],
		  '[': [BEFORE_ELEMENT],
		  'eof': [AFTER_PATH]
		}
	
		pathStateMachine[IN_PATH] = {
		  'ws': [IN_PATH],
		  '.': [BEFORE_IDENT],
		  '[': [BEFORE_ELEMENT],
		  'eof': [AFTER_PATH]
		}
	
		pathStateMachine[BEFORE_IDENT] = {
		  'ws': [BEFORE_IDENT],
		  'ident': [IN_IDENT, APPEND]
		}
	
		pathStateMachine[IN_IDENT] = {
		  'ident': [IN_IDENT, APPEND],
		  '0': [IN_IDENT, APPEND],
		  'number': [IN_IDENT, APPEND],
		  'ws': [IN_PATH, PUSH],
		  '.': [BEFORE_IDENT, PUSH],
		  '[': [BEFORE_ELEMENT, PUSH],
		  'eof': [AFTER_PATH, PUSH]
		}
	
		pathStateMachine[BEFORE_ELEMENT] = {
		  'ws': [BEFORE_ELEMENT],
		  '0': [AFTER_ZERO, APPEND],
		  'number': [IN_INDEX, APPEND],
		  "'": [IN_SINGLE_QUOTE, APPEND, ''],
		  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
		  'ident': [IN_SUB_PATH, APPEND, '*']
		}
	
		pathStateMachine[AFTER_ZERO] = {
		  'ws': [AFTER_ELEMENT, PUSH],
		  ']': [IN_PATH, PUSH]
		}
	
		pathStateMachine[IN_INDEX] = {
		  '0': [IN_INDEX, APPEND],
		  'number': [IN_INDEX, APPEND],
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}
	
		pathStateMachine[IN_SINGLE_QUOTE] = {
		  "'": [AFTER_ELEMENT],
		  'eof': ERROR,
		  'else': [IN_SINGLE_QUOTE, APPEND]
		}
	
		pathStateMachine[IN_DOUBLE_QUOTE] = {
		  '"': [AFTER_ELEMENT],
		  'eof': ERROR,
		  'else': [IN_DOUBLE_QUOTE, APPEND]
		}
	
		pathStateMachine[IN_SUB_PATH] = {
		  'ident': [IN_SUB_PATH, APPEND],
		  '0': [IN_SUB_PATH, APPEND],
		  'number': [IN_SUB_PATH, APPEND],
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}
	
		pathStateMachine[AFTER_ELEMENT] = {
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}
	
		/**
		 * Determine the type of a character in a keypath.
		 *
		 * @param {Char} ch
		 * @return {String} type
		 */
	
		function getPathCharType (ch) {
		  if (ch === undefined) {
		    return 'eof'
		  }
	
		  var code = ch.charCodeAt(0)
	
		  switch (code) {
		    case 0x5B: // [
		    case 0x5D: // ]
		    case 0x2E: // .
		    case 0x22: // "
		    case 0x27: // '
		    case 0x30: // 0
		      return ch
	
		    case 0x5F: // _
		    case 0x24: // $
		      return 'ident'
	
		    case 0x20: // Space
		    case 0x09: // Tab
		    case 0x0A: // Newline
		    case 0x0D: // Return
		    case 0xA0:  // No-break space
		    case 0xFEFF:  // Byte Order Mark
		    case 0x2028:  // Line Separator
		    case 0x2029:  // Paragraph Separator
		      return 'ws'
		  }
	
		  // a-z, A-Z
		  if (
		    (code >= 0x61 && code <= 0x7A) ||
		    (code >= 0x41 && code <= 0x5A)
		  ) {
		    return 'ident'
		  }
	
		  // 1-9
		  if (code >= 0x31 && code <= 0x39) {
		    return 'number'
		  }
	
		  return 'else'
		}
	
		/**
		 * Parse a string path into an array of segments
		 * Todo implement cache
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */
	
		function parsePath (path) {
		  var keys = []
		  var index = -1
		  var mode = BEFORE_PATH
		  var c, newChar, key, type, transition, action, typeMap
	
		  var actions = []
		  actions[PUSH] = function () {
		    if (key === undefined) {
		      return
		    }
		    keys.push(key)
		    key = undefined
		  }
		  actions[APPEND] = function () {
		    if (key === undefined) {
		      key = newChar
		    } else {
		      key += newChar
		    }
		  }
	
		  function maybeUnescapeQuote () {
		    var nextChar = path[index + 1]
		    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
		        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
		      index++
		      newChar = nextChar
		      actions[APPEND]()
		      return true
		    }
		  }
	
		  while (mode != null) {
		    index++
		    c = path[index]
	
		    if (c === '\\' && maybeUnescapeQuote()) {
		      continue
		    }
	
		    type = getPathCharType(c)
		    typeMap = pathStateMachine[mode]
		    transition = typeMap[type] || typeMap['else'] || ERROR
	
		    if (transition === ERROR) {
		      return // parse error
		    }
	
		    mode = transition[0]
		    action = actions[transition[1]]
		    if (action) {
		      newChar = transition[2]
		      newChar = newChar === undefined
		        ? c
		        : newChar === '*'
		          ? newChar + c
		          : newChar
		      action()
		    }
	
		    if (mode === AFTER_PATH) {
		      keys.raw = path
		      return keys
		    }
		  }
		}
	
		/**
		 * Format a accessor segment based on its type.
		 *
		 * @param {String} key
		 * @return {Boolean}
		 */
	
		function formatAccessor (key) {
		  if (identRE.test(key)) { // identifier
		    return '.' + key
		  } else if (+key === key >>> 0) { // bracket index
		    return '[' + key + ']'
		  } else if (key.charAt(0) === '*') {
		    return '[o' + formatAccessor(key.slice(1)) + ']'
		  } else { // bracket string
		    return '["' + key.replace(/"/g, '\\"') + '"]'
		  }
		}
	
		/**
		 * Compiles a getter function with a fixed path.
		 * The fixed path getter supresses errors.
		 *
		 * @param {Array} path
		 * @return {Function}
		 */
	
		exports.compileGetter = function (path) {
		  var body = 'return o' + path.map(formatAccessor).join('')
		  return new Function('o', body)
		}
	
		/**
		 * External parse that check for a cache hit first
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */
	
		exports.parse = function (path) {
		  var hit = pathCache.get(path)
		  if (!hit) {
		    hit = parsePath(path)
		    if (hit) {
		      hit.get = exports.compileGetter(hit)
		      pathCache.put(path, hit)
		    }
		  }
		  return hit
		}
	
		/**
		 * Get from an object from a path string
		 *
		 * @param {Object} obj
		 * @param {String} path
		 */
	
		exports.get = function (obj, path) {
		  path = exports.parse(path)
		  if (path) {
		    return path.get(obj)
		  }
		}
	
		/**
		 * Set on an object from a path
		 *
		 * @param {Object} obj
		 * @param {String | Array} path
		 * @param {*} val
		 */
	
		exports.set = function (obj, path, val) {
		  var original = obj
		  if (typeof path === 'string') {
		    path = exports.parse(path)
		  }
		  if (!path || !_.isObject(obj)) {
		    return false
		  }
		  var last, key
		  for (var i = 0, l = path.length; i < l; i++) {
		    last = obj
		    key = path[i]
		    if (key.charAt(0) === '*') {
		      key = original[key.slice(1)]
		    }
		    if (i < l - 1) {
		      obj = obj[key]
		      if (!_.isObject(obj)) {
		        warnNonExistent(path)
		        obj = {}
		        last.$add(key, obj)
		      }
		    } else {
		      if (_.isArray(obj)) {
		        obj.$set(key, val)
		      } else if (key in obj) {
		        obj[key] = val
		      } else {
		        warnNonExistent(path)
		        obj.$add(key, val)
		      }
		    }
		  }
		  return true
		}
	
		function warnNonExistent (path) {
		  ("development") !== 'production' && _.warn(
		    'You are setting a non-existent path "' + path.raw + '" ' +
		    'on a vm instance. Consider pre-initializing the property ' +
		    'with the "data" option for more reliable reactivity ' +
		    'and better performance.'
		  )
		}
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
	
		// we have two separate queues: one for directive updates
		// and one for user watcher registered via $watch().
		// we want to guarantee directive updates to be called
		// before user watchers so that when user watchers are
		// triggered, the DOM would have already been in updated
		// state.
		var queue = []
		var userQueue = []
		var has = {}
		var circular = {}
		var waiting = false
		var internalQueueDepleted = false
	
		/**
		 * Reset the batcher's state.
		 */
	
		function resetBatcherState () {
		  queue = []
		  userQueue = []
		  has = {}
		  circular = {}
		  waiting = internalQueueDepleted = false
		}
	
		/**
		 * Flush both queues and run the watchers.
		 */
	
		function flushBatcherQueue () {
		  runBatcherQueue(queue)
		  internalQueueDepleted = true
		  runBatcherQueue(userQueue)
		  resetBatcherState()
		}
	
		/**
		 * Run the watchers in a single queue.
		 *
		 * @param {Array} queue
		 */
	
		function runBatcherQueue (queue) {
		  // do not cache length because more watchers might be pushed
		  // as we run existing watchers
		  for (var i = 0; i < queue.length; i++) {
		    var watcher = queue[i]
		    var id = watcher.id
		    has[id] = null
		    watcher.run()
		    // in dev build, check and stop circular updates.
		    if (("development") !== 'production' && has[id] != null) {
		      circular[id] = (circular[id] || 0) + 1
		      if (circular[id] > config._maxUpdateCount) {
		        queue.splice(has[id], 1)
		        _.warn(
		          'You may have an infinite update loop for watcher ' +
		          'with expression: ' + watcher.expression
		        )
		      }
		    }
		  }
		}
	
		/**
		 * Push a watcher into the watcher queue.
		 * Jobs with duplicate IDs will be skipped unless it's
		 * pushed when the queue is being flushed.
		 *
		 * @param {Watcher} watcher
		 *   properties:
		 *   - {Number} id
		 *   - {Function} run
		 */
	
		exports.push = function (watcher) {
		  var id = watcher.id
		  if (has[id] == null) {
		    // if an internal watcher is pushed, but the internal
		    // queue is already depleted, we run it immediately.
		    if (internalQueueDepleted && !watcher.user) {
		      watcher.run()
		      return
		    }
		    // push watcher into appropriate queue
		    var q = watcher.user ? userQueue : queue
		    has[id] = q.length
		    q.push(watcher)
		    // queue the flush
		    if (!waiting) {
		      waiting = true
		      _.nextTick(flushBatcherQueue)
		    }
		  }
		}
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var templateCache = new Cache(1000)
		var idSelectorCache = new Cache(1000)
	
		var map = {
		  _default: [0, '', ''],
		  legend: [1, '<fieldset>', '</fieldset>'],
		  tr: [2, '<table><tbody>', '</tbody></table>'],
		  col: [
		    2,
		    '<table><tbody></tbody><colgroup>',
		    '</colgroup></table>'
		  ]
		}
	
		map.td =
		map.th = [
		  3,
		  '<table><tbody><tr>',
		  '</tr></tbody></table>'
		]
	
		map.option =
		map.optgroup = [
		  1,
		  '<select multiple="multiple">',
		  '</select>'
		]
	
		map.thead =
		map.tbody =
		map.colgroup =
		map.caption =
		map.tfoot = [1, '<table>', '</table>']
	
		map.g =
		map.defs =
		map.symbol =
		map.use =
		map.image =
		map.text =
		map.circle =
		map.ellipse =
		map.line =
		map.path =
		map.polygon =
		map.polyline =
		map.rect = [
		  1,
		  '<svg ' +
		    'xmlns="http://www.w3.org/2000/svg" ' +
		    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
		    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
		    'version="1.1">',
		  '</svg>'
		]
	
		/**
		 * Check if a node is a supported template node with a
		 * DocumentFragment content.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */
	
		function isRealTemplate (node) {
		  return _.isTemplate(node) &&
		    node.content instanceof DocumentFragment
		}
	
		var tagRE = /<([\w:]+)/
		var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/
	
		/**
		 * Convert a string template to a DocumentFragment.
		 * Determines correct wrapping by tag types. Wrapping
		 * strategy found in jQuery & component/domify.
		 *
		 * @param {String} templateString
		 * @return {DocumentFragment}
		 */
	
		function stringToFragment (templateString) {
		  // try a cache hit first
		  var hit = templateCache.get(templateString)
		  if (hit) {
		    return hit
		  }
	
		  var frag = document.createDocumentFragment()
		  var tagMatch = templateString.match(tagRE)
		  var entityMatch = entityRE.test(templateString)
	
		  if (!tagMatch && !entityMatch) {
		    // text only, return a single text node.
		    frag.appendChild(
		      document.createTextNode(templateString)
		    )
		  } else {
	
		    var tag = tagMatch && tagMatch[1]
		    var wrap = map[tag] || map._default
		    var depth = wrap[0]
		    var prefix = wrap[1]
		    var suffix = wrap[2]
		    var node = document.createElement('div')
	
		    node.innerHTML = prefix + templateString.trim() + suffix
		    while (depth--) {
		      node = node.lastChild
		    }
	
		    var child
		    /* eslint-disable no-cond-assign */
		    while (child = node.firstChild) {
		    /* eslint-enable no-cond-assign */
		      frag.appendChild(child)
		    }
		  }
	
		  templateCache.put(templateString, frag)
		  return frag
		}
	
		/**
		 * Convert a template node to a DocumentFragment.
		 *
		 * @param {Node} node
		 * @return {DocumentFragment}
		 */
	
		function nodeToFragment (node) {
		  // if its a template tag and the browser supports it,
		  // its content is already a document fragment.
		  if (isRealTemplate(node)) {
		    _.trimNode(node.content)
		    return node.content
		  }
		  // script template
		  if (node.tagName === 'SCRIPT') {
		    return stringToFragment(node.textContent)
		  }
		  // normal node, clone it to avoid mutating the original
		  var clone = exports.clone(node)
		  var frag = document.createDocumentFragment()
		  var child
		  /* eslint-disable no-cond-assign */
		  while (child = clone.firstChild) {
		  /* eslint-enable no-cond-assign */
		    frag.appendChild(child)
		  }
		  _.trimNode(frag)
		  return frag
		}
	
		// Test for the presence of the Safari template cloning bug
		// https://bugs.webkit.org/show_bug.cgi?id=137755
		var hasBrokenTemplate = (function () {
		  /* istanbul ignore else */
		  if (_.inBrowser) {
		    var a = document.createElement('div')
		    a.innerHTML = '<template>1</template>'
		    return !a.cloneNode(true).firstChild.innerHTML
		  } else {
		    return false
		  }
		})()
	
		// Test for IE10/11 textarea placeholder clone bug
		var hasTextareaCloneBug = (function () {
		  /* istanbul ignore else */
		  if (_.inBrowser) {
		    var t = document.createElement('textarea')
		    t.placeholder = 't'
		    return t.cloneNode(true).value === 't'
		  } else {
		    return false
		  }
		})()
	
		/**
		 * 1. Deal with Safari cloning nested <template> bug by
		 *    manually cloning all template instances.
		 * 2. Deal with IE10/11 textarea placeholder bug by setting
		 *    the correct value after cloning.
		 *
		 * @param {Element|DocumentFragment} node
		 * @return {Element|DocumentFragment}
		 */
	
		exports.clone = function (node) {
		  if (!node.querySelectorAll) {
		    return node.cloneNode()
		  }
		  var res = node.cloneNode(true)
		  var i, original, cloned
		  /* istanbul ignore if */
		  if (hasBrokenTemplate) {
		    var clone = res
		    if (isRealTemplate(node)) {
		      node = node.content
		      clone = res.content
		    }
		    original = node.querySelectorAll('template')
		    if (original.length) {
		      cloned = clone.querySelectorAll('template')
		      i = cloned.length
		      while (i--) {
		        cloned[i].parentNode.replaceChild(
		          exports.clone(original[i]),
		          cloned[i]
		        )
		      }
		    }
		  }
		  /* istanbul ignore if */
		  if (hasTextareaCloneBug) {
		    if (node.tagName === 'TEXTAREA') {
		      res.value = node.value
		    } else {
		      original = node.querySelectorAll('textarea')
		      if (original.length) {
		        cloned = res.querySelectorAll('textarea')
		        i = cloned.length
		        while (i--) {
		          cloned[i].value = original[i].value
		        }
		      }
		    }
		  }
		  return res
		}
	
		/**
		 * Process the template option and normalizes it into a
		 * a DocumentFragment that can be used as a partial or a
		 * instance template.
		 *
		 * @param {*} template
		 *    Possible values include:
		 *    - DocumentFragment object
		 *    - Node object of type Template
		 *    - id selector: '#some-template-id'
		 *    - template string: '<div><span>{{msg}}</span></div>'
		 * @param {Boolean} clone
		 * @param {Boolean} noSelector
		 * @return {DocumentFragment|undefined}
		 */
	
		exports.parse = function (template, clone, noSelector) {
		  var node, frag
	
		  // if the template is already a document fragment,
		  // do nothing
		  if (template instanceof DocumentFragment) {
		    _.trimNode(template)
		    return clone
		      ? exports.clone(template)
		      : template
		  }
	
		  if (typeof template === 'string') {
		    // id selector
		    if (!noSelector && template.charAt(0) === '#') {
		      // id selector can be cached too
		      frag = idSelectorCache.get(template)
		      if (!frag) {
		        node = document.getElementById(template.slice(1))
		        if (node) {
		          frag = nodeToFragment(node)
		          // save selector to cache
		          idSelectorCache.put(template, frag)
		        }
		      }
		    } else {
		      // normal string template
		      frag = stringToFragment(template)
		    }
		  } else if (template.nodeType) {
		    // a direct node
		    frag = nodeToFragment(template)
		  }
	
		  return frag && clone
		    ? exports.clone(frag)
		    : frag
		}
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var templateParser = __webpack_require__(22)
	
		module.exports = {
	
		  isLiteral: true,
	
		  /**
		   * Setup. Two possible usages:
		   *
		   * - static:
		   *   v-component="comp"
		   *
		   * - dynamic:
		   *   v-component="{{currentView}}"
		   */
	
		  bind: function () {
		    if (!this.el.__vue__) {
		      // create a ref anchor
		      this.anchor = _.createAnchor('v-component')
		      _.replace(this.el, this.anchor)
		      // check keep-alive options.
		      // If yes, instead of destroying the active vm when
		      // hiding (v-if) or switching (dynamic literal) it,
		      // we simply remove it from the DOM and save it in a
		      // cache object, with its constructor id as the key.
		      this.keepAlive = this._checkParam('keep-alive') != null
		      // wait for event before insertion
		      this.waitForEvent = this._checkParam('wait-for')
		      // check ref
		      this.refID = this._checkParam(config.prefix + 'ref')
		      if (this.keepAlive) {
		        this.cache = {}
		      }
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.template = _.extractContent(this.el, true)
		      }
		      // component resolution related state
		      this.pendingComponentCb =
		      this.Component = null
		      // transition related state
		      this.pendingRemovals = 0
		      this.pendingRemovalCb = null
		      // if static, build right now.
		      if (!this._isDynamicLiteral) {
		        this.resolveComponent(this.expression, _.bind(this.initStatic, this))
		      } else {
		        // check dynamic component params
		        this.transMode = this._checkParam('transition-mode')
		      }
		    } else {
		      ("development") !== 'production' && _.warn(
		        'cannot mount component "' + this.expression + '" ' +
		        'on already mounted element: ' + this.el
		      )
		    }
		  },
	
		  /**
		   * Initialize a static component.
		   */
	
		  initStatic: function () {
		    // wait-for
		    var anchor = this.anchor
		    var options
		    var waitFor = this.waitForEvent
		    if (waitFor) {
		      options = {
		        created: function () {
		          this.$once(waitFor, function () {
		            this.$before(anchor)
		          })
		        }
		      }
		    }
		    var child = this.build(options)
		    this.setCurrent(child)
		    if (!this.waitForEvent) {
		      child.$before(anchor)
		    }
		  },
	
		  /**
		   * Public update, called by the watcher in the dynamic
		   * literal scenario, e.g. v-component="{{view}}"
		   */
	
		  update: function (value) {
		    this.setComponent(value)
		  },
	
		  /**
		   * Switch dynamic components. May resolve the component
		   * asynchronously, and perform transition based on
		   * specified transition mode. Accepts a few additional
		   * arguments specifically for vue-router.
		   *
		   * The callback is called when the full transition is
		   * finished.
		   *
		   * @param {String} value
		   * @param {Function} [cb]
		   */
	
		  setComponent: function (value, cb) {
		    this.invalidatePending()
		    if (!value) {
		      // just remove current
		      this.unbuild(true)
		      this.remove(this.childVM, cb)
		      this.unsetCurrent()
		    } else {
		      this.resolveComponent(value, _.bind(function () {
		        this.unbuild(true)
		        var options
		        var self = this
		        var waitFor = this.waitForEvent
		        if (waitFor) {
		          options = {
		            created: function () {
		              this.$once(waitFor, function () {
		                self.waitingFor = null
		                self.transition(this, cb)
		              })
		            }
		          }
		        }
		        var cached = this.getCached()
		        var newComponent = this.build(options)
		        if (!waitFor || cached) {
		          this.transition(newComponent, cb)
		        } else {
		          this.waitingFor = newComponent
		        }
		      }, this))
		    }
		  },
	
		  /**
		   * Resolve the component constructor to use when creating
		   * the child vm.
		   */
	
		  resolveComponent: function (id, cb) {
		    var self = this
		    this.pendingComponentCb = _.cancellable(function (Component) {
		      self.Component = Component
		      cb()
		    })
		    this.vm._resolveComponent(id, this.pendingComponentCb)
		  },
	
		  /**
		   * When the component changes or unbinds before an async
		   * constructor is resolved, we need to invalidate its
		   * pending callback.
		   */
	
		  invalidatePending: function () {
		    if (this.pendingComponentCb) {
		      this.pendingComponentCb.cancel()
		      this.pendingComponentCb = null
		    }
		  },
	
		  /**
		   * Instantiate/insert a new child vm.
		   * If keep alive and has cached instance, insert that
		   * instance; otherwise build a new one and cache it.
		   *
		   * @param {Object} [extraOptions]
		   * @return {Vue} - the created instance
		   */
	
		  build: function (extraOptions) {
		    var cached = this.getCached()
		    if (cached) {
		      return cached
		    }
		    if (this.Component) {
		      // default options
		      var options = {
		        el: templateParser.clone(this.el),
		        template: this.template,
		        // if no inline-template, then the compiled
		        // linker can be cached for better performance.
		        _linkerCachable: !this.template,
		        _asComponent: true,
		        _isRouterView: this._isRouterView,
		        _context: this.vm
		      }
		      // extra options
		      if (extraOptions) {
		        _.extend(options, extraOptions)
		      }
		      var parent = this._host || this.vm
		      var child = parent.$addChild(options, this.Component)
		      if (this.keepAlive) {
		        this.cache[this.Component.cid] = child
		      }
		      return child
		    }
		  },
	
		  /**
		   * Try to get a cached instance of the current component.
		   *
		   * @return {Vue|undefined}
		   */
	
		  getCached: function () {
		    return this.keepAlive && this.cache[this.Component.cid]
		  },
	
		  /**
		   * Teardown the current child, but defers cleanup so
		   * that we can separate the destroy and removal steps.
		   *
		   * @param {Boolean} defer
		   */
	
		  unbuild: function (defer) {
		    if (this.waitingFor) {
		      this.waitingFor.$destroy()
		      this.waitingFor = null
		    }
		    var child = this.childVM
		    if (!child || this.keepAlive) {
		      return
		    }
		    // the sole purpose of `deferCleanup` is so that we can
		    // "deactivate" the vm right now and perform DOM removal
		    // later.
		    child.$destroy(false, defer)
		  },
	
		  /**
		   * Remove current destroyed child and manually do
		   * the cleanup after removal.
		   *
		   * @param {Function} cb
		   */
	
		  remove: function (child, cb) {
		    var keepAlive = this.keepAlive
		    if (child) {
		      // we may have a component switch when a previous
		      // component is still being transitioned out.
		      // we want to trigger only one lastest insertion cb
		      // when the existing transition finishes. (#1119)
		      this.pendingRemovals++
		      this.pendingRemovalCb = cb
		      var self = this
		      child.$remove(function () {
		        self.pendingRemovals--
		        if (!keepAlive) child._cleanup()
		        if (!self.pendingRemovals && self.pendingRemovalCb) {
		          self.pendingRemovalCb()
		          self.pendingRemovalCb = null
		        }
		      })
		    } else if (cb) {
		      cb()
		    }
		  },
	
		  /**
		   * Actually swap the components, depending on the
		   * transition mode. Defaults to simultaneous.
		   *
		   * @param {Vue} target
		   * @param {Function} [cb]
		   */
	
		  transition: function (target, cb) {
		    var self = this
		    var current = this.childVM
		    this.setCurrent(target)
		    switch (self.transMode) {
		      case 'in-out':
		        target.$before(self.anchor, function () {
		          self.remove(current, cb)
		        })
		        break
		      case 'out-in':
		        self.remove(current, function () {
		          target.$before(self.anchor, cb)
		        })
		        break
		      default:
		        self.remove(current)
		        target.$before(self.anchor, cb)
		    }
		  },
	
		  /**
		   * Set childVM and parent ref
		   */
	
		  setCurrent: function (child) {
		    this.unsetCurrent()
		    this.childVM = child
		    var refID = child._refID || this.refID
		    if (refID) {
		      this.vm.$[refID] = child
		    }
		  },
	
		  /**
		   * Unset childVM and parent ref
		   */
	
		  unsetCurrent: function () {
		    var child = this.childVM
		    this.childVM = null
		    var refID = (child && child._refID) || this.refID
		    if (refID) {
		      this.vm.$[refID] = null
		    }
		  },
	
		  /**
		   * Unbind.
		   */
	
		  unbind: function () {
		    this.invalidatePending()
		    // Do not defer cleanup when unbinding
		    this.unbuild()
		    this.unsetCurrent()
		    // destroy all keep-alive cached instances
		    if (this.cache) {
		      for (var key in this.cache) {
		        this.cache[key].$destroy()
		      }
		      this.cache = null
		    }
		  }
		}
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var templateParser = __webpack_require__(22)
	
		/**
		 * Process an element or a DocumentFragment based on a
		 * instance option object. This allows us to transclude
		 * a template node/fragment before the instance is created,
		 * so the processed fragment can then be cloned and reused
		 * in v-repeat.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */
	
		exports.transclude = function (el, options) {
		  // extract container attributes to pass them down
		  // to compiler, because they need to be compiled in
		  // parent scope. we are mutating the options object here
		  // assuming the same object will be used for compile
		  // right after this.
		  if (options) {
		    options._containerAttrs = extractAttrs(el)
		  }
		  // for template tags, what we want is its content as
		  // a documentFragment (for fragment instances)
		  if (_.isTemplate(el)) {
		    el = templateParser.parse(el)
		  }
		  if (options) {
		    if (options._asComponent && !options.template) {
		      options.template = '<content></content>'
		    }
		    if (options.template) {
		      options._content = _.extractContent(el)
		      el = transcludeTemplate(el, options)
		    }
		  }
		  if (el instanceof DocumentFragment) {
		    // anchors for fragment instance
		    // passing in `persist: true` to avoid them being
		    // discarded by IE during template cloning
		    _.prepend(_.createAnchor('v-start', true), el)
		    el.appendChild(_.createAnchor('v-end', true))
		  }
		  return el
		}
	
		/**
		 * Process the template option.
		 * If the replace option is true this will swap the $el.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */
	
		function transcludeTemplate (el, options) {
		  var template = options.template
		  var frag = templateParser.parse(template, true)
		  if (frag) {
		    var replacer = frag.firstChild
		    var tag = replacer.tagName && replacer.tagName.toLowerCase()
		    if (options.replace) {
		      /* istanbul ignore if */
		      if (el === document.body) {
		        ("development") !== 'production' && _.warn(
		          'You are mounting an instance with a template to ' +
		          '<body>. This will replace <body> entirely. You ' +
		          'should probably use `replace: false` here.'
		        )
		      }
		      // there are many cases where the instance must
		      // become a fragment instance: basically anything that
		      // can create more than 1 root nodes.
		      if (
		        // multi-children template
		        frag.childNodes.length > 1 ||
		        // non-element template
		        replacer.nodeType !== 1 ||
		        // single nested component
		        tag === 'component' ||
		        _.resolveAsset(options, 'components', tag) ||
		        replacer.hasAttribute(config.prefix + 'component') ||
		        // element directive
		        _.resolveAsset(options, 'elementDirectives', tag) ||
		        // repeat block
		        replacer.hasAttribute(config.prefix + 'repeat')
		      ) {
		        return frag
		      } else {
		        options._replacerAttrs = extractAttrs(replacer)
		        mergeAttrs(el, replacer)
		        return replacer
		      }
		    } else {
		      el.appendChild(frag)
		      return el
		    }
		  } else {
		    ("development") !== 'production' && _.warn(
		      'Invalid template option: ' + template
		    )
		  }
		}
	
		/**
		 * Helper to extract a component container's attributes
		 * into a plain object array.
		 *
		 * @param {Element} el
		 * @return {Array}
		 */
	
		function extractAttrs (el) {
		  if (el.nodeType === 1 && el.hasAttributes()) {
		    return _.toArray(el.attributes)
		  }
		}
	
		/**
		 * Merge the attributes of two elements, and make sure
		 * the class names are merged properly.
		 *
		 * @param {Element} from
		 * @param {Element} to
		 */
	
		function mergeAttrs (from, to) {
		  var attrs = from.attributes
		  var i = attrs.length
		  var name, value
		  while (i--) {
		    name = attrs[i].name
		    value = attrs[i].value
		    if (!to.hasAttribute(name)) {
		      to.setAttribute(name, value)
		    } else if (name === 'class') {
		      value = to.getAttribute(name) + ' ' + value
		      to.setAttribute(name, value)
		    }
		  }
		}
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		// manipulation directives
		exports.text = __webpack_require__(26)
		exports.html = __webpack_require__(27)
		exports.attr = __webpack_require__(28)
		exports.show = __webpack_require__(29)
		exports['class'] = __webpack_require__(31)
		exports.el = __webpack_require__(32)
		exports.ref = __webpack_require__(33)
		exports.cloak = __webpack_require__(34)
		exports.style = __webpack_require__(35)
		exports.transition = __webpack_require__(36)
	
		// event listener directives
		exports.on = __webpack_require__(39)
		exports.model = __webpack_require__(40)
	
		// logic control directives
		exports.repeat = __webpack_require__(45)
		exports['if'] = __webpack_require__(46)
	
		// internal directives that should not be used directly
		// but we still want to expose them for advanced usage.
		exports._component = __webpack_require__(23)
		exports._prop = __webpack_require__(16)
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  bind: function () {
		    this.attr = this.el.nodeType === 3
		      ? 'data'
		      : 'textContent'
		  },
	
		  update: function (value) {
		    this.el[this.attr] = _.toString(value)
		  }
		}
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(22)
	
		module.exports = {
	
		  bind: function () {
		    // a comment node means this is a binding for
		    // {{{ inline unescaped html }}}
		    if (this.el.nodeType === 8) {
		      // hold nodes
		      this.nodes = []
		      // replace the placeholder with proper anchor
		      this.anchor = _.createAnchor('v-html')
		      _.replace(this.el, this.anchor)
		    }
		  },
	
		  update: function (value) {
		    value = _.toString(value)
		    if (this.nodes) {
		      this.swap(value)
		    } else {
		      this.el.innerHTML = value
		    }
		  },
	
		  swap: function (value) {
		    // remove old nodes
		    var i = this.nodes.length
		    while (i--) {
		      _.remove(this.nodes[i])
		    }
		    // convert new value to a fragment
		    // do not attempt to retrieve from id selector
		    var frag = templateParser.parse(value, true, true)
		    // save a reference to these nodes so we can remove later
		    this.nodes = _.toArray(frag.childNodes)
		    _.before(frag, this.anchor)
		  }
		}
	
	
	/***/ },
	/* 28 */
	/***/ function(module, exports) {
	
		// xlink
		var xlinkNS = 'http://www.w3.org/1999/xlink'
		var xlinkRE = /^xlink:/
		var inputProps = {
		  value: 1,
		  checked: 1,
		  selected: 1
		}
	
		module.exports = {
	
		  priority: 850,
	
		  update: function (value) {
		    if (this.arg) {
		      this.setAttr(this.arg, value)
		    } else if (typeof value === 'object') {
		      this.objectHandler(value)
		    }
		  },
	
		  objectHandler: function (value) {
		    // cache object attrs so that only changed attrs
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var attr, val
		    for (attr in cache) {
		      if (!(attr in value)) {
		        this.setAttr(attr, null)
		        delete cache[attr]
		      }
		    }
		    for (attr in value) {
		      val = value[attr]
		      if (val !== cache[attr]) {
		        cache[attr] = val
		        this.setAttr(attr, val)
		      }
		    }
		  },
	
		  setAttr: function (attr, value) {
		    if (inputProps[attr] && attr in this.el) {
		      if (!this.valueRemoved) {
		        this.el.removeAttribute(attr)
		        this.valueRemoved = true
		      }
		      this.el[attr] = value
		    } else if (value != null && value !== false) {
		      if (xlinkRE.test(attr)) {
		        this.el.setAttributeNS(xlinkNS, attr, value)
		      } else {
		        this.el.setAttribute(attr, value)
		      }
		    } else {
		      this.el.removeAttribute(attr)
		    }
		  }
		}
	
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		var transition = __webpack_require__(30)
	
		module.exports = function (value) {
		  var el = this.el
		  transition.apply(el, value ? 1 : -1, function () {
		    el.style.display = value ? '' : 'none'
		  }, this.vm)
		}
	
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Append with transition.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */
	
		exports.append = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}
	
		/**
		 * InsertBefore with transition.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */
	
		exports.before = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    _.before(el, target)
		  }, vm, cb)
		}
	
		/**
		 * Remove with transition.
		 *
		 * @param {Element} el
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */
	
		exports.remove = function (el, vm, cb) {
		  apply(el, -1, function () {
		    _.remove(el)
		  }, vm, cb)
		}
	
		/**
		 * Remove by appending to another parent with transition.
		 * This is only used in block operations.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */
	
		exports.removeThenAppend = function (el, target, vm, cb) {
		  apply(el, -1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}
	
		/**
		 * Append the childNodes of a fragment to target.
		 *
		 * @param {DocumentFragment} block
		 * @param {Node} target
		 * @param {Vue} vm
		 */
	
		exports.blockAppend = function (block, target, vm) {
		  var nodes = _.toArray(block.childNodes)
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    exports.before(nodes[i], target, vm)
		  }
		}
	
		/**
		 * Remove a block of nodes between two edge nodes.
		 *
		 * @param {Node} start
		 * @param {Node} end
		 * @param {Vue} vm
		 */
	
		exports.blockRemove = function (start, end, vm) {
		  var node = start.nextSibling
		  var next
		  while (node !== end) {
		    next = node.nextSibling
		    exports.remove(node, vm)
		    node = next
		  }
		}
	
		/**
		 * Apply transitions with an operation callback.
		 *
		 * @param {Element} el
		 * @param {Number} direction
		 *                  1: enter
		 *                 -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */
	
		var apply = exports.apply = function (el, direction, op, vm, cb) {
		  var transition = el.__v_trans
		  if (
		    !transition ||
		    // skip if there are no js hooks and CSS transition is
		    // not supported
		    (!transition.hooks && !_.transitionEndEvent) ||
		    // skip transitions for initial compile
		    !vm._isCompiled ||
		    // if the vm is being manipulated by a parent directive
		    // during the parent's compilation phase, skip the
		    // animation.
		    (vm.$parent && !vm.$parent._isCompiled)
		  ) {
		    op()
		    if (cb) cb()
		    return
		  }
		  var action = direction > 0 ? 'enter' : 'leave'
		  transition[action](op, cb)
		}
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var addClass = _.addClass
		var removeClass = _.removeClass
	
		module.exports = {
	
		  bind: function () {
		    // interpolations like class="{{abc}}" are converted
		    // to v-class, and we need to remove the raw,
		    // uninterpolated className at binding time.
		    var raw = this._descriptor._rawClass
		    if (raw) {
		      this.prevKeys = raw.trim().split(/\s+/)
		    }
		  },
	
		  update: function (value) {
		    if (this.arg) {
		      // single toggle
		      if (value) {
		        addClass(this.el, this.arg)
		      } else {
		        removeClass(this.el, this.arg)
		      }
		    } else {
		      if (value && typeof value === 'string') {
		        this.handleObject(stringToObject(value))
		      } else if (_.isPlainObject(value)) {
		        this.handleObject(value)
		      } else {
		        this.cleanup()
		      }
		    }
		  },
	
		  handleObject: function (value) {
		    this.cleanup(value)
		    var keys = this.prevKeys = Object.keys(value)
		    for (var i = 0, l = keys.length; i < l; i++) {
		      var key = keys[i]
		      if (value[key]) {
		        addClass(this.el, key)
		      } else {
		        removeClass(this.el, key)
		      }
		    }
		  },
	
		  cleanup: function (value) {
		    if (this.prevKeys) {
		      var i = this.prevKeys.length
		      while (i--) {
		        var key = this.prevKeys[i]
		        if (!value || !value.hasOwnProperty(key)) {
		          removeClass(this.el, key)
		        }
		      }
		    }
		  }
		}
	
		function stringToObject (value) {
		  var res = {}
		  var keys = value.trim().split(/\s+/)
		  var i = keys.length
		  while (i--) {
		    res[keys[i]] = true
		  }
		  return res
		}
	
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
		module.exports = {
	
		  isLiteral: true,
	
		  bind: function () {
		    this.vm.$$[this.expression] = this.el
		  },
	
		  unbind: function () {
		    delete this.vm.$$[this.expression]
		  }
		}
	
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  isLiteral: true,
	
		  bind: function () {
		    var vm = this.el.__vue__
		    if (!vm) {
		      ("development") !== 'production' && _.warn(
		        'v-ref should only be used on a component root element.'
		      )
		      return
		    }
		    // If we get here, it means this is a `v-ref` on a
		    // child, because parent scope `v-ref` is stripped in
		    // `v-component` already. So we just record our own ref
		    // here - it will overwrite parent ref in `v-component`,
		    // if any.
		    vm._refID = this.expression
		  }
		}
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		var config = __webpack_require__(5)
	
		module.exports = {
		  bind: function () {
		    var el = this.el
		    this.vm.$once('hook:compiled', function () {
		      el.removeAttribute(config.prefix + 'cloak')
		    })
		  }
		}
	
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var prefixes = ['-webkit-', '-moz-', '-ms-']
		var camelPrefixes = ['Webkit', 'Moz', 'ms']
		var importantRE = /!important;?$/
		var camelRE = /([a-z])([A-Z])/g
		var testEl = null
		var propCache = {}
	
		module.exports = {
	
		  deep: true,
	
		  update: function (value) {
		    if (this.arg) {
		      this.setProp(this.arg, value)
		    } else {
		      if (typeof value === 'object') {
		        this.objectHandler(value)
		      } else {
		        this.el.style.cssText = value
		      }
		    }
		  },
	
		  objectHandler: function (value) {
		    // cache object styles so that only changed props
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var prop, val
		    for (prop in cache) {
		      if (!(prop in value)) {
		        this.setProp(prop, null)
		        delete cache[prop]
		      }
		    }
		    for (prop in value) {
		      val = value[prop]
		      if (val !== cache[prop]) {
		        cache[prop] = val
		        this.setProp(prop, val)
		      }
		    }
		  },
	
		  setProp: function (prop, value) {
		    prop = normalize(prop)
		    if (!prop) return // unsupported prop
		    // cast possible numbers/booleans into strings
		    if (value != null) value += ''
		    if (value) {
		      var isImportant = importantRE.test(value)
		        ? 'important'
		        : ''
		      if (isImportant) {
		        value = value.replace(importantRE, '').trim()
		      }
		      this.el.style.setProperty(prop, value, isImportant)
		    } else {
		      this.el.style.removeProperty(prop)
		    }
		  }
	
		}
	
		/**
		 * Normalize a CSS property name.
		 * - cache result
		 * - auto prefix
		 * - camelCase -> dash-case
		 *
		 * @param {String} prop
		 * @return {String}
		 */
	
		function normalize (prop) {
		  if (propCache[prop]) {
		    return propCache[prop]
		  }
		  var res = prefix(prop)
		  propCache[prop] = propCache[res] = res
		  return res
		}
	
		/**
		 * Auto detect the appropriate prefix for a CSS property.
		 * https://gist.github.com/paulirish/523692
		 *
		 * @param {String} prop
		 * @return {String}
		 */
	
		function prefix (prop) {
		  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
		  var camel = _.camelize(prop)
		  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
		  if (!testEl) {
		    testEl = document.createElement('div')
		  }
		  if (camel in testEl.style) {
		    return prop
		  }
		  var i = prefixes.length
		  var prefixed
		  while (i--) {
		    prefixed = camelPrefixes[i] + upper
		    if (prefixed in testEl.style) {
		      return prefixes[i] + prop
		    }
		  }
		}
	
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Transition = __webpack_require__(37)
	
		module.exports = {
	
		  priority: 1000,
		  isLiteral: true,
	
		  bind: function () {
		    if (!this._isDynamicLiteral) {
		      this.update(this.expression)
		    }
		  },
	
		  update: function (id, oldId) {
		    var el = this.el
		    var vm = this.el.__vue__ || this.vm
		    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
		    id = id || 'v'
		    el.__v_trans = new Transition(el, id, hooks, vm)
		    if (oldId) {
		      _.removeClass(el, oldId + '-transition')
		    }
		    _.addClass(el, id + '-transition')
		  }
		}
	
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var queue = __webpack_require__(38)
		var addClass = _.addClass
		var removeClass = _.removeClass
		var transitionEndEvent = _.transitionEndEvent
		var animationEndEvent = _.animationEndEvent
		var transDurationProp = _.transitionProp + 'Duration'
		var animDurationProp = _.animationProp + 'Duration'
	
		var TYPE_TRANSITION = 1
		var TYPE_ANIMATION = 2
	
		var uid = 0
	
		/**
		 * A Transition object that encapsulates the state and logic
		 * of the transition.
		 *
		 * @param {Element} el
		 * @param {String} id
		 * @param {Object} hooks
		 * @param {Vue} vm
		 */
	
		function Transition (el, id, hooks, vm) {
		  this.id = uid++
		  this.el = el
		  this.enterClass = id + '-enter'
		  this.leaveClass = id + '-leave'
		  this.hooks = hooks
		  this.vm = vm
		  // async state
		  this.pendingCssEvent =
		  this.pendingCssCb =
		  this.cancel =
		  this.pendingJsCb =
		  this.op =
		  this.cb = null
		  this.justEntered = false
		  this.entered = this.left = false
		  this.typeCache = {}
		  // bind
		  var self = this
		  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
		    .forEach(function (m) {
		      self[m] = _.bind(self[m], self)
		    })
		}
	
		var p = Transition.prototype
	
		/**
		 * Start an entering transition.
		 *
		 * 1. enter transition triggered
		 * 2. call beforeEnter hook
		 * 3. add enter class
		 * 4. insert/show element
		 * 5. call enter hook (with possible explicit js callback)
		 * 6. reflow
		 * 7. based on transition type:
		 *    - transition:
		 *        remove class now, wait for transitionend,
		 *        then done if there's no explicit js callback.
		 *    - animation:
		 *        wait for animationend, remove class,
		 *        then done if there's no explicit js callback.
		 *    - no css transition:
		 *        done now if there's no explicit js callback.
		 * 8. wait for either done or js callback, then call
		 *    afterEnter hook.
		 *
		 * @param {Function} op - insert/show the element
		 * @param {Function} [cb]
		 */
	
		p.enter = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeEnter')
		  this.cb = cb
		  addClass(this.el, this.enterClass)
		  op()
		  this.entered = false
		  this.callHookWithCb('enter')
		  if (this.entered) {
		    return // user called done synchronously.
		  }
		  this.cancel = this.hooks && this.hooks.enterCancelled
		  queue.push(this.enterNextTick)
		}
	
		/**
		 * The "nextTick" phase of an entering transition, which is
		 * to be pushed into a queue and executed after a reflow so
		 * that removing the class can trigger a CSS transition.
		 */
	
		p.enterNextTick = function () {
		  this.justEntered = true
		  _.nextTick(function () {
		    this.justEntered = false
		  }, this)
		  var enterDone = this.enterDone
		  var type = this.getCssTransitionType(this.enterClass)
		  if (!this.pendingJsCb) {
		    if (type === TYPE_TRANSITION) {
		      // trigger transition by removing enter class now
		      removeClass(this.el, this.enterClass)
		      this.setupCssCb(transitionEndEvent, enterDone)
		    } else if (type === TYPE_ANIMATION) {
		      this.setupCssCb(animationEndEvent, enterDone)
		    } else {
		      enterDone()
		    }
		  } else if (type === TYPE_TRANSITION) {
		    removeClass(this.el, this.enterClass)
		  }
		}
	
		/**
		 * The "cleanup" phase of an entering transition.
		 */
	
		p.enterDone = function () {
		  this.entered = true
		  this.cancel = this.pendingJsCb = null
		  removeClass(this.el, this.enterClass)
		  this.callHook('afterEnter')
		  if (this.cb) this.cb()
		}
	
		/**
		 * Start a leaving transition.
		 *
		 * 1. leave transition triggered.
		 * 2. call beforeLeave hook
		 * 3. add leave class (trigger css transition)
		 * 4. call leave hook (with possible explicit js callback)
		 * 5. reflow if no explicit js callback is provided
		 * 6. based on transition type:
		 *    - transition or animation:
		 *        wait for end event, remove class, then done if
		 *        there's no explicit js callback.
		 *    - no css transition:
		 *        done if there's no explicit js callback.
		 * 7. wait for either done or js callback, then call
		 *    afterLeave hook.
		 *
		 * @param {Function} op - remove/hide the element
		 * @param {Function} [cb]
		 */
	
		p.leave = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeLeave')
		  this.op = op
		  this.cb = cb
		  addClass(this.el, this.leaveClass)
		  this.left = false
		  this.callHookWithCb('leave')
		  if (this.left) {
		    return // user called done synchronously.
		  }
		  this.cancel = this.hooks && this.hooks.leaveCancelled
		  // only need to handle leaveDone if
		  // 1. the transition is already done (synchronously called
		  //    by the user, which causes this.op set to null)
		  // 2. there's no explicit js callback
		  if (this.op && !this.pendingJsCb) {
		    // if a CSS transition leaves immediately after enter,
		    // the transitionend event never fires. therefore we
		    // detect such cases and end the leave immediately.
		    if (this.justEntered) {
		      this.leaveDone()
		    } else {
		      queue.push(this.leaveNextTick)
		    }
		  }
		}
	
		/**
		 * The "nextTick" phase of a leaving transition.
		 */
	
		p.leaveNextTick = function () {
		  var type = this.getCssTransitionType(this.leaveClass)
		  if (type) {
		    var event = type === TYPE_TRANSITION
		      ? transitionEndEvent
		      : animationEndEvent
		    this.setupCssCb(event, this.leaveDone)
		  } else {
		    this.leaveDone()
		  }
		}
	
		/**
		 * The "cleanup" phase of a leaving transition.
		 */
	
		p.leaveDone = function () {
		  this.left = true
		  this.cancel = this.pendingJsCb = null
		  this.op()
		  removeClass(this.el, this.leaveClass)
		  this.callHook('afterLeave')
		  if (this.cb) this.cb()
		  this.op = null
		}
	
		/**
		 * Cancel any pending callbacks from a previously running
		 * but not finished transition.
		 */
	
		p.cancelPending = function () {
		  this.op = this.cb = null
		  var hasPending = false
		  if (this.pendingCssCb) {
		    hasPending = true
		    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
		    this.pendingCssEvent = this.pendingCssCb = null
		  }
		  if (this.pendingJsCb) {
		    hasPending = true
		    this.pendingJsCb.cancel()
		    this.pendingJsCb = null
		  }
		  if (hasPending) {
		    removeClass(this.el, this.enterClass)
		    removeClass(this.el, this.leaveClass)
		  }
		  if (this.cancel) {
		    this.cancel.call(this.vm, this.el)
		    this.cancel = null
		  }
		}
	
		/**
		 * Call a user-provided synchronous hook function.
		 *
		 * @param {String} type
		 */
	
		p.callHook = function (type) {
		  if (this.hooks && this.hooks[type]) {
		    this.hooks[type].call(this.vm, this.el)
		  }
		}
	
		/**
		 * Call a user-provided, potentially-async hook function.
		 * We check for the length of arguments to see if the hook
		 * expects a `done` callback. If true, the transition's end
		 * will be determined by when the user calls that callback;
		 * otherwise, the end is determined by the CSS transition or
		 * animation.
		 *
		 * @param {String} type
		 */
	
		p.callHookWithCb = function (type) {
		  var hook = this.hooks && this.hooks[type]
		  if (hook) {
		    if (hook.length > 1) {
		      this.pendingJsCb = _.cancellable(this[type + 'Done'])
		    }
		    hook.call(this.vm, this.el, this.pendingJsCb)
		  }
		}
	
		/**
		 * Get an element's transition type based on the
		 * calculated styles.
		 *
		 * @param {String} className
		 * @return {Number}
		 */
	
		p.getCssTransitionType = function (className) {
		  /* istanbul ignore if */
		  if (
		    !transitionEndEvent ||
		    // skip CSS transitions if page is not visible -
		    // this solves the issue of transitionend events not
		    // firing until the page is visible again.
		    // pageVisibility API is supported in IE10+, same as
		    // CSS transitions.
		    document.hidden ||
		    // explicit js-only transition
		    (this.hooks && this.hooks.css === false) ||
		    // element is hidden
		    isHidden(this.el)
		  ) {
		    return
		  }
		  var type = this.typeCache[className]
		  if (type) return type
		  var inlineStyles = this.el.style
		  var computedStyles = window.getComputedStyle(this.el)
		  var transDuration =
		    inlineStyles[transDurationProp] ||
		    computedStyles[transDurationProp]
		  if (transDuration && transDuration !== '0s') {
		    type = TYPE_TRANSITION
		  } else {
		    var animDuration =
		      inlineStyles[animDurationProp] ||
		      computedStyles[animDurationProp]
		    if (animDuration && animDuration !== '0s') {
		      type = TYPE_ANIMATION
		    }
		  }
		  if (type) {
		    this.typeCache[className] = type
		  }
		  return type
		}
	
		/**
		 * Setup a CSS transitionend/animationend callback.
		 *
		 * @param {String} event
		 * @param {Function} cb
		 */
	
		p.setupCssCb = function (event, cb) {
		  this.pendingCssEvent = event
		  var self = this
		  var el = this.el
		  var onEnd = this.pendingCssCb = function (e) {
		    if (e.target === el) {
		      _.off(el, event, onEnd)
		      self.pendingCssEvent = self.pendingCssCb = null
		      if (!self.pendingJsCb && cb) {
		        cb()
		      }
		    }
		  }
		  _.on(el, event, onEnd)
		}
	
		/**
		 * Check if an element is hidden - in that case we can just
		 * skip the transition alltogether.
		 *
		 * @param {Element} el
		 * @return {Boolean}
		 */
	
		function isHidden (el) {
		  return el.style.display === 'none' ||
		    el.style.visibility === 'hidden' ||
		    el.hidden
		}
	
		module.exports = Transition
	
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var queue = []
		var queued = false
	
		/**
		 * Push a job into the queue.
		 *
		 * @param {Function} job
		 */
	
		exports.push = function (job) {
		  queue.push(job)
		  if (!queued) {
		    queued = true
		    _.nextTick(flush)
		  }
		}
	
		/**
		 * Flush the queue, and do one forced reflow before
		 * triggering transitions.
		 */
	
		function flush () {
		  // Force layout
		  var f = document.documentElement.offsetHeight
		  for (var i = 0; i < queue.length; i++) {
		    queue[i]()
		  }
		  queue = []
		  queued = false
		  // dummy return, so js linters don't complain about
		  // unused variable f
		  return f
		}
	
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  acceptStatement: true,
		  priority: 700,
	
		  bind: function () {
		    // deal with iframes
		    if (
		      this.el.tagName === 'IFRAME' &&
		      this.arg !== 'load'
		    ) {
		      var self = this
		      this.iframeBind = function () {
		        _.on(self.el.contentWindow, self.arg, self.handler)
		      }
		      this.on('load', this.iframeBind)
		    }
		  },
	
		  update: function (handler) {
		    if (typeof handler !== 'function') {
		      ("development") !== 'production' && _.warn(
		        'Directive v-on="' + this.arg + ': ' +
		        this.expression + '" expects a function value, ' +
		        'got ' + handler
		      )
		      return
		    }
		    this.reset()
		    var vm = this.vm
		    this.handler = function (e) {
		      e.targetVM = vm
		      vm.$event = e
		      var res = handler(e)
		      vm.$event = null
		      return res
		    }
		    if (this.iframeBind) {
		      this.iframeBind()
		    } else {
		      _.on(this.el, this.arg, this.handler)
		    }
		  },
	
		  reset: function () {
		    var el = this.iframeBind
		      ? this.el.contentWindow
		      : this.el
		    if (this.handler) {
		      _.off(el, this.arg, this.handler)
		    }
		  },
	
		  unbind: function () {
		    this.reset()
		  }
		}
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		var handlers = {
		  text: __webpack_require__(41),
		  radio: __webpack_require__(42),
		  select: __webpack_require__(43),
		  checkbox: __webpack_require__(44)
		}
	
		module.exports = {
	
		  priority: 800,
		  twoWay: true,
		  handlers: handlers,
	
		  /**
		   * Possible elements:
		   *   <select>
		   *   <textarea>
		   *   <input type="*">
		   *     - text
		   *     - checkbox
		   *     - radio
		   *     - number
		   *     - TODO: more types may be supplied as a plugin
		   */
	
		  bind: function () {
		    // friendly warning...
		    this.checkFilters()
		    if (this.hasRead && !this.hasWrite) {
		      ("development") !== 'production' && _.warn(
		        'It seems you are using a read-only filter with ' +
		        'v-model. You might want to use a two-way filter ' +
		        'to ensure correct behavior.'
		      )
		    }
		    var el = this.el
		    var tag = el.tagName
		    var handler
		    if (tag === 'INPUT') {
		      handler = handlers[el.type] || handlers.text
		    } else if (tag === 'SELECT') {
		      handler = handlers.select
		    } else if (tag === 'TEXTAREA') {
		      handler = handlers.text
		    } else {
		      ("development") !== 'production' && _.warn(
		        'v-model does not support element type: ' + tag
		      )
		      return
		    }
		    el.__v_model = this
		    handler.bind.call(this)
		    this.update = handler.update
		    this._unbind = handler.unbind
		  },
	
		  /**
		   * Check read/write filter stats.
		   */
	
		  checkFilters: function () {
		    var filters = this.filters
		    if (!filters) return
		    var i = filters.length
		    while (i--) {
		      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
		      if (typeof filter === 'function' || filter.read) {
		        this.hasRead = true
		      }
		      if (filter.write) {
		        this.hasWrite = true
		      }
		    }
		  },
	
		  unbind: function () {
		    this.el.__v_model = null
		    this._unbind && this._unbind()
		  }
		}
	
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  bind: function () {
		    var self = this
		    var el = this.el
		    var isRange = el.type === 'range'
	
		    // check params
		    // - lazy: update model on "change" instead of "input"
		    var lazy = this._checkParam('lazy') != null
		    // - number: cast value into number when updating model.
		    var number = this._checkParam('number') != null
		    // - debounce: debounce the input listener
		    var debounce = parseInt(this._checkParam('debounce'), 10)
	
		    // handle composition events.
		    //   http://blog.evanyou.me/2014/01/03/composition-event/
		    // skip this for Android because it handles composition
		    // events quite differently. Android doesn't trigger
		    // composition events for language input methods e.g.
		    // Chinese, but instead triggers them for spelling
		    // suggestions... (see Discussion/#162)
		    var composing = false
		    if (!_.isAndroid && !isRange) {
		      this.on('compositionstart', function () {
		        composing = true
		      })
		      this.on('compositionend', function () {
		        composing = false
		        // in IE11 the "compositionend" event fires AFTER
		        // the "input" event, so the input handler is blocked
		        // at the end... have to call it here.
		        //
		        // #1327: in lazy mode this is unecessary.
		        if (!lazy) {
		          self.listener()
		        }
		      })
		    }
	
		    // prevent messing with the input when user is typing,
		    // and force update on blur.
		    this.focused = false
		    if (!isRange) {
		      this.on('focus', function () {
		        self.focused = true
		      })
		      this.on('blur', function () {
		        self.focused = false
		        self.listener()
		      })
		    }
	
		    // Now attach the main listener
		    this.listener = function () {
		      if (composing) return
		      var val = number || isRange
		        ? _.toNumber(el.value)
		        : el.value
		      self.set(val)
		      // force update on next tick to avoid lock & same value
		      // also only update when user is not typing
		      _.nextTick(function () {
		        if (self._bound && !self.focused) {
		          self.update(self._watcher.value)
		        }
		      })
		    }
		    if (debounce) {
		      this.listener = _.debounce(this.listener, debounce)
		    }
	
		    // Support jQuery events, since jQuery.trigger() doesn't
		    // trigger native events in some cases and some plugins
		    // rely on $.trigger()
		    //
		    // We want to make sure if a listener is attached using
		    // jQuery, it is also removed with jQuery, that's why
		    // we do the check for each directive instance and
		    // store that check result on itself. This also allows
		    // easier test coverage control by unsetting the global
		    // jQuery variable in tests.
		    this.hasjQuery = typeof jQuery === 'function'
		    if (this.hasjQuery) {
		      jQuery(el).on('change', this.listener)
		      if (!lazy) {
		        jQuery(el).on('input', this.listener)
		      }
		    } else {
		      this.on('change', this.listener)
		      if (!lazy) {
		        this.on('input', this.listener)
		      }
		    }
	
		    // IE9 doesn't fire input event on backspace/del/cut
		    if (!lazy && _.isIE9) {
		      this.on('cut', function () {
		        _.nextTick(self.listener)
		      })
		      this.on('keyup', function (e) {
		        if (e.keyCode === 46 || e.keyCode === 8) {
		          self.listener()
		        }
		      })
		    }
	
		    // set initial value if present
		    if (
		      el.hasAttribute('value') ||
		      (el.tagName === 'TEXTAREA' && el.value.trim())
		    ) {
		      this._initValue = number
		        ? _.toNumber(el.value)
		        : el.value
		    }
		  },
	
		  update: function (value) {
		    this.el.value = _.toString(value)
		  },
	
		  unbind: function () {
		    var el = this.el
		    if (this.hasjQuery) {
		      jQuery(el).off('change', this.listener)
		      jQuery(el).off('input', this.listener)
		    }
		  }
		}
	
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  bind: function () {
		    var self = this
		    var el = this.el
		    var number = this._checkParam('number') != null
		    var expression = this._checkParam('exp')
	
		    this.getValue = function () {
		      var val = el.value
		      if (number) {
		        val = _.toNumber(val)
		      } else if (expression !== null) {
		        val = self.vm.$eval(expression)
		      }
		      return val
		    }
	
		    this.on('change', function () {
		      self.set(self.getValue())
		    })
	
		    if (el.checked) {
		      this._initValue = this.getValue()
		    }
		  },
	
		  update: function (value) {
		    this.el.checked = _.looseEqual(value, this.getValue())
		  }
		}
	
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var dirParser = __webpack_require__(15)
	
		module.exports = {
	
		  bind: function () {
		    var self = this
		    var el = this.el
	
		    // method to force update DOM using latest value.
		    this.forceUpdate = function () {
		      if (self._watcher) {
		        self.update(self._watcher.get())
		      }
		    }
	
		    // check options param
		    var optionsParam = this._checkParam('options')
		    if (optionsParam) {
		      initOptions.call(this, optionsParam)
		    }
		    this.number = this._checkParam('number') != null
		    this.multiple = el.hasAttribute('multiple')
	
		    // attach listener
		    this.on('change', function () {
		      var value = getValue(el, self.multiple)
		      value = self.number
		        ? _.isArray(value)
		          ? value.map(_.toNumber)
		          : _.toNumber(value)
		        : value
		      self.set(value)
		    })
	
		    // check initial value (inline selected attribute)
		    checkInitialValue.call(this)
	
		    // All major browsers except Firefox resets
		    // selectedIndex with value -1 to 0 when the element
		    // is appended to a new parent, therefore we have to
		    // force a DOM update whenever that happens...
		    this.vm.$on('hook:attached', this.forceUpdate)
		  },
	
		  update: function (value) {
		    var el = this.el
		    el.selectedIndex = -1
		    if (value == null) {
		      if (this.defaultOption) {
		        this.defaultOption.selected = true
		      }
		      return
		    }
		    var multi = this.multiple && _.isArray(value)
		    var options = el.options
		    var i = options.length
		    var op, val
		    while (i--) {
		      op = options[i]
		      val = op.hasOwnProperty('_value')
		        ? op._value
		        : op.value
		      /* eslint-disable eqeqeq */
		      op.selected = multi
		        ? indexOf(value, val) > -1
		        : _.looseEqual(value, val)
		      /* eslint-enable eqeqeq */
		    }
		  },
	
		  unbind: function () {
		    this.vm.$off('hook:attached', this.forceUpdate)
		    if (this.optionWatcher) {
		      this.optionWatcher.teardown()
		    }
		  }
		}
	
		/**
		 * Initialize the option list from the param.
		 *
		 * @param {String} expression
		 */
	
		function initOptions (expression) {
		  var self = this
		  var el = self.el
		  var defaultOption = self.defaultOption = self.el.options[0]
		  var descriptor = dirParser.parse(expression)[0]
		  function optionUpdateWatcher (value) {
		    if (_.isArray(value)) {
		      // clear old options.
		      // cannot reset innerHTML here because IE family get
		      // confused during compilation.
		      var i = el.options.length
		      while (i--) {
		        var option = el.options[i]
		        if (option !== defaultOption) {
		          var parentNode = option.parentNode
		          if (parentNode === el) {
		            parentNode.removeChild(option)
		          } else {
		            el.removeChild(parentNode)
		            i = el.options.length
		          }
		        }
		      }
		      buildOptions(el, value)
		      self.forceUpdate()
		    } else {
		      ("development") !== 'production' && _.warn(
		        'Invalid options value for v-model: ' + value
		      )
		    }
		  }
		  this.optionWatcher = new Watcher(
		    this.vm,
		    descriptor.expression,
		    optionUpdateWatcher,
		    {
		      deep: true,
		      filters: descriptor.filters
		    }
		  )
		  // update with initial value
		  optionUpdateWatcher(this.optionWatcher.value)
		}
	
		/**
		 * Build up option elements. IE9 doesn't create options
		 * when setting innerHTML on <select> elements, so we have
		 * to use DOM API here.
		 *
		 * @param {Element} parent - a <select> or an <optgroup>
		 * @param {Array} options
		 */
	
		function buildOptions (parent, options) {
		  var op, el
		  for (var i = 0, l = options.length; i < l; i++) {
		    op = options[i]
		    if (!op.options) {
		      el = document.createElement('option')
		      if (typeof op === 'string' || typeof op === 'number') {
		        el.text = el.value = op
		      } else {
		        if (op.value != null && !_.isObject(op.value)) {
		          el.value = op.value
		        }
		        // object values gets serialized when set as value,
		        // so we store the raw value as a different property
		        el._value = op.value
		        el.text = op.text || ''
		        if (op.disabled) {
		          el.disabled = true
		        }
		      }
		    } else {
		      el = document.createElement('optgroup')
		      el.label = op.label
		      buildOptions(el, op.options)
		    }
		    parent.appendChild(el)
		  }
		}
	
		/**
		 * Check the initial value for selected options.
		 */
	
		function checkInitialValue () {
		  var initValue
		  var options = this.el.options
		  for (var i = 0, l = options.length; i < l; i++) {
		    if (options[i].hasAttribute('selected')) {
		      if (this.multiple) {
		        (initValue || (initValue = []))
		          .push(options[i].value)
		      } else {
		        initValue = options[i].value
		      }
		    }
		  }
		  if (typeof initValue !== 'undefined') {
		    this._initValue = this.number
		      ? _.toNumber(initValue)
		      : initValue
		  }
		}
	
		/**
		 * Get select value
		 *
		 * @param {SelectElement} el
		 * @param {Boolean} multi
		 * @return {Array|*}
		 */
	
		function getValue (el, multi) {
		  var res = multi ? [] : null
		  var op, val
		  for (var i = 0, l = el.options.length; i < l; i++) {
		    op = el.options[i]
		    if (op.selected) {
		      val = op.hasOwnProperty('_value')
		        ? op._value
		        : op.value
		      if (multi) {
		        res.push(val)
		      } else {
		        return val
		      }
		    }
		  }
		  return res
		}
	
		/**
		 * Native Array.indexOf uses strict equal, but in this
		 * case we need to match string/numbers with custom equal.
		 *
		 * @param {Array} arr
		 * @param {*} val
		 */
	
		function indexOf (arr, val) {
		  var i = arr.length
		  while (i--) {
		    if (_.looseEqual(arr[i], val)) {
		      return i
		    }
		  }
		  return -1
		}
	
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		module.exports = {
	
		  bind: function () {
		    var self = this
		    var el = this.el
		    var trueExp = this._checkParam('true-exp')
		    var falseExp = this._checkParam('false-exp')
	
		    this._matchValue = function (value) {
		      if (trueExp !== null) {
		        return _.looseEqual(value, self.vm.$eval(trueExp))
		      } else {
		        return !!value
		      }
		    }
	
		    function getValue () {
		      var val = el.checked
		      if (val && trueExp !== null) {
		        val = self.vm.$eval(trueExp)
		      }
		      if (!val && falseExp !== null) {
		        val = self.vm.$eval(falseExp)
		      }
		      return val
		    }
	
		    this.on('change', function () {
		      self.set(getValue())
		    })
	
		    if (el.checked) {
		      this._initValue = getValue()
		    }
		  },
	
		  update: function (value) {
		    this.el.checked = this._matchValue(value)
		  }
		}
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var isObject = _.isObject
		var isPlainObject = _.isPlainObject
		var textParser = __webpack_require__(13)
		var expParser = __webpack_require__(19)
		var templateParser = __webpack_require__(22)
		var compiler = __webpack_require__(10)
		var uid = 0
	
		// async component resolution states
		var UNRESOLVED = 0
		var PENDING = 1
		var RESOLVED = 2
		var ABORTED = 3
	
		module.exports = {
	
		  /**
		   * Setup.
		   */
	
		  bind: function () {
	
		    // some helpful tips...
		    /* istanbul ignore if */
		    if (
		      ("development") !== 'production' &&
		      this.el.tagName === 'OPTION' &&
		      this.el.parentNode && this.el.parentNode.__v_model
		    ) {
		      _.warn(
		        'Don\'t use v-repeat for v-model options; ' +
		        'use the `options` param instead: ' +
		        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'
		      )
		    }
	
		    // support for item in array syntax
		    var inMatch = this.expression.match(/(.*) in (.*)/)
		    if (inMatch) {
		      this.arg = inMatch[1]
		      this._watcherExp = inMatch[2]
		    }
		    // uid as a cache identifier
		    this.id = '__v_repeat_' + (++uid)
	
		    // setup anchor nodes
		    this.start = _.createAnchor('v-repeat-start')
		    this.end = _.createAnchor('v-repeat-end')
		    _.replace(this.el, this.end)
		    _.before(this.start, this.end)
	
		    // check if this is a block repeat
		    this.template = _.isTemplate(this.el)
		      ? templateParser.parse(this.el, true)
		      : this.el
	
		    // check for trackby param
		    this.idKey = this._checkParam('track-by')
		    // check for transition stagger
		    var stagger = +this._checkParam('stagger')
		    this.enterStagger = +this._checkParam('enter-stagger') || stagger
		    this.leaveStagger = +this._checkParam('leave-stagger') || stagger
	
		    // check for v-ref/v-el
		    this.refID = this._checkParam(config.prefix + 'ref')
		    this.elID = this._checkParam(config.prefix + 'el')
	
		    // check other directives that need to be handled
		    // at v-repeat level
		    this.checkIf()
		    this.checkComponent()
	
		    // create cache object
		    this.cache = Object.create(null)
		  },
	
		  /**
		   * Warn against v-if usage.
		   */
	
		  checkIf: function () {
		    if (_.attr(this.el, 'if') !== null) {
		      ("development") !== 'production' && _.warn(
		        'Don\'t use v-if with v-repeat. ' +
		        'Use v-show or the "filterBy" filter instead.'
		      )
		    }
		  },
	
		  /**
		   * Check the component constructor to use for repeated
		   * instances. If static we resolve it now, otherwise it
		   * needs to be resolved at build time with actual data.
		   */
	
		  checkComponent: function () {
		    this.componentState = UNRESOLVED
		    var options = this.vm.$options
		    var id = _.checkComponent(this.el, options)
		    if (!id) {
		      // default constructor
		      this.Component = _.Vue
		      // inline repeats should inherit
		      this.inline = true
		      // important: transclude with no options, just
		      // to ensure block start and block end
		      this.template = compiler.transclude(this.template)
		      var copy = _.extend({}, options)
		      copy._asComponent = false
		      this._linkFn = compiler.compile(this.template, copy)
		    } else {
		      this.Component = null
		      this.asComponent = true
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.inlineTemplate = _.extractContent(this.el, true)
		      }
		      var tokens = textParser.parse(id)
		      if (tokens) {
		        // dynamic component to be resolved later
		        var componentExp = textParser.tokensToExp(tokens)
		        this.componentGetter = expParser.parse(componentExp).get
		      } else {
		        // static
		        this.componentId = id
		        this.pendingData = null
		      }
		    }
		  },
	
		  resolveComponent: function () {
		    this.componentState = PENDING
		    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
		      if (this.componentState === ABORTED) {
		        return
		      }
		      this.Component = Component
		      this.componentState = RESOLVED
		      this.realUpdate(this.pendingData)
		      this.pendingData = null
		    }, this))
		  },
	
		  /**
		   * Resolve a dynamic component to use for an instance.
		   * The tricky part here is that there could be dynamic
		   * components depending on instance data.
		   *
		   * @param {Object} data
		   * @param {Object} meta
		   * @return {Function}
		   */
	
		  resolveDynamicComponent: function (data, meta) {
		    // create a temporary context object and copy data
		    // and meta properties onto it.
		    // use _.define to avoid accidentally overwriting scope
		    // properties.
		    var context = Object.create(this.vm)
		    var key
		    for (key in data) {
		      _.define(context, key, data[key])
		    }
		    for (key in meta) {
		      _.define(context, key, meta[key])
		    }
		    var id = this.componentGetter.call(context, context)
		    var Component = _.resolveAsset(this.vm.$options, 'components', id)
		    if (true) {
		      _.assertAsset(Component, 'component', id)
		    }
		    if (!Component.options) {
		      ("development") !== 'production' && _.warn(
		        'Async resolution is not supported for v-repeat ' +
		        '+ dynamic component. (component: ' + id + ')'
		      )
		      return _.Vue
		    }
		    return Component
		  },
	
		  /**
		   * Update.
		   * This is called whenever the Array mutates. If we have
		   * a component, we might need to wait for it to resolve
		   * asynchronously.
		   *
		   * @param {Array|Number|String} data
		   */
	
		  update: function (data) {
		    if (("development") !== 'production' && !_.isArray(data)) {
		      _.warn(
		        'v-repeat pre-converts Objects into Arrays, and ' +
		        'v-repeat filters should always return Arrays.'
		      )
		    }
		    if (this.componentId) {
		      var state = this.componentState
		      if (state === UNRESOLVED) {
		        this.pendingData = data
		        // once resolved, it will call realUpdate
		        this.resolveComponent()
		      } else if (state === PENDING) {
		        this.pendingData = data
		      } else if (state === RESOLVED) {
		        this.realUpdate(data)
		      }
		    } else {
		      this.realUpdate(data)
		    }
		  },
	
		  /**
		   * The real update that actually modifies the DOM.
		   *
		   * @param {Array|Number|String} data
		   */
	
		  realUpdate: function (data) {
		    this.vms = this.diff(data, this.vms)
		    // update v-ref
		    if (this.refID) {
		      this.vm.$[this.refID] = this.converted
		        ? toRefObject(this.vms)
		        : this.vms
		    }
		    if (this.elID) {
		      this.vm.$$[this.elID] = this.vms.map(function (vm) {
		        return vm.$el
		      })
		    }
		  },
	
		  /**
		   * Diff, based on new data and old data, determine the
		   * minimum amount of DOM manipulations needed to make the
		   * DOM reflect the new data Array.
		   *
		   * The algorithm diffs the new data Array by storing a
		   * hidden reference to an owner vm instance on previously
		   * seen data. This allows us to achieve O(n) which is
		   * better than a levenshtein distance based algorithm,
		   * which is O(m * n).
		   *
		   * @param {Array} data
		   * @param {Array} oldVms
		   * @return {Array}
		   */
	
		  diff: function (data, oldVms) {
		    var idKey = this.idKey
		    var converted = this.converted
		    var start = this.start
		    var end = this.end
		    var inDoc = _.inDoc(start)
		    var alias = this.arg
		    var init = !oldVms
		    var vms = new Array(data.length)
		    var obj, raw, vm, i, l, primitive
		    // First pass, go through the new Array and fill up
		    // the new vms array. If a piece of data has a cached
		    // instance for it, we reuse it. Otherwise build a new
		    // instance.
		    for (i = 0, l = data.length; i < l; i++) {
		      obj = data[i]
		      raw = converted ? obj.$value : obj
		      primitive = !isObject(raw)
		      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
		      if (vm) { // reusable instance
	
		        if (("development") !== 'production' && vm._reused) {
		          _.warn(
		            'Duplicate objects found in v-repeat="' + this.expression + '": ' +
		            JSON.stringify(raw)
		          )
		        }
	
		        vm._reused = true
		        vm.$index = i // update $index
		        // update data for track-by or object repeat,
		        // since in these two cases the data is replaced
		        // rather than mutated.
		        if (idKey || converted || primitive) {
		          if (alias) {
		            vm[alias] = raw
		          } else if (_.isPlainObject(raw)) {
		            vm.$data = raw
		          } else {
		            vm.$value = raw
		          }
		        }
		      } else { // new instance
		        vm = this.build(obj, i, true)
		        vm._reused = false
		      }
		      vms[i] = vm
		      // insert if this is first run
		      if (init) {
		        vm.$before(end)
		      }
		    }
		    // if this is the first run, we're done.
		    if (init) {
		      return vms
		    }
		    // Second pass, go through the old vm instances and
		    // destroy those who are not reused (and remove them
		    // from cache)
		    var removalIndex = 0
		    var totalRemoved = oldVms.length - vms.length
		    for (i = 0, l = oldVms.length; i < l; i++) {
		      vm = oldVms[i]
		      if (!vm._reused) {
		        this.uncacheVm(vm)
		        vm.$destroy(false, true) // defer cleanup until removal
		        this.remove(vm, removalIndex++, totalRemoved, inDoc)
		      }
		    }
		    // final pass, move/insert new instances into the
		    // right place.
		    var targetPrev, prevEl, currentPrev
		    var insertionIndex = 0
		    for (i = 0, l = vms.length; i < l; i++) {
		      vm = vms[i]
		      // this is the vm that we should be after
		      targetPrev = vms[i - 1]
		      prevEl = targetPrev
		        ? targetPrev._staggerCb
		          ? targetPrev._staggerAnchor
		          : targetPrev._fragmentEnd || targetPrev.$el
		        : start
		      if (vm._reused && !vm._staggerCb) {
		        currentPrev = findPrevVm(vm, start, this.id)
		        if (currentPrev !== targetPrev) {
		          this.move(vm, prevEl)
		        }
		      } else {
		        // new instance, or still in stagger.
		        // insert with updated stagger index.
		        this.insert(vm, insertionIndex++, prevEl, inDoc)
		      }
		      vm._reused = false
		    }
		    return vms
		  },
	
		  /**
		   * Build a new instance and cache it.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {Boolean} needCache
		   */
	
		  build: function (data, index, needCache) {
		    var meta = { $index: index }
		    if (this.converted) {
		      meta.$key = data.$key
		    }
		    var raw = this.converted ? data.$value : data
		    var alias = this.arg
		    if (alias) {
		      data = {}
		      data[alias] = raw
		    } else if (!isPlainObject(raw)) {
		      // non-object values
		      data = {}
		      meta.$value = raw
		    } else {
		      // default
		      data = raw
		    }
		    // resolve constructor
		    var Component = this.Component || this.resolveDynamicComponent(data, meta)
		    var parent = this._host || this.vm
		    var vm = parent.$addChild({
		      el: templateParser.clone(this.template),
		      data: data,
		      inherit: this.inline,
		      template: this.inlineTemplate,
		      // repeater meta, e.g. $index, $key
		      _meta: meta,
		      // mark this as an inline-repeat instance
		      _repeat: this.inline,
		      // is this a component?
		      _asComponent: this.asComponent,
		      // linker cachable if no inline-template
		      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
		      // pre-compiled linker for simple repeats
		      _linkFn: this._linkFn,
		      // identifier, shows that this vm belongs to this collection
		      _repeatId: this.id,
		      // transclusion content owner
		      _context: this.vm
		    }, Component)
		    // cache instance
		    if (needCache) {
		      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
		    }
		    // sync back changes for two-way bindings of primitive values
		    var dir = this
		    if (this.rawType === 'object' && isPrimitive(raw)) {
		      vm.$watch(alias || '$value', function (val) {
		        if (dir.filters) {
		          ("development") !== 'production' && _.warn(
		            'You seem to be mutating the $value reference of ' +
		            'a v-repeat instance (likely through v-model) ' +
		            'and filtering the v-repeat at the same time. ' +
		            'This will not work properly with an Array of ' +
		            'primitive values. Please use an Array of ' +
		            'Objects instead.'
		          )
		        }
		        dir._withLock(function () {
		          if (dir.converted) {
		            dir.rawValue[vm.$key] = val
		          } else {
		            dir.rawValue.$set(vm.$index, val)
		          }
		        })
		      })
		    }
		    return vm
		  },
	
		  /**
		   * Unbind, teardown everything
		   */
	
		  unbind: function () {
		    this.componentState = ABORTED
		    if (this.refID) {
		      this.vm.$[this.refID] = null
		    }
		    if (this.vms) {
		      var i = this.vms.length
		      var vm
		      while (i--) {
		        vm = this.vms[i]
		        this.uncacheVm(vm)
		        vm.$destroy()
		      }
		    }
		  },
	
		  /**
		   * Cache a vm instance based on its data.
		   *
		   * If the data is an object, we save the vm's reference on
		   * the data object as a hidden property. Otherwise we
		   * cache them in an object and for each primitive value
		   * there is an array in case there are duplicates.
		   *
		   * @param {Object} data
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} [key]
		   */
	
		  cacheVm: function (data, vm, index, key) {
		    var idKey = this.idKey
		    var cache = this.cache
		    var primitive = !isObject(data)
		    var id
		    if (key || idKey || primitive) {
		      id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      if (!cache[id]) {
		        cache[id] = vm
		      } else if (!primitive && idKey !== '$index') {
		        ("development") !== 'production' && _.warn(
		          'Duplicate objects with the same track-by key in v-repeat: ' + id
		        )
		      }
		    } else {
		      id = this.id
		      if (data.hasOwnProperty(id)) {
		        if (data[id] === null) {
		          data[id] = vm
		        } else {
		          ("development") !== 'production' && _.warn(
		            'Duplicate objects found in v-repeat="' + this.expression + '": ' +
		            JSON.stringify(data)
		          )
		        }
		      } else {
		        _.define(data, id, vm)
		      }
		    }
		    vm._raw = data
		  },
	
		  /**
		   * Try to get a cached instance from a piece of data.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {String} [key]
		   * @return {Vue|undefined}
		   */
	
		  getVm: function (data, index, key) {
		    var idKey = this.idKey
		    var primitive = !isObject(data)
		    if (key || idKey || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      return this.cache[id]
		    } else {
		      return data[this.id]
		    }
		  },
	
		  /**
		   * Delete a cached vm instance.
		   *
		   * @param {Vue} vm
		   */
	
		  uncacheVm: function (vm) {
		    var data = vm._raw
		    var idKey = this.idKey
		    var index = vm.$index
		    // fix #948: avoid accidentally fall through to
		    // a parent repeater which happens to have $key.
		    var key = vm.hasOwnProperty('$key') && vm.$key
		    var primitive = !isObject(data)
		    if (idKey || key || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      this.cache[id] = null
		    } else {
		      data[this.id] = null
		      vm._raw = null
		    }
		  },
	
		  /**
		   * Insert an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Node} prevEl
		   * @param {Boolean} inDoc
		   */
	
		  insert: function (vm, index, prevEl, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		    }
		    var staggerAmount = this.getStagger(vm, index, null, 'enter')
		    if (inDoc && staggerAmount) {
		      // create an anchor and insert it synchronously,
		      // so that we can resolve the correct order without
		      // worrying about some elements not inserted yet
		      var anchor = vm._staggerAnchor
		      if (!anchor) {
		        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
		        anchor.__vue__ = vm
		      }
		      _.after(anchor, prevEl)
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        vm.$before(anchor)
		        _.remove(anchor)
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      vm.$after(prevEl)
		    }
		  },
	
		  /**
		   * Move an already inserted instance.
		   *
		   * @param {Vue} vm
		   * @param {Node} prevEl
		   */
	
		  move: function (vm, prevEl) {
		    vm.$after(prevEl, null, false)
		  },
	
		  /**
		   * Remove an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Boolean} inDoc
		   */
	
		  remove: function (vm, index, total, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		      // it's not possible for the same vm to be removed
		      // twice, so if we have a pending stagger callback,
		      // it means this vm is queued for enter but removed
		      // before its transition started. Since it is already
		      // destroyed, we can just leave it in detached state.
		      return
		    }
		    var staggerAmount = this.getStagger(vm, index, total, 'leave')
		    if (inDoc && staggerAmount) {
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        remove()
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      remove()
		    }
		    function remove () {
		      vm.$remove(function () {
		        vm._cleanup()
		      })
		    }
		  },
	
		  /**
		   * Get the stagger amount for an insertion/removal.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} type
		   * @param {Number} total
		   */
	
		  getStagger: function (vm, index, total, type) {
		    type = type + 'Stagger'
		    var transition = vm.$el.__v_trans
		    var hooks = transition && transition.hooks
		    var hook = hooks && (hooks[type] || hooks.stagger)
		    return hook
		      ? hook.call(vm, index, total)
		      : index * this[type]
		  },
	
		  /**
		   * Pre-process the value before piping it through the
		   * filters, and convert non-Array objects to arrays.
		   *
		   * This function will be bound to this directive instance
		   * and passed into the watcher.
		   *
		   * @param {*} value
		   * @return {Array}
		   * @private
		   */
	
		  _preProcess: function (value) {
		    // regardless of type, store the un-filtered raw value.
		    this.rawValue = value
		    var type = this.rawType = typeof value
		    if (!isPlainObject(value)) {
		      this.converted = false
		      if (type === 'number') {
		        value = range(value)
		      } else if (type === 'string') {
		        value = _.toArray(value)
		      }
		      return value || []
		    } else {
		      // convert plain object to array.
		      var keys = Object.keys(value)
		      var i = keys.length
		      var res = new Array(i)
		      var key
		      while (i--) {
		        key = keys[i]
		        res[i] = {
		          $key: key,
		          $value: value[key]
		        }
		      }
		      this.converted = true
		      return res
		    }
		  }
		}
	
		/**
		 * Helper to find the previous element that is an instance
		 * root node. This is necessary because a destroyed vm's
		 * element could still be lingering in the DOM before its
		 * leaving transition finishes, but its __vue__ reference
		 * should have been removed so we can skip them.
		 *
		 * If this is a block repeat, we want to make sure we only
		 * return vm that is bound to this v-repeat. (see #929)
		 *
		 * @param {Vue} vm
		 * @param {Comment|Text} anchor
		 * @return {Vue}
		 */
	
		function findPrevVm (vm, anchor, id) {
		  var el = vm.$el.previousSibling
		  /* istanbul ignore if */
		  if (!el) return
		  while (
		    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
		    el !== anchor
		  ) {
		    el = el.previousSibling
		  }
		  return el.__vue__
		}
	
		/**
		 * Create a range array from given number.
		 *
		 * @param {Number} n
		 * @return {Array}
		 */
	
		function range (n) {
		  var i = -1
		  var ret = new Array(n)
		  while (++i < n) {
		    ret[i] = i
		  }
		  return ret
		}
	
		/**
		 * Convert a vms array to an object ref for v-ref on an
		 * Object value.
		 *
		 * @param {Array} vms
		 * @return {Object}
		 */
	
		function toRefObject (vms) {
		  var ref = {}
		  for (var i = 0, l = vms.length; i < l; i++) {
		    ref[vms[i].$key] = vms[i]
		  }
		  return ref
		}
	
		/**
		 * Check if a value is a primitive one:
		 * String, Number, Boolean, null or undefined.
		 *
		 * @param {*} value
		 * @return {Boolean}
		 */
	
		function isPrimitive (value) {
		  var type = typeof value
		  return value == null ||
		    type === 'string' ||
		    type === 'number' ||
		    type === 'boolean'
		}
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var templateParser = __webpack_require__(22)
		var transition = __webpack_require__(30)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)
	
		module.exports = {
	
		  bind: function () {
		    var el = this.el
		    if (!el.__vue__) {
		      this.start = _.createAnchor('v-if-start')
		      this.end = _.createAnchor('v-if-end')
		      _.replace(el, this.end)
		      _.before(this.start, this.end)
		      if (_.isTemplate(el)) {
		        this.template = templateParser.parse(el, true)
		      } else {
		        this.template = document.createDocumentFragment()
		        this.template.appendChild(templateParser.clone(el))
		      }
		      // compile the nested partial
		      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML
		      this.linker = cache.get(cacheId)
		      if (!this.linker) {
		        this.linker = compiler.compile(
		          this.template,
		          this.vm.$options,
		          true // partial
		        )
		        cache.put(cacheId, this.linker)
		      }
		    } else {
		      ("development") !== 'production' && _.warn(
		        'v-if="' + this.expression + '" cannot be ' +
		        'used on an instance root element.'
		      )
		      this.invalid = true
		    }
		  },
	
		  update: function (value) {
		    if (this.invalid) return
		    if (value) {
		      // avoid duplicate compiles, since update() can be
		      // called with different truthy values
		      if (!this.unlink) {
		        this.link(
		          templateParser.clone(this.template),
		          this.linker
		        )
		      }
		    } else {
		      this.teardown()
		    }
		  },
	
		  link: function (frag, linker) {
		    var vm = this.vm
		    this.unlink = linker(vm, frag, this._host /* important */)
		    transition.blockAppend(frag, this.end, vm)
		    // call attached for all the child components created
		    // during the compilation
		    if (_.inDoc(vm.$el)) {
		      var children = this.getContainedComponents()
		      if (children) children.forEach(callAttach)
		    }
		  },
	
		  teardown: function () {
		    if (!this.unlink) return
		    // collect children beforehand
		    var children
		    if (_.inDoc(this.vm.$el)) {
		      children = this.getContainedComponents()
		    }
		    transition.blockRemove(this.start, this.end, this.vm)
		    if (children) children.forEach(callDetach)
		    this.unlink()
		    this.unlink = null
		  },
	
		  getContainedComponents: function () {
		    var vm = this._host || this.vm
		    var start = this.start.nextSibling
		    var end = this.end
	
		    function contains (c) {
		      var cur = start
		      var next
		      while (next !== end) {
		        next = cur.nextSibling
		        if (
		          cur === c.$el ||
		          cur.contains && cur.contains(c.$el)
		        ) {
		          return true
		        }
		        cur = next
		      }
		      return false
		    }
	
		    return vm.$children.length &&
		      vm.$children.filter(contains)
		  },
	
		  unbind: function () {
		    if (this.unlink) this.unlink()
		  }
	
		}
	
		function callAttach (child) {
		  if (!child._isAttached) {
		    child._callHook('attached')
		  }
		}
	
		function callDetach (child) {
		  if (child._isAttached) {
		    child._callHook('detached')
		  }
		}
	
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports.content = __webpack_require__(48)
		exports.partial = __webpack_require__(49)
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var clone = __webpack_require__(22).clone
	
		// This is the elementDirective that handles <content>
		// transclusions. It relies on the raw content of an
		// instance being stored as `$options._content` during
		// the transclude phase.
	
		module.exports = {
	
		  bind: function () {
		    var vm = this.vm
		    var host = vm
		    // we need find the content context, which is the
		    // closest non-inline-repeater instance.
		    while (host.$options._repeat) {
		      host = host.$parent
		    }
		    var raw = host.$options._content
		    var content
		    if (!raw) {
		      this.fallback()
		      return
		    }
		    var context = host._context
		    var selector = this._checkParam('select')
		    if (!selector) {
		      // Default content
		      var self = this
		      var compileDefaultContent = function () {
		        self.compile(
		          extractFragment(raw.childNodes, raw, true),
		          context,
		          vm
		        )
		      }
		      if (!host._isCompiled) {
		        // defer until the end of instance compilation,
		        // because the default outlet must wait until all
		        // other possible outlets with selectors have picked
		        // out their contents.
		        host.$once('hook:compiled', compileDefaultContent)
		      } else {
		        compileDefaultContent()
		      }
		    } else {
		      // select content
		      var nodes = raw.querySelectorAll(selector)
		      if (nodes.length) {
		        content = extractFragment(nodes, raw)
		        if (content.hasChildNodes()) {
		          this.compile(content, context, vm)
		        } else {
		          this.fallback()
		        }
		      } else {
		        this.fallback()
		      }
		    }
		  },
	
		  fallback: function () {
		    this.compile(_.extractContent(this.el, true), this.vm)
		  },
	
		  compile: function (content, context, host) {
		    if (content && context) {
		      this.unlink = context.$compile(content, host)
		    }
		    if (content) {
		      _.replace(this.el, content)
		    } else {
		      _.remove(this.el)
		    }
		  },
	
		  unbind: function () {
		    if (this.unlink) {
		      this.unlink()
		    }
		  }
		}
	
		/**
		 * Extract qualified content nodes from a node list.
		 *
		 * @param {NodeList} nodes
		 * @param {Element} parent
		 * @param {Boolean} main
		 * @return {DocumentFragment}
		 */
	
		function extractFragment (nodes, parent, main) {
		  var frag = document.createDocumentFragment()
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    var node = nodes[i]
		    // if this is the main outlet, we want to skip all
		    // previously selected nodes;
		    // otherwise, we want to mark the node as selected.
		    // clone the node so the original raw content remains
		    // intact. this ensures proper re-compilation in cases
		    // where the outlet is inside a conditional block
		    if (main && !node.__v_selected) {
		      frag.appendChild(clone(node))
		    } else if (!main && node.parentNode === parent) {
		      node.__v_selected = true
		      frag.appendChild(clone(node))
		    }
		  }
		  return frag
		}
	
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(22)
		var textParser = __webpack_require__(13)
		var compiler = __webpack_require__(10)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)
	
		// v-partial reuses logic from v-if
		var vIf = __webpack_require__(46)
	
		module.exports = {
	
		  link: vIf.link,
		  teardown: vIf.teardown,
		  getContainedComponents: vIf.getContainedComponents,
	
		  bind: function () {
		    var el = this.el
		    this.start = _.createAnchor('v-partial-start')
		    this.end = _.createAnchor('v-partial-end')
		    _.replace(el, this.end)
		    _.before(this.start, this.end)
		    var id = el.getAttribute('name')
		    var tokens = textParser.parse(id)
		    if (tokens) {
		      // dynamic partial
		      this.setupDynamic(tokens)
		    } else {
		      // static partial
		      this.insert(id)
		    }
		  },
	
		  setupDynamic: function (tokens) {
		    var self = this
		    var exp = textParser.tokensToExp(tokens)
		    this.unwatch = this.vm.$watch(exp, function (value) {
		      self.teardown()
		      self.insert(value)
		    }, {
		      immediate: true,
		      user: false
		    })
		  },
	
		  insert: function (id) {
		    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
		    if (true) {
		      _.assertAsset(partial, 'partial', id)
		    }
		    if (partial) {
		      var frag = templateParser.parse(partial, true)
		      // cache partials based on constructor id.
		      var cacheId = (this.vm.constructor.cid || '') + partial
		      var linker = this.compile(frag, cacheId)
		      // this is provided by v-if
		      this.link(frag, linker)
		    }
		  },
	
		  compile: function (frag, cacheId) {
		    var hit = cache.get(cacheId)
		    if (hit) return hit
		    var linker = compiler.compile(frag, this.vm.$options, true)
		    cache.put(cacheId, linker)
		    return linker
		  },
	
		  unbind: function () {
		    if (this.unlink) this.unlink()
		    if (this.unwatch) this.unwatch()
		  }
		}
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Stringify value.
		 *
		 * @param {Number} indent
		 */
	
		exports.json = {
		  read: function (value, indent) {
		    return typeof value === 'string'
		      ? value
		      : JSON.stringify(value, null, Number(indent) || 2)
		  },
		  write: function (value) {
		    try {
		      return JSON.parse(value)
		    } catch (e) {
		      return value
		    }
		  }
		}
	
		/**
		 * 'abc' => 'Abc'
		 */
	
		exports.capitalize = function (value) {
		  if (!value && value !== 0) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		}
	
		/**
		 * 'abc' => 'ABC'
		 */
	
		exports.uppercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toUpperCase()
		    : ''
		}
	
		/**
		 * 'AbC' => 'abc'
		 */
	
		exports.lowercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toLowerCase()
		    : ''
		}
	
		/**
		 * 12345 => $12,345.00
		 *
		 * @param {String} sign
		 */
	
		var digitsRE = /(\d{3})(?=\d)/g
		exports.currency = function (value, currency) {
		  value = parseFloat(value)
		  if (!isFinite(value) || (!value && value !== 0)) return ''
		  currency = currency != null ? currency : '$'
		  var stringified = Math.abs(value).toFixed(2)
		  var _int = stringified.slice(0, -3)
		  var i = _int.length % 3
		  var head = i > 0
		    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
		    : ''
		  var _float = stringified.slice(-3)
		  var sign = value < 0 ? '-' : ''
		  return currency + sign + head +
		    _int.slice(i).replace(digitsRE, '$1,') +
		    _float
		}
	
		/**
		 * 'item' => 'items'
		 *
		 * @params
		 *  an array of strings corresponding to
		 *  the single, double, triple ... forms of the word to
		 *  be pluralized. When the number to be pluralized
		 *  exceeds the length of the args, it will use the last
		 *  entry in the array.
		 *
		 *  e.g. ['single', 'double', 'triple', 'multiple']
		 */
	
		exports.pluralize = function (value) {
		  var args = _.toArray(arguments, 1)
		  return args.length > 1
		    ? (args[value % 10 - 1] || args[args.length - 1])
		    : (args[0] + (value === 1 ? '' : 's'))
		}
	
		/**
		 * A special filter that takes a handler function,
		 * wraps it so it only gets triggered on specific
		 * keypresses. v-on only.
		 *
		 * @param {String} key
		 */
	
		var keyCodes = {
		  esc: 27,
		  tab: 9,
		  enter: 13,
		  space: 32,
		  'delete': 46,
		  up: 38,
		  left: 37,
		  right: 39,
		  down: 40
		}
	
		exports.key = function (handler, key) {
		  if (!handler) return
		  var code = keyCodes[key]
		  if (!code) {
		    code = parseInt(key, 10)
		  }
		  return function (e) {
		    if (e.keyCode === code) {
		      return handler.call(this, e)
		    }
		  }
		}
	
		// expose keycode hash
		exports.key.keyCodes = keyCodes
	
		exports.debounce = function (handler, delay) {
		  if (!handler) return
		  if (!delay) {
		    delay = 300
		  }
		  return _.debounce(handler, delay)
		}
	
		/**
		 * Install special array filters
		 */
	
		_.extend(exports, __webpack_require__(51))
	
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Path = __webpack_require__(20)
	
		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} searchKey
		 * @param {String} [delimiter]
		 * @param {String} dataKey
		 */
	
		exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
		  if (search == null) {
		    return arr
		  }
		  if (typeof search === 'function') {
		    return arr.filter(search)
		  }
		  // cast to lowercase string
		  search = ('' + search).toLowerCase()
		  // allow optional `in` delimiter
		  // because why not
		  var n = delimiter === 'in' ? 3 : 2
		  // extract and flatten keys
		  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
		    return prev.concat(cur)
		  }, [])
		  return arr.filter(function (item) {
		    if (keys.length) {
		      return keys.some(function (key) {
		        return contains(Path.get(item, key), search)
		      })
		    } else {
		      return contains(item, search)
		    }
		  })
		}
	
		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} sortKey
		 * @param {String} reverse
		 */
	
		exports.orderBy = function (arr, sortKey, reverse) {
		  if (!sortKey) {
		    return arr
		  }
		  var order = 1
		  if (arguments.length > 2) {
		    if (reverse === '-1') {
		      order = -1
		    } else {
		      order = reverse ? -1 : 1
		    }
		  }
		  // sort on a copy to avoid mutating original array
		  return arr.slice().sort(function (a, b) {
		    if (sortKey !== '$key' && sortKey !== '$value') {
		      if (a && '$value' in a) a = a.$value
		      if (b && '$value' in b) b = b.$value
		    }
		    a = _.isObject(a) ? Path.get(a, sortKey) : a
		    b = _.isObject(b) ? Path.get(b, sortKey) : b
		    return a === b ? 0 : a > b ? order : -order
		  })
		}
	
		/**
		 * String contain helper
		 *
		 * @param {*} val
		 * @param {String} search
		 */
	
		function contains (val, search) {
		  var i
		  if (_.isPlainObject(val)) {
		    var keys = Object.keys(val)
		    i = keys.length
		    while (i--) {
		      if (contains(val[keys[i]], search)) {
		        return true
		      }
		    }
		  } else if (_.isArray(val)) {
		    i = val.length
		    while (i--) {
		      if (contains(val[i], search)) {
		        return true
		      }
		    }
		  } else if (val != null) {
		    return val.toString().toLowerCase().indexOf(search) > -1
		  }
		}
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
		var mergeOptions = __webpack_require__(1).mergeOptions
	
		/**
		 * The main init sequence. This is called for every
		 * instance, including ones that are created from extended
		 * constructors.
		 *
		 * @param {Object} options - this options object should be
		 *                           the result of merging class
		 *                           options and the options passed
		 *                           in to the constructor.
		 */
	
		exports._init = function (options) {
	
		  options = options || {}
	
		  this.$el = null
		  this.$parent = options._parent
		  this.$root = options._root || this
		  this.$children = []
		  this.$ = {}           // child vm references
		  this.$$ = {}          // element references
		  this._watchers = []   // all watchers as an array
		  this._directives = [] // all directives
		  this._childCtors = {} // inherit:true constructors
	
		  // a flag to avoid this being observed
		  this._isVue = true
	
		  // events bookkeeping
		  this._events = {}            // registered callbacks
		  this._eventsCount = {}       // for $broadcast optimization
		  this._eventCancelled = false // for event cancellation
	
		  // fragment instance properties
		  this._isFragment = false
		  this._fragmentStart =    // @type {CommentNode}
		  this._fragmentEnd = null // @type {CommentNode}
	
		  // lifecycle state
		  this._isCompiled =
		  this._isDestroyed =
		  this._isReady =
		  this._isAttached =
		  this._isBeingDestroyed = false
		  this._unlinkFn = null
	
		  // context: the scope in which the component was used,
		  // and the scope in which props and contents of this
		  // instance should be compiled in.
		  this._context =
		    options._context ||
		    options._parent
	
		  // push self into parent / transclusion host
		  if (this.$parent) {
		    this.$parent.$children.push(this)
		  }
	
		  // props used in v-repeat diffing
		  this._reused = false
		  this._staggerOp = null
	
		  // merge options.
		  options = this.$options = mergeOptions(
		    this.constructor.options,
		    options,
		    this
		  )
	
		  // initialize data as empty object.
		  // it will be filled up in _initScope().
		  this._data = {}
	
		  // initialize data observation and scope inheritance.
		  this._initScope()
	
		  // setup event system and option events.
		  this._initEvents()
	
		  // call created hook
		  this._callHook('created')
	
		  // if `el` option is passed, start compilation.
		  if (options.el) {
		    this.$mount(options.el)
		  }
		}
	
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var inDoc = _.inDoc
	
		/**
		 * Setup the instance's option events & watchers.
		 * If the value is a string, we pull it from the
		 * instance's methods by name.
		 */
	
		exports._initEvents = function () {
		  var options = this.$options
		  registerCallbacks(this, '$on', options.events)
		  registerCallbacks(this, '$watch', options.watch)
		}
	
		/**
		 * Register callbacks for option events and watchers.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {Object} hash
		 */
	
		function registerCallbacks (vm, action, hash) {
		  if (!hash) return
		  var handlers, key, i, j
		  for (key in hash) {
		    handlers = hash[key]
		    if (_.isArray(handlers)) {
		      for (i = 0, j = handlers.length; i < j; i++) {
		        register(vm, action, key, handlers[i])
		      }
		    } else {
		      register(vm, action, key, handlers)
		    }
		  }
		}
	
		/**
		 * Helper to register an event/watch callback.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {String} key
		 * @param {Function|String|Object} handler
		 * @param {Object} [options]
		 */
	
		function register (vm, action, key, handler, options) {
		  var type = typeof handler
		  if (type === 'function') {
		    vm[action](key, handler, options)
		  } else if (type === 'string') {
		    var methods = vm.$options.methods
		    var method = methods && methods[handler]
		    if (method) {
		      vm[action](key, method, options)
		    } else {
		      ("development") !== 'production' && _.warn(
		        'Unknown method: "' + handler + '" when ' +
		        'registering callback for ' + action +
		        ': "' + key + '".'
		      )
		    }
		  } else if (handler && type === 'object') {
		    register(vm, action, key, handler.handler, handler)
		  }
		}
	
		/**
		 * Setup recursive attached/detached calls
		 */
	
		exports._initDOMHooks = function () {
		  this.$on('hook:attached', onAttached)
		  this.$on('hook:detached', onDetached)
		}
	
		/**
		 * Callback to recursively call attached hook on children
		 */
	
		function onAttached () {
		  if (!this._isAttached) {
		    this._isAttached = true
		    this.$children.forEach(callAttach)
		  }
		}
	
		/**
		 * Iterator to call attached hook
		 *
		 * @param {Vue} child
		 */
	
		function callAttach (child) {
		  if (!child._isAttached && inDoc(child.$el)) {
		    child._callHook('attached')
		  }
		}
	
		/**
		 * Callback to recursively call detached hook on children
		 */
	
		function onDetached () {
		  if (this._isAttached) {
		    this._isAttached = false
		    this.$children.forEach(callDetach)
		  }
		}
	
		/**
		 * Iterator to call detached hook
		 *
		 * @param {Vue} child
		 */
	
		function callDetach (child) {
		  if (child._isAttached && !inDoc(child.$el)) {
		    child._callHook('detached')
		  }
		}
	
		/**
		 * Trigger all handlers for a hook
		 *
		 * @param {String} hook
		 */
	
		exports._callHook = function (hook) {
		  var handlers = this.$options[hook]
		  if (handlers) {
		    for (var i = 0, j = handlers.length; i < j; i++) {
		      handlers[i].call(this)
		    }
		  }
		  this.$emit('hook:' + hook)
		}
	
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var Observer = __webpack_require__(55)
		var Dep = __webpack_require__(18)
		var Watcher = __webpack_require__(17)
	
		/**
		 * Setup the scope of an instance, which contains:
		 * - observed data
		 * - computed properties
		 * - user methods
		 * - meta properties
		 */
	
		exports._initScope = function () {
		  this._initProps()
		  this._initMeta()
		  this._initMethods()
		  this._initData()
		  this._initComputed()
		}
	
		/**
		 * Initialize props.
		 */
	
		exports._initProps = function () {
		  var options = this.$options
		  var el = options.el
		  var props = options.props
		  if (props && !el) {
		    ("development") !== 'production' && _.warn(
		      'Props will not be compiled if no `el` option is ' +
		      'provided at instantiation.'
		    )
		  }
		  // make sure to convert string selectors into element now
		  el = options.el = _.query(el)
		  this._propsUnlinkFn = el && el.nodeType === 1 && props
		    ? compiler.compileAndLinkProps(
		        this, el, props
		      )
		    : null
		}
	
		/**
		 * Initialize the data.
		 */
	
		exports._initData = function () {
		  var propsData = this._data
		  var optionsDataFn = this.$options.data
		  var optionsData = optionsDataFn && optionsDataFn()
		  if (optionsData) {
		    this._data = optionsData
		    for (var prop in propsData) {
		      if (
		        this._props[prop].raw !== null ||
		        !optionsData.hasOwnProperty(prop)
		      ) {
		        optionsData.$set(prop, propsData[prop])
		      }
		    }
		  }
		  var data = this._data
		  // proxy data on instance
		  var keys = Object.keys(data)
		  var i, key
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key)) {
		      this._proxy(key)
		    }
		  }
		  // observe data
		  Observer.create(data, this)
		}
	
		/**
		 * Swap the isntance's $data. Called in $data's setter.
		 *
		 * @param {Object} newData
		 */
	
		exports._setData = function (newData) {
		  newData = newData || {}
		  var oldData = this._data
		  this._data = newData
		  var keys, key, i
		  // copy props.
		  // this should only happen during a v-repeat of component
		  // that also happens to have compiled props.
		  var props = this.$options.props
		  if (props) {
		    i = props.length
		    while (i--) {
		      key = props[i].name
		      if (key !== '$data' && !newData.hasOwnProperty(key)) {
		        newData.$set(key, oldData[key])
		      }
		    }
		  }
		  // unproxy keys not present in new data
		  keys = Object.keys(oldData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key) && !(key in newData)) {
		      this._unproxy(key)
		    }
		  }
		  // proxy keys not already proxied,
		  // and trigger change for changed values
		  keys = Object.keys(newData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
		      // new property
		      this._proxy(key)
		    }
		  }
		  oldData.__ob__.removeVm(this)
		  Observer.create(newData, this)
		  this._digest()
		}
	
		/**
		 * Proxy a property, so that
		 * vm.prop === vm._data.prop
		 *
		 * @param {String} key
		 */
	
		exports._proxy = function (key) {
		  // need to store ref to self here
		  // because these getter/setters might
		  // be called by child instances!
		  var self = this
		  Object.defineProperty(self, key, {
		    configurable: true,
		    enumerable: true,
		    get: function proxyGetter () {
		      return self._data[key]
		    },
		    set: function proxySetter (val) {
		      self._data[key] = val
		    }
		  })
		}
	
		/**
		 * Unproxy a property.
		 *
		 * @param {String} key
		 */
	
		exports._unproxy = function (key) {
		  delete this[key]
		}
	
		/**
		 * Force update on every watcher in scope.
		 */
	
		exports._digest = function () {
		  var i = this._watchers.length
		  while (i--) {
		    this._watchers[i].update(true) // shallow updates
		  }
		  var children = this.$children
		  i = children.length
		  while (i--) {
		    var child = children[i]
		    if (child.$options.inherit) {
		      child._digest()
		    }
		  }
		}
	
		/**
		 * Setup computed properties. They are essentially
		 * special getter/setters
		 */
	
		function noop () {}
		exports._initComputed = function () {
		  var computed = this.$options.computed
		  if (computed) {
		    for (var key in computed) {
		      var userDef = computed[key]
		      var def = {
		        enumerable: true,
		        configurable: true
		      }
		      if (typeof userDef === 'function') {
		        def.get = makeComputedGetter(userDef, this)
		        def.set = noop
		      } else {
		        def.get = userDef.get
		          ? userDef.cache !== false
		            ? makeComputedGetter(userDef.get, this)
		            : _.bind(userDef.get, this)
		          : noop
		        def.set = userDef.set
		          ? _.bind(userDef.set, this)
		          : noop
		      }
		      Object.defineProperty(this, key, def)
		    }
		  }
		}
	
		function makeComputedGetter (getter, owner) {
		  var watcher = new Watcher(owner, getter, null, {
		    lazy: true
		  })
		  return function computedGetter () {
		    if (watcher.dirty) {
		      watcher.evaluate()
		    }
		    if (Dep.target) {
		      watcher.depend()
		    }
		    return watcher.value
		  }
		}
	
		/**
		 * Setup instance methods. Methods must be bound to the
		 * instance since they might be called by children
		 * inheriting them.
		 */
	
		exports._initMethods = function () {
		  var methods = this.$options.methods
		  if (methods) {
		    for (var key in methods) {
		      this[key] = _.bind(methods[key], this)
		    }
		  }
		}
	
		/**
		 * Initialize meta information like $index, $key & $value.
		 */
	
		exports._initMeta = function () {
		  var metas = this.$options._meta
		  if (metas) {
		    for (var key in metas) {
		      this._defineMeta(key, metas[key])
		    }
		  }
		}
	
		/**
		 * Define a meta property, e.g $index, $key, $value
		 * which only exists on the vm instance but not in $data.
		 *
		 * @param {String} key
		 * @param {*} value
		 */
	
		exports._defineMeta = function (key, value) {
		  var dep = new Dep()
		  Object.defineProperty(this, key, {
		    get: function metaGetter () {
		      if (Dep.target) {
		        dep.depend()
		      }
		      return value
		    },
		    set: function metaSetter (val) {
		      if (val !== value) {
		        value = val
		        dep.notify()
		      }
		    }
		  })
		}
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Dep = __webpack_require__(18)
		var arrayMethods = __webpack_require__(56)
		var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
		__webpack_require__(57)
	
		/**
		 * Observer class that are attached to each observed
		 * object. Once attached, the observer converts target
		 * object's property keys into getter/setters that
		 * collect dependencies and dispatches updates.
		 *
		 * @param {Array|Object} value
		 * @constructor
		 */
	
		function Observer (value) {
		  this.value = value
		  this.dep = new Dep()
		  _.define(value, '__ob__', this)
		  if (_.isArray(value)) {
		    var augment = config.proto && _.hasProto
		      ? protoAugment
		      : copyAugment
		    augment(value, arrayMethods, arrayKeys)
		    this.observeArray(value)
		  } else {
		    this.walk(value)
		  }
		}
	
		// Static methods
	
		/**
		 * Attempt to create an observer instance for a value,
		 * returns the new observer if successfully observed,
		 * or the existing observer if the value already has one.
		 *
		 * @param {*} value
		 * @param {Vue} [vm]
		 * @return {Observer|undefined}
		 * @static
		 */
	
		Observer.create = function (value, vm) {
		  var ob
		  if (
		    value &&
		    value.hasOwnProperty('__ob__') &&
		    value.__ob__ instanceof Observer
		  ) {
		    ob = value.__ob__
		  } else if (
		    (_.isArray(value) || _.isPlainObject(value)) &&
		    !Object.isFrozen(value) &&
		    !value._isVue
		  ) {
		    ob = new Observer(value)
		  }
		  if (ob && vm) {
		    ob.addVm(vm)
		  }
		  return ob
		}
	
		// Instance methods
	
		/**
		 * Walk through each property and convert them into
		 * getter/setters. This method should only be called when
		 * value type is Object. Properties prefixed with `$` or `_`
		 * and accessor properties are ignored.
		 *
		 * @param {Object} obj
		 */
	
		Observer.prototype.walk = function (obj) {
		  var keys = Object.keys(obj)
		  var i = keys.length
		  while (i--) {
		    this.convert(keys[i], obj[keys[i]])
		  }
		}
	
		/**
		 * Try to carete an observer for a child value,
		 * and if value is array, link dep to the array.
		 *
		 * @param {*} val
		 * @return {Dep|undefined}
		 */
	
		Observer.prototype.observe = function (val) {
		  return Observer.create(val)
		}
	
		/**
		 * Observe a list of Array items.
		 *
		 * @param {Array} items
		 */
	
		Observer.prototype.observeArray = function (items) {
		  var i = items.length
		  while (i--) {
		    var ob = this.observe(items[i])
		    if (ob) {
		      (ob.parents || (ob.parents = [])).push(this)
		    }
		  }
		}
	
		/**
		 * Remove self from the parent list of removed objects.
		 *
		 * @param {Array} items
		 */
	
		Observer.prototype.unobserveArray = function (items) {
		  var i = items.length
		  while (i--) {
		    var ob = items[i] && items[i].__ob__
		    if (ob) {
		      ob.parents.$remove(this)
		    }
		  }
		}
	
		/**
		 * Notify self dependency, and also parent Array dependency
		 * if any.
		 */
	
		Observer.prototype.notify = function () {
		  this.dep.notify()
		  var parents = this.parents
		  if (parents) {
		    var i = parents.length
		    while (i--) {
		      parents[i].notify()
		    }
		  }
		}
	
		/**
		 * Convert a property into getter/setter so we can emit
		 * the events when the property is accessed/changed.
		 *
		 * @param {String} key
		 * @param {*} val
		 */
	
		Observer.prototype.convert = function (key, val) {
		  var ob = this
		  var childOb = ob.observe(val)
		  var dep = new Dep()
		  Object.defineProperty(ob.value, key, {
		    enumerable: true,
		    configurable: true,
		    get: function () {
		      if (Dep.target) {
		        dep.depend()
		        if (childOb) {
		          childOb.dep.depend()
		        }
		      }
		      return val
		    },
		    set: function (newVal) {
		      if (newVal === val) return
		      val = newVal
		      childOb = ob.observe(newVal)
		      dep.notify()
		    }
		  })
		}
	
		/**
		 * Add an owner vm, so that when $add/$delete mutations
		 * happen we can notify owner vms to proxy the keys and
		 * digest the watchers. This is only called when the object
		 * is observed as an instance's root $data.
		 *
		 * @param {Vue} vm
		 */
	
		Observer.prototype.addVm = function (vm) {
		  (this.vms || (this.vms = [])).push(vm)
		}
	
		/**
		 * Remove an owner vm. This is called when the object is
		 * swapped out as an instance's $data object.
		 *
		 * @param {Vue} vm
		 */
	
		Observer.prototype.removeVm = function (vm) {
		  this.vms.$remove(vm)
		}
	
		// helpers
	
		/**
		 * Augment an target Object or Array by intercepting
		 * the prototype chain using __proto__
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */
	
		function protoAugment (target, src) {
		  target.__proto__ = src
		}
	
		/**
		 * Augment an target Object or Array by defining
		 * hidden properties.
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */
	
		function copyAugment (target, src, keys) {
		  var i = keys.length
		  var key
		  while (i--) {
		    key = keys[i]
		    _.define(target, key, src[key])
		  }
		}
	
		module.exports = Observer
	
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var arrayProto = Array.prototype
		var arrayMethods = Object.create(arrayProto)
	
		/**
		 * Intercept mutating methods and emit events
		 */
	
		;[
		  'push',
		  'pop',
		  'shift',
		  'unshift',
		  'splice',
		  'sort',
		  'reverse'
		]
		.forEach(function (method) {
		  // cache original method
		  var original = arrayProto[method]
		  _.define(arrayMethods, method, function mutator () {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i]
		    }
		    var result = original.apply(this, args)
		    var ob = this.__ob__
		    var inserted, removed
		    switch (method) {
		      case 'push':
		        inserted = args
		        break
		      case 'unshift':
		        inserted = args
		        break
		      case 'splice':
		        inserted = args.slice(2)
		        removed = result
		        break
		      case 'pop':
		      case 'shift':
		        removed = [result]
		        break
		    }
		    if (inserted) ob.observeArray(inserted)
		    if (removed) ob.unobserveArray(removed)
		    // notify change
		    ob.notify()
		    return result
		  })
		})
	
		/**
		 * Swap the element at the given index with a new value
		 * and emits corresponding event.
		 *
		 * @param {Number} index
		 * @param {*} val
		 * @return {*} - replaced element
		 */
	
		_.define(
		  arrayProto,
		  '$set',
		  function $set (index, val) {
		    if (index >= this.length) {
		      this.length = index + 1
		    }
		    return this.splice(index, 1, val)[0]
		  }
		)
	
		/**
		 * Convenience method to remove the element at given index.
		 *
		 * @param {Number} index
		 * @param {*} val
		 */
	
		_.define(
		  arrayProto,
		  '$remove',
		  function $remove (index) {
		    /* istanbul ignore if */
		    if (!this.length) return
		    if (typeof index !== 'number') {
		      index = _.indexOf(this, index)
		    }
		    if (index > -1) {
		      return this.splice(index, 1)
		    }
		  }
		)
	
		module.exports = arrayMethods
	
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var objProto = Object.prototype
	
		/**
		 * Add a new property to an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */
	
		_.define(
		  objProto,
		  '$add',
		  function $add (key, val) {
		    if (this.hasOwnProperty(key)) return
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      this[key] = val
		      return
		    }
		    ob.convert(key, val)
		    ob.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._proxy(key)
		        vm._digest()
		      }
		    }
		  }
		)
	
		/**
		 * Set a property on an observed object, calling add to
		 * ensure the property is observed.
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */
	
		_.define(
		  objProto,
		  '$set',
		  function $set (key, val) {
		    this.$add(key, val)
		    this[key] = val
		  }
		)
	
		/**
		 * Deletes a property from an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @public
		 */
	
		_.define(
		  objProto,
		  '$delete',
		  function $delete (key) {
		    if (!this.hasOwnProperty(key)) return
		    delete this[key]
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      return
		    }
		    ob.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._unproxy(key)
		        vm._digest()
		      }
		    }
		  }
		)
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var Directive = __webpack_require__(59)
		var compiler = __webpack_require__(10)
	
		/**
		 * Transclude, compile and link element.
		 *
		 * If a pre-compiled linker is available, that means the
		 * passed in element will be pre-transcluded and compiled
		 * as well - all we need to do is to call the linker.
		 *
		 * Otherwise we need to call transclude/compile/link here.
		 *
		 * @param {Element} el
		 * @return {Element}
		 */
	
		exports._compile = function (el) {
		  var options = this.$options
		  var host = this._host
		  if (options._linkFn) {
		    // pre-transcluded with linker, just use it
		    this._initElement(el)
		    this._unlinkFn = options._linkFn(this, el, host)
		  } else {
		    // transclude and init element
		    // transclude can potentially replace original
		    // so we need to keep reference; this step also injects
		    // the template and caches the original attributes
		    // on the container node and replacer node.
		    var original = el
		    el = compiler.transclude(el, options)
		    this._initElement(el)
	
		    // root is always compiled per-instance, because
		    // container attrs and props can be different every time.
		    var rootLinker = compiler.compileRoot(el, options)
	
		    // compile and link the rest
		    var contentLinkFn
		    var ctor = this.constructor
		    // component compilation can be cached
		    // as long as it's not using inline-template
		    if (options._linkerCachable) {
		      contentLinkFn = ctor.linker
		      if (!contentLinkFn) {
		        contentLinkFn = ctor.linker = compiler.compile(el, options)
		      }
		    }
	
		    // link phase
		    var rootUnlinkFn = rootLinker(this, el)
		    var contentUnlinkFn = contentLinkFn
		      ? contentLinkFn(this, el)
		      : compiler.compile(el, options)(this, el, host)
	
		    // register composite unlink function
		    // to be called during instance destruction
		    this._unlinkFn = function () {
		      rootUnlinkFn()
		      // passing destroying: true to avoid searching and
		      // splicing the directives
		      contentUnlinkFn(true)
		    }
	
		    // finally replace original
		    if (options.replace) {
		      _.replace(original, el)
		    }
		  }
		  return el
		}
	
		/**
		 * Initialize instance element. Called in the public
		 * $mount() method.
		 *
		 * @param {Element} el
		 */
	
		exports._initElement = function (el) {
		  if (el instanceof DocumentFragment) {
		    this._isFragment = true
		    this.$el = this._fragmentStart = el.firstChild
		    this._fragmentEnd = el.lastChild
		    // set persisted text anchors to empty
		    if (this._fragmentStart.nodeType === 3) {
		      this._fragmentStart.data = this._fragmentEnd.data = ''
		    }
		    this._blockFragment = el
		  } else {
		    this.$el = el
		  }
		  this.$el.__vue__ = this
		  this._callHook('beforeCompile')
		}
	
		/**
		 * Create and bind a directive to an element.
		 *
		 * @param {String} name - directive name
		 * @param {Node} node   - target node
		 * @param {Object} desc - parsed directive descriptor
		 * @param {Object} def  - directive definition object
		 * @param {Vue|undefined} host - transclusion host component
		 */
	
		exports._bindDir = function (name, node, desc, def, host) {
		  this._directives.push(
		    new Directive(name, node, this, desc, def, host)
		  )
		}
	
		/**
		 * Teardown an instance, unobserves the data, unbind all the
		 * directives, turn off all the event listeners, etc.
		 *
		 * @param {Boolean} remove - whether to remove the DOM node.
		 * @param {Boolean} deferCleanup - if true, defer cleanup to
		 *                                 be called later
		 */
	
		exports._destroy = function (remove, deferCleanup) {
		  if (this._isBeingDestroyed) {
		    return
		  }
		  this._callHook('beforeDestroy')
		  this._isBeingDestroyed = true
		  var i
		  // remove self from parent. only necessary
		  // if parent is not being destroyed as well.
		  var parent = this.$parent
		  if (parent && !parent._isBeingDestroyed) {
		    parent.$children.$remove(this)
		  }
		  // destroy all children.
		  i = this.$children.length
		  while (i--) {
		    this.$children[i].$destroy()
		  }
		  // teardown props
		  if (this._propsUnlinkFn) {
		    this._propsUnlinkFn()
		  }
		  // teardown all directives. this also tearsdown all
		  // directive-owned watchers.
		  if (this._unlinkFn) {
		    this._unlinkFn()
		  }
		  i = this._watchers.length
		  while (i--) {
		    this._watchers[i].teardown()
		  }
		  // remove reference to self on $el
		  if (this.$el) {
		    this.$el.__vue__ = null
		  }
		  // remove DOM element
		  var self = this
		  if (remove && this.$el) {
		    this.$remove(function () {
		      self._cleanup()
		    })
		  } else if (!deferCleanup) {
		    this._cleanup()
		  }
		}
	
		/**
		 * Clean up to ensure garbage collection.
		 * This is called after the leave transition if there
		 * is any.
		 */
	
		exports._cleanup = function () {
		  // remove reference from data ob
		  // frozen object may not have observer.
		  if (this._data.__ob__) {
		    this._data.__ob__.removeVm(this)
		  }
		  // Clean up references to private properties and other
		  // instances. preserve reference to _data so that proxy
		  // accessors still work. The only potential side effect
		  // here is that mutating the instance after it's destroyed
		  // may affect the state of other components that are still
		  // observing the same object, but that seems to be a
		  // reasonable responsibility for the user rather than
		  // always throwing an error on them.
		  this.$el =
		  this.$parent =
		  this.$root =
		  this.$children =
		  this._watchers =
		  this._directives = null
		  // call the last hook...
		  this._isDestroyed = true
		  this._callHook('destroyed')
		  // turn off all instance listeners.
		  this.$off()
		}
	
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Watcher = __webpack_require__(17)
		var textParser = __webpack_require__(13)
		var expParser = __webpack_require__(19)
		function noop () {}
	
		/**
		 * A directive links a DOM element with a piece of data,
		 * which is the result of evaluating an expression.
		 * It registers a watcher with the expression and calls
		 * the DOM update function when a change is triggered.
		 *
		 * @param {String} name
		 * @param {Node} el
		 * @param {Vue} vm
		 * @param {Object} descriptor
		 *                 - {String} expression
		 *                 - {String} [arg]
		 *                 - {Array<Object>} [filters]
		 * @param {Object} def - directive definition object
		 * @param {Vue|undefined} host - transclusion host target
		 * @constructor
		 */
	
		function Directive (name, el, vm, descriptor, def, host) {
		  // public
		  this.name = name
		  this.el = el
		  this.vm = vm
		  // copy descriptor props
		  this.raw = descriptor.raw
		  this.expression = descriptor.expression
		  this.arg = descriptor.arg
		  this.filters = descriptor.filters
		  // private
		  this._descriptor = descriptor
		  this._host = host
		  this._locked = false
		  this._bound = false
		  this._listeners = null
		  // init
		  this._bind(def)
		}
	
		/**
		 * Initialize the directive, mixin definition properties,
		 * setup the watcher, call definition bind() and update()
		 * if present.
		 *
		 * @param {Object} def
		 */
	
		Directive.prototype._bind = function (def) {
		  if (
		    (this.name !== 'cloak' || this.vm._isCompiled) &&
		    this.el && this.el.removeAttribute
		  ) {
		    this.el.removeAttribute(config.prefix + this.name)
		  }
		  if (typeof def === 'function') {
		    this.update = def
		  } else {
		    _.extend(this, def)
		  }
		  this._watcherExp = this.expression
		  this._checkDynamicLiteral()
		  if (this.bind) {
		    this.bind()
		  }
		  if (this._watcherExp &&
		      (this.update || this.twoWay) &&
		      (!this.isLiteral || this._isDynamicLiteral) &&
		      !this._checkStatement()) {
		    // wrapped updater for context
		    var dir = this
		    if (this.update) {
		      this._update = function (val, oldVal) {
		        if (!dir._locked) {
		          dir.update(val, oldVal)
		        }
		      }
		    } else {
		      this._update = noop
		    }
		    // pre-process hook called before the value is piped
		    // through the filters. used in v-repeat.
		    var preProcess = this._preProcess
		      ? _.bind(this._preProcess, this)
		      : null
		    var watcher = this._watcher = new Watcher(
		      this.vm,
		      this._watcherExp,
		      this._update, // callback
		      {
		        filters: this.filters,
		        twoWay: this.twoWay,
		        deep: this.deep,
		        preProcess: preProcess
		      }
		    )
		    if (this._initValue != null) {
		      watcher.set(this._initValue)
		    } else if (this.update) {
		      this.update(watcher.value)
		    }
		  }
		  this._bound = true
		}
	
		/**
		 * check if this is a dynamic literal binding.
		 *
		 * e.g. v-component="{{currentView}}"
		 */
	
		Directive.prototype._checkDynamicLiteral = function () {
		  var expression = this.expression
		  if (expression && this.isLiteral) {
		    var tokens = textParser.parse(expression)
		    if (tokens) {
		      var exp = textParser.tokensToExp(tokens)
		      this.expression = this.vm.$get(exp)
		      this._watcherExp = exp
		      this._isDynamicLiteral = true
		    }
		  }
		}
	
		/**
		 * Check if the directive is a function caller
		 * and if the expression is a callable one. If both true,
		 * we wrap up the expression and use it as the event
		 * handler.
		 *
		 * e.g. v-on="click: a++"
		 *
		 * @return {Boolean}
		 */
	
		Directive.prototype._checkStatement = function () {
		  var expression = this.expression
		  if (
		    expression && this.acceptStatement &&
		    !expParser.isSimplePath(expression)
		  ) {
		    var fn = expParser.parse(expression).get
		    var vm = this.vm
		    var handler = function () {
		      fn.call(vm, vm)
		    }
		    if (this.filters) {
		      handler = vm._applyFilters(handler, null, this.filters)
		    }
		    this.update(handler)
		    return true
		  }
		}
	
		/**
		 * Check for an attribute directive param, e.g. lazy
		 *
		 * @param {String} name
		 * @return {String}
		 */
	
		Directive.prototype._checkParam = function (name) {
		  var param = this.el.getAttribute(name)
		  if (param !== null) {
		    this.el.removeAttribute(name)
		    param = this.vm.$interpolate(param)
		  }
		  return param
		}
	
		/**
		 * Set the corresponding value with the setter.
		 * This should only be used in two-way directives
		 * e.g. v-model.
		 *
		 * @param {*} value
		 * @public
		 */
	
		Directive.prototype.set = function (value) {
		  /* istanbul ignore else */
		  if (this.twoWay) {
		    this._withLock(function () {
		      this._watcher.set(value)
		    })
		  } else if (true) {
		    _.warn(
		      'Directive.set() can only be used inside twoWay' +
		      'directives.'
		    )
		  }
		}
	
		/**
		 * Execute a function while preventing that function from
		 * triggering updates on this directive instance.
		 *
		 * @param {Function} fn
		 */
	
		Directive.prototype._withLock = function (fn) {
		  var self = this
		  self._locked = true
		  fn.call(self)
		  _.nextTick(function () {
		    self._locked = false
		  })
		}
	
		/**
		 * Convenience method that attaches a DOM event listener
		 * to the directive element and autometically tears it down
		 * during unbind.
		 *
		 * @param {String} event
		 * @param {Function} handler
		 */
	
		Directive.prototype.on = function (event, handler) {
		  _.on(this.el, event, handler)
		  ;(this._listeners || (this._listeners = []))
		    .push([event, handler])
		}
	
		/**
		 * Teardown the watcher and call unbind.
		 */
	
		Directive.prototype._teardown = function () {
		  if (this._bound) {
		    this._bound = false
		    if (this.unbind) {
		      this.unbind()
		    }
		    if (this._watcher) {
		      this._watcher.teardown()
		    }
		    var listeners = this._listeners
		    if (listeners) {
		      for (var i = 0; i < listeners.length; i++) {
		        _.off(this.el, listeners[i][0], listeners[i][1])
		      }
		    }
		    this.vm = this.el =
		    this._watcher = this._listeners = null
		  }
		}
	
		module.exports = Directive
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Apply a list of filter (descriptors) to a value.
		 * Using plain for loops here because this will be called in
		 * the getter of any watcher with filters so it is very
		 * performance sensitive.
		 *
		 * @param {*} value
		 * @param {*} [oldValue]
		 * @param {Array} filters
		 * @param {Boolean} write
		 * @return {*}
		 */
	
		exports._applyFilters = function (value, oldValue, filters, write) {
		  var filter, fn, args, arg, offset, i, l, j, k
		  for (i = 0, l = filters.length; i < l; i++) {
		    filter = filters[i]
		    fn = _.resolveAsset(this.$options, 'filters', filter.name)
		    if (true) {
		      _.assertAsset(fn, 'filter', filter.name)
		    }
		    if (!fn) continue
		    fn = write ? fn.write : (fn.read || fn)
		    if (typeof fn !== 'function') continue
		    args = write ? [value, oldValue] : [value]
		    offset = write ? 2 : 1
		    if (filter.args) {
		      for (j = 0, k = filter.args.length; j < k; j++) {
		        arg = filter.args[j]
		        args[j + offset] = arg.dynamic
		          ? this.$get(arg.value)
		          : arg.value
		      }
		    }
		    value = fn.apply(this, args)
		  }
		  return value
		}
	
		/**
		 * Resolve a component, depending on whether the component
		 * is defined normally or using an async factory function.
		 * Resolves synchronously if already resolved, otherwise
		 * resolves asynchronously and caches the resolved
		 * constructor on the factory.
		 *
		 * @param {String} id
		 * @param {Function} cb
		 */
	
		exports._resolveComponent = function (id, cb) {
		  var factory = _.resolveAsset(this.$options, 'components', id)
		  if (true) {
		    _.assertAsset(factory, 'component', id)
		  }
		  if (!factory) {
		    return
		  }
		  // async component factory
		  if (!factory.options) {
		    if (factory.resolved) {
		      // cached
		      cb(factory.resolved)
		    } else if (factory.requested) {
		      // pool callbacks
		      factory.pendingCallbacks.push(cb)
		    } else {
		      factory.requested = true
		      var cbs = factory.pendingCallbacks = [cb]
		      factory(function resolve (res) {
		        if (_.isPlainObject(res)) {
		          res = _.Vue.extend(res)
		        }
		        // cache resolved
		        factory.resolved = res
		        // invoke callbacks
		        for (var i = 0, l = cbs.length; i < l; i++) {
		          cbs[i](res)
		        }
		      }, function reject (reason) {
		        ("development") !== 'production' && _.warn(
		          'Failed to resolve async component: ' + id + '. ' +
		          (reason ? '\nReason: ' + reason : '')
		        )
		      })
		    }
		  } else {
		    // normal component
		    cb(factory)
		  }
		}
	
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Watcher = __webpack_require__(17)
		var Path = __webpack_require__(20)
		var textParser = __webpack_require__(13)
		var dirParser = __webpack_require__(15)
		var expParser = __webpack_require__(19)
		var filterRE = /[^|]\|[^|]/
	
		/**
		 * Get the value from an expression on this vm.
		 *
		 * @param {String} exp
		 * @return {*}
		 */
	
		exports.$get = function (exp) {
		  var res = expParser.parse(exp)
		  if (res) {
		    try {
		      return res.get.call(this, this)
		    } catch (e) {}
		  }
		}
	
		/**
		 * Set the value from an expression on this vm.
		 * The expression must be a valid left-hand
		 * expression in an assignment.
		 *
		 * @param {String} exp
		 * @param {*} val
		 */
	
		exports.$set = function (exp, val) {
		  var res = expParser.parse(exp, true)
		  if (res && res.set) {
		    res.set.call(this, this, val)
		  }
		}
	
		/**
		 * Add a property on the VM
		 *
		 * @param {String} key
		 * @param {*} val
		 */
	
		exports.$add = function (key, val) {
		  this._data.$add(key, val)
		}
	
		/**
		 * Delete a property on the VM
		 *
		 * @param {String} key
		 */
	
		exports.$delete = function (key) {
		  this._data.$delete(key)
		}
	
		/**
		 * Watch an expression, trigger callback when its
		 * value changes.
		 *
		 * @param {String|Function} expOrFn
		 * @param {Function} cb
		 * @param {Object} [options]
		 *                 - {Boolean} deep
		 *                 - {Boolean} immediate
		 *                 - {Boolean} user
		 * @return {Function} - unwatchFn
		 */
	
		exports.$watch = function (expOrFn, cb, options) {
		  var vm = this
		  var parsed
		  if (typeof expOrFn === 'string') {
		    parsed = dirParser.parse(expOrFn)[0]
		    expOrFn = parsed.expression
		  }
		  var watcher = new Watcher(vm, expOrFn, cb, {
		    deep: options && options.deep,
		    user: !options || options.user !== false,
		    filters: parsed && parsed.filters
		  })
		  if (options && options.immediate) {
		    cb.call(vm, watcher.value)
		  }
		  return function unwatchFn () {
		    watcher.teardown()
		  }
		}
	
		/**
		 * Evaluate a text directive, including filters.
		 *
		 * @param {String} text
		 * @return {String}
		 */
	
		exports.$eval = function (text) {
		  // check for filters.
		  if (filterRE.test(text)) {
		    var dir = dirParser.parse(text)[0]
		    // the filter regex check might give false positive
		    // for pipes inside strings, so it's possible that
		    // we don't get any filters here
		    var val = this.$get(dir.expression)
		    return dir.filters
		      ? this._applyFilters(val, null, dir.filters)
		      : val
		  } else {
		    // no filter
		    return this.$get(text)
		  }
		}
	
		/**
		 * Interpolate a piece of template text.
		 *
		 * @param {String} text
		 * @return {String}
		 */
	
		exports.$interpolate = function (text) {
		  var tokens = textParser.parse(text)
		  var vm = this
		  if (tokens) {
		    if (tokens.length === 1) {
		      return vm.$eval(tokens[0].value) + ''
		    } else {
		      return tokens.map(function (token) {
		        return token.tag
		          ? vm.$eval(token.value)
		          : token.value
		      }).join('')
		    }
		  } else {
		    return text
		  }
		}
	
		/**
		 * Log instance data as a plain JS object
		 * so that it is easier to inspect in console.
		 * This method assumes console is available.
		 *
		 * @param {String} [path]
		 */
	
		exports.$log = function (path) {
		  var data = path
		    ? Path.get(this._data, path)
		    : this._data
		  if (data) {
		    data = JSON.parse(JSON.stringify(data))
		  }
		  console.log(data)
		}
	
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var transition = __webpack_require__(30)
	
		/**
		 * Convenience on-instance nextTick. The callback is
		 * auto-bound to the instance, and this avoids component
		 * modules having to rely on the global Vue.
		 *
		 * @param {Function} fn
		 */
	
		exports.$nextTick = function (fn) {
		  _.nextTick(fn, this)
		}
	
		/**
		 * Append instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */
	
		exports.$appendTo = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    append, transition.append
		  )
		}
	
		/**
		 * Prepend instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */
	
		exports.$prependTo = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.hasChildNodes()) {
		    this.$before(target.firstChild, cb, withTransition)
		  } else {
		    this.$appendTo(target, cb, withTransition)
		  }
		  return this
		}
	
		/**
		 * Insert instance before target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */
	
		exports.$before = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    before, transition.before
		  )
		}
	
		/**
		 * Insert instance after target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */
	
		exports.$after = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.nextSibling) {
		    this.$before(target.nextSibling, cb, withTransition)
		  } else {
		    this.$appendTo(target.parentNode, cb, withTransition)
		  }
		  return this
		}
	
		/**
		 * Remove instance from DOM
		 *
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */
	
		exports.$remove = function (cb, withTransition) {
		  if (!this.$el.parentNode) {
		    return cb && cb()
		  }
		  var inDoc = this._isAttached && _.inDoc(this.$el)
		  // if we are not in document, no need to check
		  // for transitions
		  if (!inDoc) withTransition = false
		  var op
		  var self = this
		  var realCb = function () {
		    if (inDoc) self._callHook('detached')
		    if (cb) cb()
		  }
		  if (
		    this._isFragment &&
		    !this._blockFragment.hasChildNodes()
		  ) {
		    op = withTransition === false
		      ? append
		      : transition.removeThenAppend
		    blockOp(this, this._blockFragment, op, realCb)
		  } else {
		    op = withTransition === false
		      ? remove
		      : transition.remove
		    op(this.$el, this, realCb)
		  }
		  return this
		}
	
		/**
		 * Shared DOM insertion function.
		 *
		 * @param {Vue} vm
		 * @param {Element} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition]
		 * @param {Function} op1 - op for non-transition insert
		 * @param {Function} op2 - op for transition insert
		 * @return vm
		 */
	
		function insert (vm, target, cb, withTransition, op1, op2) {
		  target = query(target)
		  var targetIsDetached = !_.inDoc(target)
		  var op = withTransition === false || targetIsDetached
		    ? op1
		    : op2
		  var shouldCallHook =
		    !targetIsDetached &&
		    !vm._isAttached &&
		    !_.inDoc(vm.$el)
		  if (vm._isFragment) {
		    blockOp(vm, target, op, cb)
		  } else {
		    op(vm.$el, target, vm, cb)
		  }
		  if (shouldCallHook) {
		    vm._callHook('attached')
		  }
		  return vm
		}
	
		/**
		 * Execute a transition operation on a fragment instance,
		 * iterating through all its block nodes.
		 *
		 * @param {Vue} vm
		 * @param {Node} target
		 * @param {Function} op
		 * @param {Function} cb
		 */
	
		function blockOp (vm, target, op, cb) {
		  var current = vm._fragmentStart
		  var end = vm._fragmentEnd
		  var next
		  while (next !== end) {
		    next = current.nextSibling
		    op(current, target, vm)
		    current = next
		  }
		  op(end, target, vm, cb)
		}
	
		/**
		 * Check for selectors
		 *
		 * @param {String|Element} el
		 */
	
		function query (el) {
		  return typeof el === 'string'
		    ? document.querySelector(el)
		    : el
		}
	
		/**
		 * Append operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */
	
		function append (el, target, vm, cb) {
		  target.appendChild(el)
		  if (cb) cb()
		}
	
		/**
		 * InsertBefore operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */
	
		function before (el, target, vm, cb) {
		  _.before(el, target)
		  if (cb) cb()
		}
	
		/**
		 * Remove operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */
	
		function remove (el, vm, cb) {
		  _.remove(el)
		  if (cb) cb()
		}
	
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */
	
		exports.$on = function (event, fn) {
		  (this._events[event] || (this._events[event] = []))
		    .push(fn)
		  modifyListenerCount(this, event, 1)
		  return this
		}
	
		/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */
	
		exports.$once = function (event, fn) {
		  var self = this
		  function on () {
		    self.$off(event, on)
		    fn.apply(this, arguments)
		  }
		  on.fn = fn
		  this.$on(event, on)
		  return this
		}
	
		/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */
	
		exports.$off = function (event, fn) {
		  var cbs
		  // all
		  if (!arguments.length) {
		    if (this.$parent) {
		      for (event in this._events) {
		        cbs = this._events[event]
		        if (cbs) {
		          modifyListenerCount(this, event, -cbs.length)
		        }
		      }
		    }
		    this._events = {}
		    return this
		  }
		  // specific event
		  cbs = this._events[event]
		  if (!cbs) {
		    return this
		  }
		  if (arguments.length === 1) {
		    modifyListenerCount(this, event, -cbs.length)
		    this._events[event] = null
		    return this
		  }
		  // specific handler
		  var cb
		  var i = cbs.length
		  while (i--) {
		    cb = cbs[i]
		    if (cb === fn || cb.fn === fn) {
		      modifyListenerCount(this, event, -1)
		      cbs.splice(i, 1)
		      break
		    }
		  }
		  return this
		}
	
		/**
		 * Trigger an event on self.
		 *
		 * @param {String} event
		 */
	
		exports.$emit = function (event) {
		  this._eventCancelled = false
		  var cbs = this._events[event]
		  if (cbs) {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length - 1
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i + 1]
		    }
		    i = 0
		    cbs = cbs.length > 1
		      ? _.toArray(cbs)
		      : cbs
		    for (var l = cbs.length; i < l; i++) {
		      if (cbs[i].apply(this, args) === false) {
		        this._eventCancelled = true
		      }
		    }
		  }
		  return this
		}
	
		/**
		 * Recursively broadcast an event to all children instances.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */
	
		exports.$broadcast = function (event) {
		  // if no child has registered for this event,
		  // then there's no need to broadcast.
		  if (!this._eventsCount[event]) return
		  var children = this.$children
		  for (var i = 0, l = children.length; i < l; i++) {
		    var child = children[i]
		    child.$emit.apply(child, arguments)
		    if (!child._eventCancelled) {
		      child.$broadcast.apply(child, arguments)
		    }
		  }
		  return this
		}
	
		/**
		 * Recursively propagate an event up the parent chain.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */
	
		exports.$dispatch = function () {
		  var parent = this.$parent
		  while (parent) {
		    parent.$emit.apply(parent, arguments)
		    parent = parent._eventCancelled
		      ? null
		      : parent.$parent
		  }
		  return this
		}
	
		/**
		 * Modify the listener counts on all parents.
		 * This bookkeeping allows $broadcast to return early when
		 * no child has listened to a certain event.
		 *
		 * @param {Vue} vm
		 * @param {String} event
		 * @param {Number} count
		 */
	
		var hookRE = /^hook:/
		function modifyListenerCount (vm, event, count) {
		  var parent = vm.$parent
		  // hooks do not get broadcasted so no need
		  // to do bookkeeping for them
		  if (!parent || !count || hookRE.test(event)) return
		  while (parent) {
		    parent._eventsCount[event] =
		      (parent._eventsCount[event] || 0) + count
		    parent = parent.$parent
		  }
		}
	
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
	
		/**
		 * Create a child instance that prototypally inherits
		 * data on parent. To achieve that we create an intermediate
		 * constructor with its prototype pointing to parent.
		 *
		 * @param {Object} opts
		 * @param {Function} [BaseCtor]
		 * @return {Vue}
		 * @public
		 */
	
		exports.$addChild = function (opts, BaseCtor) {
		  BaseCtor = BaseCtor || _.Vue
		  opts = opts || {}
		  var ChildVue
		  var parent = this
		  // transclusion context
		  var context = opts._context || parent
		  var inherit = opts.inherit !== undefined
		    ? opts.inherit
		    : BaseCtor.options.inherit
		  if (inherit) {
		    var ctors = context._childCtors
		    ChildVue = ctors[BaseCtor.cid]
		    if (!ChildVue) {
		      var optionName = BaseCtor.options.name
		      var className = optionName
		        ? _.classify(optionName)
		        : 'VueComponent'
		      ChildVue = new Function(
		        'return function ' + className + ' (options) {' +
		        'this.constructor = ' + className + ';' +
		        'this._init(options) }'
		      )()
		      ChildVue.options = BaseCtor.options
		      ChildVue.linker = BaseCtor.linker
		      ChildVue.prototype = context
		      ctors[BaseCtor.cid] = ChildVue
		    }
		  } else {
		    ChildVue = BaseCtor
		  }
		  opts._parent = parent
		  opts._root = parent.$root
		  var child = new ChildVue(opts)
		  return child
		}
	
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
	
		/**
		 * Set instance target element and kick off the compilation
		 * process. The passed in `el` can be a selector string, an
		 * existing Element, or a DocumentFragment (for block
		 * instances).
		 *
		 * @param {Element|DocumentFragment|string} el
		 * @public
		 */
	
		exports.$mount = function (el) {
		  if (this._isCompiled) {
		    ("development") !== 'production' && _.warn(
		      '$mount() should be called only once.'
		    )
		    return
		  }
		  el = _.query(el)
		  if (!el) {
		    el = document.createElement('div')
		  }
		  this._compile(el)
		  this._isCompiled = true
		  this._callHook('compiled')
		  this._initDOMHooks()
		  if (_.inDoc(this.$el)) {
		    this._callHook('attached')
		    ready.call(this)
		  } else {
		    this.$once('hook:attached', ready)
		  }
		  return this
		}
	
		/**
		 * Mark an instance as ready.
		 */
	
		function ready () {
		  this._isAttached = true
		  this._isReady = true
		  this._callHook('ready')
		}
	
		/**
		 * Teardown the instance, simply delegate to the internal
		 * _destroy.
		 */
	
		exports.$destroy = function (remove, deferCleanup) {
		  this._destroy(remove, deferCleanup)
		}
	
		/**
		 * Partially compile a piece of DOM and return a
		 * decompile function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Vue} [host]
		 * @return {Function}
		 */
	
		exports.$compile = function (el, host) {
		  return compiler.compile(el, this.$options, true)(this, el, host)
		}
	
	
	/***/ }
	/******/ ])
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(5);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.11.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-17T15:27Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//
	
	var deletedIds = [];
	
	var slice = deletedIds.slice;
	
	var concat = deletedIds.concat;
	
	var push = deletedIds.push;
	
	var indexOf = deletedIds.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "1.11.2",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},
	
		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( support.ownLast ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			var len;
	
			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}
	
			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: function() {
			return +( new Date() );
		},
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
		nodeType = context.nodeType;
	
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		if ( !seed && documentIsHTML ) {
	
			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];
	
			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var r = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}
	
			return r;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.unique( ret );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}
	
			return this.pushStack( ret );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
	
						} else if ( !(--remaining) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );
	
		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
	
			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}
	
				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	
	var strundefined = typeof undefined;
	
	
	
	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";
	
	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;
	
	// Execute ASAP in case we need to set body.style.zoom
	jQuery(function() {
		// Minified: var a,b,c,d
		var val, div, body, container;
	
		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Return for frameset docs that don't have a body
			return;
		}
	
		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );
	
		if ( typeof div.style.zoom !== strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}
	
		body.removeChild( container );
	});
	
	
	
	
	(function() {
		var div = document.createElement( "div" );
	
		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	})();
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( elem ) {
		var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
			nodeType = +elem.nodeType || 1;
	
		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
	};
	
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var ret, thisCache,
			internalKey = jQuery.expando,
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
			return;
		}
	
		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var thisCache, i,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[i] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];
	
		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}
	
	jQuery.extend({
		cache: {},
	
		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;
	
			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}
	
			return arguments.length > 1 ?
	
				// Sets one value
				this.each(function() {
					jQuery.data( this, key, value );
				}) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},
	
		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		// Minified: var a,b,c
		var input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			fragment = document.createDocumentFragment();
	
		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;
	
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;
	
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
	
		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;
	
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
	
		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		support.noCloneEvent = true;
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});
	
			div.cloneNode( true ).click();
		}
	
		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}
	})();
	
	
	(function() {
		var i, eventName,
			div = document.createElement( "div" );
	
		// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
		for ( i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;
	
			if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	})();
	
	
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === strundefined ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
			}
		};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// IE submit delegation
	if ( !support.submitBubbles ) {
	
		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},
	
			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !support.changeBubbles ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );
	
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}
	
	function cloneCopyEvent( src, dest ) {
	
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( (!support.noCloneEvent || !support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,
	
				// Ensure a safe fragment
				safe = createSafeFragment( context ),
	
				nodes = [],
				i = 0;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
	
						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];
	
						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Manually add leading whitespace removed by IE
						if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}
	
						// Remove IE's autoinserted <tbody> from table fragments
						if ( !support.tbody ) {
	
							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :
	
								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;
	
							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}
	
						jQuery.merge( nodes, tmp.childNodes );
	
						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";
	
						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}
	
						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}
	
			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}
	
			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			tmp = null;
	
			return safe;
		},
	
		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = support.deleteExpando,
				special = jQuery.event.special;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( acceptData || jQuery.acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];
	
							} else if ( typeof elem.removeAttribute !== strundefined ) {
								elem.removeAttribute( internalKey );
	
							} else {
								elem[ internalKey ] = null;
							}
	
							deletedIds.push( id );
						}
					}
				}
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
	
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[i], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}
	
					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optmization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	
	
	(function() {
		var shrinkWrapBlocksVal;
	
		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}
	
			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;
	
			// Minified: var b,c,d
			var div, body, container;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== strundefined ) {
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
	
			body.removeChild( container );
	
			return shrinkWrapBlocksVal;
		};
	
	})();
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	
	
	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;
	
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}
	
			return window.getComputedStyle( elem, null );
		};
	
		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
	
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
			if ( computed ) {
	
				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}
	
	
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				var condition = conditionFn();
	
				if ( condition == null ) {
					// The test was not ready at this point; screw the hook this time
					// but check again when needed next time.
					return;
				}
	
				if ( condition ) {
					// Hook not needed (or it's not possible to use it due to missing dependency),
					// remove it.
					// Since there are no other hooks for marginRight, remove the whole object.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
	
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		// Minified: var b,c,d,e,f,g, h,i
		var div, style, a, pixelPositionVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal;
	
		// Setup
		div = document.createElement( "div" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];
		style = a && a.style;
	
		// Finish early in limited (non-browser) environments
		if ( !style ) {
			return;
		}
	
		style.cssText = "float:left;opacity:.5";
	
		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = style.opacity === "0.5";
	
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!style.cssFloat;
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
			style.WebkitBoxSizing === "";
	
		jQuery.extend(support, {
			reliableHiddenOffsets: function() {
				if ( reliableHiddenOffsetsVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
	
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
	
			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
	
			// Support: Android 2.3
			reliableMarginRight: function() {
				if ( reliableMarginRightVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			}
		});
	
		function computeStyleTests() {
			// Minified: var b,c,d,j
			var div, body, container, contents;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
	
			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = false;
			reliableMarginRightVal = true;
	
			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				boxSizingReliableVal =
					( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
	
				// Support: Android 2.3
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
	
				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );
	
				div.removeChild( contents );
			}
	
			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
	
			body.removeChild( container );
		}
	
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,
	
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
	
					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch(e) {}
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes
	
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// we're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );
	
		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		// Minified: var a,b,c,d,e
		var input, div, select, a, opt;
	
		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[ 0 ];
	
		// First batch of tests.
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];
	
		a.style.cssText = "top:1px";
	
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";
	
		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute("style") );
	
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";
	
		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;
	
		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;
	
		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	})();
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {
	
							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
	
							} catch ( _ ) {
	
								// Will be executed only in IE6
								option.scrollHeight;
							}
	
						} else {
							option.selected = false;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
	
					return options;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hook for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
	
			return name;
		}
	};
	
	// Retrieve booleans specially
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
			function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			} :
			function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
	});
	
	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};
	
		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
						ret.value :
						null;
				}
			};
	
		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		});
	}
	
	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
				}
			}
		}
	});
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}
	
	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
	jQuery.parseJSON = function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}
	
		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );
	
		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
	
			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}
	
			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}
	
			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;
	
			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;
	
			// Remove this token
			return "";
		}) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,
	
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");
	
	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}
	
	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);
	
				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!support.reliableHiddenOffsets() &&
				((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};
	
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function() {
	
			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&
	
				// Support: IE7-8
				// oldIE XHR does not support non-RFC2616 methods (#13240)
				// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
				// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
				// Although this check for six methods instead of eight
				// since IE also does not support "trace" and "connect"
				/^(get|post|head|put|delete|options)$/i.test( this.type ) &&
	
				createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		});
	}
	
	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport(function( options ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;
	
						// Open the socket
						xhr.open( options.type, options.url, options.async, options.username, options.password );
	
						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}
	
						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
	
						// Set headers
						for ( i in headers ) {
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;
	
							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
	
								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
	
									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}
	
									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}
	
									// Filter status for non standard behaviors
	
									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};
	
						if ( !options.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch( e ) {}
	}
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement("script");
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, response, type,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;
	
			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-resource v0.1.16
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.VueResource=e():t.VueResource=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){var e=n(1)(t);t.url=n(2)(e),t.http=n(3)(e),t.resource=n(7)(e),Object.defineProperties(t.prototype,{$url:{get:function(){return this._url||(this._url=e.options(t.url,this,this.$options.url))}},$http:{get:function(){return this._http||(this._http=e.options(t.http,this,this.$options.http))}},$resource:{get:function(){return t.resource.bind(this)}}})}window.Vue&&Vue.use(r),t.exports=r},function(t,e){t.exports=function(t){function e(t,r,o){for(var a in r)o&&(n.isPlainObject(r[a])||n.isArray(r[a]))?(n.isPlainObject(r[a])&&!n.isPlainObject(t[a])&&(t[a]={}),n.isArray(r[a])&&!n.isArray(t[a])&&(t[a]=[]),e(t[a],r[a],o)):void 0!==r[a]&&(t[a]=r[a])}var n=t.util.extend({},t.util);return n.isString=function(t){return"string"==typeof t},n.isFunction=function(t){return"function"==typeof t},n.options=function(t,e,r){return r=r||{},n.isFunction(r)&&(r=r.call(e)),n.extend(t.bind({vm:e,options:r}),t,{options:r})},n.each=function(t,e){var r,o;if("number"==typeof t.length)for(r=0;r<t.length;r++)e.call(t[r],t[r],r);else if(n.isObject(t))for(o in t)t.hasOwnProperty(o)&&e.call(t[o],t[o],o);return t},n.extend=function(t){var n,r=[],o=r.slice.call(arguments,1);return"boolean"==typeof t&&(n=t,t=o.shift()),o.forEach(function(r){e(t,r,n)}),t},n}},function(t,e){var n=document.documentMode,r=document.createElement("a");t.exports=function(t){function e(n,r){var o,i={},s={},u=n;return t.isPlainObject(u)||(u={url:n,params:r}),u=t.extend(!0,{},e.options,this.options,u),n=u.url.replace(/(\/?):([a-z]\w*)/gi,function(t,e,n){return u.params[n]?(i[n]=!0,e+a(u.params[n])):""}),t.isString(u.root)&&!n.match(/^(https?:)?\//)&&(n=u.root+"/"+n),t.each(u.params,function(t,e){i[e]||(s[e]=t)}),o=e.params(s),o&&(n+=(-1==n.indexOf("?")?"?":"&")+o),n}function o(e,n,r){var a,i=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){a=t.isObject(n)||t.isArray(n),r&&(u=r+"["+(s||a?u:"")+"]"),!r&&i?e.add(n.name,n.value):a?o(e,n,u):e.add(u,n)})}function a(t){return i(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function i(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}return e.options={url:"",root:null,params:{}},e.params=function(e){var n=[];return n.add=function(e,n){t.isFunction(n)&&(n=n()),null===n&&(n=""),this.push(a(e)+"="+a(n))},o(n,e),n.join("&")},e.parse=function(t){return n&&(r.href=t,t=r.href),r.href=t,{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",port:r.port,host:r.host,hostname:r.hostname,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):""}},t.url=e}},function(t,e,n){var r=n(4),o=n(6),a=n(5);t.exports=function(t){function e(a,u){var c;return t.isPlainObject(a)&&(u=a,a=""),u=t.extend({url:a},u),u=t.extend(!0,{},e.options,this.options,u),null===u.crossOrigin&&(u.crossOrigin=s(u.url)),u.method=u.method.toUpperCase(),u.headers=t.extend({},e.headers.common,u.crossOrigin?{}:e.headers.custom,e.headers[u.method.toLowerCase()],u.headers),t.isPlainObject(u.data)&&/^(GET|JSONP)$/i.test(u.method)&&(t.extend(u.params,u.data),delete u.data),u.emulateHTTP&&!u.crossOrigin&&/^(PUT|PATCH|DELETE)$/i.test(u.method)&&(u.headers["X-HTTP-Method-Override"]=u.method,u.method="POST"),u.emulateJSON&&t.isPlainObject(u.data)&&(u.headers["Content-Type"]="application/x-www-form-urlencoded",u.data=t.url.params(u.data)),t.isObject(u.data)&&/FormData/i.test(u.data.toString())&&delete u.headers["Content-Type"],t.isPlainObject(u.data)&&(u.data=JSON.stringify(u.data)),c=("JSONP"==u.method?o:r).call(this.vm,t,u),c=n(c.then(i,i),this.vm),u.success&&(c=c.success(u.success)),u.error&&(c=c.error(u.error)),c}function n(t,e){return t.success=function(r){return n(t.then(function(t){return r.call(e,t.data,t.status,t)||t}),e)},t.error=function(r){return n(t.then(void 0,function(t){return r.call(e,t.data,t.status,t)||t}),e)},t.always=function(r){var o=function(t){return r.call(e,t.data,t.status,t)||t};return n(t.then(o,o),e)},t}function i(t){try{t.data=JSON.parse(t.responseText)}catch(e){t.data=t.responseText}return t.ok?t:a.reject(t)}function s(e){var n=t.url.parse(e);return n.protocol!==u.protocol||n.host!==u.host}var u=t.url.parse(location.href),c={"Content-Type":"application/json;charset=utf-8"};return e.options={method:"get",params:{},data:"",xhr:null,jsonp:"callback",beforeSend:null,crossOrigin:null,emulateHTTP:!1,emulateJSON:!1},e.headers={put:c,post:c,patch:c,"delete":c,common:{Accept:"application/json, text/plain, */*"},custom:{"X-Requested-With":"XMLHttpRequest"}},["get","put","post","patch","delete","jsonp"].forEach(function(n){e[n]=function(e,r,o,a){return t.isFunction(r)&&(a=o,o=r,r=void 0),this(e,t.extend({method:n,data:r,success:o},a))}}),t.http=e}},function(t,e,n){var r=n(5),o=window.XDomainRequest;t.exports=function(t,e){var n,a=new XMLHttpRequest;return o&&e.crossOrigin&&(a=new XDomainRequest,e.headers={}),t.isPlainObject(e.xhr)&&t.extend(a,e.xhr),t.isFunction(e.beforeSend)&&e.beforeSend.call(this,a,e),n=new r(function(n,r){a.open(e.method,t.url(e),!0),t.each(e.headers,function(t,e){a.setRequestHeader(e,t)});var o=function(t){a.ok="load"===t.type,a.ok&&a.status&&(a.ok=a.status>=200&&a.status<300),(a.ok?n:r)(a)};a.onload=o,a.onabort=o,a.onerror=o,a.send(e.data)})}},function(t,e){function n(t){this.state=a,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}}var r=0,o=1,a=2;n.reject=function(t){return new n(function(e,n){n(t)})},n.resolve=function(t){return new n(function(e,n){e(t)})},n.all=function(t){return new n(function(e,n){function r(n){return function(r){a[n]=r,o+=1,o===t.length&&e(a)}}var o=0,a=[];0===t.length&&e(a);for(var i=0;i<t.length;i+=1)t[i].then(r(i),n)})},n.race=function(t){return new n(function(e,n){for(var r=0;r<t.length;r+=1)t[r].then(e,n)})};var i=n.prototype;i.resolve=function(t){var e=this;if(e.state===a){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(i){return void(n||e.reject(i))}e.state=r,e.value=t,e.notify()}},i.reject=function(t){var e=this;if(e.state===a){if(t===e)throw new TypeError("Promise settled with itself.");e.state=o,e.value=t,e.notify()}},i.notify=function(){var t=this;u(function(){if(t.state!==a)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],i=e[1],s=e[2],u=e[3];try{t.state===r?s("function"==typeof n?n.call(void 0,t.value):t.value):t.state===o&&("function"==typeof i?s(i.call(void 0,t.value)):u(t.value))}catch(c){u(c)}}})},i["catch"]=function(t){return this.then(void 0,t)},i.then=function(t,e){var r=this;return new n(function(n,o){r.deferred.push([t,e,n,o]),r.notify()})};var s=[],u=function(t){s.push(t),1===s.length&&u.async()};if(u.run=function(){for(;s.length;)s[0](),s.shift()},window.MutationObserver){var c=document.createElement("div"),f=new MutationObserver(u.run);f.observe(c,{attributes:!0}),u.async=function(){c.setAttribute("x",0)}}else u.async=function(){setTimeout(u.run)};t.exports=window.Promise||n},function(t,e,n){var r=n(5);t.exports=function(t,e){var n,o,a="_jsonp"+Math.random().toString(36).substr(2),i={};return e.params[e.jsonp]=a,t.isFunction(e.beforeSend)&&e.beforeSend.call(this,{},e),new r(function(r,s){n=document.createElement("script"),n.src=t.url(e),n.type="text/javascript",n.async=!0,window[a]=function(t){o=t};var u=function(t){delete window[a],document.body.removeChild(n),"load"!==t.type||o||(t.type="error"),i.ok="error"!==t.type,i.status=i.ok?200:404,i.responseText=o?o:t.type,(i.ok?r:s)(i)};n.onload=u,n.onerror=u,document.body.appendChild(n)})}},function(t,e){t.exports=function(t){function e(r,o,a){var i=this,s={};return a=t.extend({},e.actions,a),t.each(a,function(e,a){e=t.extend(!0,{url:r,params:o||{}},e),s[a]=function(){return(i.$http||t.http)(n(e,arguments))}}),s}function n(e,n){var r,o,a,i=t.extend({},e),s={};switch(n.length){case 4:a=n[3],o=n[2];case 3:case 2:if(!t.isFunction(n[1])){s=n[0],r=n[1],o=n[2];break}if(t.isFunction(n[0])){o=n[0],a=n[1];break}o=n[1],a=n[2];case 1:t.isFunction(n[0])?o=n[0]:/^(POST|PUT|PATCH)$/i.test(i.method)?r=n[0]:s=n[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, data, success, error], got "+n.length+" arguments"}return i.data=r,i.params=t.extend({},i.params,s),o&&(i.success=o),a&&(i.error=a),i}return e.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},t.resource=e}}])});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Test, _, endpoint;
	
	_ = __webpack_require__(8);
	
	__webpack_require__(10);
	
	endpoint = 'https://greengov.data.ca.gov/resource/umpc-nnuk.json?$limit=50000';
	
	Test = {
	  template: __webpack_require__(11),
	  data: function() {
	    var data;
	    data = {
	      hello: 'world',
	      dataset: []
	    };
	    return data;
	  },
	  ready: function() {
	    this.$http.get(endpoint, (function(_this) {
	      return function(data, status, request) {
	        return _this.$set('dataset', data);
	      };
	    })(this));
	  },
	  computed: {
	    first: function() {
	      return _.first(this.dataset);
	    }
	  }
	};
	
	module.exports = Test;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(_, $, module, global) {/**
	 * @license
	 * Lo-Dash 2.4.2 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
	 * Build: `lodash modern -o ./dist/lodash.js`
	 */
	;(function(){function n(n,r,t){for(var e=(t||0)-1,u=n?n.length:0;++e<u;)if(n[e]===r)return e;return-1}function r(r,t){var e=typeof t;if(r=r.cache,"boolean"==e||null==t)return r[t]?0:-1;"number"!=e&&"string"!=e&&(e="object");var u="number"==e?t:m+t;return r=(r=r[e])&&r[u],"object"==e?r&&n(r,t)>-1?0:-1:r?0:-1}function t(n){var r=this.cache,t=typeof n;if("boolean"==t||null==n)r[n]=!0;else{"number"!=t&&"string"!=t&&(t="object");var e="number"==t?n:m+n,u=r[t]||(r[t]={});"object"==t?(u[e]||(u[e]=[])).push(n):u[e]=!0;
	
	}}function e(n){return n.charCodeAt(0)}function u(n,r){for(var t=n.criteria,e=r.criteria,u=-1,o=t.length;++u<o;){var a=t[u],i=e[u];if(a!==i){if(a>i||"undefined"==typeof a)return 1;if(a<i||"undefined"==typeof i)return-1}}return n.index-r.index}function o(n){var r=-1,e=n.length,u=n[0],o=n[e/2|0],a=n[e-1];if(u&&"object"==typeof u&&o&&"object"==typeof o&&a&&"object"==typeof a)return!1;var i=f();i["false"]=i["null"]=i["true"]=i.undefined=!1;var l=f();for(l.array=n,l.cache=i,l.push=t;++r<e;)l.push(n[r]);
	
	return l}function a(n){return"\\"+G[n]}function i(){return h.pop()||[]}function f(){return g.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var r=n.cache;r&&c(r),n.array=n.cache=n.criteria=n.object=n.number=n.string=n.value=null,g.length<_&&g.push(n)}function p(n,r,t){r||(r=0),"undefined"==typeof t&&(t=n?n.length:0);for(var e=-1,u=t-r||0,o=Array(u<0?0:u);++e<u;)o[e]=n[r+e];
	
	return o}function s(t){function h(n){return n&&"object"==typeof n&&!Yt(n)&&Tt.call(n,"__wrapped__")?n:new g(n)}function g(n,r){this.__chain__=!!r,this.__wrapped__=n}function _(n){function r(){if(e){var n=p(e);$t.apply(n,arguments)}if(this instanceof r){var o=J(t.prototype),a=t.apply(o,n||arguments);return Sn(a)?a:o}return t.apply(u,n||arguments)}var t=n[0],e=n[2],u=n[4];return Xt(r,n),r}function G(n,r,t,e,u){if(t){var o=t(n);if("undefined"!=typeof o)return o}var a=Sn(n);if(!a)return n;var f=Nt.call(n);
	
	if(!K[f])return n;var c=Jt[f];switch(f){case F:case B:return new c(+n);case q:case P:return new c(n);case L:return o=c(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o}var s=Yt(n);if(r){var v=!e;e||(e=i()),u||(u=i());for(var h=e.length;h--;)if(e[h]==n)return u[h];o=s?c(n.length):{}}else o=s?p(n):oe({},n);return s&&(Tt.call(n,"index")&&(o.index=n.index),Tt.call(n,"input")&&(o.input=n.input)),r?(e.push(n),u.push(o),(s?Xn:fe)(n,function(n,a){o[a]=G(n,r,t,e,u)}),v&&(l(e),l(u)),o):o}function J(n,r){return Sn(n)?zt(n):{};
	
	}function Q(n,r,t){if("function"!=typeof n)return Yr;if("undefined"==typeof r||!("prototype"in n))return n;var e=n.__bindData__;if("undefined"==typeof e&&(Qt.funcNames&&(e=!n.name),e=e||!Qt.funcDecomp,!e)){var u=At.call(n);Qt.funcNames||(e=!O.test(u)),e||(e=I.test(u),Xt(n,e))}if(e===!1||e!==!0&&1&e[1])return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){
	return n.call(r,t,e,u,o)}}return $r(n,r)}function X(n){function r(){var n=f?a:this;if(u){var h=p(u);$t.apply(h,arguments)}if((o||c)&&(h||(h=p(arguments)),o&&$t.apply(h,o),c&&h.length<i))return e|=16,X([t,s?e:-4&e,h,null,a,i]);if(h||(h=arguments),l&&(t=n[v]),this instanceof r){n=J(t.prototype);var g=t.apply(n,h);return Sn(g)?g:n}return t.apply(n,h)}var t=n[0],e=n[1],u=n[2],o=n[3],a=n[4],i=n[5],f=1&e,l=2&e,c=4&e,s=8&e,v=t;return Xt(r,n),r}function Y(t,e){var u=-1,a=ln(),i=t?t.length:0,f=i>=b&&a===n,l=[];
	
	if(f){var p=o(e);p?(a=r,e=p):f=!1}for(;++u<i;){var s=t[u];a(e,s)<0&&l.push(s)}return f&&c(e),l}function nn(n,r,t,e){for(var u=(e||0)-1,o=n?n.length:0,a=[];++u<o;){var i=n[u];if(i&&"object"==typeof i&&"number"==typeof i.length&&(Yt(i)||vn(i))){r||(i=nn(i,r,t));var f=-1,l=i.length,c=a.length;for(a.length+=l;++f<l;)a[c++]=i[f]}else t||a.push(i)}return a}function rn(n,r,t,e,u,o){if(t){var a=t(n,r);if("undefined"!=typeof a)return!!a}if(n===r)return 0!==n||1/n==1/r;var f=typeof n,c=typeof r;if(n===n&&(!n||!V[f])&&(!r||!V[c]))return!1;
	
	if(null==n||null==r)return n===r;var p=Nt.call(n),s=Nt.call(r);if(p==T&&(p=z),s==T&&(s=z),p!=s)return!1;switch(p){case F:case B:return+n==+r;case q:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case L:case P:return n==jt(r)}var h=p==$;if(!h){var g=Tt.call(n,"__wrapped__"),y=Tt.call(r,"__wrapped__");if(g||y)return rn(g?n.__wrapped__:n,y?r.__wrapped__:r,t,e,u,o);if(p!=z)return!1;var m=n.constructor,b=r.constructor;if(m!=b&&!(In(m)&&m instanceof m&&In(b)&&b instanceof b)&&"constructor"in n&&"constructor"in r)return!1;
	
	}var _=!u;u||(u=i()),o||(o=i());for(var d=u.length;d--;)if(u[d]==n)return o[d]==r;var w=0;if(a=!0,u.push(n),o.push(r),h){if(d=n.length,w=r.length,a=w==d,a||e)for(;w--;){var j=d,k=r[w];if(e)for(;j--&&!(a=rn(n[j],k,t,e,u,o)););else if(!(a=rn(n[w],k,t,e,u,o)))break}}else ie(r,function(r,i,f){return Tt.call(f,i)?(w++,a=Tt.call(n,i)&&rn(n[i],r,t,e,u,o)):v}),a&&!e&&ie(n,function(n,r,t){return Tt.call(t,r)?a=--w>-1:v});return u.pop(),o.pop(),_&&(l(u),l(o)),a}function tn(n,r,t,e,u){(Yt(r)?Xn:fe)(r,function(r,o){
	var a,i,f=r,l=n[o];if(r&&((i=Yt(r))||le(r))){for(var c=e.length;c--;)if(a=e[c]==r){l=u[c];break}if(!a){var p;t&&(f=t(l,r),(p="undefined"!=typeof f)&&(l=f)),p||(l=i?Yt(l)?l:[]:le(l)?l:{}),e.push(r),u.push(l),p||tn(l,r,t,e,u)}}else t&&(f=t(l,r),"undefined"==typeof f&&(f=r)),"undefined"!=typeof f&&(l=f);n[o]=l})}function en(n,r){return n+St(Ht()*(r-n+1))}function un(t,e,u){var a=-1,f=ln(),p=t?t.length:0,s=[],v=!e&&p>=b&&f===n,h=u||v?i():s;if(v){var g=o(h);f=r,h=g}for(;++a<p;){var y=t[a],m=u?u(y,a,t):y;
	
	(e?!a||h[h.length-1]!==m:f(h,m)<0)&&((u||v)&&h.push(m),s.push(y))}return v?(l(h.array),c(h)):u&&l(h),s}function on(n){return function(r,t,e){var u={};t=h.createCallback(t,e,3);var o=-1,a=r?r.length:0;if("number"==typeof a)for(;++o<a;){var i=r[o];n(u,i,t(i,o,r),r)}else fe(r,function(r,e,o){n(u,r,t(r,e,o),o)});return u}}function an(n,r,t,e,u,o){var a=1&r,i=2&r,f=4&r,l=16&r,c=32&r;if(!i&&!In(n))throw new kt;l&&!t.length&&(r&=-17,l=t=!1),c&&!e.length&&(r&=-33,c=e=!1);var s=n&&n.__bindData__;if(s&&s!==!0)return s=p(s),
	s[2]&&(s[2]=p(s[2])),s[3]&&(s[3]=p(s[3])),!a||1&s[1]||(s[4]=u),!a&&1&s[1]&&(r|=8),!f||4&s[1]||(s[5]=o),l&&$t.apply(s[2]||(s[2]=[]),t),c&&Wt.apply(s[3]||(s[3]=[]),e),s[1]|=r,an.apply(null,s);var v=1==r||17===r?_:X;return v([n,r,t,e,u,o])}function fn(n){return re[n]}function ln(){var r=(r=h.indexOf)===br?n:r;return r}function cn(n){return"function"==typeof n&&Rt.test(n)}function pn(n){var r,t;return n&&Nt.call(n)==z&&(r=n.constructor,!In(r)||r instanceof r)?(ie(n,function(n,r){t=r}),"undefined"==typeof t||Tt.call(n,t)):!1;
	
	}function sn(n){return te[n]}function vn(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==T||!1}function hn(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t=r,r=!1),G(n,r,"function"==typeof t&&Q(t,e,1))}function gn(n,r,t){return G(n,!0,"function"==typeof r&&Q(r,t,1))}function yn(n,r){var t=J(n);return r?oe(t,r):t}function mn(n,r,t){var e;return r=h.createCallback(r,t,3),fe(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function bn(n,r,t){var e;return r=h.createCallback(r,t,3),
	dn(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function _n(n,r,t){var e=[];ie(n,function(n,r){e.push(r,n)});var u=e.length;for(r=Q(r,t,3);u--&&r(e[u--],e[u],n)!==!1;);return n}function dn(n,r,t){var e=ne(n),u=e.length;for(r=Q(r,t,3);u--;){var o=e[u];if(r(n[o],o,n)===!1)break}return n}function wn(n){var r=[];return ie(n,function(n,t){In(n)&&r.push(t)}),r.sort()}function jn(n,r){return n?Tt.call(n,r):!1}function kn(n){for(var r=-1,t=ne(n),e=t.length,u={};++r<e;){var o=t[r];u[n[o]]=o}return u}function xn(n){
	return n===!0||n===!1||n&&"object"==typeof n&&Nt.call(n)==F||!1}function Cn(n){return n&&"object"==typeof n&&Nt.call(n)==B||!1}function On(n){return n&&1===n.nodeType||!1}function Nn(n){var r=!0;if(!n)return r;var t=Nt.call(n),e=n.length;return t==$||t==P||t==T||t==z&&"number"==typeof e&&In(n.splice)?!e:(fe(n,function(){return r=!1}),r)}function Rn(n,r,t,e){return rn(n,r,"function"==typeof t&&Q(t,e,2))}function En(n){return Pt(n)&&!Kt(parseFloat(n))}function In(n){return"function"==typeof n}function Sn(n){
	return!(!n||!V[typeof n])}function An(n){return Tn(n)&&n!=+n}function Dn(n){return null===n}function Tn(n){return"number"==typeof n||n&&"object"==typeof n&&Nt.call(n)==q||!1}function $n(n){return n&&"object"==typeof n&&Nt.call(n)==L||!1}function Fn(n){return"string"==typeof n||n&&"object"==typeof n&&Nt.call(n)==P||!1}function Bn(n){return"undefined"==typeof n}function Wn(n,r,t){var e={};return r=h.createCallback(r,t,3),fe(n,function(n,t,u){e[t]=r(n,t,u)}),e}function qn(n){var r=arguments,t=2;if(!Sn(n))return n;
	
	if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var e=Q(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(e=r[--t]);for(var u=p(arguments,1,t),o=-1,a=i(),f=i();++o<t;)tn(n,u[o],e,a,f);return l(a),l(f),n}function zn(n,r,t){var e={};if("function"!=typeof r){var u=[];ie(n,function(n,r){u.push(r)}),u=Y(u,nn(arguments,!0,!1,1));for(var o=-1,a=u.length;++o<a;){var i=u[o];e[i]=n[i]}}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)||(e[t]=n)});return e}function Ln(n){
	for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function Pn(n,r,t){var e={};if("function"!=typeof r)for(var u=-1,o=nn(arguments,!0,!1,1),a=Sn(n)?o.length:0;++u<a;){var i=o[u];i in n&&(e[i]=n[i])}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)&&(e[t]=n)});return e}function Kn(n,r,t,e){var u=Yt(n);if(null==t)if(u)t=[];else{var o=n&&n.constructor,a=o&&o.prototype;t=J(a)}return r&&(r=h.createCallback(r,e,4),(u?Xn:fe)(n,function(n,e,u){return r(t,n,e,u)})),
	t}function Un(n){for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;)u[r]=n[t[r]];return u}function Mn(n){for(var r=arguments,t=-1,e=nn(r,!0,!1,1),u=r[2]&&r[2][r[1]]===n?1:e.length,o=ht(u);++t<u;)o[t]=n[e[t]];return o}function Vn(n,r,t){var e=-1,u=ln(),o=n?n.length:0,a=!1;return t=(t<0?Mt(0,o+t):t)||0,Yt(n)?a=u(n,r,t)>-1:"number"==typeof o?a=(Fn(n)?n.indexOf(r,t):u(n,r,t))>-1:fe(n,function(n){return++e<t?v:!(a=n===r)}),a}function Gn(n,r,t){var e=!0;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!r(n[u],u,n)););else fe(n,function(n,t,u){
	return e=!!r(n,t,u)});return e}function Hn(n,r,t){var e=[];r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var a=n[u];r(a,u,n)&&e.push(a)}else fe(n,function(n,t,u){r(n,t,u)&&e.push(n)});return e}function Jn(n,r,t){r=h.createCallback(r,t,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return fe(n,function(n,t,e){return r(n,t,e)?(o=n,!1):v}),o}for(;++e<u;){var a=n[e];if(r(a,e,n))return a}}function Qn(n,r,t){var e;return r=h.createCallback(r,t,3),Yn(n,function(n,t,u){
	return r(n,t,u)?(e=n,!1):v}),e}function Xn(n,r,t){var e=-1,u=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof u)for(;++e<u&&r(n[e],e,n)!==!1;);else fe(n,r);return n}function Yn(n,r,t){var e=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof e)for(;e--&&r(n[e],e,n)!==!1;);else{var u=ne(n);e=u.length,fe(n,function(n,t,o){return t=u?u[--e]:--e,r(o[t],t,o)})}return n}function Zn(n,r){var t=p(arguments,2),e=-1,u="function"==typeof r,o=n?n.length:0,a=ht("number"==typeof o?o:0);
	
	return Xn(n,function(n){a[++e]=(u?r:n[r]).apply(n,t)}),a}function nr(n,r,t){var e=-1,u=n?n.length:0;if(r=h.createCallback(r,t,3),"number"==typeof u)for(var o=ht(u);++e<u;)o[e]=r(n[e],e,n);else o=[],fe(n,function(n,t,u){o[++e]=r(n,t,u)});return o}function rr(n,r,t){var u=-(1/0),o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f>o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a>u&&(u=a,o=n)});return o;
	
	}function tr(n,r,t){var u=1/0,o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f<o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a<u&&(u=a,o=n)});return o}function er(n,r,t,e){if(!n)return t;var u=arguments.length<3;r=h.createCallback(r,e,4);var o=-1,a=n.length;if("number"==typeof a)for(u&&(t=n[++o]);++o<a;)t=r(t,n[o],o,n);else fe(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)});return t}function ur(n,r,t,e){
	var u=arguments.length<3;return r=h.createCallback(r,e,4),Yn(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)}),t}function or(n,r,t){return r=h.createCallback(r,t,3),Hn(n,function(n,t,e){return!r(n,t,e)})}function ar(n,r,t){if(n&&"number"!=typeof n.length&&(n=Un(n)),null==r||t)return n?n[en(0,n.length-1)]:v;var e=ir(n);return e.length=Vt(Mt(0,r),e.length),e}function ir(n){var r=-1,t=n?n.length:0,e=ht("number"==typeof t?t:0);return Xn(n,function(n){var t=en(0,++r);e[r]=e[t],e[t]=n}),e}function fr(n){var r=n?n.length:0;
	
	return"number"==typeof r?r:ne(n).length}function lr(n,r,t){var e;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=r(n[u],u,n)););else fe(n,function(n,t,u){return!(e=r(n,t,u))});return!!e}function cr(n,r,t){var e=-1,o=Yt(r),a=n?n.length:0,p=ht("number"==typeof a?a:0);for(o||(r=h.createCallback(r,t,3)),Xn(n,function(n,t,u){var a=p[++e]=f();o?a.criteria=nr(r,function(r){return n[r]}):(a.criteria=i())[0]=r(n,t,u),a.index=e,a.value=n}),a=p.length,p.sort(u);a--;){
	var s=p[a];p[a]=s.value,o||l(s.criteria),c(s)}return p}function pr(n){return n&&"number"==typeof n.length?p(n):Un(n)}function sr(n){for(var r=-1,t=n?n.length:0,e=[];++r<t;){var u=n[r];u&&e.push(u)}return e}function vr(n){return Y(n,nn(arguments,!0,!0,1))}function hr(n,r,t){var e=-1,u=n?n.length:0;for(r=h.createCallback(r,t,3);++e<u;)if(r(n[e],e,n))return e;return-1}function gr(n,r,t){var e=n?n.length:0;for(r=h.createCallback(r,t,3);e--;)if(r(n[e],e,n))return e;return-1}function yr(n,r,t){var e=0,u=n?n.length:0;
	
	if("number"!=typeof r&&null!=r){var o=-1;for(r=h.createCallback(r,t,3);++o<u&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[0]:v;return p(n,0,Vt(Mt(0,e),u))}function mr(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(n=nr(n,t,e)),nn(n,r)}function br(r,t,e){if("number"==typeof e){var u=r?r.length:0;e=e<0?Mt(0,u+e):e||0}else if(e){var o=Nr(r,t);return r[o]===t?o:-1}return n(r,t,e)}function _r(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){
	var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else e=null==r||t?1:r||e;return p(n,0,Vt(Mt(0,u-e),u))}function dr(){for(var t=[],e=-1,u=arguments.length,a=i(),f=ln(),p=f===n,s=i();++e<u;){var v=arguments[e];(Yt(v)||vn(v))&&(t.push(v),a.push(p&&v.length>=b&&o(e?t[e]:s)))}var h=t[0],g=-1,y=h?h.length:0,m=[];n:for(;++g<y;){var _=a[0];if(v=h[g],(_?r(_,v):f(s,v))<0){for(e=u,(_||s).push(v);--e;)if(_=a[e],(_?r(_,v):f(t[e],v))<0)continue n;m.push(v)}}for(;u--;)_=a[u],_&&c(_);return l(a),l(s),
	m}function wr(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[u-1]:v;return p(n,Mt(0,u-e))}function jr(n,r,t){var e=n?n.length:0;for("number"==typeof t&&(e=(t<0?Mt(0,e+t):Vt(t,e-1))+1);e--;)if(n[e]===r)return e;return-1}function kr(n){for(var r=arguments,t=0,e=r.length,u=n?n.length:0;++t<e;)for(var o=-1,a=r[t];++o<u;)n[o]===a&&(Bt.call(n,o--,1),u--);return n}function xr(n,r,t){n=+n||0,t="number"==typeof t?t:+t||1,
	null==r&&(r=n,n=0);for(var e=-1,u=Mt(0,Et((r-n)/(t||1))),o=ht(u);++e<u;)o[e]=n,n+=t;return o}function Cr(n,r,t){var e=-1,u=n?n.length:0,o=[];for(r=h.createCallback(r,t,3);++e<u;){var a=n[e];r(a,e,n)&&(o.push(a),Bt.call(n,e--,1),u--)}return o}function Or(n,r,t){if("number"!=typeof r&&null!=r){var e=0,u=-1,o=n?n.length:0;for(r=h.createCallback(r,t,3);++u<o&&r(n[u],u,n);)e++}else e=null==r||t?1:Mt(0,r);return p(n,e)}function Nr(n,r,t,e){var u=0,o=n?n.length:u;for(t=t?h.createCallback(t,e,1):Yr,r=t(r);u<o;){
	var a=u+o>>>1;t(n[a])<r?u=a+1:o=a}return u}function Rr(){return un(nn(arguments,!0,!0))}function Er(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(t=h.createCallback(t,e,3)),un(n,r,t)}function Ir(n){return Y(n,p(arguments,1))}function Sr(){for(var n=-1,r=arguments.length;++n<r;){var t=arguments[n];if(Yt(t)||vn(t))var e=e?un(Y(e,t).concat(Y(t,e))):t}return e||[]}function Ar(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,t=n?rr(ve(n,"length")):0,e=ht(t<0?0:t);++r<t;)e[r]=ve(n,r);
	
	return e}function Dr(n,r){var t=-1,e=n?n.length:0,u={};for(r||!e||Yt(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function Tr(n,r){if(!In(r))throw new kt;return function(){return--n<1?r.apply(this,arguments):v}}function $r(n,r){return arguments.length>2?an(n,17,p(arguments,2),null,r):an(n,1,null,null,r)}function Fr(n){for(var r=arguments.length>1?nn(arguments,!0,!1,1):wn(n),t=-1,e=r.length;++t<e;){var u=r[t];n[u]=an(n[u],1,null,null,n)}return n}function Br(n,r){return arguments.length>2?an(r,19,p(arguments,2),null,n):an(r,3,null,null,n);
	
	}function Wr(){for(var n=arguments,r=n.length;r--;)if(!In(n[r]))throw new kt;return function(){for(var r=arguments,t=n.length;t--;)r=[n[t].apply(this,r)];return r[0]}}function qr(n,r){return r="number"==typeof r?r:+r||n.length,an(n,4,null,null,null,r)}function zr(n,r,t){var e,u,o,a,i,f,l,c=0,p=!1,s=!0;if(!In(n))throw new kt;if(r=Mt(0,r)||0,t===!0){var h=!0;s=!1}else Sn(t)&&(h=t.leading,p="maxWait"in t&&(Mt(r,t.maxWait)||0),s="trailing"in t?t.trailing:s);var g=function(){var t=r-(ge()-a);if(t>0)f=Ft(g,t);
	else{u&&It(u);var p=l;u=f=l=v,p&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))}},y=function(){f&&It(f),u=f=l=v,(s||p!==r)&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))};return function(){if(e=arguments,a=ge(),i=this,l=s&&(f||!h),p===!1)var t=h&&!f;else{u||h||(c=a);var v=p-(a-c),m=v<=0;m?(u&&(u=It(u)),c=a,o=n.apply(i,e)):u||(u=Ft(y,v))}return m&&f?f=It(f):f||r===p||(f=Ft(g,r)),t&&(m=!0,o=n.apply(i,e)),!m||f||u||(e=i=null),o}}function Lr(n){if(!In(n))throw new kt;var r=p(arguments,1);return Ft(function(){n.apply(v,r);
	
	},1)}function Pr(n,r){if(!In(n))throw new kt;var t=p(arguments,2);return Ft(function(){n.apply(v,t)},r)}function Kr(n,r){if(!In(n))throw new kt;var t=function(){var e=t.cache,u=r?r.apply(this,arguments):m+arguments[0];return Tt.call(e,u)?e[u]:e[u]=n.apply(this,arguments)};return t.cache={},t}function Ur(n){var r,t;if(!In(n))throw new kt;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}}function Mr(n){return an(n,16,p(arguments,1))}function Vr(n){return an(n,32,null,p(arguments,1));
	
	}function Gr(n,r,t){var e=!0,u=!0;if(!In(n))throw new kt;return t===!1?e=!1:Sn(t)&&(e="leading"in t?t.leading:e,u="trailing"in t?t.trailing:u),U.leading=e,U.maxWait=r,U.trailing=u,zr(n,r,U)}function Hr(n,r){return an(r,16,[n])}function Jr(n){return function(){return n}}function Qr(n,r,t){var e=typeof n;if(null==n||"function"==e)return Q(n,r,t);if("object"!=e)return tt(n);var u=ne(n),o=u[0],a=n[o];return 1!=u.length||a!==a||Sn(a)?function(r){for(var t=u.length,e=!1;t--&&(e=rn(r[u[t]],n[u[t]],null,!0)););
	return e}:function(n){var r=n[o];return a===r&&(0!==a||1/a==1/r)}}function Xr(n){return null==n?"":jt(n).replace(ue,fn)}function Yr(n){return n}function Zr(n,r,t){var e=!0,u=r&&wn(r);r&&(t||u.length)||(null==t&&(t=r),o=g,r=n,n=h,u=wn(r)),t===!1?e=!1:Sn(t)&&"chain"in t&&(e=t.chain);var o=n,a=In(o);Xn(u,function(t){var u=n[t]=r[t];a&&(o.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,a=[t];$t.apply(a,arguments);var i=u.apply(n,a);if(e||r){if(t===i&&Sn(i))return this;i=new o(i),i.__chain__=r;
	
	}return i})})}function nt(){return t._=Ot,this}function rt(){}function tt(n){return function(r){return r[n]}}function et(n,r,t){var e=null==n,u=null==r;if(null==t&&("boolean"==typeof n&&u?(t=n,n=1):u||"boolean"!=typeof r||(t=r,u=!0)),e&&u&&(r=1),n=+n||0,u?(r=n,n=0):r=+r||0,t||n%1||r%1){var o=Ht();return Vt(n+o*(r-n+parseFloat("1e-"+((o+"").length-1))),r)}return en(n,r)}function ut(n,r){if(n){var t=n[r];return In(t)?n[r]():t}}function ot(n,r,t){var e=h.templateSettings;n=jt(n||""),t=ae({},t,e);var u,o=ae({},t.imports,e.imports),i=ne(o),f=Un(o),l=0,c=t.interpolate||E,p="__p += '",s=wt((t.escape||E).source+"|"+c.source+"|"+(c===N?x:E).source+"|"+(t.evaluate||E).source+"|$","g");
	
	n.replace(s,function(r,t,e,o,i,f){return e||(e=o),p+=n.slice(l,f).replace(S,a),t&&(p+="' +\n__e("+t+") +\n'"),i&&(u=!0,p+="';\n"+i+";\n__p += '"),e&&(p+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=f+r.length,r}),p+="';\n";var g=t.variable,y=g;y||(g="obj",p="with ("+g+") {\n"+p+"\n}\n"),p=(u?p.replace(w,""):p).replace(j,"$1").replace(k,"$1;"),p="function("+g+") {\n"+(y?"":g+" || ("+g+" = {});\n")+"var __t, __p = '', __e = _.escape"+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";
	
	var m="\n/*\n//# sourceURL="+(t.sourceURL||"/lodash/template/source["+D++ +"]")+"\n*/";try{var b=mt(i,"return "+p+m).apply(v,f)}catch(_){throw _.source=p,_}return r?b(r):(b.source=p,b)}function at(n,r,t){n=(n=+n)>-1?n:0;var e=-1,u=ht(n);for(r=Q(r,t,1);++e<n;)u[e]=r(e);return u}function it(n){return null==n?"":jt(n).replace(ee,sn)}function ft(n){var r=++y;return jt(null==n?"":n)+r}function lt(n){return n=new g(n),n.__chain__=!0,n}function ct(n,r){return r(n),n}function pt(){return this.__chain__=!0,
	this}function st(){return jt(this.__wrapped__)}function vt(){return this.__wrapped__}t=t?Z.defaults(H.Object(),t,Z.pick(H,A)):H;var ht=t.Array,gt=t.Boolean,yt=t.Date,mt=t.Function,bt=t.Math,_t=t.Number,dt=t.Object,wt=t.RegExp,jt=t.String,kt=t.TypeError,xt=[],Ct=dt.prototype,Ot=t._,Nt=Ct.toString,Rt=wt("^"+jt(Nt).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Et=bt.ceil,It=t.clearTimeout,St=bt.floor,At=mt.prototype.toString,Dt=cn(Dt=dt.getPrototypeOf)&&Dt,Tt=Ct.hasOwnProperty,$t=xt.push,Ft=t.setTimeout,Bt=xt.splice,Wt=xt.unshift,qt=function(){
	try{var n={},r=cn(r=dt.defineProperty)&&r,t=r(n,n,n)&&r}catch(e){}return t}(),zt=cn(zt=dt.create)&&zt,Lt=cn(Lt=ht.isArray)&&Lt,Pt=t.isFinite,Kt=t.isNaN,Ut=cn(Ut=dt.keys)&&Ut,Mt=bt.max,Vt=bt.min,Gt=t.parseInt,Ht=bt.random,Jt={};Jt[$]=ht,Jt[F]=gt,Jt[B]=yt,Jt[W]=mt,Jt[z]=dt,Jt[q]=_t,Jt[L]=wt,Jt[P]=jt,g.prototype=h.prototype;var Qt=h.support={};Qt.funcDecomp=!cn(t.WinRTError)&&I.test(s),Qt.funcNames="string"==typeof mt.name,h.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,
	variable:"",imports:{_:h}},zt||(J=function(){function n(){}return function(r){if(Sn(r)){n.prototype=r;var e=new n;n.prototype=null}return e||t.Object()}}());var Xt=qt?function(n,r){M.value=r,qt(n,"__bindData__",M),M.value=null}:rt,Yt=Lt||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==$||!1},Zt=function(n){var r,t=n,e=[];if(!t)return e;if(!V[typeof n])return e;for(r in t)Tt.call(t,r)&&e.push(r);return e},ne=Ut?function(n){return Sn(n)?Ut(n):[]}:Zt,re={"&":"&amp;",
	"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=kn(re),ee=wt("("+ne(te).join("|")+")","g"),ue=wt("["+ne(re).join("")+"]","g"),oe=function(n,r,t){var e,u=n,o=u;if(!u)return o;var a=arguments,i=0,f="number"==typeof t?2:a.length;if(f>3&&"function"==typeof a[f-2])var l=Q(a[--f-1],a[f--],2);else f>2&&"function"==typeof a[f-1]&&(l=a[--f]);for(;++i<f;)if(u=a[i],u&&V[typeof u])for(var c=-1,p=V[typeof u]&&ne(u),s=p?p.length:0;++c<s;)e=p[c],o[e]=l?l(o[e],u[e]):u[e];return o},ae=function(n,r,t){var e,u=n,o=u;
	
	if(!u)return o;for(var a=arguments,i=0,f="number"==typeof t?2:a.length;++i<f;)if(u=a[i],u&&V[typeof u])for(var l=-1,c=V[typeof u]&&ne(u),p=c?c.length:0;++l<p;)e=c[l],"undefined"==typeof o[e]&&(o[e]=u[e]);return o},ie=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(e in u)if(r(u[e],e,n)===!1)return o;return o},fe=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(var a=-1,i=V[typeof u]&&ne(u),f=i?i.length:0;++a<f;)if(e=i[a],
	r(u[e],e,n)===!1)return o;return o},le=Dt?function(n){if(!n||Nt.call(n)!=z)return!1;var r=n.valueOf,t=cn(r)&&(t=Dt(r))&&Dt(t);return t?n==t||Dt(n)==t:pn(n)}:pn,ce=on(function(n,r,t){Tt.call(n,t)?n[t]++:n[t]=1}),pe=on(function(n,r,t){(Tt.call(n,t)?n[t]:n[t]=[]).push(r)}),se=on(function(n,r,t){n[t]=r}),ve=nr,he=Hn,ge=cn(ge=yt.now)&&ge||function(){return(new yt).getTime()},ye=8==Gt(d+"08")?Gt:function(n,r){return Gt(Fn(n)?n.replace(R,""):n,r||0)};return h.after=Tr,h.assign=oe,h.at=Mn,h.bind=$r,h.bindAll=Fr,
	h.bindKey=Br,h.chain=lt,h.compact=sr,h.compose=Wr,h.constant=Jr,h.countBy=ce,h.create=yn,h.createCallback=Qr,h.curry=qr,h.debounce=zr,h.defaults=ae,h.defer=Lr,h.delay=Pr,h.difference=vr,h.filter=Hn,h.flatten=mr,h.forEach=Xn,h.forEachRight=Yn,h.forIn=ie,h.forInRight=_n,h.forOwn=fe,h.forOwnRight=dn,h.functions=wn,h.groupBy=pe,h.indexBy=se,h.initial=_r,h.intersection=dr,h.invert=kn,h.invoke=Zn,h.keys=ne,h.map=nr,h.mapValues=Wn,h.max=rr,h.memoize=Kr,h.merge=qn,h.min=tr,h.omit=zn,h.once=Ur,h.pairs=Ln,
	h.partial=Mr,h.partialRight=Vr,h.pick=Pn,h.pluck=ve,h.property=tt,h.pull=kr,h.range=xr,h.reject=or,h.remove=Cr,h.rest=Or,h.shuffle=ir,h.sortBy=cr,h.tap=ct,h.throttle=Gr,h.times=at,h.toArray=pr,h.transform=Kn,h.union=Rr,h.uniq=Er,h.values=Un,h.where=he,h.without=Ir,h.wrap=Hr,h.xor=Sr,h.zip=Ar,h.zipObject=Dr,h.collect=nr,h.drop=Or,h.each=Xn,h.eachRight=Yn,h.extend=oe,h.methods=wn,h.object=Dr,h.select=Hn,h.tail=Or,h.unique=Er,h.unzip=Ar,Zr(h),h.clone=hn,h.cloneDeep=gn,h.contains=Vn,h.escape=Xr,h.every=Gn,
	h.find=Jn,h.findIndex=hr,h.findKey=mn,h.findLast=Qn,h.findLastIndex=gr,h.findLastKey=bn,h.has=jn,h.identity=Yr,h.indexOf=br,h.isArguments=vn,h.isArray=Yt,h.isBoolean=xn,h.isDate=Cn,h.isElement=On,h.isEmpty=Nn,h.isEqual=Rn,h.isFinite=En,h.isFunction=In,h.isNaN=An,h.isNull=Dn,h.isNumber=Tn,h.isObject=Sn,h.isPlainObject=le,h.isRegExp=$n,h.isString=Fn,h.isUndefined=Bn,h.lastIndexOf=jr,h.mixin=Zr,h.noConflict=nt,h.noop=rt,h.now=ge,h.parseInt=ye,h.random=et,h.reduce=er,h.reduceRight=ur,h.result=ut,h.runInContext=s,
	h.size=fr,h.some=lr,h.sortedIndex=Nr,h.template=ot,h.unescape=it,h.uniqueId=ft,h.all=Gn,h.any=lr,h.detect=Jn,h.findWhere=Jn,h.foldl=er,h.foldr=ur,h.include=Vn,h.inject=er,Zr(function(){var n={};return fe(h,function(r,t){h.prototype[t]||(n[t]=r)}),n}(),!1),h.first=yr,h.last=wr,h.sample=ar,h.take=yr,h.head=yr,fe(h,function(n,r){var t="sample"!==r;h.prototype[r]||(h.prototype[r]=function(r,e){var u=this.__chain__,o=n(this.__wrapped__,r,e);return u||null!=r&&(!e||t&&"function"==typeof r)?new g(o,u):o;
	
	})}),h.VERSION="2.4.2",h.prototype.chain=pt,h.prototype.toString=st,h.prototype.value=vt,h.prototype.valueOf=vt,Xn(["join","pop","shift"],function(n){var r=xt[n];h.prototype[n]=function(){var n=this.__chain__,t=r.apply(this.__wrapped__,arguments);return n?new g(t,n):t}}),Xn(["push","reverse","sort","unshift"],function(n){var r=xt[n];h.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),Xn(["concat","slice","splice"],function(n){var r=xt[n];h.prototype[n]=function(){return new g(r.apply(this.__wrapped__,arguments),this.__chain__);
	
	}}),h}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,k=/(__e\(.*?\)|\b__t\)) \+\n'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,R=RegExp("^["+d+"]*0+(?=.$)"),E=/($^)/,I=/\bthis\b/,S=/['\n\r\t\u2028\u2029\\]/g,A=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],D=0,T="[object Arguments]",$="[object Array]",F="[object Boolean]",B="[object Date]",W="[object Function]",q="[object Number]",z="[object Object]",L="[object RegExp]",P="[object String]",K={};
	
	K[W]=!1,K[T]=K[$]=K[F]=K[B]=K[q]=K[z]=K[L]=K[P]=!0;var U={leading:!1,maxWait:0,trailing:!1},M={configurable:!1,enumerable:!1,value:null,writable:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},H=V[typeof window]&&window||this,J=V[typeof exports]&&exports&&!exports.nodeType&&exports,Q=V[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=V[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(H=Y);
	
	var Z=s(); true?(H._=Z,!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:H._=Z}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(3), __webpack_require__(9)(module), (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"test\">\n  <p>This is a test</p>\n  <p>Hello: {{ hello }} </p>\n  <div v-if=\"dataset.length > 0\">\n    {{ first | json }}\n  <div>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map