define(['dart_sdk', 'packages/angular_components/material_select/material_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_select$46scss$46css, view_type, change_detection, material_select, modules, material_list, material_list$, selection_options, material_select_item, material_select_item$, material_dropdown_base, activation_handler, selection_container, has_disabled, has_renderer, material_select_base, angular, has_disabled$, select, selection_container$, selection_model, selection_options$, has_factory, has_renderer$, template_support, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select$46scss$46css$46shim = material_select$46scss$46css.material_select__material_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_select = material_select.material_select__material_select;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_select__material_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let AppViewAndintToAppViewOfMaterialSelectComponentOfT = () => (AppViewAndintToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialSelectComponent = () => (ComponentFactoryOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select.MaterialSelectComponent)))();
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select__material_select$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  const _is_ViewMaterialSelectComponent0_default = Symbol('_is_ViewMaterialSelectComponent0_default');
  material_select__material_select$46template.ViewMaterialSelectComponent0$ = dart.generic(T => {
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let AppViewOfMaterialSelectComponentOfT = () => (AppViewOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class ViewMaterialSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        parentRenderNode[$append](this[_el_0]);
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent1(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].create(this[_MaterialListComponent_0_5], [(() => {
            let _ = [this.projectableNodes[$_get](0)];
            _[$addAll]([this[_appEl_1]]);
            return _;
          })()]);
        this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        let currVal_0 = _ctx.width;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialListComponent_0_5].width = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_1_9].ngIf = _ctx.options != null;
        this[_appEl_1].detectChangesInNestedViews();
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_appEl_1];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_compView_0];
        t$ == null ? null : t$.destroy();
      }
      detectHostChanges(firstCheck) {
        let currVal_2 = this.ctx.isMultiSelect;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this.setAttr(this.rootEl, "aria-multiselectable", currVal_2 == null ? null : dart.toString(currVal_2));
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = this.ctx.disabledStr;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this.setAttr(this.rootEl, "aria-disabled", currVal_3);
          this[_expr_3] = currVal_3;
        }
      }
    }
    (ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_MaterialListComponent_0_5] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      ViewMaterialSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select"));
      this.createAttr(this.rootEl, "role", material_select__material_select.MaterialSelectComponent.hostRole);
      let t = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
      t == null ? material_select__material_select$46template.ViewMaterialSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_select$46template.styles$MaterialSelectComponent) : t;
      this.setupComponentType(material_select__material_select$46template.ViewMaterialSelectComponent0._renderType);
    }).prototype = ViewMaterialSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectComponent0);
    ViewMaterialSelectComponent0.prototype[_is_ViewMaterialSelectComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool])
    }));
    dart.setFieldSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectComponent0.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
      [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialSelectComponent0;
  });
  material_select__material_select$46template.ViewMaterialSelectComponent0 = material_select__material_select$46template.ViewMaterialSelectComponent0$();
  dart.defineLazy(material_select__material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select__material_select$46template.ViewMaterialSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  dart.addTypeTests(material_select__material_select$46template.ViewMaterialSelectComponent0, _is_ViewMaterialSelectComponent0_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template.ViewMaterialSelectComponent0$(T)).new(parentView, parentIndex);
  };
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  const _is__ViewMaterialSelectComponent1_default = Symbol('_is__ViewMaterialSelectComponent1_default');
  material_select__material_select$46template._ViewMaterialSelectComponent1$ = dart.generic(T => {
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let AppViewOfMaterialSelectComponentOfT = () => (AppViewOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        _el_0.className = "options-wrapper";
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        _el_0[$append](_anchor_1);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent2(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT()));
        this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init0(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (firstCheck) {
          if (!(_ctx.trackByIndexFn == null)) {
            this[_NgFor_1_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
          }
        }
        let currVal_0 = _ctx.options.optionGroups;
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
    }
    (_ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    }).prototype = _ViewMaterialSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent1);
    _ViewMaterialSelectComponent1.prototype[_is__ViewMaterialSelectComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent1.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent1;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent1 = material_select__material_select$46template._ViewMaterialSelectComponent1$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent1, _is__ViewMaterialSelectComponent1_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent1 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent1$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialSelectComponent2_default = Symbol('_is__ViewMaterialSelectComponent2_default');
  material_select__material_select$46template._ViewMaterialSelectComponent2$ = dart.generic(T => {
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let AppViewOfMaterialSelectComponentOfT = () => (AppViewOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        this.createAttr(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        this[_el_0][$append](_anchor_1);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent3(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init0(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = local_group.isEmpty;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this.updateClass(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        let t = this[_appEl_1];
        t == null ? null : t.destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    }).prototype = _ViewMaterialSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent2);
    _ViewMaterialSelectComponent2.prototype[_is__ViewMaterialSelectComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent2.__proto__),
      [_el_0]: dart.fieldType(html.DivElement),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialSelectComponent2;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent2 = material_select__material_select$46template._ViewMaterialSelectComponent2$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent2, _is__ViewMaterialSelectComponent2_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent2 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent2$(T)).new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _expr_1 = Symbol('_expr_1');
  const _is__ViewMaterialSelectComponent3_default = Symbol('_is__ViewMaterialSelectComponent3_default');
  material_select__material_select$46template._ViewMaterialSelectComponent3$ = dart.generic(T => {
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let AppViewOfMaterialSelectComponentOfT = () => (AppViewOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent4(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent5(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectComponentOfT()));
        this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init([this[_appEl_0], this[_appEl_1]], null);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = local_group.hasLabel;
        let currVal_1 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_NgFor_1_9].ngForOf = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_1];
        t$ == null ? null : t$.destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    }).prototype = _ViewMaterialSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent3);
    _ViewMaterialSelectComponent3.prototype[_is__ViewMaterialSelectComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent3.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent3;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent3 = material_select__material_select$46template._ViewMaterialSelectComponent3$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent3, _is__ViewMaterialSelectComponent3_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent3 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent3$(T)).new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _is__ViewMaterialSelectComponent4_default = Symbol('_is__ViewMaterialSelectComponent4_default');
  material_select__material_select$46template._ViewMaterialSelectComponent4$ = dart.generic(T => {
    class _ViewMaterialSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.createAttr(_el_0, "label", "");
        this.addShimE(_el_0);
        this[_text_1] = html.Text.new("");
        _el_0[$append](this[_text_1]);
        this.init0(_el_0);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.parentView.locals[$_get]("$implicit"));
        let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_text_1][$text] = core.String._check(currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
    }
    (_ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
      this[_text_1] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    }).prototype = _ViewMaterialSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent4);
    _ViewMaterialSelectComponent4.prototype[_is__ViewMaterialSelectComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent4.__proto__),
      [_text_1]: dart.fieldType(html.Text),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent4;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent4 = material_select__material_select$46template._ViewMaterialSelectComponent4$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent4, _is__ViewMaterialSelectComponent4_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent4 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent4$(T)).new(parentView, parentIndex);
  };
  const _MaterialSelectItemComponent_0_5 = Symbol('_MaterialSelectItemComponent_0_5');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  let const$0;
  const _is__ViewMaterialSelectComponent5_default = Symbol('_is__ViewMaterialSelectComponent5_default');
  material_select__material_select$46template._ViewMaterialSelectComponent5$ = dart.generic(T => {
    let ViewMaterialSelectItemComponent0OfT = () => (ViewMaterialSelectItemComponent0OfT = dart.constFn(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0$(T)))();
    let MaterialSelectItemComponentOfT = () => (MaterialSelectItemComponentOfT = dart.constFn(material_select__material_select_item.MaterialSelectItemComponent$(T)))();
    let VoidToMaterialSelectItemComponentOfT = () => (VoidToMaterialSelectItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectItemComponentOfT(), [])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfT()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_MaterialSelectItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectItemComponentOfT(), dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null), VoidToMaterialSelectItemComponentOfT())) : new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref, null);
        this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
        this.init0(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectItemComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_item = this.locals[$_get]("$implicit");
        let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(T._check(local_item)));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialSelectItemComponent_0_5].disabled = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectItemComponent_0_5].componentRenderer = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.factoryRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectItemComponent_0_5].factoryRenderer = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_item;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectItemComponent_0_5].value = T._check(currVal_3);
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectItemComponent_0_5].itemRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectItemComponent_0_5].selection = currVal_5;
          this[_expr_5] = currVal_5;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectItemComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_MaterialSelectItemComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      _ViewMaterialSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select$46template.ViewMaterialSelectComponent0._renderType;
    }).prototype = _ViewMaterialSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent5);
    _ViewMaterialSelectComponent5.prototype[_is__ViewMaterialSelectComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent5.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(ViewMaterialSelectItemComponent0OfT()),
      [_MaterialSelectItemComponent_0_5]: dart.fieldType(MaterialSelectItemComponentOfT()),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent5;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent5 = material_select__material_select$46template._ViewMaterialSelectComponent5$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent5, _is__ViewMaterialSelectComponent5_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent5 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent5$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectComponent_0_5 = Symbol('_MaterialSelectComponent_0_5');
  const _is__ViewMaterialSelectComponentHost0_default = Symbol('_is__ViewMaterialSelectComponentHost0_default');
  material_select__material_select$46template._ViewMaterialSelectComponentHost0$ = dart.generic(T => {
    let ViewMaterialSelectComponent0OfT = () => (ViewMaterialSelectComponent0OfT = dart.constFn(material_select__material_select$46template.ViewMaterialSelectComponent0$(T)))();
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let SelectionItemOfT = () => (SelectionItemOfT = dart.constFn(model__selection__selection_container.SelectionItem$(T)))();
    let JSArrayOfSelectionItemOfT = () => (JSArrayOfSelectionItemOfT = dart.constFn(_interceptors.JSArray$(SelectionItemOfT())))();
    let ComponentRefOfMaterialSelectComponentOfT = () => (ComponentRefOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialSelectComponentOfT())))();
    class _ViewMaterialSelectComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectComponent_0_5] = new (MaterialSelectComponentOfT()).new();
        this[_MaterialSelectComponent_0_5].selectItems = JSArrayOfSelectionItemOfT().of([]);
        this[_compView_0].create(this[_MaterialSelectComponent_0_5], this.projectableNodes);
        this.init0(this.rootEl);
        return new (ComponentRefOfMaterialSelectComponentOfT()).new(0, this, this.rootEl, this[_MaterialSelectComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 === nodeIndex) {
          return this[_MaterialSelectComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
      }
    }
    (_ViewMaterialSelectComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectComponent_0_5] = null;
      _ViewMaterialSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponentHost0);
    _ViewMaterialSelectComponentHost0.prototype[_is__ViewMaterialSelectComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialSelectComponent0OfT()),
      [_MaterialSelectComponent_0_5]: dart.fieldType(MaterialSelectComponentOfT())
    }));
    return _ViewMaterialSelectComponentHost0;
  });
  material_select__material_select$46template._ViewMaterialSelectComponentHost0 = material_select__material_select$46template._ViewMaterialSelectComponentHost0$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponentHost0, _is__ViewMaterialSelectComponentHost0_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectComponent()).new("material-select", dart.gbind(dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0, AppViewAndintToAppViewOfMaterialSelectComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_select__material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select__material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select$46template.initReflector = function() {
    if (dart.test(material_select__material_select$46template._visited)) {
      return;
    }
    material_select__material_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select.MaterialSelectComponent), material_select__material_select$46template.MaterialSelectComponentNgFactory);
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_list__material_list$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select.template.ddc", {
    "package:angular_components/material_select/material_select.template.dart": material_select__material_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":"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","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select__material_select$46template
  };
});

//# sourceMappingURL=material_select.template.ddc.js.map
