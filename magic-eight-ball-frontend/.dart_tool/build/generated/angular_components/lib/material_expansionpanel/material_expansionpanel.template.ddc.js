define(['dart_sdk', 'packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_expansionpanel$46scss$46css, view_type, change_detection, modules, material_yes_no_buttons, button_decorator, button_decorator$, material_expansionpanel, deferred_content, deferred_content_aware, material_icon, material_icon$, material_yes_no_buttons$, has_disabled, ng_zone, dom_service, angular, deferred_content$, deferred_content_aware$, focus, has_disabled$, async_action, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_expansionpanel__material_expansionpanel$46scss$46css$46shim = material_expansionpanel$46scss$46css.material_expansionpanel__material_expansionpanel$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons$.material_yes_no_buttons__material_yes_no_buttons$46template;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_expansionpanel__material_expansionpanel$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialExpansionPanel = () => (AppViewOfMaterialExpansionPanel = dart.constFn(src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let AppViewAndintToAppViewOfMaterialExpansionPanel = () => (AppViewAndintToAppViewOfMaterialExpansionPanel = dart.constFn(dart.fnType(AppViewOfMaterialExpansionPanel(), [src__core__linker__app_view.AppView, core.int])))();
  let VoidToDeferredContentDirective = () => (VoidToDeferredContentDirective = dart.constFn(dart.fnType(content__deferred_content.DeferredContentDirective, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let ListOfHtmlElement = () => (ListOfHtmlElement = dart.constFn(core.List$(html.HtmlElement)))();
  let _ViewMaterialExpansionPanel4ToListOfHtmlElement = () => (_ViewMaterialExpansionPanel4ToListOfHtmlElement = dart.constFn(dart.fnType(ListOfHtmlElement(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4])))();
  let JSArrayOfButtonDirective = () => (JSArrayOfButtonDirective = dart.constFn(_interceptors.JSArray$(button_decorator__button_decorator.ButtonDirective)))();
  let ListOfButtonDirective = () => (ListOfButtonDirective = dart.constFn(core.List$(button_decorator__button_decorator.ButtonDirective)))();
  let _ViewMaterialExpansionPanel5ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel5ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5])))();
  let _ViewMaterialExpansionPanel6ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel6ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6])))();
  let JSArrayOfListOfButtonDirective = () => (JSArrayOfListOfButtonDirective = dart.constFn(_interceptors.JSArray$(ListOfButtonDirective())))();
  let VoidToMaterialExpansionPanel = () => (VoidToMaterialExpansionPanel = dart.constFn(dart.fnType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, [])))();
  let ComponentRefOfMaterialExpansionPanel = () => (ComponentRefOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let ComponentFactoryOfMaterialExpansionPanel = () => (ComponentFactoryOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel*/get styles$MaterialExpansionPanel() {
      return [material_expansionpanel__material_expansionpanel$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _KeyUpBoundaryDirective_0_5 = Symbol('_KeyUpBoundaryDirective_0_5');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _ButtonDirective_2_5 = Symbol('_ButtonDirective_2_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _text_6 = Symbol('_text_6');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgIf_9_9 = Symbol('_NgIf_9_9');
  const _appEl_10 = Symbol('_appEl_10');
  const _query_action_1_4_isDirty = Symbol('_query_action_1_4_isDirty');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _appEl_14 = Symbol('_appEl_14');
  const _query_expandCollapseButton_1_6_isDirty = Symbol('_query_expandCollapseButton_1_6_isDirty');
  const _NgIf_14_9 = Symbol('_NgIf_14_9');
  const _appEl_16 = Symbol('_appEl_16');
  const _NgIf_16_9 = Symbol('_NgIf_16_9');
  const _appEl_17 = Symbol('_appEl_17');
  const _DeferredContentDirective_17_9 = Symbol('_DeferredContentDirective_17_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_10 = Symbol('_expr_10');
  const _expr_14 = Symbol('_expr_14');
  const _expr_15 = Symbol('_expr_15');
  let const$;
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0 = class ViewMaterialExpansionPanel0 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = "panel themeable";
      this.createAttr(this[_el_0], "keyupBoundary", "");
      this.createAttr(this[_el_0], "role", "group");
      this.addShimC(this[_el_0]);
      this[_KeyUpBoundaryDirective_0_5] = new material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.new(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "header", this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this.createAttr(this[_el_2], "buttonDecorator", "");
      this[_el_2].className = "header";
      this.addShimC(this[_el_2]);
      this[_ButtonDirective_2_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_2], null));
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      _el_4.className = "panel-name";
      this.addShimC(_el_4);
      let _el_5 = src__core__linker__app_view.createAndAppend(doc, "p", _el_4);
      _el_5.className = "primary-text";
      this.addShimE(_el_5);
      this[_text_6] = html.Text.new("");
      _el_5[$append](this[_text_6]);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      _el_4[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this.project(_el_4, 0);
      let _el_8 = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      _el_8.className = "panel-description";
      this.addShimC(_el_8);
      this.project(_el_8, 1);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 2, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_1][$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 1, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, "main", this[_el_0]);
      this.addShimE(this[_el_11]);
      this[_el_12] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_11]);
      this.addShimC(this[_el_12]);
      this[_el_13] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_12]);
      this[_el_13].className = "content-wrapper";
      this.addShimC(this[_el_13]);
      let _anchor_14 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_13][$append](_anchor_14);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 13, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_14_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _el_15 = src__core__linker__app_view.createDivAndAppend(doc, this[_el_13]);
      _el_15.className = "content";
      this.addShimC(_el_15);
      this.project(_el_15, 3);
      let _anchor_16 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_13][$append](_anchor_16);
      this[_appEl_16] = new src__core__linker__view_container.ViewContainer.new(16, 13, this, _anchor_16);
      let _TemplateRef_16_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_16], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_16_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _anchor_17 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_12][$append](_anchor_17);
      this[_appEl_17] = new src__core__linker__view_container.ViewContainer.new(17, 12, this, _anchor_17);
      let _TemplateRef_17_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_17], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_DeferredContentDirective_17_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(content__deferred_content.DeferredContentDirective, dart.wrapType(content__deferred_content.DeferredContentDirective), dart.fn(() => new content__deferred_content.DeferredContentDirective.new(this[_appEl_17], _TemplateRef_17_8, content__deferred_content_aware.DeferredContentAware._check(this.parentView.injectorGet(dart.wrapType(content__deferred_content_aware.DeferredContentAware), this.viewData.parentIndex))), VoidToDeferredContentDirective())) : new content__deferred_content.DeferredContentDirective.new(this[_appEl_17], _TemplateRef_17_8, content__deferred_content_aware.DeferredContentAware._check(this.parentView.injectorGet(dart.wrapType(content__deferred_content_aware.DeferredContentAware), this.viewData.parentIndex)));
      this[_el_2][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_2_5].instance, 'handleClick')));
      this[_el_2][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_2_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_2_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleHeaderClick')));
      this.ctx.mainPanel = html.HtmlElement._check(this[_el_11]);
      this.ctx.headerPanel = html.HtmlElement._check(this[_el_1]);
      this.ctx.mainContent = this[_el_12];
      this.ctx.headerContent = this[_el_2];
      this.ctx.contentWrapper = this[_el_13];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_ButtonDirective_2_5].instance;
      }
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        return this[_KeyUpBoundaryDirective_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_8 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_ButtonDirective_2_5].instance.disabled = currVal_8;
        this[_expr_8] = currVal_8;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_2_5].instance.ngOnInit();
      }
      this[_NgIf_3_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_7_9].ngIf = _ctx.secondaryText != null;
      this[_NgIf_9_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_10_9].ngIf = !dart.test(_ctx.shouldShowExpandIcon);
      this[_NgIf_14_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_16_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      if (firstCheck) {
        this[_DeferredContentDirective_17_9].preserveDimensions = true;
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_17].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_action_1_4_isDirty])) {
          this.ctx.actionContent = src__core__linker__app_view_utils.firstOrNull(html.HtmlElement, this[_appEl_10].mapNestedViews(html.HtmlElement, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, dart.fn(nestedView => JSArrayOfHtmlElement().of([nestedView[_el_0]]), _ViewMaterialExpansionPanel4ToListOfHtmlElement())));
          this[_query_action_1_4_isDirty] = false;
        }
        if (dart.test(this[_query_expandCollapseButton_1_6_isDirty])) {
          this.ctx.expandCollapse = src__core__linker__app_view_utils.firstOrNull(button_decorator__button_decorator.ButtonDirective, src__core__linker__app_view_utils.flattenNodes(button_decorator__button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([JSArrayOfButtonDirective().of([this[_ButtonDirective_2_5].instance]), this[_appEl_14].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel5ToListOfButtonDirective())), this[_appEl_16].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel6ToListOfButtonDirective()))])));
          this[_query_expandCollapseButton_1_6_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.name;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "aria-expanded", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateClass(this[_el_0], "open", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.anotherExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(this[_el_0], "background", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.isExpanded) && dart.test(_ctx.hideExpandedHeader);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.updateClass(html.HtmlElement._check(this[_el_1]), "hidden", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.isExpanded);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.updateClass(this[_el_2], "closed", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.disableHeaderExpansion;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.updateClass(this[_el_2], "disable-header-expansion", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.headerMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this[_el_2], "aria-label", currVal_7);
        this[_expr_7] = currVal_7;
      }
      this[_ButtonDirective_2_5].detectHostChanges(this, this[_el_2]);
      let l = _ctx.name;
      let currVal_10 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_text_6][$text] = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_14 = !dart.test(_ctx.isExpanded);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this.updateClass(html.HtmlElement._check(this[_el_11]), "hidden", currVal_14);
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.hideExpandedHeader;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this.updateClass(this[_el_13], "hidden-header", currVal_15);
        this[_expr_15] = currVal_15;
      }
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_7];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_9];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_10];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_14];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_16];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_appEl_17];
      t$4 == null ? null : t$4.destroyNestedViews();
      this[_DeferredContentDirective_17_9].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_KeyUpBoundaryDirective_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_ButtonDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_text_6] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_10] = null;
    this[_query_action_1_4_isDirty] = true;
    this[_NgIf_10_9] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_appEl_14] = null;
    this[_query_expandCollapseButton_1_6_isDirty] = true;
    this[_NgIf_14_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_17] = null;
    this[_DeferredContentDirective_17_9] = null;
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
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-expansionpanel"));
    let t = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
    t == null ? material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel) : t;
    this.setupComponentType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType);
  }).prototype = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_KeyUpBoundaryDirective_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_ButtonDirective_2_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_text_6]: dart.fieldType(html.Text),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_action_1_4_isDirty]: dart.fieldType(core.bool),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_11]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.DivElement),
    [_el_13]: dart.fieldType(html.DivElement),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_expandCollapseButton_1_6_isDirty]: dart.fieldType(core.bool),
    [_NgIf_14_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_16]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_16_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_17]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_17_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, {
    /*material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel0 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_6 = Symbol('_MaterialIconComponent_0_6');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1 = class _ViewMaterialExpansionPanel1 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "expand-button expand-on-left";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleExpandIconClick')));
      this.init([this[_el_0]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2 = class _ViewMaterialExpansionPanel2 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      _el_0.className = "secondary-text";
      this.addShimE(_el_0);
      this[_text_1] = html.Text.new("");
      _el_0[$append](this[_text_1]);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.secondaryText;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3 = class _ViewMaterialExpansionPanel3 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "expand-button";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleExpandIconClick')));
      this.init([this[_el_0]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_0_6].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.expandAriaMsg == null)) {
          this.setAttr(this[_el_0], "aria-label", material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.expandAriaMsg);
        }
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4 = class _ViewMaterialExpansionPanel4 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0].className = "action";
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 2);
      this.init0(this[_el_0]);
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_action_1_4_isDirty] = true;
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5 = class _ViewMaterialExpansionPanel5 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "expand-button expand-on-left";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'collapse')));
      this.init([this[_el_0]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.closePanelMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6 = class _ViewMaterialExpansionPanel6 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "buttonDecorator", "");
      this[_el_0].className = "expand-button";
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'collapse')));
      this.init([this[_el_0]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_6].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.closePanelMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7 = class _ViewMaterialExpansionPanel7 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9, AppViewAndintToAppViewOfMaterialExpansionPanel()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init([this[_appEl_0], this[_appEl_1]], null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = !dart.test(_ctx.showSaveCancel);
      this[_NgIf_1_9].ngIf = _ctx.showSaveCancel;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_1];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8 = class _ViewMaterialExpansionPanel8 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      _el_0.className = "toolbelt";
      this.addShimC(html.HtmlElement._check(_el_0));
      this.project(_el_0, 4);
      this.init0(_el_0);
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.new = function(parentView, parentIndex) {
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.new(parentView, parentIndex);
  };
  const _MaterialYesNoButtonsComponent_0_5 = Symbol('_MaterialYesNoButtonsComponent_0_5');
  const _EnterAcceptsDirective_0_6 = Symbol('_EnterAcceptsDirective_0_6');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9 = class _ViewMaterialExpansionPanel9 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_el_0].className = "action-buttons";
      this.createAttr(this[_el_0], "reverse", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_EnterAcceptsDirective_0_6] = new material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.new(this[_MaterialYesNoButtonsComponent_0_5], this[_el_0], src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView.parentView)[_KeyUpBoundaryDirective_0_5]);
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5], []);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_0_5].yes.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'doSave')));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_0_5].no.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'doCancel')));
      this.init([this[_el_0]], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialYesNoButtonsComponent_0_5];
      }
      if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective) && 0 === nodeIndex) {
        return this[_EnterAcceptsDirective_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.saveText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.cancelText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_0_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.saveDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesDisabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.cancelDisplayed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialYesNoButtonsComponent_0_5].noDisplayed = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeSaveCancelAction;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_0_5].pending = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_5 = _ctx.enterAccepts;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_EnterAcceptsDirective_0_6].enterAccepts = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_EnterAcceptsDirective_0_6].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    this[_EnterAcceptsDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._renderType;
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_EnterAcceptsDirective_0_6]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.new(parentView, parentIndex);
  };
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanelHost*/get styles$MaterialExpansionPanelHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialExpansionPanel_0_5 = Symbol('_MaterialExpansionPanel_0_5');
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0 = class _ViewMaterialExpansionPanelHost0 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialExpansionPanel_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), dart.fn(() => new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_0].ref, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null), VoidToMaterialExpansionPanel())) : new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_0].ref, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialExpansionPanel_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialExpansionPanel()).new(0, this, this.rootEl, this[_MaterialExpansionPanel_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialExpansionPanel_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialExpansionPanel_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialExpansionPanel_0_5].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialExpansionPanel_0_5] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    [_compView_0]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_0_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelNgFactory*/get _MaterialExpansionPanelNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialExpansionPanel()).new("material-expansionpanel", dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, AppViewAndintToAppViewOfMaterialExpansionPanel())));
    }
  });
  dart.copyProperties(material_expansionpanel__material_expansionpanel$46template, {
    get MaterialExpansionPanelNgFactory() {
      return material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelNgFactory;
    }
  });
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_expansionpanel__material_expansionpanel$46template.initReflector = function() {
    if (dart.test(material_expansionpanel__material_expansionpanel$46template._visited)) {
      return;
    }
    material_expansionpanel__material_expansionpanel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), material_expansionpanel__material_expansionpanel$46template.MaterialExpansionPanelNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.template.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart": material_expansionpanel__material_expansionpanel$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.template.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.template.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel$46template: material_expansionpanel__material_expansionpanel$46template
  };
});

//# sourceMappingURL=material_expansionpanel.template.ddc.js.map
