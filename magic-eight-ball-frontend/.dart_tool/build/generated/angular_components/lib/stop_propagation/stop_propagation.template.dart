// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'stop_propagation.dart';
export 'stop_propagation.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/events/events.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
