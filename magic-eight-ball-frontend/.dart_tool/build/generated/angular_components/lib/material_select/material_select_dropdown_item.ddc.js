define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_item', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, id_generator, has_renderer, material_select_item, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_item = material_select_item.material_select__material_select_item;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const material_select__material_select_dropdown_item = Object.create(_root);
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _generatedId = Symbol('_generatedId');
  const _id = Symbol('_id');
  const _is_MaterialSelectDropdownItemComponent_default = Symbol('_is_MaterialSelectDropdownItemComponent_default');
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$ = dart.generic(T => {
    class MaterialSelectDropdownItemComponent extends material_select__material_select_item.MaterialSelectItemComponent$(T) {
      get id() {
        let l = this[_id];
        return l != null ? l : this[_generatedId];
      }
      set id(id) {
        this[_id] = id;
      }
      get isSelected() {
        return super.isSelected;
      }
      preventTextSelectionIfShiftKey(e) {
        if (dart.test(e.shiftKey)) e.preventDefault();
      }
    }
    (MaterialSelectDropdownItemComponent.new = function(element, role, dropdown, activationHandler, idGenerator, cdRef) {
      this[_id] = null;
      this[_generatedId] = (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
      MaterialSelectDropdownItemComponent.__proto__.new.call(this, element, dropdown, activationHandler, cdRef, role != null ? role : "option");
      this.itemRenderer = dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
    }).prototype = MaterialSelectDropdownItemComponent.prototype;
    dart.addTypeTests(MaterialSelectDropdownItemComponent);
    MaterialSelectDropdownItemComponent.prototype[_is_MaterialSelectDropdownItemComponent_default] = true;
    MaterialSelectDropdownItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectDropdownItemComponent.__proto__),
      preventTextSelectionIfShiftKey: dart.fnType(dart.void, [html.MouseEvent])
    }));
    dart.setGetterSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectDropdownItemComponent.__proto__),
      id: core.String
    }));
    dart.setSetterSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectDropdownItemComponent.__proto__),
      id: core.String
    }));
    dart.setFieldSignature(MaterialSelectDropdownItemComponent, () => ({
      __proto__: dart.getFields(MaterialSelectDropdownItemComponent.__proto__),
      [_generatedId]: dart.finalFieldType(core.String),
      [_id]: dart.fieldType(core.String)
    }));
    return MaterialSelectDropdownItemComponent;
  });
  material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent = material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$();
  dart.defineLazy(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, {
    /*material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.hostClass*/get hostClass() {
      return "item";
    },
    /*material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.hostTabIndexForSelectDropdown*/get hostTabIndexForSelectDropdown() {
      return 0;
    }
  });
  dart.addTypeTests(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent, _is_MaterialSelectDropdownItemComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.ddc", {
    "package:angular_components/material_select/material_select_dropdown_item.dart": material_select__material_select_dropdown_item
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;gBAkDmB,SAAG;+BAAI,kBAAY;;aAG7B,EAAS;AACd,iBAAG,GAAG,EAAE;MACV;;cAiBuB,iBAAgB;;qCAGH,CAAY;AAC9C,sBAAI,CAAC,SAAS,GAAE,CAAC,eAAe;MAClC;;wDAnBI,OAAmB,EACnB,IAA8B,EAC9B,QAAmC,EACnC,iBAA+C,EAC/C,WAAmC,EACnC,KAAuB;MAjBpB,SAAG;MAkBJ,kBAAY,GACR,CAAC,WAAW,WAAX,WAAW,OAAI,gEAA8B,UAAU;AAC5D,mEAAM,OAAO,EAAE,QAAQ,EAAE,iBAAiB,EAAE,KAAK,EAAE,IAAI,WAAJ,IAAI,GAAI;AAC/D,uBAAiB,GAAG,uEAAmB;IACzC;;;;;;;;;;;;;;;;;;;;;;;;;MA9Ba,4FAAS;YAAG;;MAIZ,gHAA6B;YAAG","file":"material_select_dropdown_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item: material_select__material_select_dropdown_item
  };
});

//# sourceMappingURL=material_select_dropdown_item.ddc.js.map
