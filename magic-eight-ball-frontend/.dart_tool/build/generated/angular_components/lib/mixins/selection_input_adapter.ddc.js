define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/string_selection_options', 'packages/angular_components/model/selection/selection_container'], function(dart_sdk, selection_model, selection_options, string_selection_options, selection_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__selection__string_selection_options = string_selection_options.model__selection__string_selection_options;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const _root = Object.create(null);
  const mixins__selection_input_adapter = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const _selectionChangeController = Symbol('_selectionChangeController');
  const _initSelectionModel = Symbol('_initSelectionModel');
  const _is_SelectionInputAdapter_default = Symbol('_is_SelectionInputAdapter_default');
  mixins__selection_input_adapter.SelectionInputAdapter$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SingleSelectionModelOfT = () => (SingleSelectionModelOfT = dart.constFn(model__selection__selection_model.SingleSelectionModel$(T)))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StringSelectionOptionsOfT = () => (StringSelectionOptionsOfT = dart.constFn(model__selection__string_selection_options.StringSelectionOptions$(T)))();
    let SelectionContainerOfT = () => (SelectionContainerOfT = dart.constFn(model__selection__selection_container.SelectionContainer$(T)))();
    class SelectionInputAdapter extends core.Object {
      [_initSelectionModel]() {
        let t = this.selection;
        t == null ? this.selection = SelectionModelOfT().single() : t;
      }
      get selectionChange() {
        if (this[_selectionChangeController] == null) {
          this[_selectionChangeController] = async.StreamController.new();
        }
        this[_initSelectionModel]();
        return this[_selectionChangeController].stream;
      }
      emitSelectionChange() {
        if (this[_selectionChangeController] == null) return;
        if (SingleSelectionModelOfT().is(this.selection)) {
          this[_selectionChangeController].add(dart.test(this.selection.selectedValues[$isNotEmpty]) ? this.selection.selectedValues[$first] : null);
        } else {
          this[_selectionChangeController].add(this.selection.selectedValues);
        }
      }
      set selectionInput(value) {
        if (SelectionModelOfT().is(value)) {
          this.selection = value;
          return;
        }
        this[_initSelectionModel]();
        if (value == null) {
          this.selection.clear();
        } else {
          if (!SingleSelectionModelOfT().is(this.selection)) dart.assertFailed("Passing selected value through `selection` input is only supported " + "for single select.");
          this.selection.select(T._check(value));
        }
      }
      set optionsInput(value) {
        if (value == null || SelectionOptionsOfT().is(value)) {
          this.options = SelectionOptionsOfT()._check(value);
        } else if (ListOfT().is(value)) {
          this.options = new (StringSelectionOptionsOfT()).new(value, {toFilterableString: this.itemRenderer});
        } else {
          dart.throw(new core.ArgumentError.new("Unsupported selection options type."));
        }
      }
    }
    (SelectionInputAdapter.new = function() {
      this[_selectionChangeController] = null;
    }).prototype = SelectionInputAdapter.prototype;
    dart.addTypeTests(SelectionInputAdapter);
    SelectionInputAdapter.prototype[_is_SelectionInputAdapter_default] = true;
    SelectionInputAdapter[dart.implements] = () => [SelectionContainerOfT()];
    dart.setMethodSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getMethods(SelectionInputAdapter.__proto__),
      [_initSelectionModel]: dart.fnType(dart.void, []),
      emitSelectionChange: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getGetters(SelectionInputAdapter.__proto__),
      selectionChange: async.Stream
    }));
    dart.setSetterSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getSetters(SelectionInputAdapter.__proto__),
      selectionInput: dart.dynamic,
      optionsInput: dart.dynamic
    }));
    dart.setFieldSignature(SelectionInputAdapter, () => ({
      __proto__: dart.getFields(SelectionInputAdapter.__proto__),
      [_selectionChangeController]: dart.fieldType(async.StreamController)
    }));
    return SelectionInputAdapter;
  });
  mixins__selection_input_adapter.SelectionInputAdapter = mixins__selection_input_adapter.SelectionInputAdapter$();
  dart.addTypeTests(mixins__selection_input_adapter.SelectionInputAdapter, _is_SelectionInputAdapter_default);
  dart.trackLibraries("packages/angular_components/mixins/selection_input_adapter.ddc", {
    "package:angular_components/mixins/selection_input_adapter.dart": mixins__selection_input_adapter
  }, '{"version":3,"sourceRoot":"","sources":["selection_input_adapter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAmBI,8BAAS;qCAAK,0BAAqB;MACrC;;AAQE,YAAI,gCAA0B,IAAI,MAAM;AACtC,0CAA0B,GAAG,0BAAgB;;AAE/C,iCAAmB;AACnB,cAAO,iCAA0B,OAAO;MAC1C;;AAIE,YAAI,gCAA0B,IAAI,MAAM;AACxC,yCAAI,cAAS,GAA6B;AACxC,0CAA0B,IAAI,WAAC,cAAS,eAAe,aAAW,IAC5D,cAAS,eAAe,QAAM,GAC9B;eACD;AACL,0CAA0B,IAAI,CAAC,cAAS,eAAe;;MAE3D;yBAMmB,KAAa;AAC9B,mCAAI,KAAK,GAAuB;AAC9B,wBAAS,GAAG,KAAK;AACjB;;AAEF,iCAAmB;AACnB,YAAI,KAAK,IAAI,MAAM;AACjB,wBAAS,MAAM;eACV;AACL,4CACI,cAAS,qBACT,wEACA;AACJ,wBAAS,OAAO,UAAC,KAAK;;MAE1B;uBAOiB,KAAa;AAC5B,YAAI,KAAK,IAAI,iCAAQ,KAAK,GAAyB;AACjD,sBAAO,gCAAG,KAAK;cACV,kBAAI,KAAK,GAAa;AAC3B,sBAAO,OAAG,iCAAsB,CAAC,KAAK,uBAAsB,iBAAY;eACnE;AACL,yBAAM,sBAAa,CAAC;;MAExB;;;MAjEiB,gCAA0B;IAkE7C","file":"selection_input_adapter.ddc.js"}');
  // Exports:
  return {
    mixins__selection_input_adapter: mixins__selection_input_adapter
  };
});

//# sourceMappingURL=selection_input_adapter.ddc.js.map
