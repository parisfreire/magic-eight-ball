// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'api.dart';
export 'api.dart';
import 'package:angular/src/core/metadata/view.dart' show ViewEncapsulation;
import 'package:angular/src/runtime.dart';
import 'package:angular/src/core/metadata/view.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}