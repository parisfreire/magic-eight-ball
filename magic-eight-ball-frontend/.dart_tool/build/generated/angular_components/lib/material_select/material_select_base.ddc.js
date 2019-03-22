define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/accepts_width'], function(dart_sdk, selection_model, properties, has_renderer, selection_container, accepts_width) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const _root = Object.create(null);
  const material_select__material_select_base = Object.create(_root);
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _width = Symbol('_width');
  const _is_MaterialSelectBase_default = Symbol('_is_MaterialSelectBase_default');
  material_select__material_select_base.MaterialSelectBase$ = dart.generic(T => {
    class MaterialSelectBase extends model__selection__selection_container.SelectionContainer$(T) {
      get isMultiSelect() {
        return model__selection__selection_model.MultiSelectionModel.is(this.selection);
      }
      get isSingleSelect() {
        return !dart.test(this.isMultiSelect);
      }
      get width() {
        return this[_width];
      }
      set width(val) {
        this[_width] = utils__angular__properties__properties.getInt(val, {defaultValue: 0});
        if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed();
      }
      get itemRenderer() {
        let l = super.itemRenderer;
        return l != null ? l : dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
    }
    (MaterialSelectBase.new = function() {
      this[_width] = 0;
      MaterialSelectBase.__proto__.new.call(this);
    }).prototype = MaterialSelectBase.prototype;
    dart.addTypeTests(MaterialSelectBase);
    MaterialSelectBase.prototype[_is_MaterialSelectBase_default] = true;
    MaterialSelectBase[dart.implements] = () => [model__ui__accepts_width.AcceptsWidth];
    dart.setGetterSignature(MaterialSelectBase, () => ({
      __proto__: dart.getGetters(MaterialSelectBase.__proto__),
      isMultiSelect: core.bool,
      isSingleSelect: core.bool,
      width: core.int
    }));
    dart.setSetterSignature(MaterialSelectBase, () => ({
      __proto__: dart.getSetters(MaterialSelectBase.__proto__),
      width: dart.dynamic
    }));
    dart.setFieldSignature(MaterialSelectBase, () => ({
      __proto__: dart.getFields(MaterialSelectBase.__proto__),
      [_width]: dart.fieldType(core.int)
    }));
    return MaterialSelectBase;
  });
  material_select__material_select_base.MaterialSelectBase = material_select__material_select_base.MaterialSelectBase$();
  dart.addTypeTests(material_select__material_select_base.MaterialSelectBase, _is_MaterialSelectBase_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_base.ddc", {
    "package:angular_components/material_select/material_select_base.dart": material_select__material_select_base
  }, '{"version":3,"sourceRoot":"","sources":["material_select_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;wEAyB4B,cAAS;MAAuB;;cAC/B,YAAC,kBAAa;;;cAQxB,aAAM;;gBACb,GAAG;AACX,oBAAM,GAAG,6CAAM,CAAC,GAAG,iBAAgB;AACnC,cAAc,AAAK,aAAZ,YAAM,KAAI,KAAY,aAAP,YAAM,KAAI;MAClC;;gBAKoC,kBAAkB;+BAAI,uEAAmB;;;;;;;MAHzE,YAAM,GAAG;;IAIf","file":"material_select_base.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_base: material_select__material_select_base
  };
});

//# sourceMappingURL=material_select_base.ddc.js.map
