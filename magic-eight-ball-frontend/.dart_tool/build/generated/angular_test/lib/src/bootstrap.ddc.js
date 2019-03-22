define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/application_tokens'], function(dart_sdk, change_detection, modules, ng_zone, application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__di__injector__runtime = change_detection.src__di__injector__runtime;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const src__core__application_ref = modules.src__core__application_ref;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__platform__dom__shared_styles_host = modules.src__platform__dom__shared_styles_host;
  const src__core__linker__view_ref = modules.src__core__linker__view_ref;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__component_resolver = modules.src__core__linker__component_resolver;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__render__api = application_tokens.src__core__render__api;
  const _root = Object.create(null);
  const src__bootstrap = Object.create(_root);
  const src__errors__generic_type_missing = Object.create(_root);
  const src__errors__test_already_running = Object.create(_root);
  const src__errors__will_never_stabilize = Object.create(_root);
  const src__errors = Object.create(_root);
  const src__frontend__stabilizer = Object.create(_root);
  const src__frontend__fixture = Object.create(_root);
  const src__frontend__bed = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $append = dartx.append;
  const $toList = dartx.toList;
  const $every = dartx.every;
  const $remove = dartx.remove;
  const $parent = dartx.parent;
  const $text = dartx.text;
  const $addAll = dartx.addAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $map = dartx.map;
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let __ToReflectiveInjector = () => (__ToReflectiveInjector = dart.constFn(dart.fnType(src__di__injector__runtime.ReflectiveInjector, [], [src__di__injector__injector.Injector])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let voidTovoid = () => (voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))();
  let FutureOrOfvoid = () => (FutureOrOfvoid = dart.constFn(async.FutureOr$(dart.void)))();
  let ObjectToFutureOrOfvoid = () => (ObjectToFutureOrOfvoid = dart.constFn(dart.fnType(FutureOrOfvoid(), [core.Object])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let NgTestStabilizerTobool = () => (NgTestStabilizerTobool = dart.constFn(dart.fnType(core.bool, [src__frontend__stabilizer.NgTestStabilizer])))();
  let ListOfNgTestStabilizer = () => (ListOfNgTestStabilizer = dart.constFn(core.List$(src__frontend__stabilizer.NgTestStabilizer)))();
  let voidTobool = () => (voidTobool = dart.constFn(dart.fnType(core.bool, [dart.void])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let InjectorToNgTestStabilizer = () => (InjectorToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector])))();
  let FnToNgTestStabilizer = () => (FnToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [InjectorToNgTestStabilizer()])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfInjectorToNgTestStabilizer = () => (ListOfInjectorToNgTestStabilizer = dart.constFn(core.List$(InjectorToNgTestStabilizer())))();
  let InjectorToNgZoneStabilizer = () => (InjectorToNgZoneStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgZoneStabilizer, [src__di__injector__injector.Injector])))();
  let JSArrayOfInjectorToNgTestStabilizer = () => (JSArrayOfInjectorToNgTestStabilizer = dart.constFn(_interceptors.JSArray$(InjectorToNgTestStabilizer())))();
  src__bootstrap.testInjectorFactory = function(providers) {
    if (dart.test(providers[$isEmpty])) {
      return dart.fn(parent => {
        if (parent === void 0) parent = null;
        return parent;
      }, __ToInjector());
    }
    return dart.fn(parent => {
      if (parent === void 0) parent = null;
      return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([providers]), parent);
    }, __ToReflectiveInjector());
  };
  src__bootstrap.bootstrapForTest = function(E, componentFactory, hostElement, userInjector, opts) {
    return async.async(src__core__linker__component_factory.ComponentRef$(E), function* bootstrapForTest() {
      let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
      let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
      if (componentFactory == null) {
        dart.throw(new core.ArgumentError.notNull("componentFactory"));
      }
      if (hostElement == null) {
        dart.throw(new core.ArgumentError.notNull("hostElement"));
      }
      if (userInjector == null) {
        dart.throw(new core.ArgumentError.notNull("userInjector"));
      }
      let injector = src__bootstrap__run.appInjector(userInjector);
      let appRef = src__core__application_ref.ApplicationRef._check(injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
      let caughtError = null;
      let ngZone = src__core__zone__ng_zone.NgZone._check(injector.get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
      let onErrorSub = ngZone.onError.listen(dart.fn(e => {
        caughtError = e;
      }, NgZoneErrorToNull()));
      if (beforeComponentCreated != null) {
        let completer = CompleterOfvoid().new();
        ngZone.runGuarded(dart.fn(() => FutureOfNull().new(dart.fn(() => {
        }, VoidToNull())).then(dart.void, dart.fn(_ => beforeComponentCreated(injector), ObjectToFutureOrOfvoid())).then(dart.void, dart.fn(_ => completer.complete(), voidTovoid()), {onError: dart.bind(completer, 'completeError')}), VoidToFutureOfvoid()));
        yield completer.future;
      }
      return appRef.run(src__core__linker__component_factory.ComponentRef$(E), dart.fn(() => src__bootstrap._runAndLoadComponent(E, appRef, componentFactory, hostElement, injector, {beforeChangeDetection: beforeChangeDetection}).then(src__core__linker__component_factory.ComponentRef$(E), dart.fn(componentRef => async.async(src__core__linker__component_factory.ComponentRef$(E), function*() {
        yield ngZone.onTurnDone.first;
        yield async.Future.value();
        yield onErrorSub.cancel();
        if (caughtError != null) {
          return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).error(caughtError.error, core.StackTrace.fromString(caughtError.stackTrace[$join]("\n")));
        }
        return componentRef;
      }), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [src__core__linker__component_factory.ComponentRef$(E)]))), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [])));
    });
  };
  src__bootstrap._runAndLoadComponent = function(E, appRef, componentFactory, hostElement, injector, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let t = src__core__render__api.sharedStylesHost;
    t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
    let componentRef = componentFactory.create(injector);
    let cdMode = src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode;
    if (!dart.test(src__core__change_detection__constants.isDefaultChangeDetectionStrategy(cdMode)) && cdMode !== src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways) {
      dart.throw(new core.UnsupportedError.new("The root component in an Angular test or application must use the " + "default form of change detection (ChangeDetectionStrategy.Default). " + ("Instead got " + dart.str(src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode) + " ") + ("on component " + dart.str(dart.wrapType(E)) + ".")));
    }
    function loadComponent() {
      hostElement[$append](componentRef.location);
      appRef.registerChangeDetector(componentRef.changeDetectorRef);
      componentRef.onDestroy(dart.fn(() => {
        appRef.unregisterChangeDetector(componentRef.changeDetectorRef);
      }, VoidToNull()));
      appRef.tick();
      return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).value(componentRef);
    }
    dart.fn(loadComponent, dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), []));
    let beforeChangeDetectionReturn = null;
    if (beforeChangeDetection != null) {
      beforeChangeDetectionReturn = beforeChangeDetection(componentRef.instance);
    }
    if (async.Future.is(beforeChangeDetectionReturn)) {
      return beforeChangeDetectionReturn.then(src__core__linker__component_factory.ComponentRef$(E), dart.fn(_ => loadComponent(), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [dart.dynamic])));
    } else {
      return loadComponent();
    }
  };
  src__errors__generic_type_missing.GenericTypeMissingError = class GenericTypeMissingError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      if (this.message == null) {
        return "Generic type required";
      }
      return "Generic type required: " + dart.str(this.message);
    }
  };
  (src__errors__generic_type_missing.GenericTypeMissingError.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    src__errors__generic_type_missing.GenericTypeMissingError.__proto__.new.call(this);
  }).prototype = src__errors__generic_type_missing.GenericTypeMissingError.prototype;
  dart.addTypeTests(src__errors__generic_type_missing.GenericTypeMissingError);
  const message$ = Symbol("GenericTypeMissingError.message");
  dart.setFieldSignature(src__errors__generic_type_missing.GenericTypeMissingError, () => ({
    __proto__: dart.getFields(src__errors__generic_type_missing.GenericTypeMissingError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__errors__generic_type_missing.GenericTypeMissingError, ['toString']);
  src__errors__test_already_running.TestAlreadyRunningError = class TestAlreadyRunningError extends core.Error {
    toString() {
      return "" + "Another instance of an `NgTestFixture` is still executing!\n\n" + "NgTestBed supports *one* test executing at a time to avoid timing " + "conflicts or stability issues related to sharing a browser DOM.\n\n" + "When you are done with a test, make sure to dispose fixtures:\n" + "  tearDown(() => disposeAnyRunningTest())\n\n" + "NOTE: `disposeAnyRunningTest` returns a Future that must complete " + "*before* executing another test - `tearDown` handles this for you " + "if returned like the example above.";
    }
  };
  (src__errors__test_already_running.TestAlreadyRunningError.new = function() {
    src__errors__test_already_running.TestAlreadyRunningError.__proto__.new.call(this);
  }).prototype = src__errors__test_already_running.TestAlreadyRunningError.prototype;
  dart.addTypeTests(src__errors__test_already_running.TestAlreadyRunningError);
  dart.defineExtensionMethods(src__errors__test_already_running.TestAlreadyRunningError, ['toString']);
  src__errors__will_never_stabilize.WillNeverStabilizeError = class WillNeverStabilizeError extends core.Error {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    toString() {
      return "Failed to stabilize after " + dart.str(this.threshold) + " attempts";
    }
  };
  (src__errors__will_never_stabilize.WillNeverStabilizeError.new = function(threshold) {
    this[threshold$] = threshold;
    src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__.new.call(this);
  }).prototype = src__errors__will_never_stabilize.WillNeverStabilizeError.prototype;
  dart.addTypeTests(src__errors__will_never_stabilize.WillNeverStabilizeError);
  const threshold$ = Symbol("WillNeverStabilizeError.threshold");
  dart.setFieldSignature(src__errors__will_never_stabilize.WillNeverStabilizeError, () => ({
    __proto__: dart.getFields(src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__),
    threshold: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__errors__will_never_stabilize.WillNeverStabilizeError, ['toString']);
  src__frontend__stabilizer.NgTestStabilizer = class NgTestStabilizer extends core.Object {
    static all(stabilizers) {
      return new src__frontend__stabilizer.DelegatingNgTestStabilizer.new(stabilizers);
    }
    get isStable() {
      return false;
    }
    update(runAndTrackSideEffects) {
      if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
      return FutureOfbool().sync(dart.fn(() => {
        if (runAndTrackSideEffects != null) {
          runAndTrackSideEffects();
        }
        return false;
      }, VoidTobool()));
    }
    stabilize(opts) {
      return async.async(dart.void, (function* stabilize() {
        let runAndTrackSideEffects = opts && 'runAndTrackSideEffects' in opts ? opts.runAndTrackSideEffects : null;
        let threshold = opts && 'threshold' in opts ? opts.threshold : 100;
        if (threshold == null) {
          dart.throw(new core.ArgumentError.notNull("threshold"));
        }
        if (runAndTrackSideEffects != null) {
          yield this.update(runAndTrackSideEffects);
        }
        return this.stabilizeWithThreshold(threshold);
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold() {
        if (dart.notNull(threshold) < 1) {
          dart.throw(new core.ArgumentError.value(threshold, "threshold", "Must be >= 1"));
        }
        let count = 0;
        function thresholdExceeded() {
          return count++ > dart.notNull(threshold);
        }
        dart.fn(thresholdExceeded, VoidTobool());
        while (!dart.test(yield this.update())) {
          if (dart.test(thresholdExceeded())) {
            dart.throw(new src__errors__will_never_stabilize.WillNeverStabilizeError.new(threshold));
          }
        }
      }).bind(this));
    }
  };
  (src__frontend__stabilizer.NgTestStabilizer.new = function() {
  }).prototype = src__frontend__stabilizer.NgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.NgTestStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.NgTestStabilizer.__proto__),
    update: dart.fnType(async.Future$(core.bool), [], [dart.fnType(dart.void, [])]),
    stabilize: dart.fnType(async.Future$(dart.void), [], {runAndTrackSideEffects: dart.fnType(dart.void, []), threshold: core.int}),
    stabilizeWithThreshold: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setGetterSignature(src__frontend__stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getGetters(src__frontend__stabilizer.NgTestStabilizer.__proto__),
    isStable: core.bool
  }));
  const _delegates = Symbol('_delegates');
  const _updatedAtLeastOnce = Symbol('_updatedAtLeastOnce');
  const _updateAll = Symbol('_updateAll');
  const stabilizeWithThreshold = Symbol("stabilizeWithThreshold");
  src__frontend__stabilizer.DelegatingNgTestStabilizer = class DelegatingNgTestStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    get isStable() {
      return this[_delegates][$every](dart.fn(delegate => delegate.isStable, NgTestStabilizerTobool()));
    }
    update(runAndTrackSideEffects) {
      return async.async(core.bool, (function* update() {
        if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
        if (dart.test(this[_delegates][$isEmpty])) {
          return false;
        }
        if (runAndTrackSideEffects == null && dart.test(this[_updatedAtLeastOnce])) {
          yield this[_updateAll](runAndTrackSideEffects, dart.fn(d => !dart.test(d.isStable), NgTestStabilizerTobool()));
        } else {
          yield this[_updateAll](runAndTrackSideEffects);
        }
        this[_updatedAtLeastOnce] = true;
        return this.isStable;
      }).bind(this));
    }
    [_updateAll](runAndTrackSideEffects, test) {
      return async.async(dart.void, (function* _updateAll() {
        if (test === void 0) test = null;
        for (let delegate of this[_delegates]) {
          if (test == null || dart.test(test(delegate))) {
            yield delegate.update(runAndTrackSideEffects);
          }
        }
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold$() {
        try {
          this[_updatedAtLeastOnce] = false;
          return this[stabilizeWithThreshold](threshold);
        } finally {
          this[_updatedAtLeastOnce] = false;
        }
      }).bind(this));
    }
    [stabilizeWithThreshold](threshold) {
      return super.stabilizeWithThreshold(threshold);
    }
  };
  (src__frontend__stabilizer.DelegatingNgTestStabilizer.new = function(stabilizers) {
    this[_updatedAtLeastOnce] = false;
    this[_delegates] = stabilizers[$toList]({growable: false});
    src__frontend__stabilizer.DelegatingNgTestStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer.DelegatingNgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.DelegatingNgTestStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.DelegatingNgTestStabilizer.__proto__),
    [_updateAll]: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.void, [])], [dart.fnType(core.bool, [src__frontend__stabilizer.NgTestStabilizer])])
  }));
  dart.setFieldSignature(src__frontend__stabilizer.DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__stabilizer.DelegatingNgTestStabilizer.__proto__),
    [_delegates]: dart.finalFieldType(ListOfNgTestStabilizer()),
    [_updatedAtLeastOnce]: dart.fieldType(core.bool)
  }));
  const _ngZone = Symbol('_ngZone');
  const _waitForZone = Symbol('_waitForZone');
  const _waitForFutureOrFailOnNgZoneError = Symbol('_waitForFutureOrFailOnNgZoneError');
  src__frontend__stabilizer.NgZoneStabilizer = class NgZoneStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    get isStable() {
      return !(dart.test(this[_ngZone].hasPendingMacrotasks) || dart.test(this[_ngZone].hasPendingMicrotasks));
    }
    update(fn) {
      if (fn === void 0) fn = null;
      return FutureOfvoid().sync(dart.fn(() => this[_waitForZone](fn), VoidToFutureOfvoid())).then(core.bool, dart.fn(_ => this.isStable, voidTobool()));
    }
    [_waitForZone](fn) {
      return async.async(dart.void, (function* _waitForZone() {
        if (fn === void 0) fn = null;
        async.scheduleMicrotask(dart.fn(() => {
          this[_ngZone].runGuarded(fn != null ? fn : dart.fn(() => async.scheduleMicrotask(dart.fn(() => {
          }, VoidToNull())), VoidTovoid()));
        }, VoidToNull()));
        let ngZoneErrorFuture = this[_ngZone].onError.first;
        yield this[_waitForFutureOrFailOnNgZoneError](this[_ngZone].onTurnDone.first, ngZoneErrorFuture);
        let longestPendingTimerDuration = src__core__zone__ng_zone.longestPendingTimer(this[_ngZone]);
        if (!dart.equals(longestPendingTimerDuration, core.Duration.zero)) {
          yield this[_waitForFutureOrFailOnNgZoneError](async.Future.delayed(longestPendingTimerDuration), ngZoneErrorFuture);
        }
      }).bind(this));
    }
    [_waitForFutureOrFailOnNgZoneError](future, ngZoneErrorFuture) {
      return async.async(dart.void, function* _waitForFutureOrFailOnNgZoneError() {
        let caughtError = null;
        let finishedWithoutError = false;
        yield async.Future.any(dart.dynamic, JSArrayOfFuture().of([future, ngZoneErrorFuture.then(core.Null, dart.fn(e => {
            if (!finishedWithoutError) {
              caughtError = e;
            }
          }, NgZoneErrorToNull()))]));
        yield FutureOfNull().new(dart.fn(() => {
        }, VoidToNull()));
        if (caughtError != null) {
          return FutureOfvoid().error(caughtError.error, core.StackTrace.fromString(caughtError.stackTrace[$join]("\n")));
        }
        finishedWithoutError = true;
      });
    }
    toString() {
      return dart.str(dart.wrapType(src__frontend__stabilizer.NgZoneStabilizer)) + " {isStable: " + dart.str(this.isStable) + "}";
    }
  };
  (src__frontend__stabilizer.NgZoneStabilizer.new = function(ngZone) {
    this[_ngZone] = ngZone;
    src__frontend__stabilizer.NgZoneStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer.NgZoneStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.NgZoneStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.NgZoneStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.NgZoneStabilizer.__proto__),
    [_waitForZone]: dart.fnType(async.Future$(dart.void), [], [dart.fnType(dart.void, [])]),
    [_waitForFutureOrFailOnNgZoneError]: dart.fnType(async.Future$(dart.void), [async.Future, async.Future$(src__core__zone__ng_zone.NgZoneError)])
  }));
  dart.setFieldSignature(src__frontend__stabilizer.NgZoneStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__stabilizer.NgZoneStabilizer.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone)
  }));
  dart.defineExtensionMethods(src__frontend__stabilizer.NgZoneStabilizer, ['toString']);
  const _rootComponentRef = Symbol('_rootComponentRef');
  src__frontend__fixture.injectFromFixture = function(T, fixture, tokenOrType) {
    return T._check(fixture[_rootComponentRef].injector.get(tokenOrType));
  };
  const _applicationRef = Symbol('_applicationRef');
  const _testStabilizer = Symbol('_testStabilizer');
  const _is_NgTestFixture_default = Symbol('_is_NgTestFixture_default');
  src__frontend__fixture.NgTestFixture$ = dart.generic(T => {
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    class NgTestFixture extends core.Object {
      static new(applicationRef, rootComponentRef, testStabilizer) {
        return new (NgTestFixtureOfT()).__(applicationRef, rootComponentRef, testStabilizer);
      }
      dispose() {
        return async.async(dart.void, (function* dispose() {
          yield this.update();
          this[_rootComponentRef].destroy();
          this[_rootComponentRef].location[$parent][$remove]();
          this[_applicationRef].dispose();
          src__frontend__bed.activeTest = null;
        }).bind(this));
      }
      get rootElement() {
        return this[_rootComponentRef].location;
      }
      update(run) {
        if (run === void 0) run = null;
        return this[_testStabilizer].stabilize({runAndTrackSideEffects: dart.fn(() => {
            if (run != null) {
              FutureOfvoid().sync(dart.fn(() => {
                run(T._check(this[_rootComponentRef].instance));
              }, VoidToNull()));
            }
          }, VoidToNull())});
      }
      get text() {
        return this.rootElement[$text];
      }
      get assertOnlyInstance() {
        return T._check(this[_rootComponentRef].instance);
      }
    }
    (NgTestFixture.__ = function(applicationRef, rootComponentRef, testStabilizer) {
      this[_applicationRef] = applicationRef;
      this[_rootComponentRef] = rootComponentRef;
      this[_testStabilizer] = testStabilizer;
    }).prototype = NgTestFixture.prototype;
    dart.addTypeTests(NgTestFixture);
    NgTestFixture.prototype[_is_NgTestFixture_default] = true;
    dart.setMethodSignature(NgTestFixture, () => ({
      __proto__: dart.getMethods(NgTestFixture.__proto__),
      dispose: dart.fnType(async.Future$(dart.void), []),
      update: dart.fnType(async.Future$(dart.void), [], [dart.fnType(dart.void, [T])])
    }));
    dart.setGetterSignature(NgTestFixture, () => ({
      __proto__: dart.getGetters(NgTestFixture.__proto__),
      rootElement: html.Element,
      text: core.String,
      assertOnlyInstance: T
    }));
    dart.setFieldSignature(NgTestFixture, () => ({
      __proto__: dart.getFields(NgTestFixture.__proto__),
      [_applicationRef]: dart.finalFieldType(src__core__application_ref.ApplicationRef),
      [_rootComponentRef]: dart.finalFieldType(src__core__linker__component_factory.ComponentRef),
      [_testStabilizer]: dart.finalFieldType(src__frontend__stabilizer.NgTestStabilizer)
    }));
    return NgTestFixture;
  });
  src__frontend__fixture.NgTestFixture = src__frontend__fixture.NgTestFixture$();
  dart.addTypeTests(src__frontend__fixture.NgTestFixture, _is_NgTestFixture_default);
  dart.defineLazy(src__frontend__bed, {
    /*src__frontend__bed.activeTest*/get activeTest() {
      return null;
    },
    set activeTest(_) {}
  });
  src__frontend__bed._concat = function(E, a, b) {
    let _ = a[$toList]();
    _[$addAll](b);
    return _;
  };
  src__frontend__bed.disposeAnyRunningTest = function() {
    return async.async(dart.void, function* disposeAnyRunningTest() {
      let t = src__frontend__bed.activeTest;
      return t == null ? null : t.dispose();
    });
  };
  const _createDynamic = Symbol('_createDynamic');
  src__frontend__bed.createDynamicFixture = function(T, bed, type, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    return bed[_createDynamic](type, {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
  };
  src__frontend__bed.createDynamicTestBed = function(T, opts) {
    let host = opts && 'host' in opts ? opts.host : null;
    let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
    let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
    return src__frontend__bed.NgTestBed$(T)._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
  };
  const _host = Symbol('_host');
  const _providers = Symbol('_providers');
  const _stabilizers = Symbol('_stabilizers');
  const _rootInjector = Symbol('_rootInjector');
  const _componentFactory = Symbol('_componentFactory');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  const _usesComponentFactory = Symbol('_usesComponentFactory');
  const _is_NgTestBed_default = Symbol('_is_NgTestBed_default');
  src__frontend__bed.NgTestBed$ = dart.generic(T => {
    let NgTestBedOfT = () => (NgTestBedOfT = dart.constFn(src__frontend__bed.NgTestBed$(T)))();
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    let FutureOfNgTestFixtureOfT = () => (FutureOfNgTestFixtureOfT = dart.constFn(async.Future$(NgTestFixtureOfT())))();
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(T)))();
    let ComponentRefOfTToFutureOfNgTestFixtureOfT = () => (ComponentRefOfTToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [ComponentRefOfT()])))();
    let ComponentFactoryOfT = () => (ComponentFactoryOfT = dart.constFn(src__core__linker__component_factory.ComponentFactory$(T)))();
    let VoidToFutureOfNgTestFixtureOfT = () => (VoidToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [])))();
    class NgTestBed extends core.Object {
      static _defaultHost() {
        let host = html.Element.tag("ng-test-bed");
        html.document.body[$append](host);
        return host;
      }
      static _defaultRootInjector(parent) {
        if (parent === void 0) parent = null;
        return src__di__injector__injector.Injector.empty(src__di__injector__hierarchical.HierarchicalInjector._check(parent));
      }
      static forComponent(T, component, opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : dart.fn(src__frontend__bed.NgTestBed._defaultRootInjector, __ToInjector());
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        if (component == null) {
          dart.throw(new core.ArgumentError.notNull("component"));
        }
        return new (src__frontend__bed.NgTestBed$(T))._useComponentFactory({component: component, rootInjector: rootInjector, host: host, watchAngularLifecycle: watchAngularLifecycle});
      }
      static new(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        return NgTestBedOfT()._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
      }
      static _allowDynamicType(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        return new (NgTestBedOfT()).__({host: host, providers: const$1 || (const$1 = dart.constList([dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader)], core.Object)), stabilizers: dart.test(watchAngularLifecycle) ? src__frontend__bed.NgTestBed._lifecycleStabilizers : const$2 || (const$2 = dart.constList([], InjectorToNgTestStabilizer())), rootInjector: rootInjector});
      }
      get [_usesComponentFactory]() {
        return this[_componentFactory] != null;
      }
      addProviders(providers) {
        if (dart.test(this[_usesComponentFactory])) {
          dart.throw(new core.UnsupportedError.new("Use \"addInjector\" instead"));
        }
        return this.fork(T, {providers: src__frontend__bed._concat(core.Object, this[_providers], providers)});
      }
      addInjector(factory) {
        return this.fork(T, {rootInjector: dart.fn(parent => {
            if (parent === void 0) parent = null;
            return this[_rootInjector](factory(parent));
          }, __ToInjector())});
      }
      addStabilizers(stabilizers) {
        return this.fork(T, {stabilizers: src__frontend__bed._concat(InjectorToNgTestStabilizer(), this[_stabilizers], stabilizers)});
      }
      create(opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        return this[_createDynamic](dart.wrapType(T), {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
      }
      [_createDynamic](type, opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        function _checkForActiveTest() {
          if (src__frontend__bed.activeTest != null) {
            dart.throw(new src__errors__test_already_running.TestAlreadyRunningError.new());
          }
        }
        dart.fn(_checkForActiveTest, VoidTovoid());
        _checkForActiveTest();
        return FutureOfNgTestFixtureOfT().sync(dart.fn(() => {
          _checkForActiveTest();
          let rootInjector = this[_rootInjector];
          if (dart.test(this[_providers][$isNotEmpty])) {
            rootInjector = dart.fn(parent => {
              if (parent === void 0) parent = null;
              return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(this[_providers], this[_rootInjector](parent));
            }, __ToReflectiveInjector());
          }
          return src__bootstrap.bootstrapForTest(T, ComponentFactoryOfT()._check(this[_componentFactory] != null ? this[_componentFactory] : src__core__linker__component_resolver.typeToFactory(type)), this[_host] != null ? this[_host] : src__frontend__bed.NgTestBed._defaultHost(), rootInjector, {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection}).then(NgTestFixtureOfT(), dart.fn(componentRef => async.async(NgTestFixtureOfT(), (function*() {
            _checkForActiveTest();
            let allStabilizers = src__frontend__stabilizer.NgTestStabilizer.all(this[_stabilizers][$map](src__frontend__stabilizer.NgTestStabilizer, dart.fn(s => s(componentRef.injector), FnToNgTestStabilizer())));
            yield allStabilizers.stabilize();
            let testFixture = NgTestFixtureOfT().new(src__core__application_ref.ApplicationRef._check(componentRef.injector.get(dart.wrapType(src__core__application_ref.ApplicationRef))), componentRef, allStabilizers);
            src__frontend__bed.activeTest = testFixture;
            return testFixture;
          }).bind(this)), ComponentRefOfTToFutureOfNgTestFixtureOfT()));
        }, VoidToFutureOfNgTestFixtureOfT()));
      }
      fork(E, opts) {
        dart.checkTypeBound(E, T, 'E');
        let host = opts && 'host' in opts ? opts.host : null;
        let component = opts && 'component' in opts ? opts.component : null;
        let providers = opts && 'providers' in opts ? opts.providers : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let stabilizers = opts && 'stabilizers' in opts ? opts.stabilizers : null;
        return new (src__frontend__bed.NgTestBed$(E)).__({host: host != null ? host : this[_host], providers: providers != null ? providers : this[_providers], stabilizers: stabilizers != null ? stabilizers : this[_stabilizers], rootInjector: rootInjector != null ? rootInjector : this[_rootInjector], component: src__core__linker__component_factory.ComponentFactory$(E)._check(component != null ? component : this[_componentFactory])});
      }
      setComponent(E, component) {
        dart.checkTypeBound(E, T, 'E');
        return this.fork(E, {component: component});
      }
      setHost(host) {
        return this.fork(T, {host: host});
      }
    }
    (NgTestBed.__ = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let stabilizers = opts && 'stabilizers' in opts ? opts.stabilizers : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let component = opts && 'component' in opts ? opts.component : null;
      this[_host] = host;
      this[_providers] = providers[$toList]();
      this[_stabilizers] = stabilizers[$toList]();
      let l = rootInjector;
      this[_rootInjector] = l != null ? l : dart.fn(src__frontend__bed.NgTestBed._defaultRootInjector, __ToInjector());
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    (NgTestBed._useComponentFactory = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let component = opts && 'component' in opts ? opts.component : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : null;
      this[_host] = host;
      this[_providers] = const$ || (const$ = dart.constList([], core.Object));
      this[_stabilizers] = dart.test(watchAngularLifecycle) ? src__frontend__bed.NgTestBed._lifecycleStabilizers : const$0 || (const$0 = dart.constList([], InjectorToNgTestStabilizer()));
      this[_rootInjector] = rootInjector;
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    dart.addTypeTests(NgTestBed);
    NgTestBed.prototype[_is_NgTestBed_default] = true;
    dart.setMethodSignature(NgTestBed, () => ({
      __proto__: dart.getMethods(NgTestBed.__proto__),
      addProviders: dart.fnType(src__frontend__bed.NgTestBed$(T), [core.Iterable$(core.Object)]),
      addInjector: dart.fnType(src__frontend__bed.NgTestBed$(T), [dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])]),
      addStabilizers: dart.fnType(src__frontend__bed.NgTestBed$(T), [core.Iterable$(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector]))]),
      create: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [], {beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [src__di__injector__injector.Injector]), beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T])}),
      [_createDynamic]: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [core.Type], {beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [src__di__injector__injector.Injector]), beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T])}),
      fork: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [], {host: html.Element, component: src__core__linker__component_factory.ComponentFactory$(E), providers: core.Iterable$(core.Object), rootInjector: dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector]), stabilizers: core.Iterable$(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector]))}], E => [T]),
      setComponent: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [src__core__linker__component_factory.ComponentFactory$(E)]], E => [T]),
      setHost: dart.fnType(src__frontend__bed.NgTestBed$(T), [html.Element])
    }));
    dart.setGetterSignature(NgTestBed, () => ({
      __proto__: dart.getGetters(NgTestBed.__proto__),
      [_usesComponentFactory]: core.bool
    }));
    dart.setFieldSignature(NgTestBed, () => ({
      __proto__: dart.getFields(NgTestBed.__proto__),
      [_host]: dart.finalFieldType(html.Element),
      [_providers]: dart.finalFieldType(ListOfObject()),
      [_stabilizers]: dart.finalFieldType(ListOfInjectorToNgTestStabilizer()),
      [_componentFactory]: dart.finalFieldType(ComponentFactoryOfT()),
      [_rootInjector]: dart.finalFieldType(__ToInjector())
    }));
    return NgTestBed;
  });
  src__frontend__bed.NgTestBed = src__frontend__bed.NgTestBed$();
  dart.defineLazy(src__frontend__bed.NgTestBed, {
    /*src__frontend__bed.NgTestBed._lifecycleStabilizers*/get _lifecycleStabilizers() {
      return JSArrayOfInjectorToNgTestStabilizer().of([dart.fn(i => new src__frontend__stabilizer.NgZoneStabilizer.new(src__core__zone__ng_zone.NgZone._check(i.get(dart.wrapType(src__core__zone__ng_zone.NgZone)))), InjectorToNgZoneStabilizer())]);
    }
  });
  dart.addTypeTests(src__frontend__bed.NgTestBed, _is_NgTestBed_default);
  dart.trackLibraries("packages/angular_test/src/bootstrap.ddc", {
    "package:angular_test/src/bootstrap.dart": src__bootstrap,
    "package:angular_test/src/errors/generic_type_missing.dart": src__errors__generic_type_missing,
    "package:angular_test/src/errors/test_already_running.dart": src__errors__test_already_running,
    "package:angular_test/src/errors/will_never_stabilize.dart": src__errors__will_never_stabilize,
    "package:angular_test/src/errors.dart": src__errors,
    "package:angular_test/src/frontend/stabilizer.dart": src__frontend__stabilizer,
    "package:angular_test/src/frontend/fixture.dart": src__frontend__fixture,
    "package:angular_test/src/frontend/bed.dart": src__frontend__bed
  }, '{"version":3,"sourceRoot":"","sources":["bootstrap.dart","errors/generic_type_missing.dart","errors/test_already_running.dart","errors/will_never_stabilize.dart","frontend/stabilizer.dart","frontend/fixture.dart","frontend/bed.dart"],"names":[],"mappings":"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","file":"bootstrap.ddc.js"}');
  // Exports:
  return {
    src__bootstrap: src__bootstrap,
    src__errors__generic_type_missing: src__errors__generic_type_missing,
    src__errors__test_already_running: src__errors__test_already_running,
    src__errors__will_never_stabilize: src__errors__will_never_stabilize,
    src__errors: src__errors,
    src__frontend__stabilizer: src__frontend__stabilizer,
    src__frontend__fixture: src__frontend__fixture,
    src__frontend__bed: src__frontend__bed
  };
});

//# sourceMappingURL=bootstrap.ddc.js.map
