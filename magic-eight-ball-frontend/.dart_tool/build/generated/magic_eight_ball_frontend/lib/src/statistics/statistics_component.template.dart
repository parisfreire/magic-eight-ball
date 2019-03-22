// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'statistics_component.dart';
export 'statistics_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/scorecard/scorecard.dart';
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/scorecard/scorecard.template.dart' as _ref1;
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.template.dart' as _ref2;
import 'package:magic_eight_ball_frontend/src/statistics/statistics_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'statistics_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/scorecard/scorecard.template.dart' as import4;
import 'package:angular_components/scorecard/scorecard.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import12;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import13;

final List<dynamic> styles$StatisticsComponent = [import0.styles];

class ViewStatisticsComponent0 extends AppView<import2.StatisticsComponent> {
  import3.Element _el_2;
  import4.ViewScorecardComponent0 _compView_2;
  import5.ScorecardComponent _ScorecardComponent_2_5;
  import3.Element _el_3;
  import4.ViewScorecardComponent0 _compView_3;
  import5.ScorecardComponent _ScorecardComponent_3_5;
  import3.Element _el_4;
  import4.ViewScorecardComponent0 _compView_4;
  import5.ScorecardComponent _ScorecardComponent_4_5;
  import3.Element _el_5;
  import4.ViewScorecardComponent0 _compView_5;
  import5.ScorecardComponent _ScorecardComponent_5_5;
  String _expr_1;
  String _expr_3;
  String _expr_5;
  String _expr_7;
  static RenderComponentType _renderType;
  ViewStatisticsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('statistics');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:magic_eight_ball_frontend/lib/src/statistics/statistics_component.dart' : null), ViewEncapsulation.Emulated, styles$StatisticsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.StatisticsComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    final _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    final _text_1 = import3.Text('Responses');
    _el_0.append(_text_1);
    _compView_2 = import4.ViewScorecardComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _el_2.className = import9.interpolate2('', 'green', ' ', import5.ScorecardComponent.hostClass, '');
    createAttr(_el_2, 'label', 'Affirmative');
    addShimC(_el_2);
    _ScorecardComponent_2_5 = (import10.isDevMode
        ? import12.debugInjectorWrap(import5.ScorecardComponent, () {
            return import5.ScorecardComponent(_compView_2.ref, _el_2, parentView.injectorGet(import13.DomService, viewData.parentIndex));
          })
        : import5.ScorecardComponent(_compView_2.ref, _el_2, parentView.injectorGet(import13.DomService, viewData.parentIndex)));
    _compView_2.create(_ScorecardComponent_2_5, [const [], const [], const [], const []]);
    _compView_3 = import4.ViewScorecardComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    _el_3.className = import9.interpolate2('', 'orange', ' ', import5.ScorecardComponent.hostClass, '');
    createAttr(_el_3, 'label', 'Non-Commital');
    addShimC(_el_3);
    _ScorecardComponent_3_5 = (import10.isDevMode
        ? import12.debugInjectorWrap(import5.ScorecardComponent, () {
            return import5.ScorecardComponent(_compView_3.ref, _el_3, parentView.injectorGet(import13.DomService, viewData.parentIndex));
          })
        : import5.ScorecardComponent(_compView_3.ref, _el_3, parentView.injectorGet(import13.DomService, viewData.parentIndex)));
    _compView_3.create(_ScorecardComponent_3_5, [const [], const [], const [], const []]);
    _compView_4 = import4.ViewScorecardComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    _el_4.className = import9.interpolate2('', 'red', ' ', import5.ScorecardComponent.hostClass, '');
    createAttr(_el_4, 'label', 'Negative');
    addShimC(_el_4);
    _ScorecardComponent_4_5 = (import10.isDevMode
        ? import12.debugInjectorWrap(import5.ScorecardComponent, () {
            return import5.ScorecardComponent(_compView_4.ref, _el_4, parentView.injectorGet(import13.DomService, viewData.parentIndex));
          })
        : import5.ScorecardComponent(_compView_4.ref, _el_4, parentView.injectorGet(import13.DomService, viewData.parentIndex)));
    _compView_4.create(_ScorecardComponent_4_5, [const [], const [], const [], const []]);
    _compView_5 = import4.ViewScorecardComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    parentRenderNode.append(_el_5);
    createAttr(_el_5, 'label', 'Total questions');
    addShimC(_el_5);
    _ScorecardComponent_5_5 = (import10.isDevMode
        ? import12.debugInjectorWrap(import5.ScorecardComponent, () {
            return import5.ScorecardComponent(_compView_5.ref, _el_5, parentView.injectorGet(import13.DomService, viewData.parentIndex));
          })
        : import5.ScorecardComponent(_compView_5.ref, _el_5, parentView.injectorGet(import13.DomService, viewData.parentIndex)));
    _compView_5.create(_ScorecardComponent_5_5, [const [], const [], const [], const []]);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_2_5.label = 'Affirmative';
      changed = true;
    }
    final currVal_1 = import9.interpolate0(((_ctx.statistics == null) ? null : _ctx.statistics.totalAffirmativeResponses));
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _ScorecardComponent_2_5.value = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_3_5.label = 'Non-Commital';
      changed = true;
    }
    final currVal_3 = import9.interpolate0(((_ctx.statistics == null) ? null : _ctx.statistics.totalNonCommittalResponses));
    if (import9.checkBinding(_expr_3, currVal_3)) {
      _ScorecardComponent_3_5.value = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_4_5.label = 'Negative';
      changed = true;
    }
    final currVal_5 = import9.interpolate0(((_ctx.statistics == null) ? null : _ctx.statistics.totalNegativeResponses));
    if (import9.checkBinding(_expr_5, currVal_5)) {
      _ScorecardComponent_4_5.value = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_5_5.label = 'Total questions';
      changed = true;
    }
    final currVal_7 = import9.interpolate0(((_ctx.statistics == null) ? null : _ctx.statistics.totalQuestions));
    if (import9.checkBinding(_expr_7, currVal_7)) {
      _ScorecardComponent_5_5.value = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _compView_2.detectHostChanges(firstCheck);
    _compView_3.detectHostChanges(firstCheck);
    _compView_4.detectHostChanges(firstCheck);
    _compView_5.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _compView_3?.destroy();
    _compView_4?.destroy();
    _compView_5?.destroy();
  }
}

AppView<import2.StatisticsComponent> viewFactory_StatisticsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewStatisticsComponent0(parentView, parentIndex);
}

final List<dynamic> styles$StatisticsComponentHost = const [];

class _ViewStatisticsComponentHost0 extends AppView<import2.StatisticsComponent> {
  ViewStatisticsComponent0 _compView_0;
  import2.StatisticsComponent _StatisticsComponent_0_5;
  _ViewStatisticsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.StatisticsComponent> build() {
    _compView_0 = ViewStatisticsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _StatisticsComponent_0_5 = import2.StatisticsComponent();
    _compView_0.create(_StatisticsComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _StatisticsComponent_0_5);
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

AppView<import2.StatisticsComponent> viewFactory_StatisticsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewStatisticsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.StatisticsComponent> _StatisticsComponentNgFactory = const ComponentFactory('statistics', viewFactory_StatisticsComponentHost0);
ComponentFactory<import2.StatisticsComponent> get StatisticsComponentNgFactory {
  return _StatisticsComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(StatisticsComponent, StatisticsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
