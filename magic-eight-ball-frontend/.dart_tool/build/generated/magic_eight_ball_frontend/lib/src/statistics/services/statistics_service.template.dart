// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'statistics_service.dart';
export 'statistics_service.dart';
import 'dart:async';
import 'dart:convert';
import 'package:angular/core.dart';
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';
import 'package:http/http.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.template.dart' as _ref1;
import 'package:http/src/client.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(StatisticsService, (_i1.Client p0) => new StatisticsService(p0));
  _ngRef.registerDependencies(StatisticsService, const [
    const [_i1.Client]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}
