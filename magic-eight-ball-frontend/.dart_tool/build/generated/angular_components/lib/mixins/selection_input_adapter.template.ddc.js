define(['dart_sdk', 'packages/angular/di.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/selection/string_selection_options.template'], function(dart_sdk, di, selection_container, selection_model, selection_options, string_selection_options) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di$46template = di.di$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const model__selection__string_selection_options$46template = string_selection_options.model__selection__string_selection_options$46template;
  const _root = Object.create(null);
  const mixins__selection_input_adapter$46template = Object.create(_root);
  dart.defineLazy(mixins__selection_input_adapter$46template, {
    /*mixins__selection_input_adapter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mixins__selection_input_adapter$46template.initReflector = function() {
    if (dart.test(mixins__selection_input_adapter$46template._visited)) {
      return;
    }
    mixins__selection_input_adapter$46template._visited = true;
    di$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__selection__string_selection_options$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/mixins/selection_input_adapter.template.ddc", {
    "package:angular_components/mixins/selection_input_adapter.template.dart": mixins__selection_input_adapter$46template
  }, '{"version":3,"sourceRoot":"","sources":["selection_input_adapter.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAoBI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,2BAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,mEAAa;EACrB","file":"selection_input_adapter.template.ddc.js"}');
  // Exports:
  return {
    mixins__selection_input_adapter$46template: mixins__selection_input_adapter$46template
  };
});

//# sourceMappingURL=selection_input_adapter.template.ddc.js.map
