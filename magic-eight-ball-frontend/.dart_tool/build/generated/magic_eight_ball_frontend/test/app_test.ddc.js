define(['dart_sdk', 'packages/magic_eight_ball_frontend/app_component.template', 'packages/magic_eight_ball_frontend/app_component', 'packages/angular_test/src/bootstrap', 'packages/test_core/test_core', 'packages/matcher/src/core_matchers', 'packages/test_api/test_api'], function(dart_sdk, app_component, app_component$, bootstrap, test_core, core_matchers, test_api) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46template = app_component.app_component$46template;
  const app_component$0 = app_component$.app_component;
  const src__frontend__bed = bootstrap.src__frontend__bed;
  const test_core$ = test_core.test_core;
  const src__core_matchers = core_matchers.src__core_matchers;
  const src__frontend__expect = test_api.src__frontend__expect;
  const _root = Object.create(null);
  const app_test = Object.create(_root);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  app_test.main = function() {
    let testBed = src__frontend__bed.NgTestBed.forComponent(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory);
    let fixture = null;
    test_core$.setUp(dart.fn(() => async.async(core.Null, function*() {
      fixture = (yield testBed.create());
    }), VoidToFutureOfNull()));
    test_core$.tearDown(dart.fn(src__frontend__bed.disposeAnyRunningTest, VoidToFutureOfvoid()));
    test_core$.test("heading", dart.fn(() => {
      src__frontend__expect.expect(fixture.text, src__core_matchers.contains("My First AngularDart App"));
    }, VoidToNull()));
  };
  dart.trackLibraries("test/app_test.ddc", {
    "app_test.dart": app_test
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAOE,QAAM,UACF,4BAAS,aAAa,+BAAkB,8CAAqB;AACjE,QAA4B;AAE5B,oBAAK,CAAC;AACJ,aAAO,IAAG,MAAM,OAAO,OAAO;IAChC;AAEA,uBAAQ,CAAC,uEAAqB;AAE9B,mBAAI,CAAC,WAAW;AACd,kCAAM,CAAC,OAAO,KAAK,EAAE,2BAAQ,CAAC;;EAIlC","file":"app_test.ddc.js"}');
  // Exports:
  return {
    app_test: app_test
  };
});

//# sourceMappingURL=app_test.ddc.js.map
