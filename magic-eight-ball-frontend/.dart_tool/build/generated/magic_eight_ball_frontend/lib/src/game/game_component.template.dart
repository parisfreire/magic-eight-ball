// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'game_component.dart';
export 'game_component.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_tab/fixed_material_tab_strip.dart';
import 'package:magic_eight_ball_frontend/src/game/model/game.dart';
import 'package:magic_eight_ball_frontend/src/game/services/game_service.dart';
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';
import 'package:magic_eight_ball_frontend/src/statistics/services/statistics_service.dart';
import 'package:magic_eight_ball_frontend/src/statistics/statistics_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/material_tab/fixed_material_tab_strip.template.dart' as _ref2;
import 'package:magic_eight_ball_frontend/src/game/model/game.template.dart' as _ref3;
import 'package:magic_eight_ball_frontend/src/game/services/game_service.template.dart' as _ref4;
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.template.dart' as _ref5;
import 'package:magic_eight_ball_frontend/src/statistics/services/statistics_service.template.dart' as _ref6;
import 'package:magic_eight_ball_frontend/src/statistics/statistics_component.template.dart' as _ref7;
import 'package:magic_eight_ball_frontend/src/game/game_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'game_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_tab/fixed_material_tab_strip.template.dart' as import4;
import 'package:angular_components/material_tab/fixed_material_tab_strip.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/material_input/material_input.template.dart' as import17;
import 'package:angular_components/material_input/deferred_validator.dart' as import18;
import 'package:angular_forms/src/directives/ng_model.dart' as import19;
import 'package:angular_components/material_input/material_input.dart' as import20;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import21;
import 'package:angular_components/material_button/material_button.template.dart' as import22;
import 'package:angular_components/material_button/material_button.dart' as import23;
import 'package:angular_components/theme/dark_theme.dart' as import24;
import 'package:angular_forms/src/directives/ng_control.dart' as import25;
import 'package:angular_components/utils/angular/reference/reference.dart' as import26;
import 'package:angular_components/focus/focus_interface.dart' as import27;
import 'package:angular_components/interfaces/has_disabled.dart' as import28;
import 'package:angular_components/material_input/base_material_input.dart' as import29;
import 'package:angular_components/button_decorator/button_decorator.dart' as import30;
import '../statistics/statistics_component.template.dart' as import31;
import '../statistics/statistics_component.dart' as import32;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import33;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import34;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import35;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import36;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import38;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import39;
import 'package:quiver/time.dart' as import40;
import 'package:angular_components/utils/browser/window/module.dart' as import41;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import42;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import43;
import 'package:angular_components/utils/disposer/disposer.dart' as import44;
import 'package:angular/src/core/zone/ng_zone.dart' as import45;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import46;
import 'package:angular/src/core/linker/component_loader.dart' as import47;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import48;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import49;
import 'package:angular_components/laminate/overlay/module.dart' as import50;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import51;
import 'services/game_service.dart' as import52;
import 'package:http/src/client.dart' as import53;
import '../statistics/services/statistics_service.dart' as import54;
import 'package:angular_components/laminate/enums/alignment.dart' as import55;

final List<dynamic> styles$GameComponent = [import0.styles];

class ViewGameComponent0 extends AppView<import2.GameComponent> {
  import3.Element _el_0;
  import4.ViewFixedMaterialTabStripComponent0 _compView_0;
  import5.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  static RenderComponentType _renderType;
  ViewGameComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('game');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:magic_eight_ball_frontend/lib/src/game/game_component.dart' : null), ViewEncapsulation.Emulated, styles$GameComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.GameComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewFixedMaterialTabStripComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'label', '');
    addShimC(_el_0);
    _FixedMaterialTabStripComponent_0_5 = (import12.isDevMode
        ? import14.debugInjectorWrap(import5.FixedMaterialTabStripComponent, () {
            return import5.FixedMaterialTabStripComponent(_compView_0.ref, parentView.injectorGet(const import15.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null));
          })
        : import5.FixedMaterialTabStripComponent(_compView_0.ref, parentView.injectorGet(const import15.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null)));
    _compView_0.create(_FixedMaterialTabStripComponent_0_5, []);
    var doc = import3.document;
    final _el_1 = createAndAppend(doc, 'br', parentRenderNode);
    addShimE(_el_1);
    final _text_2 = import3.Text(' ');
    parentRenderNode.append(_text_2);
    final _anchor_3 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_3);
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_GameComponent1);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_GameComponent4);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final subscription_0 = _FixedMaterialTabStripComponent_0_5.tabChange.listen(eventHandler1(ctx.onTabChange));
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.tabLabels, null)) {
        _FixedMaterialTabStripComponent_0_5.tabLabels = _ctx.tabLabels;
        changed = true;
      }
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_3_9.ngIf = (_ctx.tabIndex == 0);
    _NgIf_4_9.ngIf = (_ctx.tabIndex == 1);
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _compView_0?.destroy();
  }
}

