define(['dart_sdk', 'packages/magic_eight_ball_frontend/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/magic_eight_ball_frontend/src/game/game_component', 'packages/http/src/base_client', 'packages/magic_eight_ball_frontend/app_component', 'packages/angular/angular.template', 'packages/angular/core.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/angular_components.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, module, dom_service, disposer, ng_zone, angular_2, imperative_view, dom_ruler, managed_zone, angular_2$, module$, overlay_ref, zindexer, alignment, dom_popup_source, time, game_component, base_client, app_component, angular, core, scorecard, scorecard$, fixed_material_tab_strip, fixed_material_tab_strip$, tab_change_event, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, material_button, dark_theme, material_button$, reference, focus_interface, has_disabled, base_material_input, button_decorator, angular_components) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__game__services__game_service = game_component.src__game__services__game_service;
  const src__statistics__services__statistics_service = game_component.src__statistics__services__statistics_service;
  const src__game__game_component = game_component.src__game__game_component;
  const src__statistics__statistics_component = game_component.src__statistics__statistics_component;
  const src__client = base_client.src__client;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const core$46template = core.core$46template;
  const scorecard__scorecard$46template = scorecard.scorecard__scorecard$46template;
  const scorecard__scorecard = scorecard$.scorecard__scorecard;
  const material_tab__fixed_material_tab_strip$46template = fixed_material_tab_strip.material_tab__fixed_material_tab_strip$46template;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip$.material_tab__fixed_material_tab_strip;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const angular_components$46template = angular_components.angular_components$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__game__model__game$46template = Object.create(_root);
  const src__game__services__game_service$46template = Object.create(_root);
  const src__statistics__model__statistics$46template = Object.create(_root);
  const src__statistics__services__statistics_service$46template = Object.create(_root);
  const src__statistics__statistics_component$46css$46shim = Object.create(_root);
  const src__statistics__statistics_component$46template = Object.create(_root);
  const src__game__game_component$46css$46shim = Object.create(_root);
  const src__game__game_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isEmpty = dartx.isEmpty;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core$.String, dart.dynamic)))();
  let VoidToDomService = () => (VoidToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [])))();
  let VoidToAcxImperativeViewUtils = () => (VoidToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [])))();
  let VoidToAngular2ManagedZone = () => (VoidToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core$.String, [])))();
  let VoidToHtmlElement = () => (VoidToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [])))();
  let VoidToOverlayService = () => (VoidToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [])))();
  let VoidToGameService = () => (VoidToGameService = dart.constFn(dart.fnType(src__game__services__game_service.GameService, [])))();
  let VoidToStatisticsService = () => (VoidToStatisticsService = dart.constFn(dart.fnType(src__statistics__services__statistics_service.StatisticsService, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core$.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let ClientToGameService = () => (ClientToGameService = dart.constFn(dart.fnType(src__game__services__game_service.GameService, [src__client.Client])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core$.List$(core$.Object)))();
  let ClientToStatisticsService = () => (ClientToStatisticsService = dart.constFn(dart.fnType(src__statistics__services__statistics_service.StatisticsService, [src__client.Client])))();
  let VoidToScorecardComponent = () => (VoidToScorecardComponent = dart.constFn(dart.fnType(scorecard__scorecard.ScorecardComponent, [])))();
  let ComponentRefOfStatisticsComponent = () => (ComponentRefOfStatisticsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__statistics__statistics_component.StatisticsComponent)))();
  let AppViewOfStatisticsComponent = () => (AppViewOfStatisticsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__statistics__statistics_component.StatisticsComponent)))();
  let AppViewAndintToAppViewOfStatisticsComponent = () => (AppViewAndintToAppViewOfStatisticsComponent = dart.constFn(dart.fnType(AppViewOfStatisticsComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfStatisticsComponent = () => (ComponentFactoryOfStatisticsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__statistics__statistics_component.StatisticsComponent)))();
  let VoidToFixedMaterialTabStripComponent = () => (VoidToFixedMaterialTabStripComponent = dart.constFn(dart.fnType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, [])))();
  let AppViewOfGameComponent = () => (AppViewOfGameComponent = dart.constFn(src__core__linker__app_view.AppView$(src__game__game_component.GameComponent)))();
  let AppViewAndintToAppViewOfGameComponent = () => (AppViewAndintToAppViewOfGameComponent = dart.constFn(dart.fnType(AppViewOfGameComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfGameComponent = () => (ComponentRefOfGameComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent)))();
  let ComponentFactoryOfGameComponent = () => (ComponentFactoryOfGameComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__game__game_component.GameComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _GameService_0_5 = Symbol('_GameService_0_5');
  const _StatisticsService_0_6 = Symbol('_StatisticsService_0_6');
  const _GameComponent_0_7 = Symbol('_GameComponent_0_7');
  const __Document_0_8 = Symbol('__Document_0_8');
  const __Window_0_9 = Symbol('__Window_0_9');
  const __DomService_0_10 = Symbol('__DomService_0_10');
  const __AcxImperativeViewUtils_0_11 = Symbol('__AcxImperativeViewUtils_0_11');
  const __DomRuler_0_12 = Symbol('__DomRuler_0_12');
  const __ManagedZone_0_13 = Symbol('__ManagedZone_0_13');
  const __overlayContainerName_0_14 = Symbol('__overlayContainerName_0_14');
  const __overlayContainerParent_0_15 = Symbol('__overlayContainerParent_0_15');
  const __overlayContainer_0_16 = Symbol('__overlayContainer_0_16');
  const __overlaySyncDom_0_17 = Symbol('__overlaySyncDom_0_17');
  const __overlayRepositionLoop_0_18 = Symbol('__overlayRepositionLoop_0_18');
  const __OverlayStyleConfig_0_19 = Symbol('__OverlayStyleConfig_0_19');
  const __ZIndexer_0_20 = Symbol('__ZIndexer_0_20');
  const __OverlayDomRenderService_0_21 = Symbol('__OverlayDomRenderService_0_21');
  const __OverlayService_0_22 = Symbol('__OverlayService_0_22');
  const __defaultPopupPositions_0_23 = Symbol('__defaultPopupPositions_0_23');
  const __DomPopupSourceFactory_0_24 = Symbol('__DomPopupSourceFactory_0_24');
  const __Clock_0_25 = Symbol('__Clock_0_25');
  const _Document_0_8 = Symbol('_Document_0_8');
  const _Window_0_9 = Symbol('_Window_0_9');
  const _DomService_0_10 = Symbol('_DomService_0_10');
  const _AcxImperativeViewUtils_0_11 = Symbol('_AcxImperativeViewUtils_0_11');
  const _DomRuler_0_12 = Symbol('_DomRuler_0_12');
  const _ManagedZone_0_13 = Symbol('_ManagedZone_0_13');
  let const$;
  let const$0;
  let const$1;
  const _overlayContainerName_0_14 = Symbol('_overlayContainerName_0_14');
  let const$2;
  let const$3;
  let const$4;
  const _overlayContainerParent_0_15 = Symbol('_overlayContainerParent_0_15');
  let const$5;
  let const$6;
  let const$7;
  const _overlayContainer_0_16 = Symbol('_overlayContainer_0_16');
  const _overlaySyncDom_0_17 = Symbol('_overlaySyncDom_0_17');
  const _overlayRepositionLoop_0_18 = Symbol('_overlayRepositionLoop_0_18');
  const _OverlayStyleConfig_0_19 = Symbol('_OverlayStyleConfig_0_19');
  const _ZIndexer_0_20 = Symbol('_ZIndexer_0_20');
  const _OverlayDomRenderService_0_21 = Symbol('_OverlayDomRenderService_0_21');
  const _OverlayService_0_22 = Symbol('_OverlayService_0_22');
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  const _defaultPopupPositions_0_23 = Symbol('_defaultPopupPositions_0_23');
  const _DomPopupSourceFactory_0_24 = Symbol('_DomPopupSourceFactory_0_24');
  let const$22;
  const _Clock_0_25 = Symbol('_Clock_0_25');
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Document_0_8]() {
      if (this[__Document_0_8] == null) {
        this[__Document_0_8] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_8];
    }
    get [_Window_0_9]() {
      if (this[__Window_0_9] == null) {
        this[__Window_0_9] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_9];
    }
    get [_DomService_0_10]() {
      if (this[__DomService_0_10] == null) {
        this[__DomService_0_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_9])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_9]));
      }
      return this[__DomService_0_10];
    }
    get [_AcxImperativeViewUtils_0_11]() {
      if (this[__AcxImperativeViewUtils_0_11] == null) {
        this[__AcxImperativeViewUtils_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10]));
      }
      return this[__AcxImperativeViewUtils_0_11];
    }
    get [_DomRuler_0_12]() {
      if (this[__DomRuler_0_12] == null) {
        this[__DomRuler_0_12] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_8]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10]));
      }
      return this[__DomRuler_0_12];
    }
    get [_ManagedZone_0_13]() {
      if (this[__ManagedZone_0_13] == null) {
        this[__ManagedZone_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_13];
    }
    get [_overlayContainerName_0_14]() {
      if (this[__overlayContainerName_0_14] == null) {
        this[__overlayContainerName_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_14];
    }
    get [_overlayContainerParent_0_15]() {
      if (this[__overlayContainerParent_0_15] == null) {
        this[__overlayContainerParent_0_15] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_8]), this.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_8]), this.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_15];
    }
    get [_overlayContainer_0_16]() {
      if (this[__overlayContainer_0_16] == null) {
        this[__overlayContainer_0_16] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_14]), html.HtmlElement._check(this[_overlayContainerParent_0_15]), this.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_14]), html.HtmlElement._check(this[_overlayContainerParent_0_15]), this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_16];
    }
    get [_overlaySyncDom_0_17]() {
      if (this[__overlaySyncDom_0_17] == null) {
        this[__overlaySyncDom_0_17] = true;
      }
      return this[__overlaySyncDom_0_17];
    }
    get [_overlayRepositionLoop_0_18]() {
      if (this[__overlayRepositionLoop_0_18] == null) {
        this[__overlayRepositionLoop_0_18] = true;
      }
      return this[__overlayRepositionLoop_0_18];
    }
    get [_OverlayStyleConfig_0_19]() {
      if (this[__OverlayStyleConfig_0_19] == null) {
        this[__OverlayStyleConfig_0_19] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_8]));
      }
      return this[__OverlayStyleConfig_0_19];
    }
    get [_ZIndexer_0_20]() {
      if (this[__ZIndexer_0_20] == null) {
        this[__ZIndexer_0_20] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_20];
    }
    get [_OverlayDomRenderService_0_21]() {
      if (this[__OverlayDomRenderService_0_21] == null) {
        this[__OverlayDomRenderService_0_21] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_19], html.HtmlElement._check(this[_overlayContainer_0_16]), core$.String._check(this[_overlayContainerName_0_14]), this[_DomRuler_0_12], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_11]), this[_overlaySyncDom_0_17], this[_overlayRepositionLoop_0_18], this[_ZIndexer_0_20]);
      }
      return this[__OverlayDomRenderService_0_21];
    }
    get [_OverlayService_0_22]() {
      if (this[__OverlayService_0_22] == null) {
        this[__OverlayService_0_22] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_17], this[_OverlayDomRenderService_0_21], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_17], this[_OverlayDomRenderService_0_21], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_22];
    }
    get [_defaultPopupPositions_0_23]() {
      if (this[__defaultPopupPositions_0_23] == null) {
        this[__defaultPopupPositions_0_23] = const$21 || (const$21 = dart.constList([const$8 || (const$8 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$10 || (const$10 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$12 || (const$12 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$14 || (const$14 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$17 || (const$17 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$15 || (const$15 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$16 || (const$16 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$20 || (const$20 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$18 || (const$18 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$19 || (const$19 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_23];
    }
    get [_DomPopupSourceFactory_0_24]() {
      if (this[__DomPopupSourceFactory_0_24] == null) {
        this[__DomPopupSourceFactory_0_24] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_12]);
      }
      return this[__DomPopupSourceFactory_0_24];
    }
    get [_Clock_0_25]() {
      if (this[__Clock_0_25] == null) {
        this[__Clock_0_25] = const$22 || (const$22 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_25];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__game__game_component$46template.ViewGameComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_GameService_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__game__services__game_service.GameService, dart.wrapType(src__game__services__game_service.GameService), dart.fn(() => new src__game__services__game_service.GameService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex))), VoidToGameService())) : new src__game__services__game_service.GameService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_StatisticsService_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__statistics__services__statistics_service.StatisticsService, dart.wrapType(src__statistics__services__statistics_service.StatisticsService), dart.fn(() => new src__statistics__services__statistics_service.StatisticsService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex))), VoidToStatisticsService())) : new src__statistics__services__statistics_service.StatisticsService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_GameComponent_0_7] = new src__game__game_component.GameComponent.new(src__game__services__game_service.GameService._check(this[_GameService_0_5]), src__statistics__services__statistics_service.StatisticsService._check(this[_StatisticsService_0_6]));
      this[_compView_0].create(this[_GameComponent_0_7], []);
      this.init(const$23 || (const$23 = dart.constList([], dart.dynamic)), null);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__game__services__game_service.GameService) && 0 === nodeIndex) {
        return this[_GameService_0_5];
      }
      if (token === dart.wrapType(src__statistics__services__statistics_service.StatisticsService) && 0 === nodeIndex) {
        return this[_StatisticsService_0_6];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_8];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_9];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_10];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_11];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_12];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_13];
      }
      if (token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_14];
      }
      if (token === (const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_15];
      }
      if (token === (const$26 || (const$26 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_16];
      }
      if (token === (const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_17];
      }
      if (token === (const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_19];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_21];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_22];
      }
      if (token === (const$29 || (const$29 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_23];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_24];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$30 || (const$30 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_25];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_GameService_0_5] = null;
    this[_StatisticsService_0_6] = null;
    this[_GameComponent_0_7] = null;
    this[__Document_0_8] = null;
    this[__Window_0_9] = null;
    this[__DomService_0_10] = null;
    this[__AcxImperativeViewUtils_0_11] = null;
    this[__DomRuler_0_12] = null;
    this[__ManagedZone_0_13] = null;
    this[__overlayContainerName_0_14] = null;
    this[__overlayContainerParent_0_15] = null;
    this[__overlayContainer_0_16] = null;
    this[__overlaySyncDom_0_17] = null;
    this[__overlayRepositionLoop_0_18] = null;
    this[__OverlayStyleConfig_0_19] = null;
    this[__ZIndexer_0_20] = null;
    this[__OverlayDomRenderService_0_21] = null;
    this[__OverlayService_0_22] = null;
    this[__defaultPopupPositions_0_23] = null;
    this[__DomPopupSourceFactory_0_24] = null;
    this[__Clock_0_25] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:magic_eight_ball_frontend/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(app_component$46template.ViewAppComponent0.__proto__),
    [_Document_0_8]: dart.dynamic,
    [_Window_0_9]: dart.dynamic,
    [_DomService_0_10]: dart.dynamic,
    [_AcxImperativeViewUtils_0_11]: dart.dynamic,
    [_DomRuler_0_12]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_13]: dart.dynamic,
    [_overlayContainerName_0_14]: dart.dynamic,
    [_overlayContainerParent_0_15]: dart.dynamic,
    [_overlayContainer_0_16]: dart.dynamic,
    [_overlaySyncDom_0_17]: core$.bool,
    [_overlayRepositionLoop_0_18]: core$.bool,
    [_OverlayStyleConfig_0_19]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_20]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_21]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_22]: dart.dynamic,
    [_defaultPopupPositions_0_23]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_24]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_25]: time$.Clock
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__game__game_component$46template.ViewGameComponent0),
    [_GameService_0_5]: dart.fieldType(dart.dynamic),
    [_StatisticsService_0_6]: dart.fieldType(dart.dynamic),
    [_GameComponent_0_7]: dart.fieldType(src__game__game_component.GameComponent),
    [__Document_0_8]: dart.fieldType(dart.dynamic),
    [__Window_0_9]: dart.fieldType(dart.dynamic),
    [__DomService_0_10]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_11]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_12]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_15]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_16]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_17]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_18]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_20]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_21]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_22]: dart.fieldType(dart.dynamic),
    [__defaultPopupPositions_0_23]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_24]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_25]: dart.fieldType(time$.Clock)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__game__game_component$46template.initReflector();
  };
  src__game__model__game$46template.initReflector = function() {
  };
  dart.defineLazy(src__game__services__game_service$46template, {
    /*src__game__services__game_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$31;
  let const$32;
  src__game__services__game_service$46template.initReflector = function() {
    if (dart.test(src__game__services__game_service$46template._visited)) {
      return;
    }
    src__game__services__game_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__game__services__game_service.GameService), dart.fn(p0 => new src__game__services__game_service.GameService.new(p0), ClientToGameService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__game__services__game_service.GameService), const$32 || (const$32 = dart.constList([const$31 || (const$31 = dart.constList([dart.wrapType(src__client.Client)], core$.Object))], ListOfObject())));
    core$46template.initReflector();
    src__game__model__game$46template.initReflector();
  };
  src__statistics__model__statistics$46template.initReflector = function() {
  };
  dart.defineLazy(src__statistics__services__statistics_service$46template, {
    /*src__statistics__services__statistics_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$33;
  let const$34;
  src__statistics__services__statistics_service$46template.initReflector = function() {
    if (dart.test(src__statistics__services__statistics_service$46template._visited)) {
      return;
    }
    src__statistics__services__statistics_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__statistics__services__statistics_service.StatisticsService), dart.fn(p0 => new src__statistics__services__statistics_service.StatisticsService.new(p0), ClientToStatisticsService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__statistics__services__statistics_service.StatisticsService), const$34 || (const$34 = dart.constList([const$33 || (const$33 = dart.constList([dart.wrapType(src__client.Client)], core$.Object))], ListOfObject())));
    core$46template.initReflector();
    src__statistics__model__statistics$46template.initReflector();
  };
  dart.defineLazy(src__statistics__statistics_component$46css$46shim, {
    /*src__statistics__statistics_component$46css$46shim.styles*/get styles() {
      return [".green._ngcontent-%ID%{color:#0f9d58}.red._ngcontent-%ID%{color:#db4437}.orange._ngcontent-%ID%{color:#ff9800}"];
    }
  });
  dart.defineLazy(src__statistics__statistics_component$46template, {
    /*src__statistics__statistics_component$46template.styles$StatisticsComponent*/get styles$StatisticsComponent() {
      return [src__statistics__statistics_component$46css$46shim.styles];
    }
  });
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _ScorecardComponent_2_5 = Symbol('_ScorecardComponent_2_5');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _ScorecardComponent_3_5 = Symbol('_ScorecardComponent_3_5');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _ScorecardComponent_4_5 = Symbol('_ScorecardComponent_4_5');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _ScorecardComponent_5_5 = Symbol('_ScorecardComponent_5_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  const _expr_7 = Symbol('_expr_7');
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  src__statistics__statistics_component$46template.ViewStatisticsComponent0 = class ViewStatisticsComponent0 extends src__core__linker__app_view.AppView$(src__statistics__statistics_component.StatisticsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "h2", parentRenderNode);
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("Responses");
      _el_0[$append](_text_1);
      this[_compView_2] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this[_el_2].className = src__core__linker__app_view_utils.interpolate2("", "green", " ", scorecard__scorecard.ScorecardComponent.hostClass, "");
      this.createAttr(this[_el_2], "label", "Affirmative");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_ScorecardComponent_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard.ScorecardComponent, dart.wrapType(scorecard__scorecard.ScorecardComponent), dart.fn(() => new scorecard__scorecard.ScorecardComponent.new(this[_compView_2].ref, html.HtmlElement._check(this[_el_2]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToScorecardComponent())) : new scorecard__scorecard.ScorecardComponent.new(this[_compView_2].ref, html.HtmlElement._check(this[_el_2]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_2].create(this[_ScorecardComponent_2_5], [const$35 || (const$35 = dart.constList([], dart.dynamic)), const$36 || (const$36 = dart.constList([], dart.dynamic)), const$37 || (const$37 = dart.constList([], dart.dynamic)), const$38 || (const$38 = dart.constList([], dart.dynamic))]);
      this[_compView_3] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this[_el_3].className = src__core__linker__app_view_utils.interpolate2("", "orange", " ", scorecard__scorecard.ScorecardComponent.hostClass, "");
      this.createAttr(this[_el_3], "label", "Non-Commital");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_ScorecardComponent_3_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard.ScorecardComponent, dart.wrapType(scorecard__scorecard.ScorecardComponent), dart.fn(() => new scorecard__scorecard.ScorecardComponent.new(this[_compView_3].ref, html.HtmlElement._check(this[_el_3]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToScorecardComponent())) : new scorecard__scorecard.ScorecardComponent.new(this[_compView_3].ref, html.HtmlElement._check(this[_el_3]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_3].create(this[_ScorecardComponent_3_5], [const$39 || (const$39 = dart.constList([], dart.dynamic)), const$40 || (const$40 = dart.constList([], dart.dynamic)), const$41 || (const$41 = dart.constList([], dart.dynamic)), const$42 || (const$42 = dart.constList([], dart.dynamic))]);
      this[_compView_4] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4]);
      this[_el_4].className = src__core__linker__app_view_utils.interpolate2("", "red", " ", scorecard__scorecard.ScorecardComponent.hostClass, "");
      this.createAttr(this[_el_4], "label", "Negative");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_ScorecardComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard.ScorecardComponent, dart.wrapType(scorecard__scorecard.ScorecardComponent), dart.fn(() => new scorecard__scorecard.ScorecardComponent.new(this[_compView_4].ref, html.HtmlElement._check(this[_el_4]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToScorecardComponent())) : new scorecard__scorecard.ScorecardComponent.new(this[_compView_4].ref, html.HtmlElement._check(this[_el_4]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_4].create(this[_ScorecardComponent_4_5], [const$43 || (const$43 = dart.constList([], dart.dynamic)), const$44 || (const$44 = dart.constList([], dart.dynamic)), const$45 || (const$45 = dart.constList([], dart.dynamic)), const$46 || (const$46 = dart.constList([], dart.dynamic))]);
      this[_compView_5] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      parentRenderNode[$append](this[_el_5]);
      this.createAttr(this[_el_5], "label", "Total questions");
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_ScorecardComponent_5_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard.ScorecardComponent, dart.wrapType(scorecard__scorecard.ScorecardComponent), dart.fn(() => new scorecard__scorecard.ScorecardComponent.new(this[_compView_5].ref, html.HtmlElement._check(this[_el_5]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToScorecardComponent())) : new scorecard__scorecard.ScorecardComponent.new(this[_compView_5].ref, html.HtmlElement._check(this[_el_5]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_5].create(this[_ScorecardComponent_5_5], [const$47 || (const$47 = dart.constList([], dart.dynamic)), const$48 || (const$48 = dart.constList([], dart.dynamic)), const$49 || (const$49 = dart.constList([], dart.dynamic)), const$50 || (const$50 = dart.constList([], dart.dynamic))]);
      this.init(const$51 || (const$51 = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_2_5].label = "Affirmative";
        changed = true;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.statistics == null ? null : _ctx.statistics.totalAffirmativeResponses);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_ScorecardComponent_2_5].value = core$.String._check(currVal_1);
        changed = true;
        this[_expr_1] = core$.String._check(currVal_1);
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_3_5].label = "Non-Commital";
        changed = true;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.statistics == null ? null : _ctx.statistics.totalNonCommittalResponses);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ScorecardComponent_3_5].value = core$.String._check(currVal_3);
        changed = true;
        this[_expr_3] = core$.String._check(currVal_3);
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_4_5].label = "Negative";
        changed = true;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.statistics == null ? null : _ctx.statistics.totalNegativeResponses);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_ScorecardComponent_4_5].value = core$.String._check(currVal_5);
        changed = true;
        this[_expr_5] = core$.String._check(currVal_5);
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_5_5].label = "Total questions";
        changed = true;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.statistics == null ? null : _ctx.statistics.totalQuestions);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_ScorecardComponent_5_5].value = core$.String._check(currVal_7);
        changed = true;
        this[_expr_7] = core$.String._check(currVal_7);
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_4];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_5];
      t$1 == null ? null : t$1.destroy();
    }
  };
  (src__statistics__statistics_component$46template.ViewStatisticsComponent0.new = function(parentView, parentIndex) {
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_ScorecardComponent_2_5] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_ScorecardComponent_3_5] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_ScorecardComponent_4_5] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_ScorecardComponent_5_5] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    src__statistics__statistics_component$46template.ViewStatisticsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("statistics"));
    let t = src__statistics__statistics_component$46template.ViewStatisticsComponent0._renderType;
    t == null ? src__statistics__statistics_component$46template.ViewStatisticsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:magic_eight_ball_frontend/lib/src/statistics/statistics_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__statistics__statistics_component$46template.styles$StatisticsComponent) : t;
    this.setupComponentType(src__statistics__statistics_component$46template.ViewStatisticsComponent0._renderType);
  }).prototype = src__statistics__statistics_component$46template.ViewStatisticsComponent0.prototype;
  dart.addTypeTests(src__statistics__statistics_component$46template.ViewStatisticsComponent0);
  dart.setMethodSignature(src__statistics__statistics_component$46template.ViewStatisticsComponent0, () => ({
    __proto__: dart.getMethods(src__statistics__statistics_component$46template.ViewStatisticsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__statistics__statistics_component.StatisticsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__statistics__statistics_component$46template.ViewStatisticsComponent0, () => ({
    __proto__: dart.getFields(src__statistics__statistics_component$46template.ViewStatisticsComponent0.__proto__),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_2_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_3_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_4_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_5_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_expr_1]: dart.fieldType(core$.String),
    [_expr_3]: dart.fieldType(core$.String),
    [_expr_5]: dart.fieldType(core$.String),
    [_expr_7]: dart.fieldType(core$.String)
  }));
  dart.defineLazy(src__statistics__statistics_component$46template.ViewStatisticsComponent0, {
    /*src__statistics__statistics_component$46template.ViewStatisticsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__statistics__statistics_component$46template.viewFactory_StatisticsComponent0 = function(parentView, parentIndex) {
    return new src__statistics__statistics_component$46template.ViewStatisticsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__statistics__statistics_component$46template, {
    /*src__statistics__statistics_component$46template.styles$StatisticsComponentHost*/get styles$StatisticsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _StatisticsComponent_0_5 = Symbol('_StatisticsComponent_0_5');
  src__statistics__statistics_component$46template._ViewStatisticsComponentHost0 = class _ViewStatisticsComponentHost0 extends src__core__linker__app_view.AppView$(src__statistics__statistics_component.StatisticsComponent) {
    build() {
      this[_compView_0$] = new src__statistics__statistics_component$46template.ViewStatisticsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_StatisticsComponent_0_5] = new src__statistics__statistics_component.StatisticsComponent.new();
      this[_compView_0$].create(this[_StatisticsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfStatisticsComponent()).new(0, this, this.rootEl, this[_StatisticsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_StatisticsComponent_0_5] = null;
    src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.prototype;
  dart.addTypeTests(src__statistics__statistics_component$46template._ViewStatisticsComponentHost0);
  dart.setMethodSignature(src__statistics__statistics_component$46template._ViewStatisticsComponentHost0, () => ({
    __proto__: dart.getMethods(src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__statistics__statistics_component.StatisticsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__statistics__statistics_component$46template._ViewStatisticsComponentHost0, () => ({
    __proto__: dart.getFields(src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__statistics__statistics_component$46template.ViewStatisticsComponent0),
    [_StatisticsComponent_0_5]: dart.fieldType(src__statistics__statistics_component.StatisticsComponent)
  }));
  src__statistics__statistics_component$46template.viewFactory_StatisticsComponentHost0 = function(parentView, parentIndex) {
    return new src__statistics__statistics_component$46template._ViewStatisticsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__statistics__statistics_component$46template, {
    /*src__statistics__statistics_component$46template._StatisticsComponentNgFactory*/get _StatisticsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfStatisticsComponent()).new("statistics", dart.fn(src__statistics__statistics_component$46template.viewFactory_StatisticsComponentHost0, AppViewAndintToAppViewOfStatisticsComponent())));
    }
  });
  dart.copyProperties(src__statistics__statistics_component$46template, {
    get StatisticsComponentNgFactory() {
      return src__statistics__statistics_component$46template._StatisticsComponentNgFactory;
    }
  });
  dart.defineLazy(src__statistics__statistics_component$46template, {
    /*src__statistics__statistics_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__statistics__statistics_component$46template.initReflector = function() {
    if (dart.test(src__statistics__statistics_component$46template._visited)) {
      return;
    }
    src__statistics__statistics_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__statistics__statistics_component.StatisticsComponent), src__statistics__statistics_component$46template.StatisticsComponentNgFactory);
    angular$46template.initReflector();
    scorecard__scorecard$46template.initReflector();
    src__statistics__model__statistics$46template.initReflector();
  };
  dart.defineLazy(src__game__game_component$46css$46shim, {
    /*src__game__game_component$46css$46shim.styles*/get styles() {
      return ["section._ngcontent-%ID%{text-align:center}div.eight-ball._ngcontent-%ID%{background-color:black;border:1px solid black;border-radius:50%;width:300px;height:300px;margin:0 auto}div.answer._ngcontent-%ID%{background-color:#333;border:1px solid #333;border-radius:50%;width:50%;height:50%;margin:25% auto}p#eight._ngcontent-%ID%{font-size:5em;margin:20% auto;color:white}p#answer._ngcontent-%ID%{padding:25px;color:lightblue;letter-spacing:2px}.shaking._ngcontent-%ID%{animation:shake 1s;animation-iteration-count:one}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-50deg)}20%{transform:translate(-3px,0px) rotate(50deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(50deg)}50%{transform:translate(-1px,2px) rotate(-50deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-50deg)}80%{transform:translate(-1px,-1px) rotate(50deg)}90%{transform:translate(1px,2px) rotate(0deg)}100%{transform:translate(1px,-2px) rotate(-50deg)}}"];
    }
  });
  dart.defineLazy(src__game__game_component$46template, {
    /*src__game__game_component$46template.styles$GameComponent*/get styles$GameComponent() {
      return [src__game__game_component$46css$46shim.styles];
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _compView_0$0 = Symbol('_compView_0');
  const _FixedMaterialTabStripComponent_0_5 = Symbol('_FixedMaterialTabStripComponent_0_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  let const$52;
  let const$53;
  let const$54;
  src__game__game_component$46template.ViewGameComponent0 = class ViewGameComponent0 extends src__core__linker__app_view.AppView$(src__game__game_component.GameComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$0].rootEl;
      parentRenderNode[$append](this[_el_0$]);
      this.createAttr(this[_el_0$], "label", "");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), dart.fn(() => new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0$0].ref, core$.bool._check(this.parentView.injectorGet(const$52 || (const$52 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null))), VoidToFixedMaterialTabStripComponent())) : new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0$0].ref, core$.bool._check(this.parentView.injectorGet(const$53 || (const$53 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)));
      this[_compView_0$0].create(this[_FixedMaterialTabStripComponent_0_5], []);
      let doc = html.document;
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "br", parentRenderNode);
      this.addShimE(_el_1);
      let _text_2 = html.Text.new(" ");
      parentRenderNode[$append](_text_2);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__game__game_component$46template.viewFactory_GameComponent1, AppViewAndintToAppViewOfGameComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__game__game_component$46template.viewFactory_GameComponent4, AppViewAndintToAppViewOfGameComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(this.ctx, 'onTabChange')));
      this.init(const$54 || (const$54 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.tabLabels == null)) {
          this[_FixedMaterialTabStripComponent_0_5].tabLabels = _ctx.tabLabels;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_NgIf_3_9].ngIf = _ctx.tabIndex === 0;
      this[_NgIf_4_9].ngIf = _ctx.tabIndex === 1;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$0];
      t$0 == null ? null : t$0.destroy();
    }
  };
  (src__game__game_component$46template.ViewGameComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    src__game__game_component$46template.ViewGameComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("game"));
    let t = src__game__game_component$46template.ViewGameComponent0._renderType;
    t == null ? src__game__game_component$46template.ViewGameComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:magic_eight_ball_frontend/lib/src/game/game_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__game__game_component$46template.styles$GameComponent) : t;
    this.setupComponentType(src__game__game_component$46template.ViewGameComponent0._renderType);
  }).prototype = src__game__game_component$46template.ViewGameComponent0.prototype;
  dart.addTypeTests(src__game__game_component$46template.ViewGameComponent0);
  dart.setMethodSignature(src__game__game_component$46template.ViewGameComponent0, () => ({
    __proto__: dart.getMethods(src__game__game_component$46template.ViewGameComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__game__game_component$46template.ViewGameComponent0, () => ({
    __proto__: dart.getFields(src__game__game_component$46template.ViewGameComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__game__game_component$46template.ViewGameComponent0, {
    /*src__game__game_component$46template.ViewGameComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__game__game_component$46template.viewFactory_GameComponent0 = function(parentView, parentIndex) {
    return new src__game__game_component$46template.ViewGameComponent0.new(parentView, parentIndex);
  };
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _DeferredValidator_1_5 = Symbol('_DeferredValidator_1_5');
  const _NgValidators_1_6 = Symbol('_NgValidators_1_6');
  const _NgModel_1_7 = Symbol('_NgModel_1_7');
  const _NgControl_1_8 = Symbol('_NgControl_1_8');
  const _MaterialInputComponent_1_9 = Symbol('_MaterialInputComponent_1_9');
  const _BaseMaterialInput_1_10 = Symbol('_BaseMaterialInput_1_10');
  const _MaterialInputDefaultValueAccessor_1_11 = Symbol('_MaterialInputDefaultValueAccessor_1_11');
  const _anchor_5 = Symbol('_anchor_5');
  const _el_5_0 = Symbol('_el_5_0');
  const _text_5_1 = Symbol('_text_5_1');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _el_8 = Symbol('_el_8');
  const _compView_8 = Symbol('_compView_8');
  const _AcxDarkTheme_8_5 = Symbol('_AcxDarkTheme_8_5');
  const _MaterialButtonComponent_8_6 = Symbol('_MaterialButtonComponent_8_6');
  const _expr_3$ = Symbol('_expr_3');
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  const _handle_ngModelChange_1_0 = Symbol('_handle_ngModelChange_1_0');
  let const$59;
  src__game__game_component$46template._ViewGameComponent1 = class _ViewGameComponent1 extends src__core__linker__app_view.AppView$(src__game__game_component.GameComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("section");
      this.addShimE(_el_0);
      this[_compView_1] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      _el_0[$append](this[_el_1]);
      this.createAttr(this[_el_1], "floatingLabel", "");
      this.createAttr(this[_el_1], "label", "Introduce your question");
      this.createAttr(this[_el_1], "type", "text");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_DeferredValidator_1_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_1_6] = [this[_DeferredValidator_1_5]];
      this[_NgModel_1_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_1_6], null);
      this[_NgControl_1_8] = this[_NgModel_1_7];
      this[_MaterialInputComponent_1_9] = new material_input__material_input.MaterialInputComponent.new("text", null, null, this[_NgControl_1_8], this[_compView_1].ref, this[_DeferredValidator_1_5]);
      this[_BaseMaterialInput_1_10] = this[_MaterialInputComponent_1_9];
      this[_MaterialInputDefaultValueAccessor_1_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_1_10], this[_NgControl_1_8]);
      this[_compView_1].create(this[_MaterialInputComponent_1_9], [const$55 || (const$55 = dart.constList([], dart.dynamic)), const$56 || (const$56 = dart.constList([], dart.dynamic))]);
      let _el_2 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      this.addShimE(_el_2);
      let _el_3 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_3.className = "eight-ball";
      this.addShimC(_el_3);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, _el_3);
      _el_4.className = "answer";
      this.addShimC(_el_4);
      this[_anchor_5] = src__core__linker__app_view.createViewContainerAnchor();
      _el_4[$append](this[_anchor_5]);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      _el_4[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 4, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(src__game__game_component$46template.viewFactory_GameComponent3, AppViewAndintToAppViewOfGameComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _el_7 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      this.addShimE(_el_7);
      this[_compView_8] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      this[_el_8] = this[_compView_8].rootEl;
      _el_0[$append](this[_el_8]);
      this.createAttr(this[_el_8], "id", "submitButton");
      this.createAttr(this[_el_8], "raised", "");
      this.addShimC(html.HtmlElement._check(this[_el_8]));
      this[_AcxDarkTheme_8_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$57 || (const$57 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$58 || (const$58 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_8_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_8]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_8_5]), this[_compView_8].ref, null);
      let _text_9 = html.Text.new("Submit");
      this[_compView_8].create(this[_MaterialButtonComponent_8_6], [JSArrayOfText().of([_text_9])]);
      let subscription_0 = this[_NgModel_1_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_0)));
      this[_el_8][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'submitQuestion')));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 1 === nodeIndex) {
        return this[_DeferredValidator_1_5];
      }
      if (token === (const$59 || (const$59 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 1 === nodeIndex) {
        return this[_NgValidators_1_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 1 === nodeIndex) {
        return this[_NgModel_1_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 1 === nodeIndex) {
        return this[_NgControl_1_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 === nodeIndex) {
        return this[_MaterialInputComponent_1_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 1 === nodeIndex) {
        return this[_BaseMaterialInput_1_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 1 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_1_11];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_AcxDarkTheme_8_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialButtonComponent_8_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7].model = _ctx.question;
      this[_NgModel_1_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_1_9].label = "Introduce your question";
        changed = true;
        this[_MaterialInputComponent_1_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_3 = _ctx.game.response[$isEmpty] === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        if (currVal_3) {
          let doc = html.document;
          this[_el_5_0] = doc[$createElement]("p");
          this.createAttr(this[_el_5_0], "id", "eight");
          this.addShimE(this[_el_5_0]);
          this[_text_5_1] = html.Text.new("8");
          this[_el_5_0][$append](this[_text_5_1]);
          this.addInlinedNodes(this[_anchor_5], JSArrayOfNode().of([this[_el_5_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_5_0]]));
        }
        this[_expr_3$] = currVal_3;
      }
      this[_NgIf_6_9].ngIf = !_ctx.game.response[$isEmpty];
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_8_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_8_6].ngOnInit();
      }
      this[_appEl_6].detectChangesInNestedViews();
      this[_compView_8].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_1_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_8];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialInputComponent_1_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_1_11].ngOnDestroy();
    }
    [_handle_ngModelChange_1_0]($event) {
      this.ctx.question = core$.String._check($event);
    }
  };
  (src__game__game_component$46template._ViewGameComponent1.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_DeferredValidator_1_5] = null;
    this[_NgValidators_1_6] = null;
    this[_NgModel_1_7] = null;
    this[_NgControl_1_8] = null;
    this[_MaterialInputComponent_1_9] = null;
    this[_BaseMaterialInput_1_10] = null;
    this[_MaterialInputDefaultValueAccessor_1_11] = null;
    this[_anchor_5] = null;
    this[_el_5_0] = null;
    this[_text_5_1] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_el_8] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_expr_3$] = false;
    src__game__game_component$46template._ViewGameComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__game__game_component$46template.ViewGameComponent0._renderType;
  }).prototype = src__game__game_component$46template._ViewGameComponent1.prototype;
  dart.addTypeTests(src__game__game_component$46template._ViewGameComponent1);
  dart.setMethodSignature(src__game__game_component$46template._ViewGameComponent1, () => ({
    __proto__: dart.getMethods(src__game__game_component$46template._ViewGameComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__game__game_component$46template._ViewGameComponent1, () => ({
    __proto__: dart.getFields(src__game__game_component$46template._ViewGameComponent1.__proto__),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_1_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_1_6]: dart.fieldType(core$.List),
    [_NgModel_1_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_1_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_1_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_1_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_1_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_anchor_5]: dart.fieldType(html.Comment),
    [_el_5_0]: dart.fieldType(html.Element),
    [_text_5_1]: dart.fieldType(html.Text),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_8]: dart.fieldType(html.Element),
    [_compView_8]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_8_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_8_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_3$]: dart.fieldType(core$.bool)
  }));
  src__game__game_component$46template.viewFactory_GameComponent1 = function(parentView, parentIndex) {
    return new src__game__game_component$46template._ViewGameComponent1.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _expr_0 = Symbol('_expr_0');
  src__game__game_component$46template._ViewGameComponent3 = class _ViewGameComponent3 extends src__core__linker__app_view.AppView$(src__game__game_component.GameComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.createAttr(_el_0, "id", "answer");
      this.addShimE(_el_0);
      this[_text_1] = html.Text.new("");
      _el_0[$append](this[_text_1]);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.game.response);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = core$.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__game__game_component$46template._ViewGameComponent3.new = function(parentView, parentIndex) {
    this[_text_1] = null;
    this[_expr_0] = null;
    src__game__game_component$46template._ViewGameComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__game__game_component$46template.ViewGameComponent0._renderType;
  }).prototype = src__game__game_component$46template._ViewGameComponent3.prototype;
  dart.addTypeTests(src__game__game_component$46template._ViewGameComponent3);
  dart.setMethodSignature(src__game__game_component$46template._ViewGameComponent3, () => ({
    __proto__: dart.getMethods(src__game__game_component$46template._ViewGameComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__game__game_component$46template._ViewGameComponent3, () => ({
    __proto__: dart.getFields(src__game__game_component$46template._ViewGameComponent3.__proto__),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__game__game_component$46template.viewFactory_GameComponent3 = function(parentView, parentIndex) {
    return new src__game__game_component$46template._ViewGameComponent3.new(parentView, parentIndex);
  };
  const _StatisticsComponent_1_5 = Symbol('_StatisticsComponent_1_5');
  src__game__game_component$46template._ViewGameComponent4 = class _ViewGameComponent4 extends src__core__linker__app_view.AppView$(src__game__game_component.GameComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("section");
      this.addShimE(_el_0);
      this[_compView_1] = new src__statistics__statistics_component$46template.ViewStatisticsComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      _el_0[$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_StatisticsComponent_1_5] = new src__statistics__statistics_component.StatisticsComponent.new();
      this[_compView_1].create(this[_StatisticsComponent_1_5], []);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.statistics;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_StatisticsComponent_1_5].statistics = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
    }
  };
  (src__game__game_component$46template._ViewGameComponent4.new = function(parentView, parentIndex) {
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_StatisticsComponent_1_5] = null;
    this[_expr_0] = null;
    src__game__game_component$46template._ViewGameComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__game__game_component$46template.ViewGameComponent0._renderType;
  }).prototype = src__game__game_component$46template._ViewGameComponent4.prototype;
  dart.addTypeTests(src__game__game_component$46template._ViewGameComponent4);
  dart.setMethodSignature(src__game__game_component$46template._ViewGameComponent4, () => ({
    __proto__: dart.getMethods(src__game__game_component$46template._ViewGameComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__game__game_component$46template._ViewGameComponent4, () => ({
    __proto__: dart.getFields(src__game__game_component$46template._ViewGameComponent4.__proto__),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__statistics__statistics_component$46template.ViewStatisticsComponent0),
    [_StatisticsComponent_1_5]: dart.fieldType(src__statistics__statistics_component.StatisticsComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__game__game_component$46template.viewFactory_GameComponent4 = function(parentView, parentIndex) {
    return new src__game__game_component$46template._ViewGameComponent4.new(parentView, parentIndex);
  };
  dart.defineLazy(src__game__game_component$46template, {
    /*src__game__game_component$46template.styles$GameComponentHost*/get styles$GameComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _GameService_0_5$ = Symbol('_GameService_0_5');
  const _StatisticsService_0_6$ = Symbol('_StatisticsService_0_6');
  const _GameComponent_0_7$ = Symbol('_GameComponent_0_7');
  const __Document_0_8$ = Symbol('__Document_0_8');
  const __Window_0_9$ = Symbol('__Window_0_9');
  const __DomService_0_10$ = Symbol('__DomService_0_10');
  const __AcxImperativeViewUtils_0_11$ = Symbol('__AcxImperativeViewUtils_0_11');
  const __DomRuler_0_12$ = Symbol('__DomRuler_0_12');
  const __ManagedZone_0_13$ = Symbol('__ManagedZone_0_13');
  const __overlayContainerName_0_14$ = Symbol('__overlayContainerName_0_14');
  const __overlayContainerParent_0_15$ = Symbol('__overlayContainerParent_0_15');
  const __overlayContainer_0_16$ = Symbol('__overlayContainer_0_16');
  const __overlaySyncDom_0_17$ = Symbol('__overlaySyncDom_0_17');
  const __overlayRepositionLoop_0_18$ = Symbol('__overlayRepositionLoop_0_18');
  const __OverlayStyleConfig_0_19$ = Symbol('__OverlayStyleConfig_0_19');
  const __ZIndexer_0_20$ = Symbol('__ZIndexer_0_20');
  const __OverlayDomRenderService_0_21$ = Symbol('__OverlayDomRenderService_0_21');
  const __OverlayService_0_22$ = Symbol('__OverlayService_0_22');
  const __defaultPopupPositions_0_23$ = Symbol('__defaultPopupPositions_0_23');
  const __DomPopupSourceFactory_0_24$ = Symbol('__DomPopupSourceFactory_0_24');
  const __Clock_0_25$ = Symbol('__Clock_0_25');
  const _Document_0_8$ = Symbol('_Document_0_8');
  const _Window_0_9$ = Symbol('_Window_0_9');
  const _DomService_0_10$ = Symbol('_DomService_0_10');
  const _AcxImperativeViewUtils_0_11$ = Symbol('_AcxImperativeViewUtils_0_11');
  const _DomRuler_0_12$ = Symbol('_DomRuler_0_12');
  const _ManagedZone_0_13$ = Symbol('_ManagedZone_0_13');
  let const$60;
  let const$61;
  let const$62;
  const _overlayContainerName_0_14$ = Symbol('_overlayContainerName_0_14');
  let const$63;
  let const$64;
  let const$65;
  const _overlayContainerParent_0_15$ = Symbol('_overlayContainerParent_0_15');
  let const$66;
  let const$67;
  let const$68;
  const _overlayContainer_0_16$ = Symbol('_overlayContainer_0_16');
  const _overlaySyncDom_0_17$ = Symbol('_overlaySyncDom_0_17');
  const _overlayRepositionLoop_0_18$ = Symbol('_overlayRepositionLoop_0_18');
  const _OverlayStyleConfig_0_19$ = Symbol('_OverlayStyleConfig_0_19');
  const _ZIndexer_0_20$ = Symbol('_ZIndexer_0_20');
  const _OverlayDomRenderService_0_21$ = Symbol('_OverlayDomRenderService_0_21');
  const _OverlayService_0_22$ = Symbol('_OverlayService_0_22');
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  const _defaultPopupPositions_0_23$ = Symbol('_defaultPopupPositions_0_23');
  const _DomPopupSourceFactory_0_24$ = Symbol('_DomPopupSourceFactory_0_24');
  let const$83;
  const _Clock_0_25$ = Symbol('_Clock_0_25');
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  src__game__game_component$46template._ViewGameComponentHost0 = class _ViewGameComponentHost0 extends src__core__linker__app_view.AppView$(src__game__game_component.GameComponent) {
    get [_Document_0_8$]() {
      if (this[__Document_0_8$] == null) {
        this[__Document_0_8$] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_8$];
    }
    get [_Window_0_9$]() {
      if (this[__Window_0_9$] == null) {
        this[__Window_0_9$] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_9$];
    }
    get [_DomService_0_10$]() {
      if (this[__DomService_0_10$] == null) {
        this[__DomService_0_10$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_9$])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_9$]));
      }
      return this[__DomService_0_10$];
    }
    get [_AcxImperativeViewUtils_0_11$]() {
      if (this[__AcxImperativeViewUtils_0_11$] == null) {
        this[__AcxImperativeViewUtils_0_11$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10$])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10$]));
      }
      return this[__AcxImperativeViewUtils_0_11$];
    }
    get [_DomRuler_0_12$]() {
      if (this[__DomRuler_0_12$] == null) {
        this[__DomRuler_0_12$] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_8$]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10$]));
      }
      return this[__DomRuler_0_12$];
    }
    get [_ManagedZone_0_13$]() {
      if (this[__ManagedZone_0_13$] == null) {
        this[__ManagedZone_0_13$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_13$];
    }
    get [_overlayContainerName_0_14$]() {
      if (this[__overlayContainerName_0_14$] == null) {
        this[__overlayContainerName_0_14$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$60 || (const$60 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$61 || (const$61 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$62 || (const$62 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_14$];
    }
    get [_overlayContainerParent_0_15$]() {
      if (this[__overlayContainerParent_0_15$] == null) {
        this[__overlayContainerParent_0_15$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$63 || (const$63 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_8$]), this.injectorGet(const$64 || (const$64 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_8$]), this.injectorGet(const$65 || (const$65 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_15$];
    }
    get [_overlayContainer_0_16$]() {
      if (this[__overlayContainer_0_16$] == null) {
        this[__overlayContainer_0_16$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$66 || (const$66 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_14$]), html.HtmlElement._check(this[_overlayContainerParent_0_15$]), this.injectorGet(const$67 || (const$67 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_14$]), html.HtmlElement._check(this[_overlayContainerParent_0_15$]), this.injectorGet(const$68 || (const$68 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_16$];
    }
    get [_overlaySyncDom_0_17$]() {
      if (this[__overlaySyncDom_0_17$] == null) {
        this[__overlaySyncDom_0_17$] = true;
      }
      return this[__overlaySyncDom_0_17$];
    }
    get [_overlayRepositionLoop_0_18$]() {
      if (this[__overlayRepositionLoop_0_18$] == null) {
        this[__overlayRepositionLoop_0_18$] = true;
      }
      return this[__overlayRepositionLoop_0_18$];
    }
    get [_OverlayStyleConfig_0_19$]() {
      if (this[__OverlayStyleConfig_0_19$] == null) {
        this[__OverlayStyleConfig_0_19$] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_8$]));
      }
      return this[__OverlayStyleConfig_0_19$];
    }
    get [_ZIndexer_0_20$]() {
      if (this[__ZIndexer_0_20$] == null) {
        this[__ZIndexer_0_20$] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_20$];
    }
    get [_OverlayDomRenderService_0_21$]() {
      if (this[__OverlayDomRenderService_0_21$] == null) {
        this[__OverlayDomRenderService_0_21$] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_19$], html.HtmlElement._check(this[_overlayContainer_0_16$]), core$.String._check(this[_overlayContainerName_0_14$]), this[_DomRuler_0_12$], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_10$]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_11$]), this[_overlaySyncDom_0_17$], this[_overlayRepositionLoop_0_18$], this[_ZIndexer_0_20$]);
      }
      return this[__OverlayDomRenderService_0_21$];
    }
    get [_OverlayService_0_22$]() {
      if (this[__OverlayService_0_22$] == null) {
        this[__OverlayService_0_22$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_17$], this[_OverlayDomRenderService_0_21$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_17$], this[_OverlayDomRenderService_0_21$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_22$];
    }
    get [_defaultPopupPositions_0_23$]() {
      if (this[__defaultPopupPositions_0_23$] == null) {
        this[__defaultPopupPositions_0_23$] = const$82 || (const$82 = dart.constList([const$69 || (const$69 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$71 || (const$71 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$70 || (const$70 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$73 || (const$73 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$72 || (const$72 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$75 || (const$75 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$74 || (const$74 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$78 || (const$78 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$76 || (const$76 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$77 || (const$77 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$81 || (const$81 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$79 || (const$79 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$80 || (const$80 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_23$];
    }
    get [_DomPopupSourceFactory_0_24$]() {
      if (this[__DomPopupSourceFactory_0_24$] == null) {
        this[__DomPopupSourceFactory_0_24$] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_12$]);
      }
      return this[__DomPopupSourceFactory_0_24$];
    }
    get [_Clock_0_25$]() {
      if (this[__Clock_0_25$] == null) {
        this[__Clock_0_25$] = const$83 || (const$83 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_25$];
    }
    build() {
      this[_compView_0$0] = new src__game__game_component$46template.ViewGameComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_GameService_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__game__services__game_service.GameService, dart.wrapType(src__game__services__game_service.GameService), dart.fn(() => new src__game__services__game_service.GameService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex))), VoidToGameService())) : new src__game__services__game_service.GameService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_StatisticsService_0_6$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__statistics__services__statistics_service.StatisticsService, dart.wrapType(src__statistics__services__statistics_service.StatisticsService), dart.fn(() => new src__statistics__services__statistics_service.StatisticsService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex))), VoidToStatisticsService())) : new src__statistics__services__statistics_service.StatisticsService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_GameComponent_0_7$] = new src__game__game_component.GameComponent.new(src__game__services__game_service.GameService._check(this[_GameService_0_5$]), src__statistics__services__statistics_service.StatisticsService._check(this[_StatisticsService_0_6$]));
      this[_compView_0$0].create(this[_GameComponent_0_7$], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfGameComponent()).new(0, this, this.rootEl, this[_GameComponent_0_7$]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__game__services__game_service.GameService) && 0 === nodeIndex) {
        return this[_GameService_0_5$];
      }
      if (token === dart.wrapType(src__statistics__services__statistics_service.StatisticsService) && 0 === nodeIndex) {
        return this[_StatisticsService_0_6$];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_8$];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_9$];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_10$];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_11$];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_12$];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_13$];
      }
      if (token === (const$84 || (const$84 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_14$];
      }
      if (token === (const$85 || (const$85 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_15$];
      }
      if (token === (const$86 || (const$86 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_16$];
      }
      if (token === (const$87 || (const$87 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_17$];
      }
      if (token === (const$88 || (const$88 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_18$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_19$];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_20$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_21$];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_22$];
      }
      if (token === (const$89 || (const$89 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_23$];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_24$];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$90 || (const$90 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_25$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__game__game_component$46template._ViewGameComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_GameService_0_5$] = null;
    this[_StatisticsService_0_6$] = null;
    this[_GameComponent_0_7$] = null;
    this[__Document_0_8$] = null;
    this[__Window_0_9$] = null;
    this[__DomService_0_10$] = null;
    this[__AcxImperativeViewUtils_0_11$] = null;
    this[__DomRuler_0_12$] = null;
    this[__ManagedZone_0_13$] = null;
    this[__overlayContainerName_0_14$] = null;
    this[__overlayContainerParent_0_15$] = null;
    this[__overlayContainer_0_16$] = null;
    this[__overlaySyncDom_0_17$] = null;
    this[__overlayRepositionLoop_0_18$] = null;
    this[__OverlayStyleConfig_0_19$] = null;
    this[__ZIndexer_0_20$] = null;
    this[__OverlayDomRenderService_0_21$] = null;
    this[__OverlayService_0_22$] = null;
    this[__defaultPopupPositions_0_23$] = null;
    this[__DomPopupSourceFactory_0_24$] = null;
    this[__Clock_0_25$] = null;
    src__game__game_component$46template._ViewGameComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__game__game_component$46template._ViewGameComponentHost0.prototype;
  dart.addTypeTests(src__game__game_component$46template._ViewGameComponentHost0);
  dart.setMethodSignature(src__game__game_component$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getMethods(src__game__game_component$46template._ViewGameComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__game__game_component.GameComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__game__game_component$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getGetters(src__game__game_component$46template._ViewGameComponentHost0.__proto__),
    [_Document_0_8$]: dart.dynamic,
    [_Window_0_9$]: dart.dynamic,
    [_DomService_0_10$]: dart.dynamic,
    [_AcxImperativeViewUtils_0_11$]: dart.dynamic,
    [_DomRuler_0_12$]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_13$]: dart.dynamic,
    [_overlayContainerName_0_14$]: dart.dynamic,
    [_overlayContainerParent_0_15$]: dart.dynamic,
    [_overlayContainer_0_16$]: dart.dynamic,
    [_overlaySyncDom_0_17$]: core$.bool,
    [_overlayRepositionLoop_0_18$]: core$.bool,
    [_OverlayStyleConfig_0_19$]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_20$]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_21$]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_22$]: dart.dynamic,
    [_defaultPopupPositions_0_23$]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_24$]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_25$]: time$.Clock
  }));
  dart.setFieldSignature(src__game__game_component$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getFields(src__game__game_component$46template._ViewGameComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__game__game_component$46template.ViewGameComponent0),
    [_GameService_0_5$]: dart.fieldType(dart.dynamic),
    [_StatisticsService_0_6$]: dart.fieldType(dart.dynamic),
    [_GameComponent_0_7$]: dart.fieldType(src__game__game_component.GameComponent),
    [__Document_0_8$]: dart.fieldType(dart.dynamic),
    [__Window_0_9$]: dart.fieldType(dart.dynamic),
    [__DomService_0_10$]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_11$]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_12$]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_13$]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_14$]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_15$]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_16$]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_17$]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_18$]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_0_19$]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_20$]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_21$]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_22$]: dart.fieldType(dart.dynamic),
    [__defaultPopupPositions_0_23$]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_24$]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_25$]: dart.fieldType(time$.Clock)
  }));
  src__game__game_component$46template.viewFactory_GameComponentHost0 = function(parentView, parentIndex) {
    return new src__game__game_component$46template._ViewGameComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__game__game_component$46template, {
    /*src__game__game_component$46template._GameComponentNgFactory*/get _GameComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGameComponent()).new("game", dart.fn(src__game__game_component$46template.viewFactory_GameComponentHost0, AppViewAndintToAppViewOfGameComponent())));
    }
  });
  dart.copyProperties(src__game__game_component$46template, {
    get GameComponentNgFactory() {
      return src__game__game_component$46template._GameComponentNgFactory;
    }
  });
  dart.defineLazy(src__game__game_component$46template, {
    /*src__game__game_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__game__game_component$46template.initReflector = function() {
    if (dart.test(src__game__game_component$46template._visited)) {
      return;
    }
    src__game__game_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__game__game_component.GameComponent), src__game__game_component$46template.GameComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    material_tab__fixed_material_tab_strip$46template.initReflector();
    src__game__model__game$46template.initReflector();
    src__game__services__game_service$46template.initReflector();
    src__statistics__model__statistics$46template.initReflector();
    src__statistics__services__statistics_service$46template.initReflector();
    src__statistics__statistics_component$46template.initReflector();
  };
  dart.trackLibraries("packages/magic_eight_ball_frontend/app_component.template.ddc", {
    "package:magic_eight_ball_frontend/app_component.template.dart": app_component$46template,
    "package:magic_eight_ball_frontend/src/game/model/game.template.dart": src__game__model__game$46template,
    "package:magic_eight_ball_frontend/src/game/services/game_service.template.dart": src__game__services__game_service$46template,
    "package:magic_eight_ball_frontend/src/statistics/model/statistics.template.dart": src__statistics__model__statistics$46template,
    "package:magic_eight_ball_frontend/src/statistics/services/statistics_service.template.dart": src__statistics__services__statistics_service$46template,
    "package:magic_eight_ball_frontend/src/statistics/statistics_component.css.shim.dart": src__statistics__statistics_component$46css$46shim,
    "package:magic_eight_ball_frontend/src/statistics/statistics_component.template.dart": src__statistics__statistics_component$46template,
    "package:magic_eight_ball_frontend/src/game/game_component.css.shim.dart": src__game__game_component$46css$46shim,
    "package:magic_eight_ball_frontend/src/game/game_component.template.dart": src__game__game_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/game/model/game.template.dart","src/game/services/game_service.template.dart","src/statistics/model/statistics.template.dart","src/statistics/services/statistics_service.template.dart","src/statistics/statistics_component.css.shim.dart","src/statistics/statistics_component.template.dart","src/game/game_component.css.shim.dart","src/game/game_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__game__model__game$46template: src__game__model__game$46template,
    src__game__services__game_service$46template: src__game__services__game_service$46template,
    src__statistics__model__statistics$46template: src__statistics__model__statistics$46template,
    src__statistics__services__statistics_service$46template: src__statistics__services__statistics_service$46template,
    src__statistics__statistics_component$46css$46shim: src__statistics__statistics_component$46css$46shim,
    src__statistics__statistics_component$46template: src__statistics__statistics_component$46template,
    src__game__game_component$46css$46shim: src__game__game_component$46css$46shim,
    src__game__game_component$46template: src__game__game_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
