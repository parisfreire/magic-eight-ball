define(['dart_sdk', 'packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_select_dropdown_item$46scss$46css, view_type, change_detection, material_select_dropdown_item, modules, material_checkbox, material_checkbox$, has_disabled, glyph, glyph$, dynamic_component, dynamic_component$, material_dropdown_base, activation_handler, id_generator, selection_container, has_renderer, angular, activation_handler$, material_select_item, material_dropdown_base$, selection_container$, has_renderer$, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select_dropdown_item$46scss$46css$46shim = material_select_dropdown_item$46scss$46css.material_select__material_select_dropdown_item$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_select_dropdown_item = material_select_dropdown_item.material_select__material_select_dropdown_item;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_select__material_select_dropdown_item$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component__dynamic_component.DynamicComponent, [])))();
  let AppViewAndintToAppViewOfMaterialSelectDropdownItemComponentOfT = () => (AppViewAndintToAppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialSelectDropdownItemComponent = () => (ComponentFactoryOfMaterialSelectDropdownItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent*/get styles$MaterialSelectDropdownItemComponent() {
      return [material_select__material_select_dropdown_item$46scss$46css$46shim.styles];
    }
  });
  const _anchor_0 = Symbol('_anchor_0');
  const _el_0_0 = Symbol('_el_0_0');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  const _expr_14 = Symbol('_expr_14');
  const _is_ViewMaterialSelectDropdownItemComponent0_default = Symbol('_is_ViewMaterialSelectDropdownItemComponent0_default');
  material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$ = dart.generic(T => {
    let MaterialSelectDropdownItemComponentOfT = () => (MaterialSelectDropdownItemComponentOfT = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)))();
    let AppViewOfMaterialSelectDropdownItemComponentOfT = () => (AppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectDropdownItemComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectDropdownItemComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class ViewMaterialSelectDropdownItemComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_anchor_0] = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](this[_anchor_0]);
        let _text_1 = html.Text.new(" ");
        parentRenderNode[$append](_text_1);
        let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](_anchor_2);
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _text_3 = html.Text.new("\n \n");
        parentRenderNode[$append](_text_3);
        let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](_anchor_4);
        this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        let _text_5 = html.Text.new("\n ");
        parentRenderNode[$append](_text_5);
        let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](_anchor_6);
        this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
        let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        this.project(parentRenderNode, 0);
        this.init([], null);
        _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
        _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
        _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'preventTextSelectionIfShiftKey')));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = (!dart.test(_ctx.supportsMultiSelect) && dart.test(_ctx.isSelected)) === true;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          if (currVal_0) {
            let doc = html.document;
            this[_el_0_0] = html.DivElement._check(doc[$createElement]("div"));
            this[_el_0_0].className = "selected-accent mixin";
            this.addShimC(this[_el_0_0]);
            this.addInlinedNodes(this[_anchor_0], JSArrayOfNode().of([this[_el_0_0]]), true);
          } else {
            this.removeInlinedNodes(JSArrayOfNode().of([this[_el_0_0]]), true);
          }
          this[_expr_0] = currVal_0;
        }
        this[_NgIf_2_9].ngIf = dart.test(_ctx.supportsMultiSelect) && !dart.test(_ctx.hideCheckbox);
        this[_NgIf_4_9].ngIf = _ctx.valueHasLabel;
        this[_NgIf_6_9].ngIf = _ctx.componentType != null || _ctx.componentFactory != null;
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_2];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_4];
        t$ == null ? null : t$.destroyNestedViews();
        let t$0 = this[_appEl_6];
        t$0 == null ? null : t$0.destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let currVal_4 = this.ctx.tabIndex;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this.setProp(this.rootEl, "tabIndex", currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = this.ctx.ariaRole;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this.setAttr(this.rootEl, "role", currVal_5);
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = this.ctx.disabledStr;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this.setAttr(this.rootEl, "aria-disabled", currVal_6);
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = this.ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this.updateElemClass(this.rootEl, "is-disabled", currVal_7);
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = this.ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this.updateElemClass(this.rootEl, "disabled", currVal_8);
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = this.ctx.isHidden;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this.updateElemClass(this.rootEl, "hidden", currVal_9);
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = this.ctx.supportsMultiSelect;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          this.updateElemClass(this.rootEl, "multiselect", currVal_10);
          this[_expr_10] = currVal_10;
        }
        let currVal_11 = this.ctx.isAriaChecked;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          this.setAttr(this.rootEl, "aria-checked", currVal_11 == null ? null : dart.toString(currVal_11));
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = this.ctx.isSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this.updateElemClass(this.rootEl, "selected", currVal_12);
          this[_expr_12] = currVal_12;
        }
        let currVal_13 = this.ctx.id;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
          this.setAttr(this.rootEl, "id", currVal_13);
          this[_expr_13] = currVal_13;
        }
        let currVal_14 = this.ctx.isSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
          this.setAttr(this.rootEl, "aria-selected", currVal_14 == null ? null : dart.toString(currVal_14));
          this[_expr_14] = currVal_14;
        }
      }
    }
    (ViewMaterialSelectDropdownItemComponent0.new = function(parentView, parentIndex) {
      this[_anchor_0] = null;
      this[_el_0_0] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_expr_0] = false;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_expr_11] = null;
      this[_expr_12] = null;
      this[_expr_13] = null;
      this[_expr_14] = null;
      ViewMaterialSelectDropdownItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select-dropdown-item"));
      this.rootEl.className = material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.hostClass;
      this.rootEl.tabIndex = material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent.hostTabIndexForSelectDropdown;
      let t = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
      t == null ? material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_dropdown_item.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent) : t;
      this.setupComponentType(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType);
    }).prototype = ViewMaterialSelectDropdownItemComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectDropdownItemComponent0);
    ViewMaterialSelectDropdownItemComponent0.prototype[_is_ViewMaterialSelectDropdownItemComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialSelectDropdownItemComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectDropdownItemComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool])
    }));
    dart.setFieldSignature(ViewMaterialSelectDropdownItemComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectDropdownItemComponent0.__proto__),
      [_anchor_0]: dart.fieldType(html.Comment),
      [_el_0_0]: dart.fieldType(html.DivElement),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(core.bool),
      [_expr_8]: dart.fieldType(core.bool),
      [_expr_9]: dart.fieldType(core.bool),
      [_expr_10]: dart.fieldType(core.bool),
      [_expr_11]: dart.fieldType(dart.dynamic),
      [_expr_12]: dart.fieldType(core.bool),
      [_expr_13]: dart.fieldType(dart.dynamic),
      [_expr_14]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialSelectDropdownItemComponent0;
  });
  material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0 = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$();
  dart.defineLazy(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, {
    /*material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  dart.addTypeTests(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, _is_ViewMaterialSelectDropdownItemComponent0_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(T)).new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _is__ViewMaterialSelectDropdownItemComponent2_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent2_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$ = dart.generic(T => {
    let MaterialSelectDropdownItemComponentOfT = () => (MaterialSelectDropdownItemComponentOfT = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)))();
    let AppViewOfMaterialSelectDropdownItemComponentOfT = () => (AppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectDropdownItemComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectDropdownItemComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialSelectDropdownItemComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = html.Text.new("  ");
        let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.init([this[_appEl_0], _text_1, this[_appEl_2]], null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.useCheckMarks);
        this[_NgIf_2_9].ngIf = _ctx.useCheckMarks;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_2];
        t$ == null ? null : t$.destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent2.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      _ViewMaterialSelectDropdownItemComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent2);
    _ViewMaterialSelectDropdownItemComponent2.prototype[_is__ViewMaterialSelectDropdownItemComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent2.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialSelectDropdownItemComponent2;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2, _is__ViewMaterialSelectDropdownItemComponent2_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$(T)).new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _MaterialCheckboxComponent_0_5 = Symbol('_MaterialCheckboxComponent_0_5');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  const _is__ViewMaterialSelectDropdownItemComponent3_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent3_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this[_el_0].tabIndex = -1;
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, null, "-1", null);
        this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
        this.init0(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        let currVal_0 = _ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent3.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectDropdownItemComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent3);
    _ViewMaterialSelectDropdownItemComponent3.prototype[_is__ViewMaterialSelectDropdownItemComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialSelectDropdownItemComponent3;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3, _is__ViewMaterialSelectDropdownItemComponent3_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$(T)).new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _is__ViewMaterialSelectDropdownItemComponent4_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent4_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$ = dart.generic(T => {
    let MaterialSelectDropdownItemComponentOfT = () => (MaterialSelectDropdownItemComponentOfT = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)))();
    let AppViewOfMaterialSelectDropdownItemComponentOfT = () => (AppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialSelectDropdownItemComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialSelectDropdownItemComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialSelectDropdownItemComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        _el_0.className = "check-container";
        this.addShimE(_el_0);
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        _el_0[$append](_anchor_1);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialSelectDropdownItemComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init0(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9].ngIf = _ctx.isSelected;
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_1];
        t == null ? null : t.destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      _ViewMaterialSelectDropdownItemComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent4);
    _ViewMaterialSelectDropdownItemComponent4.prototype[_is__ViewMaterialSelectDropdownItemComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent4.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialSelectDropdownItemComponent4;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4, _is__ViewMaterialSelectDropdownItemComponent4_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$(T)).new(parentView, parentIndex);
  };
  const _GlyphComponent_0_5 = Symbol('_GlyphComponent_0_5');
  const _is__ViewMaterialSelectDropdownItemComponent5_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent5_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.createAttr(this[_el_0], "baseline", "");
        this[_el_0].className = "check";
        this.createAttr(this[_el_0], "icon", "check");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(html.HtmlElement._check(this[_el_0]));
        this[_compView_0].create(this[_GlyphComponent_0_5], []);
        this.init0(this[_el_0]);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_GlyphComponent_0_5].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent5.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_GlyphComponent_0_5] = null;
      _ViewMaterialSelectDropdownItemComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent5);
    _ViewMaterialSelectDropdownItemComponent5.prototype[_is__ViewMaterialSelectDropdownItemComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent5.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
      [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
    }));
    return _ViewMaterialSelectDropdownItemComponent5;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5, _is__ViewMaterialSelectDropdownItemComponent5_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$(T)).new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _is__ViewMaterialSelectDropdownItemComponent6_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent6_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent6 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        _el_0.className = "label";
        this.addShimE(_el_0);
        this[_text_1] = html.Text.new("");
        _el_0[$append](this[_text_1]);
        this.init0(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.valueLabel);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_text_1][$text] = core.String._check(currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
    }
    (_ViewMaterialSelectDropdownItemComponent6.new = function(parentView, parentIndex) {
      this[_text_1] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectDropdownItemComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent6.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent6);
    _ViewMaterialSelectDropdownItemComponent6.prototype[_is__ViewMaterialSelectDropdownItemComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent6.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent6.__proto__),
      [_text_1]: dart.fieldType(html.Text),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectDropdownItemComponent6;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6, _is__ViewMaterialSelectDropdownItemComponent6_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$(T)).new(parentView, parentIndex);
  };
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  const _expr_2 = Symbol('_expr_2');
  const _is__ViewMaterialSelectDropdownItemComponent7_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent7_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent7 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this[_el_0].className = "dynamic-item";
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
        this[_DynamicComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
        this[_compView_0].create(this[_DynamicComponent_0_8], []);
        this.init0(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        changed = false;
        let currVal_0 = _ctx.componentType;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentFactory;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.value;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_compView_0];
        t$ == null ? null : t$.destroy();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent7.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialSelectDropdownItemComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._renderType;
    }).prototype = _ViewMaterialSelectDropdownItemComponent7.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent7);
    _ViewMaterialSelectDropdownItemComponent7.prototype[_is__ViewMaterialSelectDropdownItemComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent7.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent7.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectDropdownItemComponent7;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7, _is__ViewMaterialSelectDropdownItemComponent7_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponentHost*/get styles$MaterialSelectDropdownItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectDropdownItemComponent_0_5 = Symbol('_MaterialSelectDropdownItemComponent_0_5');
  const _is__ViewMaterialSelectDropdownItemComponentHost0_default = Symbol('_is__ViewMaterialSelectDropdownItemComponentHost0_default');
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$ = dart.generic(T => {
    let ViewMaterialSelectDropdownItemComponent0OfT = () => (ViewMaterialSelectDropdownItemComponent0OfT = dart.constFn(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(T)))();
    let MaterialSelectDropdownItemComponentOfT = () => (MaterialSelectDropdownItemComponentOfT = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)))();
    let VoidToMaterialSelectDropdownItemComponentOfT = () => (VoidToMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentOfT(), [])))();
    let ComponentRefOfMaterialSelectDropdownItemComponentOfT = () => (ComponentRefOfMaterialSelectDropdownItemComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialSelectDropdownItemComponentOfT())))();
    class _ViewMaterialSelectDropdownItemComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectDropdownItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectDropdownItemComponentOfT(), dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), dart.fn(() => new (MaterialSelectDropdownItemComponentOfT()).new(this.rootEl, null, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), this[_compView_0].ref), VoidToMaterialSelectDropdownItemComponentOfT())) : new (MaterialSelectDropdownItemComponentOfT()).new(this.rootEl, null, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), this[_compView_0].ref);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_5], this.projectableNodes);
        this.init0(this.rootEl);
        return new (ComponentRefOfMaterialSelectDropdownItemComponentOfT()).new(0, this, this.rootEl, this[_MaterialSelectDropdownItemComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_MaterialSelectDropdownItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectDropdownItemComponent_0_5] = null;
      _ViewMaterialSelectDropdownItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialSelectDropdownItemComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponentHost0);
    _ViewMaterialSelectDropdownItemComponentHost0.prototype[_is__ViewMaterialSelectDropdownItemComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialSelectDropdownItemComponent0OfT()),
      [_MaterialSelectDropdownItemComponent_0_5]: dart.fieldType(MaterialSelectDropdownItemComponentOfT())
    }));
    return _ViewMaterialSelectDropdownItemComponentHost0;
  });
  material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0 = material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$();
  dart.addTypeTests(material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0, _is__ViewMaterialSelectDropdownItemComponentHost0_default);
  material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory*/get _MaterialSelectDropdownItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectDropdownItemComponent()).new("material-select-dropdown-item", dart.gbind(dart.fn(material_select__material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0, AppViewAndintToAppViewOfMaterialSelectDropdownItemComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_select__material_select_dropdown_item$46template, {
    get MaterialSelectDropdownItemComponentNgFactory() {
      return material_select__material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_select_dropdown_item$46template, {
    /*material_select__material_select_dropdown_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select_dropdown_item$46template.initReflector = function() {
    if (dart.test(material_select__material_select_dropdown_item$46template._visited)) {
      return;
    }
    material_select__material_select_dropdown_item$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), material_select__material_select_dropdown_item$46template.MaterialSelectDropdownItemComponentNgFactory);
    angular$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    glyph__glyph$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.template.ddc", {
    "package:angular_components/material_select/material_select_dropdown_item.template.dart": material_select__material_select_dropdown_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.template.dart"],"names":[],"mappings":"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","file":"material_select_dropdown_item.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item$46template: material_select__material_select_dropdown_item$46template
  };
});

//# sourceMappingURL=material_select_dropdown_item.template.ddc.js.map
