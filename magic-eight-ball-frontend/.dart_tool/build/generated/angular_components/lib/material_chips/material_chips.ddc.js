define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, disposer, selection_model, has_renderer, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_chips__material_chips = Object.create(_root);
  const $toString = dartx.toString;
  let ObjectToString = () => (ObjectToString = dart.constFn(dart.fnType(core.String, [core.Object])))();
  const _changeDetector = Symbol('_changeDetector');
  const _disposer = Symbol('_disposer');
  const _selectionModel = Symbol('_selectionModel');
  const _itemRenderer = Symbol('_itemRenderer');
  const _is_MaterialChipsComponent_default = Symbol('_is_MaterialChipsComponent_default');
  material_chips__material_chips.MaterialChipsComponent$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    let StreamSubscriptionOfListOfSelectionChangeRecordOfT = () => (StreamSubscriptionOfListOfSelectionChangeRecordOfT = dart.constFn(async.StreamSubscription$(ListOfSelectionChangeRecordOfT())))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class MaterialChipsComponent extends core.Object {
      get removable() {
        return this[removable];
      }
      set removable(value) {
        this[removable] = value;
      }
      set selectionModel(model) {
        SelectionModelOfT()._check(model);
        this[_selectionModel] = model;
        this[_disposer].dispose();
        this[_disposer].addDisposable(StreamSubscriptionOfListOfSelectionChangeRecordOfT(), this[_selectionModel].selectionChanges.listen(dart.fn(_ => {
          this[_changeDetector].markForCheck();
        }, ListOfSelectionChangeRecordOfTToNull())));
      }
      get selectionModel() {
        return this[_selectionModel];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      get selectedItems() {
        return this.selectionModel.selectedValues;
      }
      static _defaultItemRenderer(value) {
        return value == null ? null : dart.toString(value);
      }
      ngOnDestroy() {
        this[_disposer].dispose();
      }
    }
    (MaterialChipsComponent.new = function(changeDetector) {
      this[_disposer] = new utils__disposer__disposer.Disposer.multi();
      this[removable] = true;
      this[_selectionModel] = dart.const(SelectionModelOfT().empty());
      this[_itemRenderer] = dart.fn(material_chips__material_chips.MaterialChipsComponent._defaultItemRenderer, ObjectToString());
      this[_changeDetector] = changeDetector;
    }).prototype = MaterialChipsComponent.prototype;
    dart.addTypeTests(MaterialChipsComponent);
    MaterialChipsComponent.prototype[_is_MaterialChipsComponent_default] = true;
    const removable = Symbol("MaterialChipsComponent.removable");
    MaterialChipsComponent[dart.implements] = () => [HasRendererOfT(), src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getMethods(MaterialChipsComponent.__proto__),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getGetters(MaterialChipsComponent.__proto__),
      selectionModel: model__selection__selection_model.SelectionModel$(T),
      itemRenderer: dart.fnType(core.String, [T]),
      selectedItems: core.Iterable$(T)
    }));
    dart.setSetterSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getSetters(MaterialChipsComponent.__proto__),
      selectionModel: model__selection__selection_model.SelectionModel$(T),
      itemRenderer: dart.fnType(core.String, [T])
    }));
    dart.setFieldSignature(MaterialChipsComponent, () => ({
      __proto__: dart.getFields(MaterialChipsComponent.__proto__),
      [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
      [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
      removable: dart.fieldType(core.bool),
      [_selectionModel]: dart.fieldType(SelectionModelOfT()),
      [_itemRenderer]: dart.fieldType(TToString())
    }));
    return MaterialChipsComponent;
  });
  material_chips__material_chips.MaterialChipsComponent = material_chips__material_chips.MaterialChipsComponent$();
  dart.addTypeTests(material_chips__material_chips.MaterialChipsComponent, _is_MaterialChipsComponent_default);
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.ddc", {
    "package:angular_components/material_chips/material_chips.dart": material_chips__material_chips
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4BO;;;;;;yBASc,KAAuB;mCAAL;AACnC,6BAAe,GAAG,KAAK;AACvB,QACE,AAAE,uBAAO;QACT,AAAE,6BAAa,uDAAC,qBAAe,iBAAiB,OAAO,CAAC,QAAC,CAAC;AACxD,+BAAe,aAAa;;MAElC;;cAEwC,sBAAe;;uBAatC,KAAqB;AACpC,2BAAa,GAAG,KAAK;MACvB;;cAIoC,oBAAa;;;cAEhB,oBAAc,eAAe;;kCAG3B,KAAY;cAAK,MAAK,gCAAL,KAAK;MAAY;;AAMnE,uBAAS,QAAQ;MACnB;;;MArDe,eAAS,OAAG,wCAAc;MAIpC,eAAS,GAAG;MAKC,qBAAe,GAAG,WAAM,yBAAoB;MA8B9C,mBAAa,GAAG,qGAAoB;MASxB,qBAAe;IAAC","file":"material_chips.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips: material_chips__material_chips
  };
});

//# sourceMappingURL=material_chips.ddc.js.map
