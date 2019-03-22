define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/focus/focus', 'packages/intl/intl', 'packages/angular_components/utils/id_generator/id_generator'], function(dart_sdk, has_renderer, selection_model, focus, intl, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const focus__focus = focus.focus__focus;
  const intl$ = intl.intl;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const _root = Object.create(null);
  const material_chips__material_chip = Object.create(_root);
  const _itemRenderer = Symbol('_itemRenderer');
  const _value = Symbol('_value');
  const _label = Symbol('_label');
  const _remove = Symbol('_remove');
  const _uuid = Symbol('_uuid');
  const _genLabel = Symbol('_genLabel');
  const _is_MaterialChipComponent_default = Symbol('_is_MaterialChipComponent_default');
  material_chips__material_chip.MaterialChipComponent$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class MaterialChipComponent extends focus__focus.RootFocusable {
      get selectionModel() {
        return this[selectionModel];
      }
      set selectionModel(value) {
        this[selectionModel] = SelectionModelOfT()._check(value);
      }
      get removable() {
        return this[removable];
      }
      set removable(value) {
        this[removable] = value;
      }
      get hasLeftIcon() {
        return this[hasLeftIcon];
      }
      set hasLeftIcon(value) {
        this[hasLeftIcon] = value;
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
        this[_genLabel]();
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set value(val) {
        this[_value] = val;
        this[_genLabel]();
      }
      get value() {
        return this[_value];
      }
      [_genLabel]() {
        if (this[_value] == null) {
          this[_label] = null;
        } else if (!(this[_itemRenderer] === model__ui__has_renderer.nullRenderer)) {
          this[_label] = this.itemRenderer(T._check(this[_value]));
        }
      }
      get label() {
        return this[_label];
      }
      get remove() {
        return this[_remove].stream;
      }
      removeChip(event) {
        let t = this.selectionModel;
        t == null ? null : t.deselect(T._check(this.value));
        this[_remove].add(this.value);
        dart.dsend(event, 'preventDefault', []);
        dart.dsend(event, 'stopPropagation', []);
      }
      get uuid() {
        if (this[_uuid] == null) {
          this[_uuid] = material_chips__material_chip._idGenerator.nextId();
        }
        return this[_uuid];
      }
    }
    (MaterialChipComponent.new = function(root) {
      this[selectionModel] = null;
      this[removable] = true;
      this[hasLeftIcon] = false;
      this[_itemRenderer] = model__ui__has_renderer.nullRenderer;
      this[_value] = null;
      this[_label] = null;
      this[_remove] = async.StreamController.new({sync: true});
      this[_uuid] = null;
      MaterialChipComponent.__proto__.new.call(this, root);
    }).prototype = MaterialChipComponent.prototype;
    dart.addTypeTests(MaterialChipComponent);
    MaterialChipComponent.prototype[_is_MaterialChipComponent_default] = true;
    const selectionModel = Symbol("MaterialChipComponent.selectionModel");
    const removable = Symbol("MaterialChipComponent.removable");
    const hasLeftIcon = Symbol("MaterialChipComponent.hasLeftIcon");
    MaterialChipComponent[dart.implements] = () => [HasRendererOfT()];
    dart.setMethodSignature(MaterialChipComponent, () => ({
      __proto__: dart.getMethods(MaterialChipComponent.__proto__),
      [_genLabel]: dart.fnType(dart.void, []),
      removeChip: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setGetterSignature(MaterialChipComponent, () => ({
      __proto__: dart.getGetters(MaterialChipComponent.__proto__),
      itemRenderer: dart.fnType(core.String, [T]),
      value: dart.dynamic,
      label: core.String,
      remove: async.Stream,
      uuid: core.String
    }));
    dart.setSetterSignature(MaterialChipComponent, () => ({
      __proto__: dart.getSetters(MaterialChipComponent.__proto__),
      itemRenderer: dart.fnType(core.String, [T]),
      value: dart.dynamic
    }));
    dart.setFieldSignature(MaterialChipComponent, () => ({
      __proto__: dart.getFields(MaterialChipComponent.__proto__),
      selectionModel: dart.fieldType(SelectionModelOfT()),
      removable: dart.fieldType(core.bool),
      hasLeftIcon: dart.fieldType(core.bool),
      [_itemRenderer]: dart.fieldType(TToString()),
      [_value]: dart.fieldType(dart.dynamic),
      [_label]: dart.fieldType(core.String),
      [_remove]: dart.finalFieldType(async.StreamController),
      [_uuid]: dart.fieldType(core.String)
    }));
    return MaterialChipComponent;
  });
  material_chips__material_chip.MaterialChipComponent = material_chips__material_chip.MaterialChipComponent$();
  dart.defineLazy(material_chips__material_chip.MaterialChipComponent, {
    /*material_chips__material_chip.MaterialChipComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_chips__material_chip.MaterialChipComponent.chipDeleteButtonMessage*/get chipDeleteButtonMessage() {
      return intl$.Intl.message("Delete", {name: "chipDeleteButtonMessage", desc: "Label for a button which removes the item when clicked.", meaning: "Label for a button which removes the item when clicked."});
    }
  });
  dart.addTypeTests(material_chips__material_chip.MaterialChipComponent, _is_MaterialChipComponent_default);
  dart.defineLazy(material_chips__material_chip, {
    /*material_chips__material_chip._idGenerator*/get _idGenerator() {
      return new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID();
    }
  });
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.ddc", {
    "package:angular_components/material_chips/material_chip.dart": material_chips__material_chip
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;MAmDoB;;;;;;MAIb;;;;;;MAIA;;;;;;uBAWY,KAAqB;AACpC,2BAAa,GAAG,KAAK;AACrB,uBAAS;MACX;;cAIoC,oBAAa;;gBAOvC,GAAG;AACX,oBAAM,GAAG,GAAG;AACZ,uBAAS;MACX;;cAGqB,aAAM;;;AAIzB,YAAI,YAAM,IAAI,MAAM;AAClB,sBAAM,GAAG;cACJ,OAAK,AAAU,mBAAa,KAAE,oCAAY,GAAG;AAClD,sBAAM,GAAG,iBAAY,UAAC,YAAM;;MAEhC;;cAGoB,aAAM;;;cAIL,cAAO,OAAO;;iBAGc,KAAK;AACpD,mCAAc;+CAAW,UAAK;AAC9B,qBAAO,IAAI,CAAC,UAAK;AACjB,wBAAK;AACL,wBAAK;MACP;;AAIE,YAAI,WAAK,IAAI,MAAM;AACjB,qBAAK,GAAG,0CAAY,OAAO;;AAE7B,cAAO,YAAK;MACd;;0CAtFsB,IAAY;MAehB,oBAAc;MAI3B,eAAS,GAAG;MAIZ,iBAAW,GAAG;MAgBH,mBAAa,GAAG,oCAAY;MAcpC,YAAM;MAYP,YAAM;MAMP,aAAO,GAAG,0BAAyB,QAAO;MASzC,WAAK;AAhF0B,qDAAM,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAFpC,6DAAS;YAAG;;MAIZ,2EAAuB;YAAG,WAAI,QAAQ,CAAC,iBAC1C,iCACA,oEACG;;;;;MAoFT,0CAAY;iBAAG,gEAA8B","file":"material_chip.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip: material_chips__material_chip
  };
});

//# sourceMappingURL=material_chip.ddc.js.map