AppView<import2.GameComponent> viewFactory_GameComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewGameComponent0(parentView, parentIndex);
}

class _ViewGameComponent1 extends AppView<import2.GameComponent> {
  import3.Element _el_1;
  import17.ViewMaterialInputComponent0 _compView_1;
  import18.DeferredValidator _DeferredValidator_1_5;
  List<dynamic> _NgValidators_1_6;
  import19.NgModel _NgModel_1_7;
  import19.NgModel _NgControl_1_8;
  import20.MaterialInputComponent _MaterialInputComponent_1_9;
  import20.MaterialInputComponent _BaseMaterialInput_1_10;
  import21.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_1_11;
  import3.Comment _anchor_5;
  import3.Element _el_5_0;
  import3.Text _text_5_1;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import3.Element _el_8;
  import22.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_8_6;
  bool _expr_3 = false;
  _ViewGameComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewGameComponent0._renderType;
  }
  @override
  ComponentRef<import2.GameComponent> build() {
    var doc = import3.document;
    final _el_0 = doc.createElement('section');
    addShimE(_el_0);
    _compView_1 = import17.ViewMaterialInputComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'floatingLabel', '');
    createAttr(_el_1, 'label', 'Introduce your question');
    createAttr(_el_1, 'type', 'text');
    addShimC(_el_1);
    _DeferredValidator_1_5 = import18.DeferredValidator();
    _NgValidators_1_6 = [_DeferredValidator_1_5];
    _NgModel_1_7 = import19.NgModel(_NgValidators_1_6, null);
    _NgControl_1_8 = _NgModel_1_7;
    _MaterialInputComponent_1_9 = import20.MaterialInputComponent('text', null, null, _NgControl_1_8, _compView_1.ref, _DeferredValidator_1_5);
    _BaseMaterialInput_1_10 = _MaterialInputComponent_1_9;
    _MaterialInputDefaultValueAccessor_1_11 = import21.MaterialInputDefaultValueAccessor(_BaseMaterialInput_1_10, _NgControl_1_8);
    _compView_1.create(_MaterialInputComponent_1_9, [const [], const []]);
    final _el_2 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_2);
    final _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'eight-ball';
    addShimC(_el_3);
    final _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'answer';
    addShimC(_el_4);
    _anchor_5 = createViewContainerAnchor();
    _el_4.append(_anchor_5);
    final _anchor_6 = createViewContainerAnchor();
    _el_4.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 4, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_GameComponent3);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _el_7 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_7);
    _compView_8 = import22.ViewMaterialButtonComponent0(this, 8);
    _el_8 = _compView_8.rootEl;
    _el_0.append(_el_8);
    createAttr(_el_8, 'id', 'submitButton');
    createAttr(_el_8, 'raised', '');
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import12.isDevMode
        ? import14.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGet(const import15.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(parentView.injectorGet(const import15.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_8_6 = import23.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8.ref, null);
    final _text_9 = import3.Text('Submit');
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_text_9]
    ]);
    final subscription_0 = _NgModel_1_7.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    _el_8.addEventListener('click', eventHandler0(ctx.submitQuestion));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.DeferredValidator) && (1 == nodeIndex))) {
      return _DeferredValidator_1_5;
    }
    if ((identical(token, const import15.MultiToken<dynamic>('NgValidators')) && (1 == nodeIndex))) {
      return _NgValidators_1_6;
    }
    if ((identical(token, import19.NgModel) && (1 == nodeIndex))) {
      return _NgModel_1_7;
    }
    if ((identical(token, import25.NgControl) && (1 == nodeIndex))) {
      return _NgControl_1_8;
    }
    if (((((identical(token, import20.MaterialInputComponent) || identical(token, import26.ReferenceDirective)) || identical(token, import27.Focusable)) || identical(token, import28.HasDisabled)) && (1 == nodeIndex))) {
      return _MaterialInputComponent_1_9;
    }
    if ((identical(token, import29.BaseMaterialInput) && (1 == nodeIndex))) {
      return _BaseMaterialInput_1_10;
    }
    if ((identical(token, import21.MaterialInputDefaultValueAccessor) && (1 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_1_11;
    }
    if ((identical(token, import24.AcxDarkTheme) && ((8 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _AcxDarkTheme_8_5;
    }
    if ((((identical(token, import23.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import28.HasDisabled)) && ((8 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _MaterialButtonComponent_8_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_1_7.model = _ctx.question;
    _NgModel_1_7.ngAfterChanges();
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_1_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_1_9.label = 'Introduce your question';
      changed = true;
      _MaterialInputComponent_1_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_3 = (_ctx.game.response.isEmpty == true);
    if (import11.checkBinding(_expr_3, currVal_3)) {
      if (currVal_3) {
        var doc = import3.document;
        _el_5_0 = doc.createElement('p');
        createAttr(_el_5_0, 'id', 'eight');
        addShimE(_el_5_0);
        _text_5_1 = import3.Text('8');
        _el_5_0.append(_text_5_1);
        addInlinedNodes(_anchor_5, [_el_5_0]);
      } else {
        removeInlinedNodes([_el_5_0]);
      }
      _expr_3 = currVal_3;
    }
    _NgIf_6_9.ngIf = !_ctx.game.response.isEmpty;
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_8_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_8_6.ngOnInit();
    }
    _appEl_6.detectChangesInNestedViews();
    _compView_8.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_8.detectChanges();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_1_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_8?.destroy();
    _MaterialInputComponent_1_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_1_11.ngOnDestroy();
  }

  void _handle_ngModelChange_1_0($event) {
    ctx.question = $event;
  }
}

AppView<import2.GameComponent> viewFactory_GameComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameComponent1(parentView, parentIndex);
}

class _ViewGameComponent3 extends AppView<import2.GameComponent> {
  import3.Text _text_1;
  var _expr_0;
  _ViewGameComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewGameComponent0._renderType;
  }
  @override
  ComponentRef<import2.GameComponent> build() {
    var doc = import3.document;
    final _el_0 = doc.createElement('p');
    createAttr(_el_0, 'id', 'answer');
    addShimE(_el_0);
    _text_1 = import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = import11.interpolate0(_ctx.game.response);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.GameComponent> viewFactory_GameComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameComponent3(parentView, parentIndex);
}

class _ViewGameComponent4 extends AppView<import2.GameComponent> {
  import3.Element _el_1;
  import31.ViewStatisticsComponent0 _compView_1;
  import32.StatisticsComponent _StatisticsComponent_1_5;
  var _expr_0;
  _ViewGameComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewGameComponent0._renderType;
  }
  @override
  ComponentRef<import2.GameComponent> build() {
    var doc = import3.document;
    final _el_0 = doc.createElement('section');
    addShimE(_el_0);
    _compView_1 = import31.ViewStatisticsComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _StatisticsComponent_1_5 = import32.StatisticsComponent();
    _compView_1.create(_StatisticsComponent_1_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.statistics;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _StatisticsComponent_1_5.statistics = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
  }
}

AppView<import2.GameComponent> viewFactory_GameComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameComponent4(parentView, parentIndex);
}

final List<dynamic> styles$GameComponentHost = const [];

class _ViewGameComponentHost0 extends AppView<import2.GameComponent> {
  ViewGameComponent0 _compView_0;
  dynamic _GameService_0_5;
  dynamic _StatisticsService_0_6;
  import2.GameComponent _GameComponent_0_7;
  dynamic __Document_0_8;
  dynamic __Window_0_9;
  dynamic __DomService_0_10;
  dynamic __AcxImperativeViewUtils_0_11;
  import33.DomRuler __DomRuler_0_12;
  dynamic __ManagedZone_0_13;
  dynamic __overlayContainerName_0_14;
  dynamic __overlayContainerParent_0_15;
  dynamic __overlayContainer_0_16;
  bool __overlaySyncDom_0_17;
  bool __overlayRepositionLoop_0_18;
  import34.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import35.ZIndexer __ZIndexer_0_20;
  import36.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  List<import38.RelativePosition> __defaultPopupPositions_0_23;
  import39.DomPopupSourceFactory __DomPopupSourceFactory_0_24;
  import40.Clock __Clock_0_25;
  _ViewGameComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_8 {
    if ((this.__Document_0_8 == null)) {
      (__Document_0_8 = import41.getDocument());
    }
    return this.__Document_0_8;
  }

  dynamic get _Window_0_9 {
    if ((this.__Window_0_9 == null)) {
      (__Window_0_9 = import41.getWindow());
    }
    return this.__Window_0_9;
  }

  dynamic get _DomService_0_10 {
    if ((this.__DomService_0_10 == null)) {
      (__DomService_0_10 = (import12.isDevMode
          ? import14.debugInjectorWrap(import42.DomService, () {
              return import43.createDomService(this.injectorGet(import42.DomService, this.viewData.parentIndex, null), this.injectorGet(import44.Disposer, this.viewData.parentIndex, null), this.injectorGet(import45.NgZone, this.viewData.parentIndex), this._Window_0_9);
            })
          : import43.createDomService(this.injectorGet(import42.DomService, this.viewData.parentIndex, null), this.injectorGet(import44.Disposer, this.viewData.parentIndex, null), this.injectorGet(import45.NgZone, this.viewData.parentIndex), this._Window_0_9)));
    }
    return this.__DomService_0_10;
  }

  dynamic get _AcxImperativeViewUtils_0_11 {
    if ((this.__AcxImperativeViewUtils_0_11 == null)) {
      (__AcxImperativeViewUtils_0_11 = (import12.isDevMode
          ? import14.debugInjectorWrap(import46.AcxImperativeViewUtils, () {
              return import46.AcxImperativeViewUtils(this.injectorGet(import47.ComponentLoader, this.viewData.parentIndex), this._DomService_0_10);
            })
          : import46.AcxImperativeViewUtils(this.injectorGet(import47.ComponentLoader, this.viewData.parentIndex), this._DomService_0_10)));
    }
    return this.__AcxImperativeViewUtils_0_11;
  }

  import33.DomRuler get _DomRuler_0_12 {
    if ((this.__DomRuler_0_12 == null)) {
      (__DomRuler_0_12 = import33.DomRuler(this._Document_0_8, this._DomService_0_10));
    }
    return this.__DomRuler_0_12;
  }

  dynamic get _ManagedZone_0_13 {
    if ((this.__ManagedZone_0_13 == null)) {
      (__ManagedZone_0_13 = (import12.isDevMode
          ? import14.debugInjectorWrap(import48.ManagedZone, () {
              return import49.Angular2ManagedZone(this.injectorGet(import45.NgZone, this.viewData.parentIndex));
            })
          : import49.Angular2ManagedZone(this.injectorGet(import45.NgZone, this.viewData.parentIndex))));
    }
    return this.__ManagedZone_0_13;
  }

  dynamic get _overlayContainerName_0_14 {
    if ((this.__overlayContainerName_0_14 == null)) {
      (__overlayContainerName_0_14 = (import12.isDevMode
          ? import14.debugInjectorWrap(const import15.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import50.getDefaultContainerName(this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainerName'), this.viewData.parentIndex, null));
            })
          : import50.getDefaultContainerName(this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainerName'), this.viewData.parentIndex, null))));
    }
    return this.__overlayContainerName_0_14;
  }

  dynamic get _overlayContainerParent_0_15 {
    if ((this.__overlayContainerParent_0_15 == null)) {
      (__overlayContainerParent_0_15 = (import12.isDevMode
          ? import14.debugInjectorWrap(const import15.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import50.getOverlayContainerParent(this._Document_0_8, this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainerParent'), this.viewData.parentIndex, null));
            })
          : import50.getOverlayContainerParent(this._Document_0_8, this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainerParent'), this.viewData.parentIndex, null))));
    }
    return this.__overlayContainerParent_0_15;
  }

  dynamic get _overlayContainer_0_16 {
    if ((this.__overlayContainer_0_16 == null)) {
      (__overlayContainer_0_16 = (import12.isDevMode
          ? import14.debugInjectorWrap(const import15.OpaqueToken<dynamic>('overlayContainer'), () {
              return import50.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainer'), this.viewData.parentIndex, null));
            })
          : import50.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGet(const import15.OpaqueToken<dynamic>('overlayContainer'), this.viewData.parentIndex, null))));
    }
    return this.__overlayContainer_0_16;
  }

  bool get _overlaySyncDom_0_17 {
    if ((this.__overlaySyncDom_0_17 == null)) {
      (__overlaySyncDom_0_17 = true);
    }
    return this.__overlaySyncDom_0_17;
  }

  bool get _overlayRepositionLoop_0_18 {
    if ((this.__overlayRepositionLoop_0_18 == null)) {
      (__overlayRepositionLoop_0_18 = true);
    }
    return this.__overlayRepositionLoop_0_18;
  }

  import34.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((this.__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import34.OverlayStyleConfig(this._Document_0_8));
    }
    return this.__OverlayStyleConfig_0_19;
  }

  import35.ZIndexer get _ZIndexer_0_20 {
    if ((this.__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import35.ZIndexer());
    }
    return this.__ZIndexer_0_20;
  }

  import36.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((this.__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import36.OverlayDomRenderService(this._OverlayStyleConfig_0_19, this._overlayContainer_0_16, this._overlayContainerName_0_14, this._DomRuler_0_12, this._DomService_0_10, this._AcxImperativeViewUtils_0_11, this._overlaySyncDom_0_17, this._overlayRepositionLoop_0_18, this._ZIndexer_0_20));
    }
    return this.__OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((this.__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import12.isDevMode
          ? import14.debugInjectorWrap(import51.OverlayService, () {
              return import51.OverlayService(this.injectorGet(import45.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.injectorGet(import51.OverlayService, this.viewData.parentIndex, null));
            })
          : import51.OverlayService(this.injectorGet(import45.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.injectorGet(import51.OverlayService, this.viewData.parentIndex, null))));
    }
    return this.__OverlayService_0_22;
  }

  List<import38.RelativePosition> get _defaultPopupPositions_0_23 {
    if ((this.__defaultPopupPositions_0_23 == null)) {
      (__defaultPopupPositions_0_23 = const [import38.RelativePosition(animationOrigin: 'top center'), import38.RelativePosition(animationOrigin: 'top right', originX: import38.Alignment('End', 'flex-end')), import38.RelativePosition(animationOrigin: 'top left', originX: import38.Alignment('Start', 'flex-start')), import38.RelativePosition(animationOrigin: 'bottom center', originY: import38.Alignment('End', 'flex-end')), import38.RelativePosition(animationOrigin: 'bottom right', originX: import38.Alignment('End', 'flex-end'), originY: import38.Alignment('End', 'flex-end')), import38.RelativePosition(animationOrigin: 'bottom left', originX: import38.Alignment('Start', 'flex-start'), originY: import38.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_23;
  }

  import39.DomPopupSourceFactory get _DomPopupSourceFactory_0_24 {
    if ((this.__DomPopupSourceFactory_0_24 == null)) {
      (__DomPopupSourceFactory_0_24 = import39.DomPopupSourceFactory(this._DomRuler_0_12));
    }
    return this.__DomPopupSourceFactory_0_24;
  }

  import40.Clock get _Clock_0_25 {
    if ((this.__Clock_0_25 == null)) {
      (__Clock_0_25 = const import40.Clock());
    }
    return this.__Clock_0_25;
  }

  @override
  ComponentRef<import2.GameComponent> build() {
    _compView_0 = ViewGameComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GameService_0_5 = (import12.isDevMode
        ? import14.debugInjectorWrap(import52.GameService, () {
            return import52.GameService(this.injectorGet(import53.Client, viewData.parentIndex));
          })
        : import52.GameService(this.injectorGet(import53.Client, viewData.parentIndex)));
    _StatisticsService_0_6 = (import12.isDevMode
        ? import14.debugInjectorWrap(import54.StatisticsService, () {
            return import54.StatisticsService(this.injectorGet(import53.Client, viewData.parentIndex));
          })
        : import54.StatisticsService(this.injectorGet(import53.Client, viewData.parentIndex)));
    _GameComponent_0_7 = import2.GameComponent(_GameService_0_5, _StatisticsService_0_6);
    _compView_0.create(_GameComponent_0_7, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _GameComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import52.GameService) && (0 == nodeIndex))) {
      return _GameService_0_5;
    }
    if ((identical(token, import54.StatisticsService) && (0 == nodeIndex))) {
      return _StatisticsService_0_6;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_8;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_9;
    }
    if ((identical(token, import42.DomService) && (0 == nodeIndex))) {
      return _DomService_0_10;
    }
    if ((identical(token, import46.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_11;
    }
    if ((identical(token, import33.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_12;
    }
    if ((identical(token, import48.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_13;
    }
    if ((identical(token, const import15.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_14;
    }
    if ((identical(token, const import15.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_15;
    }
    if ((identical(token, const import15.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_16;
    }
    if ((identical(token, const import15.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_17;
    }
    if ((identical(token, const import15.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_18;
    }
    if ((identical(token, import34.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_19;
    }
    if ((identical(token, import35.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_20;
    }
    if ((identical(token, import36.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_21;
    }
    if ((identical(token, import51.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_22;
    }
    if ((identical(token, const import15.OpaqueToken<List<import55.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_23;
    }
    if ((identical(token, import39.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_24;
    }
    if (((identical(token, import40.Clock) || identical(token, const import15.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_25;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.GameComponent> viewFactory_GameComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.GameComponent> _GameComponentNgFactory = const ComponentFactory('game', viewFactory_GameComponentHost0);
ComponentFactory<import2.GameComponent> get GameComponentNgFactory {
  return _GameComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GameComponent, GameComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
