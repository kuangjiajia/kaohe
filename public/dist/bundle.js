/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//webpack的入口文件
__webpack_require__(1); //引入less文件
__webpack_require__(6); //引入手机适配方案
__webpack_require__(7); //引入画的canvas
__webpack_require__(8); //引入写的ajax

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.5@css-loader/index.js!../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./demo.less", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.5@css-loader/index.js!../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./demo.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  padding: 0px;\n  margin: 0px;\n}\nhtml,\nbody {\n  overflow: hidden;\n  overflow-y: auto;\n}\n@font-face {\n  font-family: 'iconfont';\n  /* project id 397475 */\n  src: url('//at.alicdn.com/t/font_397475_zadkqs68rcjcq5mi.eot');\n  src: url('//at.alicdn.com/t/font_397475_zadkqs68rcjcq5mi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_397475_zadkqs68rcjcq5mi.woff') format('woff'), url('//at.alicdn.com/t/font_397475_zadkqs68rcjcq5mi.ttf') format('truetype'), url('//at.alicdn.com/t/font_397475_zadkqs68rcjcq5mi.svg#iconfont') format('svg');\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: .25rem;\n  width: .33rem;\n  height: .33rem;\n  font-style: normal;\n}\n.header {\n  position: relative;\n  width: 3.75rem;\n  height: 3.14rem;\n}\n.header .background {\n  width: 3.75rem;\n  height: 3.14rem;\n}\n.header .today-weather {\n  position: absolute;\n  top: 0.35rem;\n  left: 0;\n  width: 100%;\n  padding: 0 2.6% 0 3.6%;\n}\n.header .today-weather .weather-part {\n  line-height: 0.28rem;\n  margin-top: 0.07rem;\n  overflow: hidden;\n}\n.header .today-weather .weather-part h1 {\n  float: left;\n  font-size: .24rem;\n  color: #fff;\n}\n.header .today-weather .weather-part b {\n  float: left;\n  font-size: .24rem;\n  color: #fff;\n}\n.header .today-weather .update-weather {\n  line-height: 0.17rem;\n  font-size: 0.10rem;\n  color: #fff;\n}\n.header .today-weather .now-weather {\n  margin-top: 0.3rem;\n  font-size: 0.16rem;\n  color: #fff;\n}\n.header .today-weather .img-now {\n  position: absolute;\n  top: .5rem;\n  left: 0.8rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.header .today-weather .img-now .iconfont {\n  display: block;\n  width: 0.75rem;\n  height: 0.75rem;\n  font-size: 0.75rem;\n}\n.header .today-weather .temperature {\n  display: block;\n  overflow: hidden;\n}\n.header .today-weather .temperature .temperature_l {\n  float: left;\n  margin-right: 0.05rem;\n  line-height: 0.875rem;\n  text-shadow: 1px 1px 1px #666;\n  font-size: 0.6rem;\n  color: #fff;\n}\n.header .today-weather .temperature .temperature_r {\n  float: left;\n  line-height: 0.21rem;\n  margin-top: 0.14rem 0 0 0.15rem;\n  color: #fff;\n  text-align: left;\n  font-size: 0.14rem;\n}\n.header .today-weather .temperature .temperature_r p {\n  margin-top: 0.26rem;\n}\n.header .today-weather .dating {\n  overflow: hidden;\n  font-size: 0.13rem;\n  color: #fff;\n}\n.header .today-weather .twenty-four-forcast {\n  margin: 0.1rem 0 0 0.1rem;\n  width: 0.7rem;\n  font-size: 0.12rem;\n  color: #ffffff;\n  text-align: center;\n  border-radius: 0.05rem;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.content {\n  width: 3.75rem;\n  height: 1.97rem;\n}\n.content .week-day {\n  width: 100%;\n  height: 0.33rem;\n  list-style: none;\n}\n.content .week-day li {\n  float: left;\n  width: 0.625rem;\n  height: 100%;\n  line-height: 0.33rem;\n  font-size: 0.13rem;\n  text-align: center;\n}\n.content .week-weather-img {\n  width: 100%;\n  height: .33rem;\n  list-style: none;\n}\n.content .week-weather-img li {\n  float: left;\n  display: block;\n  height: 100%;\n  width: 0.575rem;\n  padding-left: 0.05rem;\n  text-align: center;\n}\n.content .week-weather-img li i {\n  display: block;\n  margin-left: 0.1rem;\n  width: 0.33rem;\n  height: 0.33rem;\n}\n.content .week-weather-now {\n  width: 100%;\n  height: 0.15rem;\n  list-style: none;\n}\n.content .week-weather-now li {\n  float: left;\n  width: 0.625rem;\n  height: 100%;\n  line-height: 0.15rem;\n  font-size: 0.12rem;\n  text-align: center;\n}\n.content .canvas {\n  width: 100%;\n  height: 0.78rem;\n  font-size: 0.16rem;\n}\n.content .temp-data {\n  display: none;\n}\n.content .week-wind {\n  width: 100%;\n  height: 0.15rem;\n  list-style: none;\n}\n.content .week-wind li {\n  float: left;\n  width: 0.625rem;\n  height: 100%;\n  font-size: 0.12rem;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var designWidth = 375,
    rem2px = 100;
