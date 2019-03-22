// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/game/game_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/game/game_component.template.dart' as _ref1;
import 'package:magic_eight_ball_frontend/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'src/game/game_component.template.dart' as import4;
import 'src/game/game_component.dart' as import5;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import6;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import7;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import8;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import9;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import11;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import12;
import 'package:quiver/time.dart' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import20;
import 'package:angular/src/di/errors.dart' as import21;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import22;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import23;
import 'package:angular_components/utils/disposer/disposer.dart' as import24;
import 'package:angular/src/core/zone/ng_zone.dart' as import25;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import26;
import 'package:angular/src/core/linker/component_loader.dart' as import27;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import28;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import29;
import 'package:angular/src/core/di/opaque_token.dart' as import30;
import 'package:angular_components/laminate/overlay/module.dart' as import31;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import32;
import 'src/game/services/game_service.dart' as import33;
import 'package:http/src/client.dart' as import34;
import 'src/statistics/services/statistics_service.dart' as import35;
import 'package:angular_components/laminate/enums/alignment.dart' as import36;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import4.ViewGameComponent0 _compView_0;
  dynamic _GameService_0_5;
  dynamic _StatisticsService_0_6;
  import5.GameComponent _GameComponent_0_7;
  dynamic __Document_0_8;
  dynamic __Window_0_9;
  dynamic __DomService_0_10;
  dynamic __AcxImperativeViewUtils_0_11;
  import6.DomRuler __DomRuler_0_12;
  dynamic __ManagedZone_0_13;
  dynamic __overlayContainerName_0_14;
  dynamic __overlayContainerParent_0_15;
  dynamic __overlayContainer_0_16;
  bool __overlaySyncDom_0_17;
  bool __overlayRepositionLoop_0_18;
  import7.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import8.ZIndexer __ZIndexer_0_20;
  import9.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  List<import11.RelativePosition> __defaultPopupPositions_0_23;
  import12.DomPopupSourceFactory __DomPopupSourceFactory_0_24;
  import13.Clock __Clock_0_25;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import17.appViewUtils.createRenderType((import18.isDevMode ? 'asset:magic_eight_ball_frontend/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Document_0_8 {
    if ((this.__Document_0_8 == null)) {
      (__Document_0_8 = import20.getDocument());
    }
    return this.__Document_0_8;
  }

  dynamic get _Window_0_9 {
    if ((this.__Window_0_9 == null)) {
      (__Window_0_9 = import20.getWindow());
    }
    return this.__Window_0_9;
  }

  dynamic get _DomService_0_10 {
    if ((this.__DomService_0_10 == null)) {
      (__DomService_0_10 = (import18.isDevMode
          ? import21.debugInjectorWrap(import22.DomService, () {
              return import23.createDomService(this.parentView.injectorGet(import22.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import24.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex), this._Window_0_9);
            })
          : import23.createDomService(this.parentView.injectorGet(import22.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import24.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex), this._Window_0_9)));
    }
    return this.__DomService_0_10;
  }

  dynamic get _AcxImperativeViewUtils_0_11 {
    if ((this.__AcxImperativeViewUtils_0_11 == null)) {
      (__AcxImperativeViewUtils_0_11 = (import18.isDevMode
          ? import21.debugInjectorWrap(import26.AcxImperativeViewUtils, () {
              return import26.AcxImperativeViewUtils(this.parentView.injectorGet(import27.ComponentLoader, this.viewData.parentIndex), this._DomService_0_10);
            })
          : import26.AcxImperativeViewUtils(this.parentView.injectorGet(import27.ComponentLoader, this.viewData.parentIndex), this._DomService_0_10)));
    }
    return this.__AcxImperativeViewUtils_0_11;
  }

  import6.DomRuler get _DomRuler_0_12 {
    if ((this.__DomRuler_0_12 == null)) {
      (__DomRuler_0_12 = import6.DomRuler(this._Document_0_8, this._DomService_0_10));
    }
    return this.__DomRuler_0_12;
  }

  dynamic get _ManagedZone_0_13 {
    if ((this.__ManagedZone_0_13 == null)) {
      (__ManagedZone_0_13 = (import18.isDevMode
          ? import21.debugInjectorWrap(import28.ManagedZone, () {
              return import29.Angular2ManagedZone(this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex));
            })
          : import29.Angular2ManagedZone(this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex))));
    }
    return this.__ManagedZone_0_13;
  }

  dynamic get _overlayContainerName_0_14 {
    if ((this.__overlayContainerName_0_14 == null)) {
      (__overlayContainerName_0_14 = (import18.isDevMode
          ? import21.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import31.getDefaultContainerName(this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerName'), this.viewData.parentIndex, null));
            })
          : import31.getDefaultContainerName(this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerName'), this.viewData.parentIndex, null))));
    }
    return this.__overlayContainerName_0_14;
  }

  dynamic get _overlayContainerParent_0_15 {
    if ((this.__overlayContainerParent_0_15 == null)) {
      (__overlayContainerParent_0_15 = (import18.isDevMode
          ? import21.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import31.getOverlayContainerParent(this._Document_0_8, this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerParent'), this.viewData.parentIndex, null));
            })
          : import31.getOverlayContainerParent(this._Document_0_8, this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainerParent'), this.viewData.parentIndex, null))));
    }
    return this.__overlayContainerParent_0_15;
  }

  dynamic get _overlayContainer_0_16 {
    if ((this.__overlayContainer_0_16 == null)) {
      (__overlayContainer_0_16 = (import18.isDevMode
          ? import21.debugInjectorWrap(const import30.OpaqueToken<dynamic>('overlayContainer'), () {
              return import31.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainer'), this.viewData.parentIndex, null));
            })
          : import31.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayContainer'), this.viewData.parentIndex, null))));
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

  import7.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((this.__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import7.OverlayStyleConfig(this._Document_0_8));
    }
    return this.__OverlayStyleConfig_0_19;
  }

  import8.ZIndexer get _ZIndexer_0_20 {
    if ((this.__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import8.ZIndexer());
    }
    return this.__ZIndexer_0_20;
  }

  import9.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((this.__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import9.OverlayDomRenderService(this._OverlayStyleConfig_0_19, this._overlayContainer_0_16, this._overlayContainerName_0_14, this._DomRuler_0_12, this._DomService_0_10, this._AcxImperativeViewUtils_0_11, this._overlaySyncDom_0_17, this._overlayRepositionLoop_0_18, this._ZIndexer_0_20));
    }
    return this.__OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((this.__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import18.isDevMode
          ? import21.debugInjectorWrap(import32.OverlayService, () {
              return import32.OverlayService(this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.parentView.injectorGet(import32.OverlayService, this.viewData.parentIndex, null));
            })
          : import32.OverlayService(this.parentView.injectorGet(import25.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.parentView.injectorGet(import32.OverlayService, this.viewData.parentIndex, null))));
    }
    return this.__OverlayService_0_22;
  }

  List<import11.RelativePosition> get _defaultPopupPositions_0_23 {
    if ((this.__defaultPopupPositions_0_23 == null)) {
      (__defaultPopupPositions_0_23 = const [import11.RelativePosition(animationOrigin: 'top center'), import11.RelativePosition(animationOrigin: 'top right', originX: import11.Alignment('End', 'flex-end')), import11.RelativePosition(animationOrigin: 'top left', originX: import11.Alignment('Start', 'flex-start')), import11.RelativePosition(animationOrigin: 'bottom center', originY: import11.Alignment('End', 'flex-end')), import11.RelativePosition(animationOrigin: 'bottom right', originX: import11.Alignment('End', 'flex-end'), originY: import11.Alignment('End', 'flex-end')), import11.RelativePosition(animationOrigin: 'bottom left', originX: import11.Alignment('Start', 'flex-start'), originY: import11.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_23;
  }

  import12.DomPopupSourceFactory get _DomPopupSourceFactory_0_24 {
    if ((this.__DomPopupSourceFactory_0_24 == null)) {
      (__DomPopupSourceFactory_0_24 = import12.DomPopupSourceFactory(this._DomRuler_0_12));
    }
    return this.__DomPopupSourceFactory_0_24;
  }

  import13.Clock get _Clock_0_25 {
    if ((this.__Clock_0_25 == null)) {
      (__Clock_0_25 = const import13.Clock());
    }
    return this.__Clock_0_25;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewGameComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _GameService_0_5 = (import18.isDevMode
        ? import21.debugInjectorWrap(import33.GameService, () {
            return import33.GameService(parentView.injectorGet(import34.Client, viewData.parentIndex));
          })
        : import33.GameService(parentView.injectorGet(import34.Client, viewData.parentIndex)));
    _StatisticsService_0_6 = (import18.isDevMode
        ? import21.debugInjectorWrap(import35.StatisticsService, () {
            return import35.StatisticsService(parentView.injectorGet(import34.Client, viewData.parentIndex));
          })
        : import35.StatisticsService(parentView.injectorGet(import34.Client, viewData.parentIndex)));
    _GameComponent_0_7 = import5.GameComponent(_GameService_0_5, _StatisticsService_0_6);
    _compView_0.create(_GameComponent_0_7, []);
    init(const [], null);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import33.GameService) && (0 == nodeIndex))) {
      return _GameService_0_5;
    }
    if ((identical(token, import35.StatisticsService) && (0 == nodeIndex))) {
      return _StatisticsService_0_6;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_8;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_9;
    }
    if ((identical(token, import22.DomService) && (0 == nodeIndex))) {
      return _DomService_0_10;
    }
    if ((identical(token, import26.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_11;
    }
    if ((identical(token, import6.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_12;
    }
    if ((identical(token, import28.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_13;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_14;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_15;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_16;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_17;
    }
    if ((identical(token, const import30.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_18;
    }
    if ((identical(token, import7.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_19;
    }
    if ((identical(token, import8.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_20;
    }
    if ((identical(token, import9.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_21;
    }
    if ((identical(token, import32.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_22;
    }
    if ((identical(token, const import30.OpaqueToken<List<import36.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_23;
    }
    if ((identical(token, import12.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_24;
    }
    if (((identical(token, import13.Clock) || identical(token, const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
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

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
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

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
