define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__ui__toggle = Object.create(_root);
  model__ui__toggle.Toggleable = class Toggleable extends core.Object {
    get isOn() {
      return this[isOn];
    }
    set isOn(value) {
      this[isOn] = value;
    }
    toggle() {
      this.isOn = !dart.test(this.isOn);
    }
  };
  (model__ui__toggle.Toggleable.new = function() {
    this[isOn] = false;
  }).prototype = model__ui__toggle.Toggleable.prototype;
  dart.addTypeTests(model__ui__toggle.Toggleable);
  const isOn = Symbol("Toggleable.isOn");
  dart.setMethodSignature(model__ui__toggle.Toggleable, () => ({
    __proto__: dart.getMethods(model__ui__toggle.Toggleable.__proto__),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(model__ui__toggle.Toggleable, () => ({
    __proto__: dart.getFields(model__ui__toggle.Toggleable.__proto__),
    isOn: dart.fieldType(core.bool)
  }));
  model__ui__toggle.Toggler = class Toggler extends core.Object {};
  (model__ui__toggle.Toggler.new = function() {
  }).prototype = model__ui__toggle.Toggler.prototype;
  dart.addTypeTests(model__ui__toggle.Toggler);
  dart.trackLibraries("packages/angular_components/model/ui/toggle.ddc", {
    "package:angular_components/model/ui/toggle.dart": model__ui__toggle
  }, '{"version":3,"sourceRoot":"","sources":["toggle.dart"],"names":[],"mappings":";;;;;;;;IAQO;;;;;;;AAGH,eAAI,GAAG,WAAC,SAAI;IACd;;;IAJK,UAAI,GAAG;EAKd;;;;;;;;;;;;;EAKA","file":"toggle.ddc.js"}');
  // Exports:
  return {
    model__ui__toggle: model__ui__toggle
  };
});

//# sourceMappingURL=toggle.ddc.js.map
