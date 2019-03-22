define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/http/src/base_client', 'packages/angular/angular.template', 'packages/magic_eight_ball_frontend/app_component.template', 'packages/magic_eight_ball_frontend/app_component', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, change_detection, base_client, angular, app_component, app_component$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__browser_client = base_client.src__browser_client;
  const src__client = base_client.src__client;
  const angular$46template = angular.angular$46template;
  const app_component$46template = app_component.app_component$46template;
  const app_component$0 = app_component$.app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.injector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$injector.__(parent);
  };
  const _field0 = Symbol('_field0');
  const _getBrowserClient$0 = Symbol('_getBrowserClient$0');
  const _getInjector$1 = Symbol('_getInjector$1');
  main$46template._Injector$injector = class _Injector$injector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getBrowserClient$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new src__browser_client.BrowserClient.new() : t;
    }
    [_getInjector$1]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__client.Client)) {
        return this[_getBrowserClient$0]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$1]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$injector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    main$46template._Injector$injector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$injector.prototype;
  dart.addTypeTests(main$46template._Injector$injector);
  dart.setMethodSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$injector.__proto__),
    [_getBrowserClient$0]: dart.fnType(src__browser_client.BrowserClient, []),
    [_getInjector$1]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getFields(main$46template._Injector$injector.__proto__),
    [_field0]: dart.fieldType(src__browser_client.BrowserClient)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    app_component$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main.injector*/get injector() {
      return dart.fn(main$46template.injector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    src__bootstrap__run.runApp(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory, {createInjector: main.injector});
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;+CAoBgC,MAAmB;2BAAN;UAAY,KAAI,qCAAoB,CAAC,MAAM;EAAC;;;;;;cAO5C,aAAO;yCAAK,IAAI,qCAAiB;IAAE;;YAC7C;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAa,2CAAe;AAC9E,UAAI,AAAU,KAAK,KAAM,iCAAM,EAAG;AAChC,cAAO,0BAAmB;;AAE5B,UAAI,AAAU,KAAK,KAAM,mDAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;oDAfsB,MAAmB;2BAAN;IAEjB,aAAO;AAFqB,4HAAM,MAAM;EAAC;;;;;;;;;;;;;MAkBzD,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB;;MCzCsB,aAAQ;YAAQ,2DAAiB;;;;AAGrD,8BAAM,+BAAI,8CAAqB,mBAAkB,aAAQ;EAC3D","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
