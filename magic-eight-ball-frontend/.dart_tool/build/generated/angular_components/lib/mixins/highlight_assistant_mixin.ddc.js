define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular_components/highlighted_text/highlighted_value.template', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/highlight_assistant', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular_components/model/ui/highlighted_text_model'], function(dart_sdk, highlighted_value, highlighted_value$, modules, select, has_renderer, highlight_assistant, selection_container, highlight_provider, highlighted_text_model) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_value = highlighted_value.highlighted_text__highlighted_value;
  const highlighted_text__highlighted_value$46template = highlighted_value$.highlighted_text__highlighted_value$46template;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const model__selection__select = select.model__selection__select;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__highlight_assistant = highlight_assistant.model__ui__highlight_assistant;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const _root = Object.create(null);
  const mixins__highlight_assistant_mixin = Object.create(_root);
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let ComponentFactoryOfHighlightedValueComponent = () => (ComponentFactoryOfHighlightedValueComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_value.HighlightedValueComponent)))();
  let dynamicToComponentFactoryOfHighlightedValueComponent = () => (dynamicToComponentFactoryOfHighlightedValueComponent = dart.constFn(dart.fnType(ComponentFactoryOfHighlightedValueComponent(), [dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let StringAnddynamicToListOfHighlightedTextSegment = () => (StringAnddynamicToListOfHighlightedTextSegment = dart.constFn(dart.fnType(ListOfHighlightedTextSegment(), [core.String, dart.dynamic])))();
  const _highlightAssistant = Symbol('_highlightAssistant');
  const _optionHighlighter = Symbol('_optionHighlighter');
  const _highlightMatchFromStartOfWord = Symbol('_highlightMatchFromStartOfWord');
  const _highlightRenderer = Symbol('_highlightRenderer');
  const _is_HighlightAssistantMixin_default = Symbol('_is_HighlightAssistantMixin_default');
  mixins__highlight_assistant_mixin.HighlightAssistantMixin$ = dart.generic(T => {
    let SelectionContainerOfT = () => (SelectionContainerOfT = dart.constFn(model__selection__selection_container.SelectionContainer$(T)))();
    class HighlightAssistantMixin extends core.Object {
      get highlightComponentRenderer() {
        return this[highlightComponentRenderer];
      }
      set highlightComponentRenderer(value) {
        super.highlightComponentRenderer = value;
      }
      get highlightFactoryRenderer() {
        return this[highlightFactoryRenderer];
      }
      set highlightFactoryRenderer(value) {
        super.highlightFactoryRenderer = value;
      }
      get optionHighlighter() {
        return this[_optionHighlighter];
      }
      set optionHighlighter(value) {
        this[_optionHighlighter] = value;
        this[_highlightAssistant] = null;
      }
      set highlightMatchFromStartOfWord(value) {
        this[_highlightMatchFromStartOfWord] = value;
        this[_highlightAssistant] = null;
      }
      get highlightQuery() {
        return core.String._check(model__selection__select.Filterable.is(this.options) ? (() => {
          let l = model__selection__select.Filterable.as(this.options).currentQuery;
          return l != null ? l : "";
        })() : "");
      }
      get [_highlightRenderer]() {
        if ((this.componentRenderer == null || dart.equals(this.componentRenderer, this.highlightComponentRenderer)) && (this.factoryRenderer == null || dart.equals(this.factoryRenderer, this.highlightFactoryRenderer))) {
          let l = this.itemRenderer;
          return l != null ? l : dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
        }
        return dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
      }
      highlightOption(item) {
        let t = this[_highlightAssistant];
        t == null ? this[_highlightAssistant] = new model__ui__highlight_assistant.HighlightAssistant.new({optionHighlighter: this.optionHighlighter, matchFromStartOfWord: this[_highlightMatchFromStartOfWord]}) : t;
        return this[_highlightAssistant].highlightOption(T, this.highlightQuery, item, this[_highlightRenderer]);
      }
    }
    (HighlightAssistantMixin.new = function() {
      this[highlightComponentRenderer] = dart.fn(_ => dart.wrapType(highlighted_text__highlighted_value.HighlightedValueComponent), dynamicToType());
      this[highlightFactoryRenderer] = dart.fn(_ => highlighted_text__highlighted_value$46template.HighlightedValueComponentNgFactory, dynamicToComponentFactoryOfHighlightedValueComponent());
      this[_highlightAssistant] = null;
      this[_optionHighlighter] = null;
      this[_highlightMatchFromStartOfWord] = false;
    }).prototype = HighlightAssistantMixin.prototype;
    dart.addTypeTests(HighlightAssistantMixin);
    HighlightAssistantMixin.prototype[_is_HighlightAssistantMixin_default] = true;
    const highlightComponentRenderer = Symbol("HighlightAssistantMixin.highlightComponentRenderer");
    const highlightFactoryRenderer = Symbol("HighlightAssistantMixin.highlightFactoryRenderer");
    HighlightAssistantMixin[dart.implements] = () => [SelectionContainerOfT(), model__ui__highlight_provider.HighlightProvider];
    dart.setMethodSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getMethods(HighlightAssistantMixin.__proto__),
      highlightOption: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.Object])
    }));
    dart.setGetterSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getGetters(HighlightAssistantMixin.__proto__),
      optionHighlighter: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.String, dart.dynamic]),
      highlightQuery: core.String,
      [_highlightRenderer]: dart.fnType(core.String, [T])
    }));
    dart.setSetterSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getSetters(HighlightAssistantMixin.__proto__),
      optionHighlighter: dart.fnType(core.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core.String, dart.dynamic]),
      highlightMatchFromStartOfWord: core.bool
    }));
    dart.setFieldSignature(HighlightAssistantMixin, () => ({
      __proto__: dart.getFields(HighlightAssistantMixin.__proto__),
      highlightComponentRenderer: dart.finalFieldType(dynamicToType()),
      highlightFactoryRenderer: dart.finalFieldType(dynamicToComponentFactory()),
      [_highlightAssistant]: dart.fieldType(model__ui__highlight_assistant.HighlightAssistant),
      [_optionHighlighter]: dart.fieldType(StringAnddynamicToListOfHighlightedTextSegment()),
      [_highlightMatchFromStartOfWord]: dart.fieldType(core.bool)
    }));
    return HighlightAssistantMixin;
  });
  mixins__highlight_assistant_mixin.HighlightAssistantMixin = mixins__highlight_assistant_mixin.HighlightAssistantMixin$();
  dart.addTypeTests(mixins__highlight_assistant_mixin.HighlightAssistantMixin, _is_HighlightAssistantMixin_default);
  dart.trackLibraries("packages/angular_components/mixins/highlight_assistant_mixin.ddc", {
    "package:angular_components/mixins/highlight_assistant_mixin.dart": mixins__highlight_assistant_mixin
  }, '{"version":3,"sourceRoot":"","sources":["highlight_assistant_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmB0B;;;;;;MAEF;;;;;;;cAMe,yBAAkB;;4BAQjC,KAAiB;AACrC,gCAAkB,GAAG,KAAK;AAC1B,iCAAmB,GAAG;MACxB;wCAMkC,KAAU;AAC1C,4CAA8B,GAAG,KAAK;AACtC,iCAAmB,GAAG;MACxB;;yEAII,YAAO,IAAiB;yDAAC,YAAO,cAA4B;iCAAI;eAAK;MAAE;;AAGzE,aAAK,sBAAiB,IAAI,oBAClB,sBAAiB,EAAI,+BAA0B,OAClD,oBAAe,IAAI,oBAChB,oBAAe,EAAI,6BAAwB,IAAG;AACpD,kBAAO,iBAAY;iCAAI,uEAAmB;;AAE5C,cAAO,wEAAmB;MAC5B;sBAG6C,IAAW;AACtD,yCAAmB;oDAAK,qDAAkB,qBACnB,sBAAiB,wBACd,oCAA8B;AACxD,cAAO,0BAAmB,gBAAgB,IACtC,mBAAc,EAAE,IAAI,EAAE,wBAAkB;MAC9C;;;MAnDwB,gCAA0B,GAC9C,QAAC,CAAC,IAAK,4EAAyB;MACd,8BAAwB,GAC1C,QAAC,CAAC,IAAe,iFAAkC;MAEpC,yBAAmB;MAE1B,wBAAkB;MAczB,oCAA8B,GAAG;IA+BxC","file":"highlight_assistant_mixin.ddc.js"}');
  // Exports:
  return {
    mixins__highlight_assistant_mixin: mixins__highlight_assistant_mixin
  };
});

//# sourceMappingURL=highlight_assistant_mixin.ddc.js.map
