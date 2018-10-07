// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../index.js":[function(require,module,exports) {
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
(function () {
  console.log("hello world");
  var template = document.createElement("template");
  template.innerHTML = "\n  <style>\n\n.button\n{\n  position: absolute;\n  top: calc(50% - 18px);\n  left: calc(50% - 37px);\n  width: 74px;\n  height: 36px;\n  overflow: hidden;\n}\n\n.button.r, .button.r .layer\n{\n  border-radius: 100px;\n}\n.button.b2\n{\n  border-radius: 2px;\n}\n\n.checkbox\n{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs\n{\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.layer\n{\n  width: 100%;\n  background-color: #ebf7fc;\n  transition: 0.3s ease all;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n\n/* Slide */\n.slide .knobs:before\n{\n  content: attr(data-yes);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03A9F4;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.slide .checkbox:checked + .knobs:before\n{\n  content: attr(data-no);\n  left: 42px;\n  background-color: #f44336;\n}\n\n.slide .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\n}\n\n.slide .knobs, \n.slide .knobs:before, \n.slide .layer\n{\n  transition: 0.3s ease all;\n}\n\n/* Move  */\n.move .knobs:before, .move .knobs:after\n{\n  content: attr(data-yes);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03A9F4;\n  border-radius: 50%;\n  transition: 0.3s ease all;\n}\n\n.move .knobs:before\n{\n  content: attr(data-yes);\n}\n\n.move .knobs:after\n{\n  content: attr(data-no);\n}\n\n.move .knobs:after\n{\n  right: -28px;\n  left: auto;\n  background-color: #F44336;\n}\n\n.move .checkbox:checked + .knobs:before\n{\n  left: -28px;\n}\n\n.move .checkbox:checked + .knobs:after\n{\n  right: 4px;\n}\n\n.move .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\n}\n\n/* Up down */\n.updown .knobs:before, .updown .knobs:after\n{\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nbackground-color: #03A9F4;\nborder-radius: 50%;\ntransition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.updown .knobs:before\n{\ncontent: attr(data-yes);\n}\n\n.updown .knobs:after\n{\ncontent: attr(data-no);\n}\n\n.updown .knobs:after\n{\ntop: -28px;\nright: 4px;\nleft: auto;\nbackground-color: #F44336;\n}\n\n.updown .checkbox:checked + .knobs:before\n{\ntop: -28px;\n}\n\n.updown .checkbox:checked + .knobs:after\n{\ntop: 4px;\n}\n\n.updown .checkbox:checked ~ .layer\n{\nbackground-color: #fcebeb;\n}\n\n/* Flip style */\n.flip\n{\nperspective: 60px;\noverflow: visible;\n}\n\n.flip .knobs:before, .flip .knobs span\n{\ncontent: '';\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nborder-radius: 50%;\ntransition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.flip .knobs:before\n{\nbackground-color: #03A9F4;\n}\n\n.flip .knobs span:before\n{\ncontent: attr(data-yes);\n}\n\n.flip .knobs:before, .flip .layer\n{\ntransform: rotateY(0);\ntransform-origin: center;\n}\n\n.flip .checkbox:checked + .knobs:before, .flip .checkbox:checked + .knobs span\n{\nleft: 42px;\n}\n\n.flip .checkbox:checked + .knobs:before\n{\ntransform: rotateY(180deg);\nbackground-color: #f44336;\n}\n\n.flip .checkbox:checked + .knobs span:before\n{\ncontent: attr(data-no);\nleft: 42px;\n}\n\n.flip .checkbox:checked ~ .layer\n{\nbackground-color: #fcebeb;\ntransform: rotateY(-180deg);\n}\n\n.flip .knobs, .flip .knobs:before, .flip .layer\n{\ntransition: 0.3s ease all;\n}\n\n/* Rotate style */\n.rotate\n{\noverflow: visible;\n}\n\n.rotate .knobs:before\n{\ncontent: attr(data-yes);\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nbackground-color: #03A9F4;\nborder-radius: 50%;\n}\n\n.rotate .layer, .rotate .knobs, .rotate .knobs:before\n{\ntransform: rotateZ(0);\ntransition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.rotate .checkbox:checked + .knobs\n{\ntransform: rotateZ(-180deg);\n}\n\n.rotate .checkbox:checked + .knobs:before\n{\ncontent: attr(data-no);\n         background-color: #f44336;\ntransform: rotateZ(180deg);\n}\n\n.rotate .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\ntransform: rotateZ(180deg);\n}\n\n/* Fade out */\n.fadeout .knobs:before, .fadeout .knobs:after, .fadeout .knobs span\n{\nposition: absolute;\ntop: 4px;\nwidth: 20px;\nheight: 10px;\n        font-size: 10px;\n        font-weight: bold;\n        text-align: center;\n        line-height: 1;\npadding: 9px 4px;\n         border-radius: 50%;\ntransition: 0.3s ease all;\n}\n\n.fadeout .knobs:before\n{\ncontent: attr(data-yes);\ncolor: #fff;\nleft: 4px;\n}\n\n.fadeout .knobs:after\n{\ncontent: attr(data-no);\nleft: 42px;\ncolor: #fff;\n       background-color: #f44336;\nopacity: 0;\n}\n\n.fadeout .knobs:before, .fadeout .knobs:after\n{\n  z-index: 2;\n}\n\n.fadeout .knobs span\n{\nleft: 4px;\n      background-color: #03A9F4;\n      z-index: 1;\n}\n\n.fadeout .checkbox:checked + .knobs:before\n{\nopacity: 0;\n}\n\n.fadeout .checkbox:checked + .knobs:after\n{\nopacity: 1;\n}\n\n.fadeout .checkbox:checked + .knobs span\n{\n  background-color: #fcebeb;\ntransform: scale(4);\n}\n\n/* Slide all */\n.slideall .knobs:before, .slideall .knobs:after, .slideall .knobs span\n{\n    position: absolute;\n    top: 4px;\n    width: 20px;\n    height: 10px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n    border-radius: 50%;\n    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.slideall .knobs:before\n{\n    content: attr(data-yes);\n    left: 4px;\n}\n\n.slideall .knobs:after\n{\n    content: attr(data-no);\n    right: -24px;\n}\n\n.slideall .knobs:before, .slideall .knobs:after\n{\n    color: #fff;\n    z-index: 2;\n}\n\n.slideall .knobs span\n{\n    left: 4px;\n    background-color: #03a9f4;\n    z-index: 1;\n}\n\n.slideall .checkbox:checked + .knobs:before\n{\n    left: -24px;\n}\n\n.slideall .checkbox:checked + .knobs:after\n{\n    right: 4px;\n}\n\n.slideall .checkbox:checked + .knobs span\n{\n    left: 42px;\n    background-color: #F44336;\n}\n\n.slideall .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n</style>\n<div class=\"button r\" role=\"switch\" aria-label=\"CSS Toggle Button\" aria-checked=\"true\">\n  <input type=\"checkbox\" class=\"checkbox\" aria-label=\"CSS Toggle Button\">\n  <div class=\"knobs\" data-yes=\"\u2714\" data-no=\"\u2715\"></div>\n  <div class=\"layer\"></div>\n</div>\n";

  var CSSToggle = function (_CustomElement2) {
    _inherits(CSSToggle, _CustomElement2);

    function CSSToggle() {
      _classCallCheck(this, CSSToggle);

      var _this = _possibleConstructorReturn(this, (CSSToggle.__proto__ || Object.getPrototypeOf(CSSToggle)).call(this));

      _this.attachShadow({ mode: "open" });
      _this.shadowRoot.appendChild(template.content.cloneNode(true));
      return _this;
    }

    _createClass(CSSToggle, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var btn = this.shadowRoot.querySelector(".button");
        var theme = this.getAttribute("theme") || "slide";
        var onLabel = this.getAttribute("on-label") || "✔";
        var offLabel = this.getAttribute("off-label") || "✕";
        btn.classList.add(theme);
        var knobs = this.shadowRoot.querySelector(".knobs");
        knobs.setAttribute("data-yes", onLabel);
        knobs.setAttribute("data-no", offLabel);
        var addSpan = ["flip", "fadeout", "slideall"];
        if (addSpan.includes(theme)) {
          var span = document.createElement("span");
          span.setAttribute("data-yes", onLabel);
          span.setAttribute("data-no", offLabel);
          knobs.appendChild(span);
        }
      }
    }]);

    return CSSToggle;
  }(_CustomElement);

  window.customElements.define("css-toggle", CSSToggle);
})();
},{}],"../../../../../.nvm/versions/node/v8.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55269' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../.nvm/versions/node/v8.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../index.js"], null)
//# sourceMappingURL=/css-toggle.4ceac70c.map