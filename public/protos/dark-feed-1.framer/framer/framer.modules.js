require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"material":[function(require,module,exports){
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
      time: 1.9,
      curve: "linear"
    });
    lineIn = new Animation({
      layer: this.line,
      properties: {
        value: 0.75
      },
      time: 0.64,
      curve: "cubic-bezier(0.4, 0.0, 0.2, 1)"
    });
    lineOut = new Animation({
      layer: this.line,
      properties: {
        value: 0.03,
        rotation: 360
      },
      time: 0.78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbWF0ZXJpYWwuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJTID0gKG4pIC0+XG5cdHNjYWxlID0gMVxuXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0aWYgZGV2aWNlLnNsaWNlKDAsIFwiYXBwbGUtaXBob25lXCIubGVuZ3RoKSBpcyBcImFwcGxlLWlwaG9uZVwiXG5cdFx0c2NhbGUgPSBTY3JlZW4ud2lkdGggLyAzNzVcblx0ZWxzZSBpZiBkZXZpY2Uuc2xpY2UoMCwgXCJnb29nbGUtbmV4dXNcIi5sZW5ndGgpIGlzIFwiZ29vZ2xlLW5leHVzXCJcblx0XHRzY2FsZSA9IFNjcmVlbi53aWR0aCAvIDM2MFxuXHRyZXR1cm4gbiAqIHNjYWxlXG5cbmNsYXNzIExpbmUgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKHNpemUsIHRoaWNrbmVzcywgY29sb3IpLT5cblx0XHRzdXBlciB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuXHRcdCMgTGVmdCBoYWxmXG5cdFx0QGxlZnRIYWxmV3JhcHBlciA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR3aWR0aDogQHdpZHRoIC8gMiwgaGVpZ2h0OiBAd2lkdGhcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0Y2xpcDogeWVzXG5cdFx0XHRmb3JjZTJkOiB5ZXNcblx0XHRAbGVmdEhhbGZDbGlwID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHg6IEB3aWR0aCAvIDJcblx0XHRcdHdpZHRoOiBAd2lkdGggLyAyLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0b3JpZ2luWDogMCwgb3JpZ2luWTogMC41XG5cdFx0XHRwYXJlbnQ6IEBsZWZ0SGFsZldyYXBwZXJcblx0XHRcdGNsaXA6IHllc1xuXHRcdFx0Zm9yY2UyZDogeWVzXG5cdFx0QGxlZnRIYWxmID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHg6IC1Ad2lkdGggLyAyXG5cdFx0XHR3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAd2lkdGggLyAyXG5cdFx0XHRib3JkZXJXaWR0aDogdGhpY2tuZXNzXG5cdFx0XHRib3JkZXJDb2xvcjogY29sb3Jcblx0XHRcdHBhcmVudDogQGxlZnRIYWxmQ2xpcFxuXHRcdFx0Zm9yY2UyZDogeWVzXG5cblx0XHQjIFJpZ2h0IGhhbGZcblx0XHRAcmlnaHRIYWxmV3JhcHBlciA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiBAd2lkdGggLyAyXG5cdFx0XHR3aWR0aDogQHdpZHRoIC8gMiwgaGVpZ2h0OiBAd2lkdGhcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0Y2xpcDogeWVzXG5cdFx0XHRmb3JjZTJkOiB5ZXNcblx0XHRAcmlnaHRIYWxmQ2xpcCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiAtQHdpZHRoIC8gMlxuXHRcdFx0d2lkdGg6IEB3aWR0aCAvIDIsIGhlaWdodDogQHdpZHRoXG5cdFx0XHRvcmlnaW5YOiAxLCBvcmlnaW5ZOiAwLjVcblx0XHRcdHBhcmVudDogQHJpZ2h0SGFsZldyYXBwZXJcblx0XHRcdGNsaXA6IHllc1xuXHRcdFx0Zm9yY2UyZDogeWVzXG5cdFx0QHJpZ2h0SGFsZiA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAd2lkdGggLyAyXG5cdFx0XHRib3JkZXJXaWR0aDogdGhpY2tuZXNzXG5cdFx0XHRib3JkZXJDb2xvcjogY29sb3Jcblx0XHRcdHBhcmVudDogQHJpZ2h0SGFsZkNsaXBcblx0XHRcdGZvcmNlMmQ6IHllc1xuXG5cdF92OiAwXHQjIG1pbjogMCwgbWF4OiAxXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gQF92XG5cdFx0c2V0OiAodikgLT5cblx0XHRcdEBfdiA9IHZcblx0XHRcdGlmIHYgPCAwLjVcblx0XHRcdFx0QHJpZ2h0SGFsZkNsaXAucm90YXRpb25aID0gMzYwICogdlxuXHRcdFx0XHRAbGVmdEhhbGZDbGlwLnJvdGF0aW9uWiA9IDBcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHJpZ2h0SGFsZkNsaXAucm90YXRpb25aID0gMTgwXG5cdFx0XHRcdEBsZWZ0SGFsZkNsaXAucm90YXRpb25aID0gMzYwICogdiAtIDE4MFxuXG5jbGFzcyBleHBvcnRzLlNwaW5uZXIgZXh0ZW5kcyBMYXllclxuXHRjb2xvcnM6IFtcIiNEQjQ0MzdcIiwgXCIjNDI4NUY0XCIsIFwiIzBGOUQ1OFwiLCBcIiNGNEI0MDBcIl0gIyBkZWZhdWx0XG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblx0XHRzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0c2l6ZTogNDhcblx0XHRcdHRoaWNrbmVzczogNDhcblx0XHRcdGNvbG9yOiBcIiM0Mjg1ZjRcIlxuXHRcdFx0Y2hhbmdlQ29sb3I6IHllcyBpZiB0eXBlb2YgQG9wdGlvbnMuY2hhbmdlQ29sb3IgaXMgXCJ1bmRlZmluZWRcIlxuXG5cdFx0QHdpZHRoID0gUyhAb3B0aW9ucy5zaXplKVxuXHRcdEBoZWlnaHQgPSBTKEBvcHRpb25zLnNpemUpXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IG51bGxcblxuXHRcdEBsaW5lID0gbmV3IExpbmUgUyhAb3B0aW9ucy5zaXplKSwgUyhAb3B0aW9ucy50aGlja25lc3MpLCBAb3B0aW9ucy5jb2xvclxuXHRcdEBsaW5lLnBhcmVudCA9IEBcblxuXG5cdF9zdGFydGVkOiBmYWxzZVxuXHRzdGFydDogLT5cblx0XHRAcm90YXRpb24gPSBAbGluZS52YWx1ZSA9IDBcblx0XHRAb3BhY2l0eSA9IDFcblx0XHRAX3N0YXJ0ZWQgPSB0cnVlXG5cdFx0QF9hbmltYXRlKClcblx0c3RvcDogLT5cblx0XHRAX3N0YXJ0ZWQgPSBmYWxzZVxuXHRcdEBhbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiBvcGFjaXR5OiAwXG5cdFx0XHR0aW1lOiAwLjJcblxuXHRfY291bnRlcjogMFxuXHRfYW5pbWF0ZTogLT5cblx0XHRyb3RhdGUgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogQFxuXHRcdFx0cHJvcGVydGllczogcm90YXRpb246IDM2MFxuXHRcdFx0dGltZTogMS45XG5cdFx0XHRjdXJ2ZTogXCJsaW5lYXJcIlxuXHRcdGxpbmVJbiA9IG5ldyBBbmltYXRpb25cblx0XHRcdGxheWVyOiBAbGluZVxuXHRcdFx0cHJvcGVydGllczogdmFsdWU6IDAuNzVcblx0XHRcdHRpbWU6IDAuNjRcblx0XHRcdGN1cnZlOiBcImN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiXG5cdFx0bGluZU91dCA9IG5ldyBBbmltYXRpb25cblx0XHRcdGxheWVyOiBAbGluZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0dmFsdWU6IDAuMDNcblx0XHRcdFx0cm90YXRpb246IDM2MFxuXHRcdFx0dGltZTogMC43OFxuXHRcdFx0Y3VydmU6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpXCJcblxuXHRcdHJvdGF0ZS5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0QHJvdGF0aW9uID0gMFxuXHRcdFx0cm90YXRlLnN0YXJ0KCkgaWYgQF9zdGFydGVkXG5cdFx0bGluZUluLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRsaW5lT3V0LnN0YXJ0KCkgaWYgQF9zdGFydGVkXG5cdFx0bGluZU91dC5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0QGxpbmUucm90YXRpb24gPSAwXG5cdFx0XHRsaW5lSW4uc3RhcnQoKSBpZiBAX3N0YXJ0ZWRcblxuXHRcdFx0aWYgQG9wdGlvbnMuY2hhbmdlQ29sb3Jcblx0XHRcdFx0QGxpbmUubGVmdEhhbGYuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6IGJvcmRlckNvbG9yOiBAY29sb3JzW0BfY291bnRlcl1cblx0XHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdFx0XHRjb2xvck1vZGVsOiBcInJnYlwiXG5cdFx0XHRcdEBsaW5lLnJpZ2h0SGFsZi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczogYm9yZGVyQ29sb3I6IEBjb2xvcnNbQF9jb3VudGVyXVxuXHRcdFx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XHRcdGNvbG9yTW9kZWw6IFwicmdiXCJcblx0XHRcdFx0QF9jb3VudGVyKytcblx0XHRcdFx0QF9jb3VudGVyID0gMCBpZiBAX2NvdW50ZXIgPj0gQGNvbG9ycy5sZW5ndGhcblxuXHRcdHJvdGF0ZS5zdGFydCgpXG5cdFx0bGluZUluLnN0YXJ0KCkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288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
