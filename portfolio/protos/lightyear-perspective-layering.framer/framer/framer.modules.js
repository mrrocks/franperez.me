require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"perspective-view":[function(require,module,exports){
exports.PerspectiveView = (function() {
  var _childrenAnimating, _keyDownTextField, _pan, _panEnd, _panStart, _setAllLayersAsChildrenOf, activated, animationCurve, initialRotation, panningRatio, rotationParent;

  function PerspectiveView() {}

  animationCurve = "spring(120, 20, 0, 0.07)";

  activated = false;

  initialRotation = null;

  panningRatio = 4;

  Screen.perspective = 0;

  rotationParent = Framer.Device.phone;

  rotationParent.orgProps = rotationParent.props;

  _setAllLayersAsChildrenOf = function(parent) {
    var j, layer, len, ref, results;
    ref = Framer.CurrentContext.getLayers();
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      if (!(layer.parent === null && rotationParent.children.indexOf(layer) !== 0)) {
        continue;
      }
      rotationParent.addChild(layer);
      layer.x = layer.x + Framer.Device.screen.x;
      layer.y = layer.y + Framer.Device.screen.y;
      results.push(layer.initialZ = null);
    }
    return results;
  };

  _childrenAnimating = function(layersArray) {
    return _.some(layersArray, function(layer) {
      return layer.isAnimating;
    });
  };

  _panStart = function() {
    var j, layer, len, ref, results;
    initialRotation = rotationParent.rotationZ;
    ref = rotationParent.children;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      if (layer !== Framer.Device.screen) {
        results.push(layer.initialZ = layer.z);
      }
    }
    return results;
  };

  _pan = function(event) {
    var i, j, layer, len, ref, results;
    rotationParent.rotationZ = initialRotation - ((event.touchCenterX - event.startX) / panningRatio);
    ref = rotationParent.children;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      layer = ref[i];
      if (_.last(rotationParent.children).z !== 1) {
        results.push(layer.z = layer.initialZ - (((event.touchCenterY - event.startY) * (i - 1)) / panningRatio));
      }
    }
    return results;
  };

  _panEnd = function() {
    return rotationParent.rotationZ = rotationParent.rotationZ % 360;
  };

  _keyDownTextField = function(e) {
    if (e.keyCode === 13) {
      print(PerspectiveView);
      return PerspectiveView.toggle();
    }
  };

  PerspectiveView.prototype.toggle = function(rotation, z, opacity) {
    var j, k, layer, len, len1, ref, ref1, results, rotationNegative;
    if (rotation == null) {
      rotation = true;
    }
    if (z == null) {
      z = 40;
    }
    if (opacity == null) {
      opacity = 0.8;
    }
    if (!activated && !_childrenAnimating(rotationParent.children)) {
      activated = true;
      _setAllLayersAsChildrenOf(rotationParent);
      if (rotation) {
        rotationParent.on(Events.PanStart, _panStart);
        rotationParent.on(Events.Pan, _pan);
        rotationParent.on(Events.PanEnd, _panEnd);
      }
      rotationParent.animate({
        properties: {
          rotationZ: -45,
          rotationX: 45,
          scaleY: 0.86062,
          y: z * (rotationParent.children.length / 6)
        },
        curve: animationCurve
      });
      ref = rotationParent.children;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        layer = ref[j];
        if (!(layer !== Framer.Device.screen)) {
          continue;
        }
        layer.orgProps = layer.props;
        results.push(layer.animate({
          properties: {
            z: z * (layer.index - 2),
            opacity: opacity
          },
          delay: (rotationParent.children.length - layer.index) / rotationParent.children.length,
          curve: animationCurve
        }, layer.shadowColor = "rgba(0,0,0,0.2)", layer.shadowY = 50, layer.shadowX = -50, layer.shadowBlur = 60));
      }
      return results;
    } else if (activated && !_childrenAnimating(rotationParent.children)) {
      activated = false;
      if (rotation) {
        rotationParent.off(Events.PanStart, _panStart);
        rotationParent.off(Events.Pan, _pan);
        rotationParent.off(Events.PanEnd, _panEnd);
      }
      rotationNegative = rotationParent.rotationZ < 0;
      if (Math.abs(rotationParent.rotationZ % 360) > 180) {
        rotationParent.orgProps.rotationZ = rotationNegative ? -360 : 360;
      } else {
        rotationParent.orgProps.rotationZ = rotationNegative ? -0 : 0;
      }
      rotationParent.animate({
        properties: {
          rotationZ: rotationParent.orgProps.rotationZ,
          rotationX: rotationParent.orgProps.rotationX,
          scaleY: rotationParent.orgProps.scaleY,
          y: rotationParent.orgProps.y
        },
        curve: animationCurve
      });
      ref1 = rotationParent.children;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        layer = ref1[k];
        layer.animate({
          properties: layer.orgProps,
          curve: animationCurve
        });
      }
      return rotationParent.once(Events.AnimationEnd, function() {
        var l, len2, ref2, results1;
        rotationParent.rotationZ = 0;
        ref2 = rotationParent.children;
        results1 = [];
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          layer = ref2[l];
          if (!(rotationParent.children.indexOf(layer) !== 0)) {
            continue;
          }
          layer.parent = null;
          layer.x = layer.x - Framer.Device.screen.x;
          results1.push(layer.y = layer.y - Framer.Device.screen.y);
        }
        return results1;
      });
    }
  };

  return PerspectiveView;

})();


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvR29vZ2xlRHJpdmUvTXkgRHJpdmUvU0lNdXhfU2VhcmNoL0xpZ2h0eWVhci9Mb2JieS9Qcm90b3R5cGVzL2xpZ2h0eWVhci1wZXJzcGVjdGl2ZS1sYXllcmluZy5mcmFtZXIvbW9kdWxlcy9wZXJzcGVjdGl2ZS12aWV3LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZXhwb3J0cy5QZXJzcGVjdGl2ZVZpZXdcblx0YW5pbWF0aW9uQ3VydmUgPSBcInNwcmluZygxMjAsIDIwLCAwLCAwLjA3KVwiXG5cdGFjdGl2YXRlZCA9IGZhbHNlXG5cdGluaXRpYWxSb3RhdGlvbiA9IG51bGxcblx0cGFubmluZ1JhdGlvID0gNFxuXG5cdFNjcmVlbi5wZXJzcGVjdGl2ZSA9IDBcblxuXHRyb3RhdGlvblBhcmVudCA9IEZyYW1lci5EZXZpY2UucGhvbmVcblx0cm90YXRpb25QYXJlbnQub3JnUHJvcHMgPSByb3RhdGlvblBhcmVudC5wcm9wc1xuXG5cdF9zZXRBbGxMYXllcnNBc0NoaWxkcmVuT2YgPSAocGFyZW50KSAtPlxuXHRcdGZvciBsYXllciBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQuZ2V0TGF5ZXJzKCkgd2hlbiBsYXllci5wYXJlbnQgaXMgbnVsbCBhbmQgcm90YXRpb25QYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihsYXllcikgaXNudCAwXG5cdFx0XHRyb3RhdGlvblBhcmVudC5hZGRDaGlsZChsYXllcilcblxuXHRcdFx0bGF5ZXIueCA9IGxheWVyLnggKyBGcmFtZXIuRGV2aWNlLnNjcmVlbi54XG5cdFx0XHRsYXllci55ID0gbGF5ZXIueSArIEZyYW1lci5EZXZpY2Uuc2NyZWVuLnlcblxuXHRcdFx0bGF5ZXIuaW5pdGlhbFogPSBudWxsXG5cblx0X2NoaWxkcmVuQW5pbWF0aW5nID0gKGxheWVyc0FycmF5KSAtPlxuXHRcdF8uc29tZSBsYXllcnNBcnJheSwgKGxheWVyKSAtPiBsYXllci5pc0FuaW1hdGluZ1xuXG5cdF9wYW5TdGFydCA9IC0+XG5cdFx0aW5pdGlhbFJvdGF0aW9uID0gcm90YXRpb25QYXJlbnQucm90YXRpb25aXG5cblx0XHRsYXllci5pbml0aWFsWiA9IGxheWVyLnogZm9yIGxheWVyIGluIHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuIHdoZW4gbGF5ZXIgaXNudCBGcmFtZXIuRGV2aWNlLnNjcmVlblxuXG5cdF9wYW4gPSAoZXZlbnQpIC0+XG5cdFx0cm90YXRpb25QYXJlbnQucm90YXRpb25aID0gaW5pdGlhbFJvdGF0aW9uIC0gKChldmVudC50b3VjaENlbnRlclggLSBldmVudC5zdGFydFgpIC8gcGFubmluZ1JhdGlvKVxuXG5cdFx0Zm9yIGxheWVyLCBpIGluIHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuIHdoZW4gXy5sYXN0KHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuKS56IGlzbnQgMVxuXHRcdFx0XHRcdGxheWVyLnogPSBsYXllci5pbml0aWFsWiAtICgoKGV2ZW50LnRvdWNoQ2VudGVyWSAtIGV2ZW50LnN0YXJ0WSkgKiAoaSAtIDEpKSAvIHBhbm5pbmdSYXRpbylcblxuXHRfcGFuRW5kID0gLT5cblx0XHRyb3RhdGlvblBhcmVudC5yb3RhdGlvblogPSByb3RhdGlvblBhcmVudC5yb3RhdGlvblogJSAzNjBcblxuXHRfa2V5RG93blRleHRGaWVsZCA9IChlKSA9PlxuXHRcdGlmIGUua2V5Q29kZSBpcyAxM1xuXHRcdFx0cHJpbnQgdGhpc1xuXHRcdFx0dGhpcy50b2dnbGUoKVxuXG5cdHRvZ2dsZTogKHJvdGF0aW9uID0gdHJ1ZSwgeiA9IDQwLCBvcGFjaXR5ID0gMC44KSAtPlxuXG5cdFx0aWYgbm90IGFjdGl2YXRlZCBhbmQgbm90IF9jaGlsZHJlbkFuaW1hdGluZyhyb3RhdGlvblBhcmVudC5jaGlsZHJlbilcblx0XHRcdGFjdGl2YXRlZCA9IHRydWVcblxuXHRcdFx0X3NldEFsbExheWVyc0FzQ2hpbGRyZW5PZihyb3RhdGlvblBhcmVudClcblxuXHRcdFx0IyBFdmVudHNcblxuXHRcdFx0aWYgcm90YXRpb25cblx0XHRcdFx0cm90YXRpb25QYXJlbnQub24gRXZlbnRzLlBhblN0YXJ0LCBfcGFuU3RhcnRcblx0XHRcdFx0cm90YXRpb25QYXJlbnQub24gRXZlbnRzLlBhbiwgX3BhblxuXHRcdFx0XHRyb3RhdGlvblBhcmVudC5vbiBFdmVudHMuUGFuRW5kLCBfcGFuRW5kXG5cblx0XHRcdCMgQW5pbWF0aW9uc1xuXG5cdFx0XHRyb3RhdGlvblBhcmVudC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0cm90YXRpb25aOiAtNDVcblx0XHRcdFx0XHRyb3RhdGlvblg6IDQ1XG5cdFx0XHRcdFx0c2NhbGVZOiAwLjg2MDYyXG5cdFx0XHRcdFx0eTogeiAqIChyb3RhdGlvblBhcmVudC5jaGlsZHJlbi5sZW5ndGggLyA2KVxuXHRcdFx0XHRjdXJ2ZTogYW5pbWF0aW9uQ3VydmVcblxuXHRcdFx0Zm9yIGxheWVyIGluIHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuIHdoZW4gbGF5ZXIgaXNudCBGcmFtZXIuRGV2aWNlLnNjcmVlblxuXHRcdFx0XHRsYXllci5vcmdQcm9wcyA9IGxheWVyLnByb3BzXG5cblx0XHRcdFx0bGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHR6OiB6ICogKGxheWVyLmluZGV4IC0gMilcblx0XHRcdFx0XHRcdG9wYWNpdHk6IG9wYWNpdHlcblx0XHRcdFx0XHRkZWxheTogKHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIGxheWVyLmluZGV4KSAvIHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuLmxlbmd0aFxuXHRcdFx0XHRcdGN1cnZlOiBhbmltYXRpb25DdXJ2ZVxuXG5cdFx0XHRcdFx0bGF5ZXIuc2hhZG93Q29sb3IgPSBcInJnYmEoMCwwLDAsMC4yKVwiXG5cdFx0XHRcdFx0bGF5ZXIuc2hhZG93WSA9IDUwXG5cdFx0XHRcdFx0bGF5ZXIuc2hhZG93WCA9IC01MFxuXHRcdFx0XHRcdGxheWVyLnNoYWRvd0JsdXIgPSA2MFxuXG5cdFx0ZWxzZSBpZiBhY3RpdmF0ZWQgYW5kIG5vdCBfY2hpbGRyZW5BbmltYXRpbmcocm90YXRpb25QYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRhY3RpdmF0ZWQgPSBmYWxzZVxuXG5cdFx0XHQjIEV2ZW50c1xuXHRcdFx0aWYgcm90YXRpb25cblx0XHRcdFx0cm90YXRpb25QYXJlbnQub2ZmIEV2ZW50cy5QYW5TdGFydCwgX3BhblN0YXJ0XG5cdFx0XHRcdHJvdGF0aW9uUGFyZW50Lm9mZiBFdmVudHMuUGFuLCBfcGFuXG5cdFx0XHRcdHJvdGF0aW9uUGFyZW50Lm9mZiBFdmVudHMuUGFuRW5kLCBfcGFuRW5kXG5cblx0XHRcdCMgQW5pbWF0aW9uc1xuXG5cdFx0XHRyb3RhdGlvbk5lZ2F0aXZlID0gcm90YXRpb25QYXJlbnQucm90YXRpb25aIDwgMFxuXG5cdFx0XHRpZiBNYXRoLmFicyhyb3RhdGlvblBhcmVudC5yb3RhdGlvblogJSAzNjApID4gMTgwXG5cdFx0XHRcdHJvdGF0aW9uUGFyZW50Lm9yZ1Byb3BzLnJvdGF0aW9uWiA9IGlmIHJvdGF0aW9uTmVnYXRpdmUgdGhlbiAtMzYwIGVsc2UgMzYwXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJvdGF0aW9uUGFyZW50Lm9yZ1Byb3BzLnJvdGF0aW9uWiA9IGlmIHJvdGF0aW9uTmVnYXRpdmUgdGhlbiAtMCBlbHNlIDBcblxuXHRcdFx0cm90YXRpb25QYXJlbnQuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHJvdGF0aW9uWjogcm90YXRpb25QYXJlbnQub3JnUHJvcHMucm90YXRpb25aXG5cdFx0XHRcdFx0cm90YXRpb25YOiByb3RhdGlvblBhcmVudC5vcmdQcm9wcy5yb3RhdGlvblhcblx0XHRcdFx0XHRzY2FsZVk6IHJvdGF0aW9uUGFyZW50Lm9yZ1Byb3BzLnNjYWxlWVxuXHRcdFx0XHRcdHk6IHJvdGF0aW9uUGFyZW50Lm9yZ1Byb3BzLnlcblx0XHRcdFx0Y3VydmU6IGFuaW1hdGlvbkN1cnZlXG5cblx0XHRcdGZvciBsYXllciBpbiByb3RhdGlvblBhcmVudC5jaGlsZHJlblxuXHRcdFx0XHRsYXllci5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczogbGF5ZXIub3JnUHJvcHNcblx0XHRcdFx0XHRjdXJ2ZTogYW5pbWF0aW9uQ3VydmVcblxuXHRcdFx0cm90YXRpb25QYXJlbnQub25jZSBFdmVudHMuQW5pbWF0aW9uRW5kLCAtPlxuXHRcdFx0XHRyb3RhdGlvblBhcmVudC5yb3RhdGlvblogPSAwXG5cdFx0XHRcdGZvciBsYXllciBpbiByb3RhdGlvblBhcmVudC5jaGlsZHJlbiB3aGVuIHJvdGF0aW9uUGFyZW50LmNoaWxkcmVuLmluZGV4T2YobGF5ZXIpIGlzbnQgMFxuXHRcdFx0XHRcdGxheWVyLnBhcmVudCA9IG51bGxcblxuXHRcdFx0XHRcdGxheWVyLnggPSBsYXllci54IC0gRnJhbWVyLkRldmljZS5zY3JlZW4ueFxuXHRcdFx0XHRcdGxheWVyLnkgPSBsYXllci55IC0gRnJhbWVyLkRldmljZS5zY3JlZW4ueSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQU0sT0FBTyxDQUFDO0FBQ2IsTUFBQTs7OztFQUFBLGNBQUEsR0FBaUI7O0VBQ2pCLFNBQUEsR0FBWTs7RUFDWixlQUFBLEdBQWtCOztFQUNsQixZQUFBLEdBQWU7O0VBRWYsTUFBTSxDQUFDLFdBQVAsR0FBcUI7O0VBRXJCLGNBQUEsR0FBaUIsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7RUFDL0IsY0FBYyxDQUFDLFFBQWYsR0FBMEIsY0FBYyxDQUFDOztFQUV6Qyx5QkFBQSxHQUE0QixTQUFDLE1BQUQ7QUFDM0IsUUFBQTtBQUFBO0FBQUE7U0FBQSxxQ0FBQTs7WUFBb0QsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsSUFBaEIsSUFBeUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUF4QixDQUFnQyxLQUFoQyxDQUFBLEtBQTRDOzs7TUFDeEgsY0FBYyxDQUFDLFFBQWYsQ0FBd0IsS0FBeEI7TUFFQSxLQUFLLENBQUMsQ0FBTixHQUFVLEtBQUssQ0FBQyxDQUFOLEdBQVUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDekMsS0FBSyxDQUFDLENBQU4sR0FBVSxLQUFLLENBQUMsQ0FBTixHQUFVLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO21CQUV6QyxLQUFLLENBQUMsUUFBTixHQUFpQjtBQU5sQjs7RUFEMkI7O0VBUzVCLGtCQUFBLEdBQXFCLFNBQUMsV0FBRDtXQUNwQixDQUFDLENBQUMsSUFBRixDQUFPLFdBQVAsRUFBb0IsU0FBQyxLQUFEO2FBQVcsS0FBSyxDQUFDO0lBQWpCLENBQXBCO0VBRG9COztFQUdyQixTQUFBLEdBQVksU0FBQTtBQUNYLFFBQUE7SUFBQSxlQUFBLEdBQWtCLGNBQWMsQ0FBQztBQUVqQztBQUFBO1NBQUEscUNB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
