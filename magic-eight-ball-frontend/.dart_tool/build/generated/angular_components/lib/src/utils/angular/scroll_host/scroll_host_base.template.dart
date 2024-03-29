// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'scroll_host_base.dart';
export 'scroll_host_base.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math' show max;
import 'package:angular/angular.dart';
import 'package:js/js.dart' as js;
import 'package:logging/logging.dart' show Logger;
import 'package:angular_components/src/utils/angular/scroll_host/gestures.dart';
import 'package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.dart';
import 'package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.dart';
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.dart';
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart';
import 'package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.dart';
import 'package:angular_components/utils/async/async.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/browser/feature_detector/feature_detector.dart' as feature_detector;
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/utils/angular/scroll_host/gestures.template.dart' as _ref1;
import 'package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.template.dart' as _ref2;
import 'package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.template.dart' as _ref3;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.template.dart' as _ref4;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart' as _ref5;
import 'package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.template.dart' as _ref6;
import 'package:angular_components/utils/async/async.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref8;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref9;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref10;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
}
