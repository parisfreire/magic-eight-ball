define(['dart_sdk', 'packages/angular_components/material_popup/material_popup.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_popup$46scss$46css, view_type, change_detection, modules, material_popup, popup_hierarchy, ng_zone, overlay_ref, zindexer, alignment, deferred_content_aware, material_dropdown_base, angular, deferred_content_aware$, alignment$, visibility, constants, module, overlay, zindexer$, module$, popup, material_dropdown_base$, toggle, async, disposer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_popup__material_popup$46scss$46css$46shim = material_popup$46scss$46css.material_popup__material_popup$46scss$46css$46shim;
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
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const laminate__overlay__constants$46template = constants.laminate__overlay__constants$46template;
  const laminate__overlay__module$46template = module.laminate__overlay__module$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const laminate__overlay__zindexer$46template = zindexer$.laminate__overlay__zindexer$46template;
  const laminate__popup__module$46template = module$.laminate__popup__module$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__ui__toggle$46template = toggle.model__ui__toggle$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_popup__material_popup$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialPopupComponent = () => (AppViewOfMaterialPopupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent)))();
  let AppViewAndintToAppViewOfMaterialPopupComponent = () => (AppViewAndintToAppViewOfMaterialPopupComponent = dart.constFn(dart.fnType(AppViewOfMaterialPopupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let ComponentRefOfMaterialPopupComponent = () => (ComponentRefOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent)))();
  let ComponentFactoryOfMaterialPopupComponent = () => (ComponentFactoryOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_popup__material_popup.MaterialPopupComponent)))();
  let MaterialPopupComponentToPopupHierarchy = () => (MaterialPopupComponentToPopupHierarchy = dart.constFn(dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, [material_popup__material_popup.MaterialPopupComponent])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let MaterialPopupComponentToPopupRef = () => (MaterialPopupComponentToPopupRef = dart.constFn(dart.fnType(src__laminate__popup__popup_ref.PopupRef, [material_popup__material_popup.MaterialPopupComponent])))();
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponent*/get styles$MaterialPopupComponent() {
      return [material_popup__material_popup$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = Symbol('_appEl_1');
  const _TemplateRef_1_7 = Symbol('_TemplateRef_1_7');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_popup__material_popup$46template.ViewMaterialPopupComponent0 = class ViewMaterialPopupComponent0 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      this[_TemplateRef_1_7] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1, AppViewAndintToAppViewOfMaterialPopupComponent()));
      let _text_2 = html.Text.new("\n");
      parentRenderNode[$append](_text_2);
      this.ctx.templateRef = this[_TemplateRef_1_7];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.paneId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this.rootEl, "pane-id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_popup__material_popup$46template.ViewMaterialPopupComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_TemplateRef_1_7] = null;
    this[_expr_0] = null;
    material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-popup"));
    let t = material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType;
    t == null ? material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_popup/material_popup.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_popup__material_popup$46template.styles$MaterialPopupComponent) : t;
    this.setupComponentType(material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType);
  }).prototype = material_popup__material_popup$46template.ViewMaterialPopupComponent0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template.ViewMaterialPopupComponent0);
  dart.setMethodSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_1_7]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_popup__material_popup$46template.ViewMaterialPopupComponent0, {
    /*material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponent0 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(parentView, parentIndex);
  };
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_13 = Symbol('_expr_13');
  material_popup__material_popup$46template._ViewMaterialPopupComponent1 = class _ViewMaterialPopupComponent1 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    build() {
      let _text_0 = html.Text.new("\n  ");
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_1].className = "popup-wrapper mixin";
      this.addShimC(this[_el_1]);
      let _text_2 = html.Text.new("\n      ");
      this[_el_1][$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this[_el_3].className = "popup";
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new("\n          ");
      this[_el_3][$append](_text_4);
      let _el_5 = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      _el_5.className = "material-popup-content content";
      this.addShimC(_el_5);
      let _text_6 = html.Text.new("\n              ");
      _el_5[$append](_text_6);
      let _el_7 = src__core__linker__app_view.createAndAppend(doc, "header", _el_5);
      this.addShimE(_el_7);
      let _text_8 = html.Text.new("\n                  ");
      _el_7[$append](_text_8);
      this.project(_el_7, 0);
      let _text_9 = html.Text.new("\n              ");
      _el_7[$append](_text_9);
      let _text_10 = html.Text.new("\n              ");
      _el_5[$append](_text_10);
      let _el_11 = src__core__linker__app_view.createDivAndAppend(doc, _el_5);
      _el_11.className = "main";
      this.addShimC(_el_11);
      let _text_12 = html.Text.new("\n                  ");
      _el_11[$append](_text_12);
      this.project(_el_11, 1);
      let _text_13 = html.Text.new("\n              ");
      _el_11[$append](_text_13);
      let _text_14 = html.Text.new("\n              ");
      _el_5[$append](_text_14);
      let _el_15 = src__core__linker__app_view.createAndAppend(doc, "footer", _el_5);
      this.addShimE(_el_15);
      let _text_16 = html.Text.new("\n                  ");
      _el_15[$append](_text_16);
      this.project(_el_15, 2);
      let _text_17 = html.Text.new("\n              ");
      _el_15[$append](_text_17);
      let _text_18 = html.Text.new("\n          ");
      _el_5[$append](_text_18);
      let _text_19 = html.Text.new("\n      ");
      this[_el_3][$append](_text_19);
      let _text_20 = html.Text.new("\n  ");
      this[_el_1][$append](_text_20);
      let _text_21 = html.Text.new("\n");
      this.init([_text_0, this[_el_1], _text_21], null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this.setAttr(this[_el_1], "role", (_ctx.role != null ? _ctx.role : "")[$toString]());
      }
      let currVal_0 = _ctx.z;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_1], "elevation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasBox;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_1], "shadow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.matchMinSourceWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_1], "full-width", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.inkBackground;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(this[_el_1], "ink", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.slide;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this[_el_1], "slide", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.zIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this[_el_1], "z-index", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.transformOrigin;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_el_1].style[$setProperty]("transform-origin", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showPopup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.updateClass(this[_el_1], "visible", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let l = _ctx.uniqueId;
      let currVal_8 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this.setProp(this[_el_1], "id", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_10 = _ctx.minHeight;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_el_3].style[$setProperty]("min-height", (currVal_10 == null ? null : dart.toString(currVal_10)) == null ? null : dart.notNull(currVal_10 == null ? null : dart.toString(currVal_10)) + "px");
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_el_3].style[$setProperty]("min-width", (currVal_11 == null ? null : dart.toString(currVal_11)) == null ? null : dart.notNull(currVal_11 == null ? null : dart.toString(currVal_11)) + "px");
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxHeight;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_el_3].style[$setProperty]("max-height", (currVal_12 == null ? null : dart.toString(currVal_12)) == null ? null : dart.notNull(currVal_12 == null ? null : dart.toString(currVal_12)) + "px");
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_el_3].style[$setProperty]("max-width", (currVal_13 == null ? null : dart.toString(currVal_13)) == null ? null : dart.notNull(currVal_13 == null ? null : dart.toString(currVal_13)) + "px");
        this[_expr_13] = currVal_13;
      }
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponent1.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_el_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_popup__material_popup$46template.ViewMaterialPopupComponent0._renderType;
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponent1.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponent1);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponentHost*/get styles$MaterialPopupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupHierarchy_0_11 = Symbol('__PopupHierarchy_0_11');
  const __PopupRef_0_12 = Symbol('__PopupRef_0_12');
  const _PopupHierarchy_0_11 = Symbol('_PopupHierarchy_0_11');
  const _PopupRef_0_12 = Symbol('_PopupRef_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  material_popup__material_popup$46template._ViewMaterialPopupComponentHost0 = class _ViewMaterialPopupComponentHost0 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_MaterialPopupComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this.rootEl)), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this.rootEl));
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], this.projectableNodes);
      this.init0(this[_appEl_0]);
      return new (ComponentRefOfMaterialPopupComponent()).new(0, this, this.rootEl, this[_MaterialPopupComponent_0_8]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 === nodeIndex) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 === nodeIndex) {
        return this[_PopupHierarchy_0_11];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 === nodeIndex) {
        return this[_PopupRef_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getGetters(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template._MaterialPopupComponentNgFactory*/get _MaterialPopupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialPopupComponent()).new("material-popup", dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0, AppViewAndintToAppViewOfMaterialPopupComponent())));
    }
  });
  dart.copyProperties(material_popup__material_popup$46template, {
    get MaterialPopupComponentNgFactory() {
      return material_popup__material_popup$46template._MaterialPopupComponentNgFactory;
    }
  });
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  material_popup__material_popup$46template.initReflector = function() {
    if (dart.test(material_popup__material_popup$46template._visited)) {
      return;
    }
    material_popup__material_popup$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), material_popup__material_popup$46template.MaterialPopupComponentNgFactory);
    src__di__reflector.registerDependencies(dart.fn(material_popup__material_popup.getHierarchy, MaterialPopupComponentToPopupHierarchy()), const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(material_popup__material_popup.getResolvedPopupRef, MaterialPopupComponentToPopupRef()), const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    laminate__overlay__constants$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__popup__module$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__ui__toggle$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.template.ddc", {
    "package:angular_components/material_popup/material_popup.template.dart": material_popup__material_popup$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.template.dart"],"names":[],"mappings":"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","file":"material_popup.template.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup$46template: material_popup__material_popup$46template
  };
});

//# sourceMappingURL=material_popup.template.ddc.js.map
