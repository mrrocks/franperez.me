require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"TextLayer":[function(require,module,exports){
var TextLayer, convertTextLayers, convertToTextLayer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

TextLayer = (function(superClass) {
  extend(TextLayer, superClass);

  function TextLayer(options) {
    if (options == null) {
      options = {};
    }
    this.doAutoSize = false;
    this.doAutoSizeHeight = false;
    if (options.backgroundColor == null) {
      options.backgroundColor = options.setup ? "hsla(60, 90%, 47%, .4)" : "transparent";
    }
    if (options.color == null) {
      options.color = "red";
    }
    if (options.lineHeight == null) {
      options.lineHeight = 1.25;
    }
    if (options.fontFamily == null) {
      options.fontFamily = "Helvetica";
    }
    if (options.fontSize == null) {
      options.fontSize = 20;
    }
    if (options.text == null) {
      options.text = "Use layer.text to add text";
    }
    TextLayer.__super__.constructor.call(this, options);
    this.style.whiteSpace = "pre-line";
    this.style.outline = "none";
  }

  TextLayer.prototype.setStyle = function(property, value, pxSuffix) {
    if (pxSuffix == null) {
      pxSuffix = false;
    }
    this.style[property] = pxSuffix ? value + "px" : value;
    this.emit("change:" + property, value);
    if (this.doAutoSize) {
      return this.calcSize();
    }
  };

  TextLayer.prototype.calcSize = function() {
    var constraints, size, sizeAffectingStyles;
    sizeAffectingStyles = {
      lineHeight: this.style["line-height"],
      fontSize: this.style["font-size"],
      fontWeight: this.style["font-weight"],
      paddingTop: this.style["padding-top"],
      paddingRight: this.style["padding-right"],
      paddingBottom: this.style["padding-bottom"],
      paddingLeft: this.style["padding-left"],
      textTransform: this.style["text-transform"],
      borderWidth: this.style["border-width"],
      letterSpacing: this.style["letter-spacing"],
      fontFamily: this.style["font-family"],
      fontStyle: this.style["font-style"],
      fontVariant: this.style["font-variant"]
    };
    constraints = {};
    if (this.doAutoSizeHeight) {
      constraints.width = this.width;
    }
    size = Utils.textSize(this.text, sizeAffectingStyles, constraints);
    if (this.style.textAlign === "right") {
      this.width = size.width;
      this.x = this.x - this.width;
    } else {
      this.width = size.width;
    }
    return this.height = size.height;
  };

  TextLayer.define("autoSize", {
    get: function() {
      return this.doAutoSize;
    },
    set: function(value) {
      this.doAutoSize = value;
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("autoSizeHeight", {
    set: function(value) {
      this.doAutoSize = value;
      this.doAutoSizeHeight = value;
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("contentEditable", {
    set: function(boolean) {
      this._element.contentEditable = boolean;
      this.ignoreEvents = !boolean;
      return this.on("input", function() {
        if (this.doAutoSize) {
          return this.calcSize();
        }
      });
    }
  });

  TextLayer.define("text", {
    get: function() {
      return this._element.textContent;
    },
    set: function(value) {
      this._element.textContent = value;
      this.emit("change:text", value);
      if (this.doAutoSize) {
        return this.calcSize();
      }
    }
  });

  TextLayer.define("fontFamily", {
    get: function() {
      return this.style.fontFamily;
    },
    set: function(value) {
      return this.setStyle("fontFamily", value);
    }
  });

  TextLayer.define("fontSize", {
    get: function() {
      return this.style.fontSize.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("fontSize", value, true);
    }
  });

  TextLayer.define("lineHeight", {
    get: function() {
      return this.style.lineHeight;
    },
    set: function(value) {
      return this.setStyle("lineHeight", value);
    }
  });

  TextLayer.define("fontWeight", {
    get: function() {
      return this.style.fontWeight;
    },
    set: function(value) {
      return this.setStyle("fontWeight", value);
    }
  });

  TextLayer.define("fontStyle", {
    get: function() {
      return this.style.fontStyle;
    },
    set: function(value) {
      return this.setStyle("fontStyle", value);
    }
  });

  TextLayer.define("fontVariant", {
    get: function() {
      return this.style.fontVariant;
    },
    set: function(value) {
      return this.setStyle("fontVariant", value);
    }
  });

  TextLayer.define("padding", {
    set: function(value) {
      this.setStyle("paddingTop", value, true);
      this.setStyle("paddingRight", value, true);
      this.setStyle("paddingBottom", value, true);
      return this.setStyle("paddingLeft", value, true);
    }
  });

  TextLayer.define("paddingTop", {
    get: function() {
      return this.style.paddingTop.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingTop", value, true);
    }
  });

  TextLayer.define("paddingRight", {
    get: function() {
      return this.style.paddingRight.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingRight", value, true);
    }
  });

  TextLayer.define("paddingBottom", {
    get: function() {
      return this.style.paddingBottom.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingBottom", value, true);
    }
  });

  TextLayer.define("paddingLeft", {
    get: function() {
      return this.style.paddingLeft.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("paddingLeft", value, true);
    }
  });

  TextLayer.define("textAlign", {
    set: function(value) {
      return this.setStyle("textAlign", value);
    }
  });

  TextLayer.define("textTransform", {
    get: function() {
      return this.style.textTransform;
    },
    set: function(value) {
      return this.setStyle("textTransform", value);
    }
  });

  TextLayer.define("letterSpacing", {
    get: function() {
      return this.style.letterSpacing.replace("px", "");
    },
    set: function(value) {
      return this.setStyle("letterSpacing", value, true);
    }
  });

  TextLayer.define("length", {
    get: function() {
      return this.text.length;
    }
  });

  return TextLayer;

})(Layer);

convertToTextLayer = function(layer) {
  var css, cssObj, importPath, t;
  t = new TextLayer({
    name: layer.name,
    frame: layer.frame,
    parent: layer.parent
  });
  cssObj = {};
  css = layer._info.metadata.css;
  css.forEach(function(rule) {
    var arr;
    if (_.includes(rule, '/*')) {
      return;
    }
    arr = rule.split(': ');
    return cssObj[arr[0]] = arr[1].replace(';', '');
  });
  t.style = cssObj;
  importPath = layer.__framerImportedFromPath;
  if (_.includes(importPath, '@2x')) {
    t.fontSize *= 2;
    t.lineHeight = (parseInt(t.lineHeight) * 2) + 'px';
    t.letterSpacing *= 2;
  }
  t.y -= (parseInt(t.lineHeight) - t.fontSize) / 2;
  t.y -= t.fontSize * 0.1;
  t.x -= t.fontSize * 0.08;
  t.width += t.fontSize * 0.5;
  t.text = layer._info.metadata.string;
  layer.destroy();
  return t;
};

Layer.prototype.convertToTextLayer = function() {
  return convertToTextLayer(this);
};

convertTextLayers = function(obj) {
  var layer, prop, results;
  results = [];
  for (prop in obj) {
    layer = obj[prop];
    if (layer._info.kind === "text") {
      results.push(obj[prop] = convertToTextLayer(layer));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

Layer.prototype.frameAsTextLayer = function(properties) {
  var t;
  t = new TextLayer;
  t.frame = this.frame;
  t.superLayer = this.superLayer;
  _.extend(t, properties);
  this.destroy();
  return t;
};

exports.TextLayer = TextLayer;

exports.convertTextLayers = convertTextLayers;


},{}],"material":[function(require,module,exports){
var Line, S,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

S = function(n) {
  var device, scale;
  scale = 1;
  device = Framer.Device.deviceType;
  if (device.slice(0, "apple-iphone".length) === "apple-iphone") {
    scale = Screen.width / 375;
  } else if (device.slice(0, "google-nexus".length) === "google-nexus") {
    scale = Screen.width / 360;
  }
  return n * scale;
};

Line = (function(superClass) {
  extend(Line, superClass);

  function Line(size, thickness, color) {
    Line.__super__.constructor.call(this, {
      width: size,
      height: size,
      backgroundColor: null
    });
    this.leftHalfWrapper = new Layer({
      backgroundColor: null,
      width: this.width / 2,
      height: this.width,
      parent: this,
      clip: true,
      force2d: true
    });
    this.leftHalfClip = new Layer({
      backgroundColor: null,
      x: this.width / 2,
      width: this.width / 2,
      height: this.width,
      originX: 0,
      originY: 0.5,
      parent: this.leftHalfWrapper,
      clip: true,
      force2d: true
    });
    this.leftHalf = new Layer({
      backgroundColor: null,
      x: -this.width / 2,
      width: this.width,
      height: this.width,
      borderRadius: this.width / 2,
      borderWidth: thickness,
      borderColor: color,
      parent: this.leftHalfClip,
      force2d: true
    });
    this.rightHalfWrapper = new Layer({
      backgroundColor: null,
      x: this.width / 2,
      width: this.width / 2,
      height: this.width,
      parent: this,
      clip: true,
      force2d: true
    });
    this.rightHalfClip = new Layer({
      backgroundColor: null,
      x: -this.width / 2,
      width: this.width / 2,
      height: this.width,
      originX: 1,
      originY: 0.5,
      parent: this.rightHalfWrapper,
      clip: true,
      force2d: true
    });
    this.rightHalf = new Layer({
      backgroundColor: null,
      width: this.width,
      height: this.width,
      borderRadius: this.width / 2,
      borderWidth: thickness,
      borderColor: color,
      parent: this.rightHalfClip,
      force2d: true
    });
  }

  Line.prototype._v = 0;

  Line.define("value", {
    get: function() {
      return this._v;
    },
    set: function(v) {
      this._v = v;
      if (v < 0.5) {
        this.rightHalfClip.rotationZ = 360 * v;
        return this.leftHalfClip.rotationZ = 0;
      } else {
        this.rightHalfClip.rotationZ = 180;
        return this.leftHalfClip.rotationZ = 360 * v - 180;
      }
    }
  });

  return Line;

})(Layer);

exports.Spinner = (function(superClass) {
  extend(Spinner, superClass);

  Spinner.prototype.colors = ["#DB4437", "#4285F4", "#0F9D58", "#F4B400"];

  function Spinner(options) {
    this.options = options != null ? options : {};
    Spinner.__super__.constructor.call(this, _.defaults(this.options, {
      size: 48,
      thickness: 48,
      color: "#4285f4",
      changeColor: typeof this.options.changeColor === "undefined" ? true : void 0
    }));
    this.width = S(this.options.size);
    this.height = S(this.options.size);
    this.backgroundColor = null;
    this.line = new Line(S(this.options.size), S(this.options.thickness), this.options.color);
    this.line.parent = this;
  }

  Spinner.prototype._started = false;

  Spinner.prototype.start = function() {
    this.rotation = this.line.value = 0;
    this.opacity = 1;
    this._started = true;
    return this._animate();
  };

  Spinner.prototype.stop = function() {
    this._started = false;
    return this.animate({
      properties: {
        opacity: 0
      },
      time: 0.2
    });
  };

  Spinner.prototype._counter = 0;

  Spinner.prototype._animate = function() {
    var lineIn, lineOut, rotate;
    rotate = new Animation({
      layer: this,
      properties: {
        rotation: 360
      },
      time: 1.8,
      curve: "linear"
    });
    lineIn = new Animation({
      layer: this.line,
      properties: {
        value: 0.75
      },
      time: 0.54,
      curve: "cubic-bezier(0.4, 0.0, 0.2, 1)"
    });
    lineOut = new Animation({
      layer: this.line,
      properties: {
        value: 0.03,
        rotation: 360
      },
      time: 0.68,
      curve: "cubic-bezier(0.4, 0.0, 0.2, 1)"
    });
    rotate.on(Events.AnimationEnd, (function(_this) {
      return function() {
        _this.rotation = 0;
        if (_this._started) {
          return rotate.start();
        }
      };
    })(this));
    lineIn.on(Events.AnimationEnd, (function(_this) {
      return function() {
        if (_this._started) {
          return lineOut.start();
        }
      };
    })(this));
    lineOut.on(Events.AnimationEnd, (function(_this) {
      return function() {
        _this.line.rotation = 0;
        if (_this._started) {
          lineIn.start();
        }
        if (_this.options.changeColor) {
          _this.line.leftHalf.animate({
            properties: {
              borderColor: _this.colors[_this._counter]
            },
            time: 0.2,
            colorModel: "rgb"
          });
          _this.line.rightHalf.animate({
            properties: {
              borderColor: _this.colors[_this._counter]
            },
            time: 0.2,
            colorModel: "rgb"
          });
          _this._counter++;
          if (_this._counter >= _this.colors.length) {
            return _this._counter = 0;
          }
        }
      };
    })(this));
    rotate.start();
    return lineIn.start();
  };

  return Spinner;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbWF0ZXJpYWwuY29mZmVlIiwiLi4vbW9kdWxlcy9UZXh0TGF5ZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJTID0gKG4pIC0+XG5cdHNjYWxlID0gMVxuXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0aWYgZGV2aWNlLnNsaWNlKDAsIFwiYXBwbGUtaXBob25lXCIubGVuZ3RoKSBpcyBcImFwcGxlLWlwaG9uZVwiXG5cdFx0c2NhbGUgPSBTY3JlZW4ud2lkdGggLyAzNzVcblx0ZWxzZSBpZiBkZXZpY2Uuc2xpY2UoMCwgXCJnb29nbGUtbmV4dXNcIi5sZW5ndGgpIGlzIFwiZ29vZ2xlLW5leHVzXCJcblx0XHRzY2FsZSA9IFNjcmVlbi53aWR0aCAvIDM2MFxuXHRyZXR1cm4gbiAqIHNjYWxlXG5cbmNsYXNzIExpbmUgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKHNpemUsIHRoaWNrbmVzcywgY29sb3IpLT5cblx0XHRzdXBlciB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdCMgTGVmdCBoYWxmXG5cdFx0QGxlZnRIYWxmV3JhcHBlciA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR3aWR0aDogQHdpZHRoIC8gMiwgaGVpZ2h0OiBAd2lkdGhcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0Y2xpcDogeWVzXG5cdFx0XHRmb3JjZTJkOiB5ZXNcblx0XHRAbGVmdEhhbGZDbGlwID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHg6IEB3aWR0aCAvIDJcblx0XHRcdHdpZHRoOiBAd2lkdGggLyAyLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0b3JpZ2luWDogMCwgb3JpZ2luWTogMC41XG5cdFx0XHRwYXJlbnQ6IEBsZWZ0SGFsZldyYXBwZXJcblx0XHRcdGNsaXA6IHllc1xuXHRcdFx0Zm9yY2UyZDogeWVzXG5cdFx0QGxlZnRIYWxmID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHg6IC1Ad2lkdGggLyAyXG5cdFx0XHR3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAd2lkdGggLyAyXG5cdFx0XHRib3JkZXJXaWR0aDogdGhpY2tuZXNzXG5cdFx0XHRib3JkZXJDb2xvcjogY29sb3Jcblx0XHRcdHBhcmVudDogQGxlZnRIYWxmQ2xpcFxuXHRcdFx0Zm9yY2UyZDogeWVzXG5cblx0XHQjIFJpZ2h0IGhhbGZcblx0XHRAcmlnaHRIYWxmV3JhcHBlciA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiBAd2lkdGggLyAyXG5cdFx0XHR3aWR0aDogQHdpZHRoIC8gMiwgaGVpZ2h0OiBAd2lkdGhcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0Y2xpcDogeWVzXG5cdFx0XHRmb3JjZTJkOiB5ZXNcblx0XHRAcmlnaHRIYWxmQ2xpcCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiAtQHdpZHRoIC8gMlxuXHRcdFx0d2lkdGg6IEB3aWR0aCAvIDIsIGhlaWdodDogQHdpZHRoXG5cdFx0XHRvcmlnaW5YOiAxLCBvcmlnaW5ZOiAwLjVcblx0XHRcdHBhcmVudDogQHJpZ2h0SGFsZldyYXBwZXJcblx0XHRcdGNsaXA6IHllc1xuXHRcdFx0Zm9yY2UyZDogeWVzXG5cdFx0QHJpZ2h0SGFsZiA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAd2lkdGggLyAyXG5cdFx0XHRib3JkZXJXaWR0aDogdGhpY2tuZXNzXG5cdFx0XHRib3JkZXJDb2xvcjogY29sb3Jcblx0XHRcdHBhcmVudDogQHJpZ2h0SGFsZkNsaXBcblx0XHRcdGZvcmNlMmQ6IHllc1xuXG5cdF92OiAwXHQjIG1pbjogMCwgbWF4OiAxXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gQF92XG5cdFx0c2V0OiAodikgLT5cblx0XHRcdEBfdiA9IHZcblx0XHRcdGlmIHYgPCAwLjVcblx0XHRcdFx0QHJpZ2h0SGFsZkNsaXAucm90YXRpb25aID0gMzYwICogdlxuXHRcdFx0XHRAbGVmdEhhbGZDbGlwLnJvdGF0aW9uWiA9IDBcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHJpZ2h0SGFsZkNsaXAucm90YXRpb25aID0gMTgwXG5cdFx0XHRcdEBsZWZ0SGFsZkNsaXAucm90YXRpb25aID0gMzYwICogdiAtIDE4MFxuXG5jbGFzcyBleHBvcnRzLlNwaW5uZXIgZXh0ZW5kcyBMYXllclxuXHRjb2xvcnM6IFtcIiNEQjQ0MzdcIiwgXCIjNDI4NUY0XCIsIFwiIzBGOUQ1OFwiLCBcIiNGNEI0MDBcIl0gIyBkZWZhdWx0XG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblx0XHRzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0c2l6ZTogNDhcblx0XHRcdHRoaWNrbmVzczogNDhcblx0XHRcdGNvbG9yOiBcIiM0Mjg1ZjRcIlxuXHRcdFx0Y2hhbmdlQ29sb3I6IHllcyBpZiB0eXBlb2YgQG9wdGlvbnMuY2hhbmdlQ29sb3IgaXMgXCJ1bmRlZmluZWRcIlxuXG5cdFx0QHdpZHRoID0gUyhAb3B0aW9ucy5zaXplKVxuXHRcdEBoZWlnaHQgPSBTKEBvcHRpb25zLnNpemUpXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IG51bGxcblxuXHRcdEBsaW5lID0gbmV3IExpbmUgUyhAb3B0aW9ucy5zaXplKSwgUyhAb3B0aW9ucy50aGlja25lc3MpLCBAb3B0aW9ucy5jb2xvclxuXHRcdEBsaW5lLnBhcmVudCA9IEBcblxuXG5cdF9zdGFydGVkOiBmYWxzZVxuXHRzdGFydDogLT5cblx0XHRAcm90YXRpb24gPSBAbGluZS52YWx1ZSA9IDBcblx0XHRAb3BhY2l0eSA9IDFcblx0XHRAX3N0YXJ0ZWQgPSB0cnVlXG5cdFx0QF9hbmltYXRlKClcblx0c3RvcDogLT5cblx0XHRAX3N0YXJ0ZWQgPSBmYWxzZVxuXHRcdEBhbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiBvcGFjaXR5OiAwXG5cdFx0XHR0aW1lOiAwLjJcblxuXHRfY291bnRlcjogMFxuXHRfYW5pbWF0ZTogLT5cblx0XHRyb3RhdGUgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogQFxuXHRcdFx0cHJvcGVydGllczogcm90YXRpb246IDM2MFxuXHRcdFx0dGltZTogMS44XG5cdFx0XHRjdXJ2ZTogXCJsaW5lYXJcIlxuXHRcdGxpbmVJbiA9IG5ldyBBbmltYXRpb25cblx0XHRcdGxheWVyOiBAbGluZVxuXHRcdFx0cHJvcGVydGllczogdmFsdWU6IDAuNzVcblx0XHRcdHRpbWU6IDAuNTRcblx0XHRcdGN1cnZlOiBcImN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiXG5cdFx0bGluZU91dCA9IG5ldyBBbmltYXRpb25cblx0XHRcdGxheWVyOiBAbGluZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0dmFsdWU6IDAuMDNcblx0XHRcdFx0cm90YXRpb246IDM2MFxuXHRcdFx0dGltZTogMC42OFxuXHRcdFx0Y3VydmU6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpXCJcblxuXHRcdHJvdGF0ZS5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0QHJvdGF0aW9uID0gMFxuXHRcdFx0cm90YXRlLnN0YXJ0KCkgaWYgQF9zdGFydGVkXG5cdFx0bGluZUluLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRsaW5lT3V0LnN0YXJ0KCkgaWYgQF9zdGFydGVkXG5cdFx0bGluZU91dC5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0QGxpbmUucm90YXRpb24gPSAwXG5cdFx0XHRsaW5lSW4uc3RhcnQoKSBpZiBAX3N0YXJ0ZWRcblxuXHRcdFx0aWYgQG9wdGlvbnMuY2hhbmdlQ29sb3Jcblx0XHRcdFx0QGxpbmUubGVmdEhhbGYuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6IGJvcmRlckNvbG9yOiBAY29sb3JzW0BfY291bnRlcl1cblx0XHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdFx0XHRjb2xvck1vZGVsOiBcInJnYlwiXG5cdFx0XHRcdEBsaW5lLnJpZ2h0SGFsZi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczogYm9yZGVyQ29sb3I6IEBjb2xvcnNbQF9jb3VudGVyXVxuXHRcdFx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XHRcdGNvbG9yTW9kZWw6IFwicmdiXCJcblx0XHRcdFx0QF9jb3VudGVyKytcblx0XHRcdFx0QF9jb3VudGVyID0gMCBpZiBAX2NvdW50ZXIgPj0gQGNvbG9ycy5sZW5ndGhcblxuXHRcdHJvdGF0ZS5zdGFydCgpXG5cdFx0bGluZUluLnN0YXJ0KCkiLCJjbGFzcyBUZXh0TGF5ZXIgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0QGRvQXV0b1NpemUgPSBmYWxzZVxuXHRcdEBkb0F1dG9TaXplSGVpZ2h0ID0gZmFsc2Vcblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJoc2xhKDYwLCA5MCUsIDQ3JSwgLjQpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcblx0XHRvcHRpb25zLmNvbG9yID89IFwicmVkXCJcblx0XHRvcHRpb25zLmxpbmVIZWlnaHQgPz0gMS4yNVxuXHRcdG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIkhlbHZldGljYVwiXG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAyMFxuXHRcdG9wdGlvbnMudGV4dCA/PSBcIlVzZSBsYXllci50ZXh0IHRvIGFkZCB0ZXh0XCJcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QHN0eWxlLndoaXRlU3BhY2UgPSBcInByZS1saW5lXCIgIyBhbGxvdyBcXG4gaW4gLnRleHRcblx0XHRAc3R5bGUub3V0bGluZSA9IFwibm9uZVwiICMgbm8gYm9yZGVyIHdoZW4gc2VsZWN0ZWRcblx0XHRcblx0c2V0U3R5bGU6IChwcm9wZXJ0eSwgdmFsdWUsIHB4U3VmZml4ID0gZmFsc2UpIC0+XG5cdFx0QHN0eWxlW3Byb3BlcnR5XSA9IGlmIHB4U3VmZml4IHRoZW4gdmFsdWUrXCJweFwiIGVsc2UgdmFsdWVcblx0XHRAZW1pdChcImNoYW5nZToje3Byb3BlcnR5fVwiLCB2YWx1ZSlcblx0XHRpZiBAZG9BdXRvU2l6ZSB0aGVuIEBjYWxjU2l6ZSgpXG5cdFx0XG5cdGNhbGNTaXplOiAtPlxuXHRcdHNpemVBZmZlY3RpbmdTdHlsZXMgPVxuXHRcdFx0bGluZUhlaWdodDogQHN0eWxlW1wibGluZS1oZWlnaHRcIl1cblx0XHRcdGZvbnRTaXplOiBAc3R5bGVbXCJmb250LXNpemVcIl1cblx0XHRcdGZvbnRXZWlnaHQ6IEBzdHlsZVtcImZvbnQtd2VpZ2h0XCJdXG5cdFx0XHRwYWRkaW5nVG9wOiBAc3R5bGVbXCJwYWRkaW5nLXRvcFwiXVxuXHRcdFx0cGFkZGluZ1JpZ2h0OiBAc3R5bGVbXCJwYWRkaW5nLXJpZ2h0XCJdXG5cdFx0XHRwYWRkaW5nQm90dG9tOiBAc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXVxuXHRcdFx0cGFkZGluZ0xlZnQ6IEBzdHlsZVtcInBhZGRpbmctbGVmdFwiXVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogQHN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl1cblx0XHRcdGJvcmRlcldpZHRoOiBAc3R5bGVbXCJib3JkZXItd2lkdGhcIl1cblx0XHRcdGxldHRlclNwYWNpbmc6IEBzdHlsZVtcImxldHRlci1zcGFjaW5nXCJdXG5cdFx0XHRmb250RmFtaWx5OiBAc3R5bGVbXCJmb250LWZhbWlseVwiXVxuXHRcdFx0Zm9udFN0eWxlOiBAc3R5bGVbXCJmb250LXN0eWxlXCJdXG5cdFx0XHRmb250VmFyaWFudDogQHN0eWxlW1wiZm9udC12YXJpYW50XCJdXG5cdFx0Y29uc3RyYWludHMgPSB7fVxuXHRcdGlmIEBkb0F1dG9TaXplSGVpZ2h0IHRoZW4gY29uc3RyYWludHMud2lkdGggPSBAd2lkdGhcblx0XHRzaXplID0gVXRpbHMudGV4dFNpemUgQHRleHQsIHNpemVBZmZlY3RpbmdTdHlsZXMsIGNvbnN0cmFpbnRzXG5cdFx0aWYgQHN0eWxlLnRleHRBbGlnbiBpcyBcInJpZ2h0XCJcblx0XHRcdEB3aWR0aCA9IHNpemUud2lkdGhcblx0XHRcdEB4ID0gQHgtQHdpZHRoXG5cdFx0ZWxzZVxuXHRcdFx0QHdpZHRoID0gc2l6ZS53aWR0aFxuXHRcdEBoZWlnaHQgPSBzaXplLmhlaWdodFxuXG5cdEBkZWZpbmUgXCJhdXRvU2l6ZVwiLFxuXHRcdGdldDogLT4gQGRvQXV0b1NpemVcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAZG9BdXRvU2l6ZSA9IHZhbHVlXG5cdFx0XHRpZiBAZG9BdXRvU2l6ZSB0aGVuIEBjYWxjU2l6ZSgpXG5cdEBkZWZpbmUgXCJhdXRvU2l6ZUhlaWdodFwiLFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBkb0F1dG9TaXplID0gdmFsdWVcblx0XHRcdEBkb0F1dG9TaXplSGVpZ2h0ID0gdmFsdWVcblx0XHRcdGlmIEBkb0F1dG9TaXplIHRoZW4gQGNhbGNTaXplKClcblx0QGRlZmluZSBcImNvbnRlbnRFZGl0YWJsZVwiLFxuXHRcdHNldDogKGJvb2xlYW4pIC0+XG5cdFx0XHRAX2VsZW1lbnQuY29udGVudEVkaXRhYmxlID0gYm9vbGVhblxuXHRcdFx0QGlnbm9yZUV2ZW50cyA9ICFib29sZWFuXG5cdFx0XHRAb24gXCJpbnB1dFwiLCAtPiBAY2FsY1NpemUoKSBpZiBAZG9BdXRvU2l6ZVxuXHRAZGVmaW5lIFwidGV4dFwiLFxuXHRcdGdldDogLT4gQF9lbGVtZW50LnRleHRDb250ZW50XG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX2VsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZVxuXHRcdFx0QGVtaXQoXCJjaGFuZ2U6dGV4dFwiLCB2YWx1ZSlcblx0XHRcdGlmIEBkb0F1dG9TaXplIHRoZW4gQGNhbGNTaXplKClcblx0QGRlZmluZSBcImZvbnRGYW1pbHlcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udEZhbWlseVxuXHRcdHNldDogKHZhbHVlKSAtPiBAc2V0U3R5bGUoXCJmb250RmFtaWx5XCIsIHZhbHVlKVxuXHRAZGVmaW5lIFwiZm9udFNpemVcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udFNpemUucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwiZm9udFNpemVcIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJsaW5lSGVpZ2h0XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmxpbmVIZWlnaHQgXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImxpbmVIZWlnaHRcIiwgdmFsdWUpXG5cdEBkZWZpbmUgXCJmb250V2VpZ2h0XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmZvbnRXZWlnaHQgXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRXZWlnaHRcIiwgdmFsdWUpXG5cdEBkZWZpbmUgXCJmb250U3R5bGVcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUuZm9udFN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRTdHlsZVwiLCB2YWx1ZSlcblx0QGRlZmluZSBcImZvbnRWYXJpYW50XCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLmZvbnRWYXJpYW50XG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcImZvbnRWYXJpYW50XCIsIHZhbHVlKVxuXHRAZGVmaW5lIFwicGFkZGluZ1wiLFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBzZXRTdHlsZShcInBhZGRpbmdUb3BcIiwgdmFsdWUsIHRydWUpXG5cdFx0XHRAc2V0U3R5bGUoXCJwYWRkaW5nUmlnaHRcIiwgdmFsdWUsIHRydWUpXG5cdFx0XHRAc2V0U3R5bGUoXCJwYWRkaW5nQm90dG9tXCIsIHZhbHVlLCB0cnVlKVxuXHRcdFx0QHNldFN0eWxlKFwicGFkZGluZ0xlZnRcIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJwYWRkaW5nVG9wXCIsIFxuXHRcdGdldDogLT4gQHN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwicGFkZGluZ1RvcFwiLCB2YWx1ZSwgdHJ1ZSlcblx0QGRlZmluZSBcInBhZGRpbmdSaWdodFwiLCBcblx0XHRnZXQ6IC0+IEBzdHlsZS5wYWRkaW5nUmlnaHQucmVwbGFjZShcInB4XCIsXCJcIilcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwicGFkZGluZ1JpZ2h0XCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwicGFkZGluZ0JvdHRvbVwiLCBcblx0XHRnZXQ6IC0+IEBzdHlsZS5wYWRkaW5nQm90dG9tLnJlcGxhY2UoXCJweFwiLFwiXCIpXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInBhZGRpbmdCb3R0b21cIiwgdmFsdWUsIHRydWUpXG5cdEBkZWZpbmUgXCJwYWRkaW5nTGVmdFwiLFxuXHRcdGdldDogLT4gQHN0eWxlLnBhZGRpbmdMZWZ0LnJlcGxhY2UoXCJweFwiLFwiXCIpXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInBhZGRpbmdMZWZ0XCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwidGV4dEFsaWduXCIsXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBzZXRTdHlsZShcInRleHRBbGlnblwiLCB2YWx1ZSlcblx0QGRlZmluZSBcInRleHRUcmFuc2Zvcm1cIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUudGV4dFRyYW5zZm9ybSBcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQHNldFN0eWxlKFwidGV4dFRyYW5zZm9ybVwiLCB2YWx1ZSlcblx0QGRlZmluZSBcImxldHRlclNwYWNpbmdcIiwgXG5cdFx0Z2V0OiAtPiBAc3R5bGUubGV0dGVyU3BhY2luZy5yZXBsYWNlKFwicHhcIixcIlwiKVxuXHRcdHNldDogKHZhbHVlKSAtPiBAc2V0U3R5bGUoXCJsZXR0ZXJTcGFjaW5nXCIsIHZhbHVlLCB0cnVlKVxuXHRAZGVmaW5lIFwibGVuZ3RoXCIsIFxuXHRcdGdldDogLT4gQHRleHQubGVuZ3RoXG5cbmNvbnZlcnRUb1RleHRMYXllciA9IChsYXllcikgLT5cblx0dCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRuYW1lOiBsYXllci5uYW1lXG5cdFx0ZnJhbWU6IGxheWVyLmZyYW1lXG5cdFx0cGFyZW50OiBsYXllci5wYXJlbnRcblx0XG5cdGNzc09iaiA9IHt9XG5cdGNzcyA9IGxheWVyLl9pbmZvLm1ldGFkYXRhLmNzc1xuXHRjc3MuZm9yRWFjaCAocnVsZSkgLT5cblx0XHRyZXR1cm4gaWYgXy5pbmNsdWRlcyBydWxlLCAnLyonXG5cdFx0YXJyID0gcnVsZS5zcGxpdCgnOiAnKVxuXHRcdGNzc09ialthcnJbMF1dID0gYXJyWzFdLnJlcGxhY2UoJzsnLCcnKVxuXHR0LnN0eWxlID0gY3NzT2JqXG5cdFxuXHRpbXBvcnRQYXRoID0gbGF5ZXIuX19mcmFtZXJJbXBvcnRlZEZyb21QYXRoXG5cdGlmIF8uaW5jbHVkZXMgaW1wb3J0UGF0aCwgJ0AyeCdcblx0XHR0LmZvbnRTaXplICo9IDJcblx0XHR0LmxpbmVIZWlnaHQgPSAocGFyc2VJbnQodC5saW5lSGVpZ2h0KSoyKSsncHgnXG5cdFx0dC5sZXR0ZXJTcGFjaW5nICo9IDJcblx0XHRcdFx0XHRcblx0dC55IC09IChwYXJzZUludCh0LmxpbmVIZWlnaHQpLXQuZm9udFNpemUpLzIgIyBjb21wZW5zYXRlIGZvciBob3cgQ1NTIGhhbmRsZXMgbGluZSBoZWlnaHRcblx0dC55IC09IHQuZm9udFNpemUgKiAwLjEgIyBza2V0Y2ggcGFkZGluZ1xuXHR0LnggLT0gdC5mb250U2l6ZSAqIDAuMDggIyBza2V0Y2ggcGFkZGluZ1xuXHR0LndpZHRoICs9IHQuZm9udFNpemUgKiAwLjUgIyBza2V0Y2ggcGFkZGluZ1xuXG5cdHQudGV4dCA9IGxheWVyLl9pbmZvLm1ldGFkYXRhLnN0cmluZ1xuXHRsYXllci5kZXN0cm95KClcblx0cmV0dXJuIHRcblxuTGF5ZXI6OmNvbnZlcnRUb1RleHRMYXllciA9IC0+IGNvbnZlcnRUb1RleHRMYXllcihAKVxuXG5jb252ZXJ0VGV4dExheWVycyA9IChvYmopIC0+XG5cdGZvciBwcm9wLGxheWVyIG9mIG9ialxuXHRcdGlmIGxheWVyLl9pbmZvLmtpbmQgaXMgXCJ0ZXh0XCJcblx0XHRcdG9ialtwcm9wXSA9IGNvbnZlcnRUb1RleHRMYXllcihsYXllcilcblxuIyBCYWNrd2FyZHMgY29tcGFiaWxpdHkuIFJlcGxhY2VkIGJ5IGNvbnZlcnRUb1RleHRMYXllcigpXG5MYXllcjo6ZnJhbWVBc1RleHRMYXllciA9IChwcm9wZXJ0aWVzKSAtPlxuICAgIHQgPSBuZXcgVGV4dExheWVyXG4gICAgdC5mcmFtZSA9IEBmcmFtZVxuICAgIHQuc3VwZXJMYXllciA9IEBzdXBlckxheWVyXG4gICAgXy5leHRlbmQgdCxwcm9wZXJ0aWVzXG4gICAgQGRlc3Ryb3koKVxuICAgIHRcblxuZXhwb3J0cy5UZXh0TGF5ZXIgPSBUZXh0TGF5ZXJcbmV4cG9ydHMuY29udmVydFRleHRMYXllcnMgPSBjb252ZXJ0VGV4dExheWVyc1xuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQSxJQUFBLGdEQUFBO0VBQUE7OztBQUFNOzs7RUFFUSxtQkFBQyxPQUFEOztNQUFDLFVBQVE7O0lBQ3JCLElBQUMsQ0FBQSxVQUFELEdBQWM7SUFDZCxJQUFDLENBQUEsZ0JBQUQsR0FBb0I7O01BQ3BCLE9BQU8sQ0FBQyxrQkFBc0IsT0FBTyxDQUFDLEtBQVgsR0FBc0Isd0JBQXRCLEdBQW9EOzs7TUFDL0UsT0FBTyxDQUFDLFFBQVM7OztNQUNqQixPQUFPLENBQUMsYUFBYzs7O01BQ3RCLE9BQU8sQ0FBQyxhQUFjOzs7TUFDdEIsT0FBTyxDQUFDLFdBQVk7OztNQUNwQixPQUFPLENBQUMsT0FBUTs7SUFDaEIsMkNBQU0sT0FBTjtJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxHQUFvQjtJQUNwQixJQUFDLENBQUEsS0FBSyxDQUFDLE9BQVAsR0FBaUI7RUFYTDs7c0JBYWIsUUFBQSxHQUFVLFNBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsUUFBbEI7O01BQWtCLFdBQVc7O0lBQ3RDLElBQUMsQ0FBQSxLQUFNLENBQUEsUUFBQSxDQUFQLEdBQXNCLFFBQUgsR0FBaUIsS0FBQSxHQUFNLElBQXZCLEdBQWlDO0lBQ3BELElBQUMsQ0FBQSxJQUFELENBQU0sU0FBQSxHQUFVLFFBQWhCLEVBQTRCLEtBQTVCO0lBQ0EsSUFBRyxJQUFDLENBQUEsVUFBSjthQUFvQixJQUFDLENB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
