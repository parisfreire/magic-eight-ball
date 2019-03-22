define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, template_support, selection_options, selection_model, selectable, properties, selection_container, material_select_base, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__template_support = template_support.model__ui__template_support;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const material_select__material_select = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _selectItems = Symbol('_selectItems');
  const _disabled = Symbol('_disabled');
  const _itemRenderer = Symbol('_itemRenderer');
  const _refreshItems = Symbol('_refreshItems');
  const _is_MaterialSelectComponent_default = Symbol('_is_MaterialSelectComponent_default');
  material_select__material_select.MaterialSelectComponent$ = dart.generic(T => {
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionItemOfT = () => (SelectionItemOfT = dart.constFn(model__selection__selection_container.SelectionItem$(T)))();
    let ListOfSelectionItemOfT = () => (ListOfSelectionItemOfT = dart.constFn(core.List$(SelectionItemOfT())))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class MaterialSelectComponent extends material_select__material_select_base.MaterialSelectBase$(T) {
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      get isMultiSelect() {
        return super.isMultiSelect;
      }
      set options(value) {
        SelectionOptionsOfT()._check(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set width(value) {
        super.width = value;
      }
      get width() {
        return super.width;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set selection(value) {
        SelectionModelOfT()._check(value);
        super.selection = value;
        this[_refreshItems]();
      }
      get selection() {
        return super.selection;
      }
      isOptionDisabled(item) {
        T._check(item);
        return !dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(T, this.options, item, true));
      }
      set disabled(value) {
        this[_disabled] = utils__angular__properties__properties.getBool(value);
      }
      get disabled() {
        return this[_disabled];
      }
      get disabledStr() {
        return dart.str(this[_disabled]);
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(renderer) {
        this[_itemRenderer] = renderer;
        this[_refreshItems]();
      }
      set selectItems(value) {
        ListOfSelectionItemOfT()._check(value);
        if (value != null) {
          async.scheduleMicrotask(dart.fn(() => {
            this[_selectItems] = value;
            this[_refreshItems]();
          }, VoidToNull()));
        }
      }
      [_refreshItems]() {
        if (this[_selectItems] == null) return;
        if (this.selection != null) {
          for (let item of this[_selectItems]) {
            item.selection = this.selection;
          }
        }
        if (this.itemRenderer != null) {
          for (let item of this[_selectItems]) {
            item.itemRenderer = this.itemRenderer;
          }
        }
      }
    }
    (MaterialSelectComponent.new = function() {
      this[_selectItems] = null;
      this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
      this[_disabled] = false;
      this[_itemRenderer] = null;
      MaterialSelectComponent.__proto__.new.call(this);
    }).prototype = MaterialSelectComponent.prototype;
    dart.addTypeTests(MaterialSelectComponent);
    MaterialSelectComponent.prototype[_is_MaterialSelectComponent_default] = true;
    const trackByIndexFn = Symbol("MaterialSelectComponent.trackByIndexFn");
    MaterialSelectComponent[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
    dart.setMethodSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectComponent.__proto__),
      isOptionDisabled: dart.fnType(core.bool, [core.Object]),
      [_refreshItems]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectComponent.__proto__),
      disabled: core.bool,
      disabledStr: core.String
    }));
    dart.setSetterSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectComponent.__proto__),
      disabled: core.bool,
      selectItems: core.List$(model__selection__selection_container.SelectionItem$(T))
    }));
    dart.setFieldSignature(MaterialSelectComponent, () => ({
      __proto__: dart.getFields(MaterialSelectComponent.__proto__),
      [_selectItems]: dart.fieldType(ListOfSelectionItemOfT()),
      trackByIndexFn: dart.finalFieldType(core.Function),
      [_disabled]: dart.fieldType(core.bool),
      [_itemRenderer]: dart.fieldType(TToString())
    }));
    return MaterialSelectComponent;
  });
  material_select__material_select.MaterialSelectComponent = material_select__material_select.MaterialSelectComponent$();
  dart.defineLazy(material_select__material_select.MaterialSelectComponent, {
    /*material_select__material_select.MaterialSelectComponent.hostRole*/get hostRole() {
      return "listbox";
    }
  });
  dart.addTypeTests(material_select__material_select.MaterialSelectComponent, _is_MaterialSelectComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select.ddc", {
    "package:angular_components/material_select/material_select.dart": material_select__material_select
  }, '{"version":3,"sourceRoot":"","sources":["material_select.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkDiB;;;;;;;cAMW,oBAAmB;;kBAKjC,KAAyB;qCAAL;AAC9B,qBAAa,GAAG,KAAK;MACvB;;;;gBAKU,KAAK;AACb,mBAAW,GAAG,KAAK;MACrB;;;;4BAKsB,KAAuB;AAC3C,+BAAuB,GAAG,KAAK;MACjC;;;;0BAMoB,KAAqB;AACvC,6BAAqB,GAAG,KAAK;MAC/B;;;;oBAKc,KAAuB;mCAAL;AAC9B,uBAAe,GAAG,KAAK;AACvB,2BAAa;MACf;;cAGmC,gBAAe;;uBAI5B,IAAM;iBAAJ;AAMtB,cAAO,YAAC,wDAAU,eAAe,IAAC,YAAO,EAAE,IAAI,EAAE;MACnD;mBAMa,KAAK;AAChB,uBAAS,GAAG,8CAAO,CAAC,KAAK;MAC3B;;cAEqB,gBAAS;;;cAGJ,UAAE,eAAS;MAAC;;cAGF,oBAAa;;uBAMhC,QAAwB;AACvC,2BAAa,GAAG,QAAQ;AACxB,2BAAa;MACf;sBAGgB,KAA4B;wCAAL;AACrC,YAAI,KAAK,IAAI,MAAM;AAGjB,iCAAiB,CAAC;AAChB,8BAAY,GAAG,KAAK;AACpB,+BAAa;;;MAGnB;;AAGE,YAAI,kBAAY,IAAI,MAAM;AAC1B,YAAI,cAAS,IAAI,MAAM;AACrB,mBAAsB,OAAQ,mBAAY,EAAE;AAC1C,gBAAI,UAAU,GAAG,cAAS;;;AAG9B,YAAI,iBAAY,IAAI,MAAM;AACxB,mBAAsB,OAAQ,mBAAY,EAAE;AAC1C,gBAAI,aAAa,GAAG,iBAAY;;;MAGtC;;;MAhHuB,kBAAY;MAIpB,oBAAc,GAAG,2CAAe;MAE1C,eAAS,GAAG;MAwED,mBAAa;;IAmC/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnHe,iEAAQ;YAAG","file":"material_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_select: material_select__material_select
  };
});

//# sourceMappingURL=material_select.ddc.js.map
