define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/content/deferred_content', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_select/shift_click_selection.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/selection_input_adapter.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_dropdown_select$46scss$46css, view_type, change_detection, modules, material_popup, dropdown_button, dropdown_button$, popup_hierarchy, dom_popup_source, reference, material_popup$, ng_zone, overlay_ref, zindexer, alignment, material_dropdown_select, deferred_content, has_disabled, focus_interface, deferred_content_aware, material_dropdown_base, material_list, focus, dom_service, modal, material_list$, material_select_dropdown_item, active_item_directive, active_item_directive$, keyboard_only_focus_indicator, material_select_dropdown_item$, activation_handler, id_generator, selection_container, has_renderer, selection_options, dynamic_component, dynamic_component$, angular, rtl_annotation, deferred_content$, deferred_content_aware$, focus$, keyboard_only_focus_indicator$, has_disabled$, alignment$, popup, activation_handler$, material_select_base, shift_click_selection, button_wrapper, material_dropdown_base$, selection_input_adapter, track_layout_changes, active_item, keyboard_handler_mixin, select, selection_container$, selection_model, selection_options$, has_factory, template_support, css, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_dropdown_select$46scss$46css$46shim = material_dropdown_select$46scss$46css.material_select__material_dropdown_select$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const content__deferred_content = deferred_content.content__deferred_content;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const focus__focus = focus.focus__focus;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const material_list__material_list = material_list$.material_list__material_list;
  const material_select__material_select_dropdown_item$46template = material_select_dropdown_item.material_select__material_select_dropdown_item$46template;
  const model__a11y__active_item_directive = active_item_directive.model__a11y__active_item_directive;
  const model__a11y__active_item_directive$46template = active_item_directive$.model__a11y__active_item_directive$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_select__material_select_dropdown_item = material_select_dropdown_item$.material_select__material_select_dropdown_item;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const material_select__shift_click_selection$46template = shift_click_selection.material_select__shift_click_selection$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const mixins__selection_input_adapter$46template = selection_input_adapter.mixins__selection_input_adapter$46template;
  const mixins__track_layout_changes$46template = track_layout_changes.mixins__track_layout_changes$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_select__material_dropdown_select$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  const $length = dartx.length;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let ViewMaterialSelectDropdownItemComponent0OfString = () => (ViewMaterialSelectDropdownItemComponent0OfString = dart.constFn(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(core.String)))();
  let VoidToActiveItemDirective = () => (VoidToActiveItemDirective = dart.constFn(dart.fnType(model__a11y__active_item_directive.ActiveItemDirective, [])))();
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let MaterialSelectDropdownItemComponentOfString = () => (MaterialSelectDropdownItemComponentOfString = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(core.String)))();
  let VoidToMaterialSelectDropdownItemComponentOfString = () => (VoidToMaterialSelectDropdownItemComponentOfString = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentOfString(), [])))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component__dynamic_component.DynamicComponent, [])))();
  let AppViewAndintToAppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewAndintToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialDropdownSelectComponent = () => (ComponentFactoryOfMaterialDropdownSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_dropdown_select.MaterialDropdownSelectComponent)))();
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent*/get styles$MaterialDropdownSelectComponent() {
      return [material_select__material_dropdown_select$46scss$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _DropdownButtonComponent_0_5 = Symbol('_DropdownButtonComponent_0_5');
  const _Focusable_0_6 = Symbol('_Focusable_0_6');
  const _PopupSourceDirective_0_7 = Symbol('_PopupSourceDirective_0_7');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _appEl_2 = Symbol('_appEl_2');
  const _MaterialPopupComponent_2_8 = Symbol('_MaterialPopupComponent_2_8');
  const __PopupRef_2_10 = Symbol('__PopupRef_2_10');
  const __PopupHierarchy_2_12 = Symbol('__PopupHierarchy_2_12');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _DeferredContentDirective_4_9 = Symbol('_DeferredContentDirective_4_9');
  const _el_5 = Symbol('_el_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_14 = Symbol('_expr_14');
  const _expr_16 = Symbol('_expr_16');
  const _expr_17 = Symbol('_expr_17');
  const _expr_18 = Symbol('_expr_18');
  const _expr_19 = Symbol('_expr_19');
  const _expr_20 = Symbol('_expr_20');
  const _expr_21 = Symbol('_expr_21');
  const _PopupRef_2_10 = Symbol('_PopupRef_2_10');
  const _PopupHierarchy_2_12 = Symbol('_PopupHierarchy_2_12');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _is_ViewMaterialDropdownSelectComponent0_default = Symbol('_is_ViewMaterialDropdownSelectComponent0_default');
  material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class ViewMaterialDropdownSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      get [_PopupRef_2_10]() {
        if (this[__PopupRef_2_10] == null) {
          this[__PopupRef_2_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupRef_2_10];
      }
      get [_PopupHierarchy_2_12]() {
        if (this[__PopupHierarchy_2_12] == null) {
          this[__PopupHierarchy_2_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupHierarchy_2_12];
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        parentRenderNode[$append](this[_el_0]);
        this.createAttr(this[_el_0], "initPopupAriaAttributes", "false");
        this.createAttr(this[_el_0], "popupSource", "");
        this.createAttr(this[_el_0], "popupType", "listbox");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
        this[_Focusable_0_6] = this[_DropdownButtonComponent_0_5];
        this[_PopupSourceDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), this[_Focusable_0_6], "false"), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), this[_Focusable_0_6], "false");
        let _text_1 = html.Text.new(" ");
        this[_compView_0].create(this[_DropdownButtonComponent_0_5], [(() => {
            let _ = [_text_1];
            _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
            return _;
          })()]);
        this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
        this[_el_2] = this[_compView_2].rootEl;
        parentRenderNode[$append](this[_el_2]);
        this.createAttr(this[_el_2], "enforceSpaceConstraints", "");
        this.addShimC(html.HtmlElement._check(this[_el_2]));
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
        this[_MaterialPopupComponent_2_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_2].ref, this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(this[_el_2]));
        let doc = html.document;
        this[_el_3] = html.DivElement._check(doc[$createElement]("div"));
        this.createAttr(this[_el_3], "header", "");
        this.addShimC(this[_el_3]);
        this.project(this[_el_3], 1);
        let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
        let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_DeferredContentDirective_4_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_2_8]);
        this[_el_5] = html.DivElement._check(doc[$createElement]("div"));
        this.createAttr(this[_el_5], "footer", "");
        this.addShimC(this[_el_5]);
        this.project(this[_el_5], 5);
        this[_compView_2].create(this[_MaterialPopupComponent_2_8], [JSArrayOfDivElement().of([this[_el_3]]), JSArrayOfViewContainer().of([this[_appEl_4]]), JSArrayOfDivElement().of([this[_el_5]])]);
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
        let subscription_0 = this[_DropdownButtonComponent_0_5].onFocus.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onFocus')));
        let subscription_1 = this[_DropdownButtonComponent_0_5].onBlur.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(this.ctx, 'onBlur')));
        let subscription_2 = this[_DropdownButtonComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'handleClick')));
        let subscription_3 = this[_MaterialPopupComponent_2_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this.ctx, 'onVisible')));
        this[_el_3][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
        this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
        this[_el_3][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
        this[_el_5][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
        this[_el_5][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
        this[_el_5][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
        this.ctx.dropdownButton = this[_DropdownButtonComponent_0_5];
        this.init(const$3 || (const$3 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
          return this[_DropdownButtonComponent_0_5];
        }
        if (token === dart.wrapType(focus__focus_interface.Focusable) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
          return this[_Focusable_0_6];
        }
        if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
          return this[_MaterialPopupComponent_2_8];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
          return this[_PopupRef_2_10];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
          return this[_PopupHierarchy_2_12];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_source = this[_PopupSourceDirective_0_7];
        changed = false;
        if (firstCheck) {
          this[_DropdownButtonComponent_0_5].popupType = "listbox";
          changed = true;
          if (!(_ctx.buttonAriaRole == null)) {
            this[_DropdownButtonComponent_0_5].role = _ctx.buttonAriaRole;
            changed = true;
          }
        }
        let currVal_0 = _ctx.buttonText;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DropdownButtonComponent_0_5].buttonText = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.buttonAriaLabel;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DropdownButtonComponent_0_5].buttonAriaLabel = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DropdownButtonComponent_0_5].disabled = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.icon;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_DropdownButtonComponent_0_5].icon = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.iconName;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_DropdownButtonComponent_0_5].iconName = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.raised;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_DropdownButtonComponent_0_5].raised = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        let currVal_7 = _ctx.error;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_DropdownButtonComponent_0_5].error = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = dart.test(_ctx.visible) ? _ctx.listId : null;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_DropdownButtonComponent_0_5].ariaOwns = currVal_8;
          changed = true;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.visible;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_DropdownButtonComponent_0_5].ariaExpanded = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        let currVal_11 = _ctx.buttonAriaLabelledBy;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          this[_DropdownButtonComponent_0_5].ariaLabelledBy = currVal_11;
          changed = true;
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = _ctx.showButtonBorder;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this[_DropdownButtonComponent_0_5].showButtonBorder = currVal_12;
          changed = true;
          this[_expr_12] = currVal_12;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_DropdownButtonComponent_0_5].ngOnInit();
        }
        if (firstCheck) {
          this[_MaterialPopupComponent_2_8].enforceSpaceConstraints = true;
        }
        let currVal_14 = _ctx.autoDismiss;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
          this[_MaterialPopupComponent_2_8].autoDismiss = currVal_14;
          this[_expr_14] = currVal_14;
        }
        let currVal_16 = _ctx.popupMatchInputWidth;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
          this[_MaterialPopupComponent_2_8].matchMinSourceWidth = currVal_16;
          this[_expr_16] = currVal_16;
        }
        let currVal_17 = _ctx.preferredPositions;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
          this[_MaterialPopupComponent_2_8].preferredPositions = currVal_17;
          this[_expr_17] = currVal_17;
        }
        let currVal_18 = local_source;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
          this[_MaterialPopupComponent_2_8].source = currVal_18;
          this[_expr_18] = currVal_18;
        }
        let currVal_19 = _ctx.trackLayoutChanges;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
          this[_MaterialPopupComponent_2_8].trackLayoutChanges = currVal_19;
          this[_expr_19] = currVal_19;
        }
        let currVal_20 = _ctx.visible;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
          this[_MaterialPopupComponent_2_8].visible = currVal_20;
          this[_expr_20] = currVal_20;
        }
        let currVal_21 = _ctx.slide;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
          this[_MaterialPopupComponent_2_8].slide = currVal_21;
          this[_expr_21] = currVal_21;
        }
        if (firstCheck) {
          this[_DeferredContentDirective_4_9].preserveDimensions = true;
        }
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        if (firstCheck) {
          if (!(_ctx.popupClassName == null)) {
            this[_compView_2].updateChildClass(this[_el_2], _ctx.popupClassName);
          }
        }
        this[_compView_2].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        this[_compView_2].detectChanges();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_PopupSourceDirective_0_7].ngAfterViewInit();
            this[_MaterialPopupComponent_2_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        let t = this[_appEl_2];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_4];
        t$ == null ? null : t$.destroyNestedViews();
        let t$0 = this[_compView_0];
        t$0 == null ? null : t$0.destroy();
        let t$1 = this[_compView_2];
        t$1 == null ? null : t$1.destroy();
        this[_PopupSourceDirective_0_7].ngOnDestroy();
        this[_DeferredContentDirective_4_9].ngOnDestroy();
        this[_MaterialPopupComponent_2_8].ngOnDestroy();
      }
    }
    (ViewMaterialDropdownSelectComponent0.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_DropdownButtonComponent_0_5] = null;
      this[_Focusable_0_6] = null;
      this[_PopupSourceDirective_0_7] = null;
      this[_el_2] = null;
      this[_compView_2] = null;
      this[_appEl_2] = null;
      this[_MaterialPopupComponent_2_8] = null;
      this[__PopupRef_2_10] = null;
      this[__PopupHierarchy_2_12] = null;
      this[_el_3] = null;
      this[_appEl_4] = null;
      this[_DeferredContentDirective_4_9] = null;
      this[_el_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_11] = null;
      this[_expr_12] = null;
      this[_expr_14] = null;
      this[_expr_16] = null;
      this[_expr_17] = null;
      this[_expr_18] = null;
      this[_expr_19] = null;
      this[_expr_20] = null;
      this[_expr_21] = null;
      ViewMaterialDropdownSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-dropdown-select"));
      let t = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
      t == null ? material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_dropdown_select.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponent) : t;
      this.setupComponentType(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType);
    }).prototype = ViewMaterialDropdownSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialDropdownSelectComponent0);
    ViewMaterialDropdownSelectComponent0.prototype[_is_ViewMaterialDropdownSelectComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialDropdownSelectComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialDropdownSelectComponent0.__proto__),
      [_PopupRef_2_10]: dart.dynamic,
      [_PopupHierarchy_2_12]: dart.dynamic
    }));
    dart.setFieldSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialDropdownSelectComponent0.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
      [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
      [_Focusable_0_6]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
      [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
      [_el_2]: dart.fieldType(html.Element),
      [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
      [__PopupRef_2_10]: dart.fieldType(dart.dynamic),
      [__PopupHierarchy_2_12]: dart.fieldType(dart.dynamic),
      [_el_3]: dart.fieldType(html.DivElement),
      [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DeferredContentDirective_4_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
      [_el_5]: dart.fieldType(html.DivElement),
      [_expr_0]: dart.fieldType(core.String),
      [_expr_1]: dart.fieldType(core.String),
      [_expr_2]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(core.String),
      [_expr_5]: dart.fieldType(core.bool),
      [_expr_7]: dart.fieldType(core.String),
      [_expr_8]: dart.fieldType(core.String),
      [_expr_9]: dart.fieldType(core.bool),
      [_expr_11]: dart.fieldType(core.String),
      [_expr_12]: dart.fieldType(core.bool),
      [_expr_14]: dart.fieldType(core.bool),
      [_expr_16]: dart.fieldType(core.bool),
      [_expr_17]: dart.fieldType(dart.dynamic),
      [_expr_18]: dart.fieldType(dart.dynamic),
      [_expr_19]: dart.fieldType(core.bool),
      [_expr_20]: dart.fieldType(core.bool),
      [_expr_21]: dart.fieldType(core.String)
    }));
    return ViewMaterialDropdownSelectComponent0;
  });
  material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0 = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$();
  dart.defineLazy(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, {
    /*material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  dart.addTypeTests(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, _is_ViewMaterialDropdownSelectComponent0_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent0 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(T)).new(parentView, parentIndex);
  };
  const _AutoFocusDirective_0_5 = Symbol('_AutoFocusDirective_0_5');
  const _MaterialListComponent_0_6 = Symbol('_MaterialListComponent_0_6');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _handle_mouseout_0_3 = Symbol('_handle_mouseout_0_3');
  const _is__ViewMaterialDropdownSelectComponent1_default = Symbol('_is__ViewMaterialDropdownSelectComponent1_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialDropdownSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this[_el_0].className = "options-list";
        this.createAttr(this[_el_0], "role", "listbox");
        this[_el_0].tabIndex = 0;
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_AutoFocusDirective_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView)[_PopupRef_2_10])), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView)[_PopupRef_2_10]));
        this[_MaterialListComponent_0_6] = new material_list__material_list.MaterialListComponent.new();
        let _text_1 = html.Text.new(" ");
        let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this[_compView_0].create(this[_MaterialListComponent_0_6], [(() => {
            let _ = [this.projectableNodes[$_get](2)];
            _[$addAll]([_text_1]);
            _[$addAll](core.Iterable._check(this.projectableNodes[$_get](3)));
            _[$addAll]([this[_appEl_2]]);
            _[$addAll](core.Iterable._check(this.projectableNodes[$_get](4)));
            return _;
          })()]);
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyDown')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyPress')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
        this[_el_0][$addEventListener]("mouseout", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseout_0_3)));
        this.init0(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let currVal_2 = _ctx.listAutoFocus;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_AutoFocusDirective_0_5].ngOnInit();
        }
        changed = false;
        let currVal_3 = _ctx.width;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialListComponent_0_6].width = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_2_9].ngIf = _ctx.options != null;
        this[_appEl_2].detectChangesInNestedViews();
        if (firstCheck) {
          if (!(_ctx.listId == null)) {
            this.setAttr(this[_el_0], "id", _ctx.listId);
          }
        }
        let currVal_1 = _ctx.ariaActiveDescendant;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this.setAttr(this[_el_0], "aria-activedescendant", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_appEl_2];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_compView_0];
        t$ == null ? null : t$.destroy();
        this[_AutoFocusDirective_0_5].ngOnDestroy();
      }
      [_handle_mouseout_0_3]($event) {
        this.ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialDropdownSelectComponent1.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_AutoFocusDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      _ViewMaterialDropdownSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent1);
    _ViewMaterialDropdownSelectComponent1.prototype[_is__ViewMaterialDropdownSelectComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_mouseout_0_3]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent1.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
      [_AutoFocusDirective_0_5]: dart.fieldType(focus__focus.AutoFocusDirective),
      [_MaterialListComponent_0_6]: dart.fieldType(material_list__material_list.MaterialListComponent),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent1;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, _is__ViewMaterialDropdownSelectComponent1_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$(T)).new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _is__ViewMaterialDropdownSelectComponent2_default = Symbol('_is__ViewMaterialDropdownSelectComponent2_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialDropdownSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        _el_0.className = "options-wrapper";
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        _el_0[$append](_anchor_1);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
        _el_0[$append](_anchor_2);
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
        this.init0(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        this[_NgIf_1_9].ngIf = _ctx.showDeselectItem;
        if (firstCheck) {
          if (!(_ctx.trackByIndexFn == null)) {
            this[_NgFor_2_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
          }
        }
        let currVal_1 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_NgFor_2_9].ngForOf = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_2_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_1];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_2];
        t$ == null ? null : t$.destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgFor_2_9] = null;
      this[_expr_1] = null;
      _ViewMaterialDropdownSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent2);
    _ViewMaterialDropdownSelectComponent2.prototype[_is__ViewMaterialDropdownSelectComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent2;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, _is__ViewMaterialDropdownSelectComponent2_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$(T)).new(parentView, parentIndex);
  };
  const _ActiveItemDirective_0_5 = Symbol('_ActiveItemDirective_0_5');
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_6');
  const _MaterialSelectDropdownItemComponent_0_7 = Symbol('_MaterialSelectDropdownItemComponent_0_7');
  let const$4;
  const _handle_mouseenter_0_1 = Symbol('_handle_mouseenter_0_1');
  const _is__ViewMaterialDropdownSelectComponent3_default = Symbol('_is__ViewMaterialDropdownSelectComponent3_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfString()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(model__a11y__active_item_directive.ActiveItemDirective, dart.wrapType(model__a11y__active_item_directive.ActiveItemDirective), dart.fn(() => new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirective())) : new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.viewData.parentIndex)));
        this[_MaterialSelectDropdownItemComponent_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectDropdownItemComponentOfString(), dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), dart.fn(() => new (MaterialSelectDropdownItemComponentOfString()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref), VoidToMaterialSelectDropdownItemComponentOfString())) : new (MaterialSelectDropdownItemComponentOfString()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_7], [const$4 || (const$4 = dart.constList([], dart.dynamic))]);
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_1)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
        this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
        let subscription_0 = this[_MaterialSelectDropdownItemComponent_0_7].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'deselectCurrentSelection')));
        this.init([this[_el_0]], [subscription_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_7];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_popup = src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let currVal_1 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(_ctx.deselectLabel));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_7].tabbable = false;
        }
        let currVal_3 = _ctx.deselectLabel;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectDropdownItemComponent_0_7].value = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.isDeselectItemSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectDropdownItemComponent_0_7].selected = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectDropdownItemComponent_0_7].id = currVal_5;
          this[_expr_5] = currVal_5;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_7].ngOnInit();
        }
        let currVal_0 = _ctx.options.optionGroups[$length] === 1;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this.updateElemClass(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_7].ngOnDestroy();
      }
      [_handle_mouseenter_0_1]($event) {
        this.ctx.activeModel.activate(this.ctx.deselectLabel);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent3.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_MaterialSelectDropdownItemComponent_0_7] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      _ViewMaterialDropdownSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent3);
    _ViewMaterialDropdownSelectComponent3.prototype[_is__ViewMaterialDropdownSelectComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_mouseenter_0_1]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent3.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(ViewMaterialSelectDropdownItemComponent0OfString()),
      [_ActiveItemDirective_0_5]: dart.fieldType(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_MaterialSelectDropdownItemComponent_0_7]: dart.fieldType(MaterialSelectDropdownItemComponentOfString()),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(core.String)
    }));
    return _ViewMaterialDropdownSelectComponent3;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, _is__ViewMaterialDropdownSelectComponent3_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialDropdownSelectComponent4_default = Symbol('_is__ViewMaterialDropdownSelectComponent4_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialDropdownSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        this.createAttr(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        this[_el_0][$append](_anchor_1);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init0(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = dart.test(local_group.isNotEmpty) || dart.test(local_group.hasEmptyLabel);
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = dart.test(local_group.isEmpty) && !dart.test(local_group.hasEmptyLabel);
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
    (_ViewMaterialDropdownSelectComponent4.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent4);
    _ViewMaterialDropdownSelectComponent4.prototype[_is__ViewMaterialDropdownSelectComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent4.__proto__),
      [_el_0]: dart.fieldType(html.DivElement),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialDropdownSelectComponent4;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, _is__ViewMaterialDropdownSelectComponent4_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$(T)).new(parentView, parentIndex);
  };
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _is__ViewMaterialDropdownSelectComponent5_default = Symbol('_is__ViewMaterialDropdownSelectComponent5_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialDropdownSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
        let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this.init([this[_appEl_0], this[_appEl_1], this[_appEl_2], this[_appEl_3]], null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = dart.test(local_group.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
        this[_NgIf_1_9].ngIf = _ctx.hasCustomLabelRenderer;
        this[_NgIf_2_9].ngIf = local_group.isNotEmpty;
        this[_NgIf_3_9].ngIf = dart.test(local_group.isEmpty) && dart.test(local_group.hasEmptyLabel);
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_1];
        t$ == null ? null : t$.destroyNestedViews();
        let t$0 = this[_appEl_2];
        t$0 == null ? null : t$0.destroyNestedViews();
        let t$1 = this[_appEl_3];
        t$1 == null ? null : t$1.destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent5.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      _ViewMaterialDropdownSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent5);
    _ViewMaterialDropdownSelectComponent5.prototype[_is__ViewMaterialDropdownSelectComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent5.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialDropdownSelectComponent5;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, _is__ViewMaterialDropdownSelectComponent5_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$(T)).new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  const _is__ViewMaterialDropdownSelectComponent6_default = Symbol('_is__ViewMaterialDropdownSelectComponent6_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent6 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
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
    (_ViewMaterialDropdownSelectComponent6.new = function(parentView, parentIndex) {
      this[_text_1] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent6.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent6);
    _ViewMaterialDropdownSelectComponent6.prototype[_is__ViewMaterialDropdownSelectComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent6.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent6.__proto__),
      [_text_1]: dart.fieldType(html.Text),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent6;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, _is__ViewMaterialDropdownSelectComponent6_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$(T)).new(parentView, parentIndex);
  };
  const _DynamicComponent_0_8 = Symbol('_DynamicComponent_0_8');
  const _is__ViewMaterialDropdownSelectComponent7_default = Symbol('_is__ViewMaterialDropdownSelectComponent7_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent7 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
        this[_DynamicComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0].ref, this[_appEl_0]);
        this[_compView_0].create(this[_DynamicComponent_0_8], []);
        this.init0(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.labelFactory(local_group);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].value = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
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
    (_ViewMaterialDropdownSelectComponent7.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialDropdownSelectComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent7.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent7);
    _ViewMaterialDropdownSelectComponent7.prototype[_is__ViewMaterialDropdownSelectComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent7.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent7.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent7;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, _is__ViewMaterialDropdownSelectComponent7_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$(T)).new(parentView, parentIndex);
  };
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _is__ViewMaterialDropdownSelectComponent8_default = Symbol('_is__ViewMaterialDropdownSelectComponent8_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$ = dart.generic(T => {
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let AppViewOfMaterialDropdownSelectComponentOfT = () => (AppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialDropdownSelectComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialDropdownSelectComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class _ViewMaterialDropdownSelectComponent8 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialDropdownSelectComponentOfT()));
        this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init0(this[_appEl_0]);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.parentView.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent8.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent8);
    _ViewMaterialDropdownSelectComponent8.prototype[_is__ViewMaterialDropdownSelectComponent8_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent8.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent8.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent8;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, _is__ViewMaterialDropdownSelectComponent8_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$(T)).new(parentView, parentIndex);
  };
  const _expr_6 = Symbol('_expr_6');
  const _expr_10 = Symbol('_expr_10');
  let const$5;
  const _handle_mouseenter_0_0 = Symbol('_handle_mouseenter_0_0');
  const _is__ViewMaterialDropdownSelectComponent9_default = Symbol('_is__ViewMaterialDropdownSelectComponent9_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$ = dart.generic(T => {
    let ViewMaterialSelectDropdownItemComponent0OfT = () => (ViewMaterialSelectDropdownItemComponent0OfT = dart.constFn(material_select__material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(T)))();
    let MaterialSelectDropdownItemComponentOfT = () => (MaterialSelectDropdownItemComponentOfT = dart.constFn(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent$(T)))();
    let VoidToMaterialSelectDropdownItemComponentOfT = () => (VoidToMaterialSelectDropdownItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentOfT(), [])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialDropdownSelectComponent9 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfT()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(model__a11y__active_item_directive.ActiveItemDirective, dart.wrapType(model__a11y__active_item_directive.ActiveItemDirective), dart.fn(() => new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirective())) : new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
        this[_MaterialSelectDropdownItemComponent_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectDropdownItemComponentOfT(), dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), dart.fn(() => new (MaterialSelectDropdownItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref), VoidToMaterialSelectDropdownItemComponentOfT())) : new (MaterialSelectDropdownItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_7], [const$5 || (const$5 = dart.constList([], dart.dynamic))]);
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_0)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
        this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'hideOutline')));
        this.init0(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_7];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_popup = src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let local_item = this.locals[$_get]("$implicit");
        let currVal_0 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(local_item));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_7].tabbable = false;
        }
        let currVal_1 = _ctx.isOptionDisabled(T._check(local_item));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectDropdownItemComponent_0_7].disabled = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_3 = _ctx.componentRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectDropdownItemComponent_0_7].componentRenderer = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.factoryRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectDropdownItemComponent_0_7].factoryRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.isOptionHidden(T._check(local_item));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectDropdownItemComponent_0_7].isHidden = currVal_5;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = local_item;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this[_MaterialSelectDropdownItemComponent_0_7].value = T._check(currVal_6);
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_MaterialSelectDropdownItemComponent_0_7].itemRenderer = currVal_7;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.deselectOnActivate;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_MaterialSelectDropdownItemComponent_0_7].deselectOnActivate = currVal_8;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.selection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialSelectDropdownItemComponent_0_7].selection = currVal_9;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.activeModel.id(local_item);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          this[_MaterialSelectDropdownItemComponent_0_7].id = currVal_10;
          this[_expr_10] = currVal_10;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_7].ngOnInit();
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_7].ngOnDestroy();
      }
      [_handle_mouseenter_0_0]($event) {
        let local_item = this.locals[$_get]("$implicit");
        this.ctx.activeModel.activate(local_item);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent9.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_MaterialSelectDropdownItemComponent_0_7] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      _ViewMaterialDropdownSelectComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent9.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent9);
    _ViewMaterialDropdownSelectComponent9.prototype[_is__ViewMaterialDropdownSelectComponent9_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent9.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent9.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(ViewMaterialSelectDropdownItemComponent0OfT()),
      [_ActiveItemDirective_0_5]: dart.fieldType(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_MaterialSelectDropdownItemComponent_0_7]: dart.fieldType(MaterialSelectDropdownItemComponentOfT()),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic),
      [_expr_8]: dart.fieldType(core.bool),
      [_expr_9]: dart.fieldType(dart.dynamic),
      [_expr_10]: dart.fieldType(core.String)
    }));
    return _ViewMaterialDropdownSelectComponent9;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, _is__ViewMaterialDropdownSelectComponent9_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$(T)).new(parentView, parentIndex);
  };
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = Symbol('_KeyboardOnlyFocusIndicatorDirective_0_5');
  const _MaterialSelectDropdownItemComponent_0_6 = Symbol('_MaterialSelectDropdownItemComponent_0_6');
  let const$6;
  const _is__ViewMaterialDropdownSelectComponent10_default = Symbol('_is__ViewMaterialDropdownSelectComponent10_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent10 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfString()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.createAttr(this[_el_0], "keyboardOnlyFocusIndicator", "");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectDropdownItemComponentOfString(), dart.wrapType(material_select__material_select_dropdown_item.MaterialSelectDropdownItemComponent), dart.fn(() => new (MaterialSelectDropdownItemComponentOfString()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref), VoidToMaterialSelectDropdownItemComponentOfString())) : new (MaterialSelectDropdownItemComponentOfString()).new(html.HtmlElement._check(this[_el_0]), null, src__runtime__optimizations.unsafeCast(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0].ref);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], [const$6 || (const$6 = dart.constList([], dart.dynamic))]);
        this[_el_0][$addEventListener]("keyup", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
        this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'hideOutline')));
        this.init0(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.parentView.parentView.locals[$_get]("$implicit"));
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_6].disabled = true;
          this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
        }
        let currVal_2 = local_group.emptyLabel;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_6].ngOnInit();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponent10.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_compView_0] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_2] = null;
      _ViewMaterialDropdownSelectComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._renderType;
    }).prototype = _ViewMaterialDropdownSelectComponent10.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent10);
    _ViewMaterialDropdownSelectComponent10.prototype[_is__ViewMaterialDropdownSelectComponent10_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent10.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent10.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_compView_0]: dart.fieldType(ViewMaterialSelectDropdownItemComponent0OfString()),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(MaterialSelectDropdownItemComponentOfString()),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent10;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, _is__ViewMaterialDropdownSelectComponent10_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template.styles$MaterialDropdownSelectComponentHost*/get styles$MaterialDropdownSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDropdownSelectComponent_0_5 = Symbol('_MaterialDropdownSelectComponent_0_5');
  let const$7;
  let const$8;
  const _is__ViewMaterialDropdownSelectComponentHost0_default = Symbol('_is__ViewMaterialDropdownSelectComponentHost0_default');
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$ = dart.generic(T => {
    let ViewMaterialDropdownSelectComponent0OfT = () => (ViewMaterialDropdownSelectComponent0OfT = dart.constFn(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(T)))();
    let MaterialDropdownSelectComponentOfT = () => (MaterialDropdownSelectComponentOfT = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)))();
    let VoidToMaterialDropdownSelectComponentOfT = () => (VoidToMaterialDropdownSelectComponentOfT = dart.constFn(dart.fnType(MaterialDropdownSelectComponentOfT(), [])))();
    let ComponentRefOfMaterialDropdownSelectComponentOfT = () => (ComponentRefOfMaterialDropdownSelectComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialDropdownSelectComponentOfT())))();
    class _ViewMaterialDropdownSelectComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialDropdownSelectComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialDropdownSelectComponentOfT(), dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent), dart.fn(() => new (MaterialDropdownSelectComponentOfT()).new(utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), core.bool._check(this.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)), null, null, this.rootEl), VoidToMaterialDropdownSelectComponentOfT())) : new (MaterialDropdownSelectComponentOfT()).new(utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), core.bool._check(this.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex, null)), null, null, this.rootEl);
        this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], this.projectableNodes);
        this.init0(this.rootEl);
        return new (ComponentRefOfMaterialDropdownSelectComponentOfT()).new(0, this, this.rootEl, this[_MaterialDropdownSelectComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider) || token === dart.wrapType(material_select__activation_handler.ActivationHandler)) && 0 === nodeIndex) {
          return this[_MaterialDropdownSelectComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let changes = null;
        changes = null;
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
        this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialDropdownSelectComponent_0_5] = null;
      _ViewMaterialDropdownSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialDropdownSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponentHost0);
    _ViewMaterialDropdownSelectComponentHost0.prototype[_is__ViewMaterialDropdownSelectComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialDropdownSelectComponent0OfT()),
      [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(MaterialDropdownSelectComponentOfT())
    }));
    return _ViewMaterialDropdownSelectComponentHost0;
  });
  material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0 = material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$();
  dart.addTypeTests(material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, _is__ViewMaterialDropdownSelectComponentHost0_default);
  material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_select__material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory*/get _MaterialDropdownSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDropdownSelectComponent()).new("material-dropdown-select", dart.gbind(dart.fn(material_select__material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, AppViewAndintToAppViewOfMaterialDropdownSelectComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_select__material_dropdown_select$46template, {
    get MaterialDropdownSelectComponentNgFactory() {
      return material_select__material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_dropdown_select$46template, {
    /*material_select__material_dropdown_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_dropdown_select$46template.initReflector = function() {
    if (dart.test(material_select__material_dropdown_select$46template._visited)) {
      return;
    }
    material_select__material_dropdown_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent), material_select__material_dropdown_select$46template.MaterialDropdownSelectComponentNgFactory);
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_dropdown_item$46template.initReflector();
    material_select__shift_click_selection$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    mixins__selection_input_adapter$46template.initReflector();
    mixins__track_layout_changes$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__a11y__active_item_directive$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.template.ddc", {
    "package:angular_components/material_select/material_dropdown_select.template.dart": material_select__material_dropdown_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.template.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select$46template: material_select__material_dropdown_select$46template
  };
});

//# sourceMappingURL=material_dropdown_select.template.ddc.js.map
