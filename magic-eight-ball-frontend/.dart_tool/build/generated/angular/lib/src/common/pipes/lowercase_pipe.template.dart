// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,non_constant_identifier_names,library_prefixes,UNUSED_SHOWN_NAME
import 'lowercase_pipe.dart';
export 'lowercase_pipe.dart';
import 'package:angular/di.dart' show PipeTransform, Pipe;
import 'invalid_pipe_argument_exception.dart' show InvalidPipeArgumentException;
import 'invalid_pipe_argument_exception.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