if (window.innerWidth < 640) {
    //规定屏幕最大为640 保证电脑端看起来没有那么突兀
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px + 'px';
} else {
    document.documentElement.style.fontSize = 640 / designWidth * rem2px + 'px';
}
//自己写的一个手机适配方案 很简单

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var draw = window.draw = function () {
    let canvas = document.querySelector('.canvas'),
        ctx = canvas.getContext('2d'),
        //获取canvas并创建画布
    max_temp = document.querySelectorAll('.temp-data li span'),
        //得到暂存数据中的温度最高值
    min_temp = document.querySelectorAll('.temp-data li b'); //得到暂存数据中的温度最低值
    let diff = [],
        arr = []; //diff => 平均温度数组  arr => 每一天的平均温度和第一天的差值 便于画图
    //获取每一天的平均温度
    for (var i = 0; i < max_temp.length; i++) {
        diff.push(parseInt(max_temp[i].innerText) + parseInt(min_temp[i].innerText) / 2);
    }
    //获取每一天的温度与第一天的差值
    for (var j = 1; j < 7; j++) {
        arr.push(diff[j] - diff[0]);
    }
    //设定canvas画布的大小
    canvas.width = 712;
    canvas.height = 156;
    //开始画图
    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.lineCap = "round";
    ctx.font = "26px Arial";
    ctx.moveTo(60, 75 - arr[0]);
    ctx.lineTo(178, 75 - arr[1]);
    ctx.lineTo(296, 75 - arr[2]);
    ctx.lineTo(414, 75 - arr[3]);
    ctx.lineTo(532, 75 - arr[4]);
    ctx.lineTo(655, 75 - arr[5]);
    ctx.stroke();

    //填充最大温度
    ctx.fillText(max_temp[1].innerText, 60 - 10, 75 - arr[0] - 20);
    ctx.fillText(max_temp[2].innerText, 178 - 10, 75 - arr[1] - 20);
    ctx.fillText(max_temp[3].innerText, 296 - 10, 75 - arr[2] - 20);
    ctx.fillText(max_temp[4].innerText, 414 - 10, 75 - arr[3] - 20);
    ctx.fillText(max_temp[5].innerText, 532 - 10, 75 - arr[4] - 20);
    ctx.fillText(max_temp[6].innerText, 655 - 10, 75 - arr[5] - 20);
    //填充最小温度
    ctx.fillText(min_temp[1].innerText, 60 - 10, 75 - arr[0] + 40);
    ctx.fillText(min_temp[2].innerText, 178 - 10, 75 - arr[1] + 40);
    ctx.fillText(min_temp[3].innerText, 296 - 10, 75 - arr[2] + 40);
    ctx.fillText(min_temp[4].innerText, 414 - 10, 75 - arr[3] + 40);
    ctx.fillText(min_temp[5].innerText, 532 - 10, 75 - arr[4] + 40);
    ctx.fillText(min_temp[6].innerText, 655 - 10, 75 - arr[5] + 40);

    //在每一天那里画一个小圆点
    ctx.beginPath();
    ctx.arc(60, 75 - arr[0], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(178, 75 - arr[1], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(296, 75 - arr[2], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(414, 75 - arr[3], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(532, 75 - arr[4], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(655, 75 - arr[5], 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#259eed';
    ctx.fillStyle = "#259eed";
    ctx.fill();
    ctx.stroke();
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

//Promise写的异步ajax
var ajax = window.ajax = function (url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject('failed');
                }
            }
        };
        xhr.send();
    });
};

//通过ajax获取接口的数据，再把数据渲染到各个模版中
ajax('/dt').then(function (data) {
    var data = JSON.parse(data);
    let now_weather = document.querySelector('.now-weather'),
        //获取现在天气等接口
    weather_change = document.querySelector('.weather-change'),
        //获取天气变化范围的API
    weatherList = document.querySelectorAll('.week-weather-now li'),
        //获取一星期的天气的DOM
    MaxList = document.querySelectorAll('.temp-data li span'),
        //暂存数据最低温度DOM
    MinList = document.querySelectorAll('.temp-data li b'),
        //暂存数据的最高温度接口
    dateList = document.querySelectorAll('.week-day li'),
        //获取日期DOM
    windList = document.querySelectorAll('.week-wind li'); //获取风的DOM

    now_weather.innerText = data[0].weather + '°'; //渲染现在的温度
    weather_change.innerText = data[0].min_temp + '°' + '~' + data[0].max_temp + '°'; //渲染温度变化的范围
    for (var i = 0; i < 6; i++) {
        weatherList[i].innerText = data[i + 1].weather;
        dateList[i].innerText = data[i + 1].date;
        windList[i].innerText = data[i + 1].wind;
    }
    for (var i = 0; i < 7; i++) {
        //存入暂存温度的最高值和最低值
        MaxList[i].innerText = data[i].max_temp + '°';
        MinList[i].innerText = data[i].min_temp + '°';
    }
    draw();
});

//渲染现在的时间 
var dating = document.querySelector('.dating');

setInterval(function () {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        weekNow = weekArray[date.getDay()];

    dating.innerHTML = year + '年' + month + '月' + day + '日' + '  ' + weekNow;
}, 1000);

/***/ })
/******/ ]);