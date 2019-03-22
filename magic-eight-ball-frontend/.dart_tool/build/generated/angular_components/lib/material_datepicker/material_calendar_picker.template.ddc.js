define(['dart_sdk', 'packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/quiver/time', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_calendar_picker$46scss$46css, view_type, change_detection, modules, material_calendar_picker, time, calendar_listener, angular, calendar, module, date, observable, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_calendar_picker$46scss$46css$46shim = material_calendar_picker$46scss$46css.material_datepicker__material_calendar_picker$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const time$ = time.time;
  const src__material_datepicker__calendar_listener$46template = calendar_listener.src__material_datepicker__calendar_listener$46template;
  const src__material_datepicker__enum_parsing$46template = calendar_listener.src__material_datepicker__enum_parsing$46template;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const _root = Object.create(null);
  const material_datepicker__material_calendar_picker$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialCalendarPickerComponent = () => (AppViewOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let AppViewAndintToAppViewOfMaterialCalendarPickerComponent = () => (AppViewAndintToAppViewOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialCalendarPickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let ComponentRefOfMaterialCalendarPickerComponent = () => (ComponentRefOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let ComponentFactoryOfMaterialCalendarPickerComponent = () => (ComponentFactoryOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent*/get styles$MaterialCalendarPickerComponent() {
      return [material_datepicker__material_calendar_picker$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0 = class ViewMaterialCalendarPickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "header", parentRenderNode);
      _el_0.className = "header";
      this.addShimE(_el_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1, AppViewAndintToAppViewOfMaterialCalendarPickerComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_2.className = "scroll-container";
      this.addShimC(_el_2);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      this[_el_3].className = "calendar-container";
      this.addShimC(this[_el_3]);
      this.ctx.container = this[_el_3];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dayNames;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let currVal_1 = this.ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(this.rootEl, "compact", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-calendar-picker"));
    let t = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType;
    t == null ? material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_calendar_picker.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent) : t;
    this.setupComponentType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType);
  }).prototype = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_3]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, {
    /*material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent0 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1 = class _ViewMaterialCalendarPickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      _el_0.className = "header-day";
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_text_1] = html.Text.new("");
      _el_0[$append](this[_text_1]);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_name = src__runtime__optimizations.unsafeCast(core.String, this.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._renderType;
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponentHost*/get styles$MaterialCalendarPickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCalendarPickerComponent_0_5 = Symbol('_MaterialCalendarPickerComponent_0_5');
  let const$0;
  let const$1;
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0 = class _ViewMaterialCalendarPickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), null), VoidToMaterialCalendarPickerComponent())) : new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex, null)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialCalendarPickerComponent()).new(0, this, this.rootEl, this[_MaterialCalendarPickerComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory*/get _MaterialCalendarPickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialCalendarPickerComponent()).new("material-calendar-picker", dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, AppViewAndintToAppViewOfMaterialCalendarPickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_calendar_picker$46template, {
    get MaterialCalendarPickerComponentNgFactory() {
      return material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_calendar_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_calendar_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_calendar_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), material_datepicker__material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory);
    src__material_datepicker__calendar_listener$46template.initReflector();
    src__material_datepicker__enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_calendar_picker.template.dart": material_datepicker__material_calendar_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.template.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker$46template: material_datepicker__material_calendar_picker$46template
  };
});

//# sourceMappingURL=material_calendar_picker.template.ddc.js.map
