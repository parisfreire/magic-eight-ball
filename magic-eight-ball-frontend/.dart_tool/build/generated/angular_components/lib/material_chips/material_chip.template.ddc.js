define(['dart_sdk', 'packages/angular_components/material_chips/material_chip.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_chips/material_chip', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_chip$46scss$46css, view_type, change_detection, material_chip, modules, button_decorator, button_decorator$, has_renderer, angular, focus, selection_model, has_renderer$, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chips__material_chip$46scss$46css$46shim = material_chip$46scss$46css.material_chips__material_chip$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_chips__material_chip = material_chip.material_chips__material_chip;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const _root = Object.create(null);
  const material_chips__material_chip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $createElementNS = dartx.createElementNS;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewAndintToAppViewOfMaterialChipComponentOfT = () => (AppViewAndintToAppViewOfMaterialChipComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialChipComponent = () => (ComponentFactoryOfMaterialChipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_chips__material_chip.MaterialChipComponent)))();
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template.styles$MaterialChipComponent*/get styles$MaterialChipComponent() {
      return [material_chips__material_chip$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  const _is_ViewMaterialChipComponent0_default = Symbol('_is_ViewMaterialChipComponent0_default');
  material_chips__material_chip$46template.ViewMaterialChipComponent0$ = dart.generic(T => {
    let MaterialChipComponentOfT = () => (MaterialChipComponentOfT = dart.constFn(material_chips__material_chip.MaterialChipComponent$(T)))();
    let AppViewOfMaterialChipComponentOfT = () => (AppViewOfMaterialChipComponentOfT = dart.constFn(src__core__linker__app_view.AppView$(MaterialChipComponentOfT())))();
    let dynamicAnddynamicToAppViewOfMaterialChipComponentOfT = () => (dynamicAnddynamicToAppViewOfMaterialChipComponentOfT = dart.constFn(dart.fnType(AppViewOfMaterialChipComponentOfT(), [dart.dynamic, dart.dynamic])))();
    class ViewMaterialChipComponent0 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent$(T)) {
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](_anchor_0);
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chips__material_chip$46template.viewFactory_MaterialChipComponent1(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialChipComponentOfT()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let doc = html.document;
        this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
        this[_el_1].className = "content";
        this.addShimC(this[_el_1]);
        this[_text_2] = html.Text.new("");
        this[_el_1][$append](this[_text_2]);
        let _text_3 = html.Text.new(" ");
        this[_el_1][$append](_text_3);
        this.project(this[_el_1], 1);
        let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
        parentRenderNode[$append](_anchor_4);
        this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_chips__material_chip$46template.viewFactory_MaterialChipComponent2(T, src__core__linker__app_view.AppView._check(parentView), core.int._check(parentIndex)), dynamicAnddynamicToAppViewOfMaterialChipComponentOfT()));
        this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.hasLeftIcon;
        this[_NgIf_4_9].ngIf = _ctx.removable;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        let currVal_1 = _ctx.uuid;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this.setProp(this[_el_1], "id", currVal_1);
          this[_expr_1] = currVal_1;
        }
        let l = _ctx.label;
        let currVal_2 = l != null ? l : "";
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_text_2][$text] = currVal_2;
          this[_expr_2] = currVal_2;
        }
      }
      destroyInternal() {
        let t = this[_appEl_0];
        t == null ? null : t.destroyNestedViews();
        let t$ = this[_appEl_4];
        t$ == null ? null : t$.destroyNestedViews();
      }
    }
    (ViewMaterialChipComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_el_1] = null;
      this[_text_2] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      ViewMaterialChipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-chip"));
      this.rootEl.className = material_chips__material_chip.MaterialChipComponent.hostClass;
      let t = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
      t == null ? material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chip.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_chips__material_chip$46template.styles$MaterialChipComponent) : t;
      this.setupComponentType(material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType);
    }).prototype = ViewMaterialChipComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipComponent0);
    ViewMaterialChipComponent0.prototype[_is_ViewMaterialChipComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialChipComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialChipComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialChipComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipComponent0.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_el_1]: dart.fieldType(html.DivElement),
      [_text_2]: dart.fieldType(html.Text),
      [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialChipComponent0;
  });
  material_chips__material_chip$46template.ViewMaterialChipComponent0 = material_chips__material_chip$46template.ViewMaterialChipComponent0$();
  dart.defineLazy(material_chips__material_chip$46template.ViewMaterialChipComponent0, {
    /*material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  dart.addTypeTests(material_chips__material_chip$46template.ViewMaterialChipComponent0, _is_ViewMaterialChipComponent0_default);
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent0 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chip$46template.ViewMaterialChipComponent0$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialChipComponent1_default = Symbol('_is__ViewMaterialChipComponent1_default');
  material_chips__material_chip$46template._ViewMaterialChipComponent1$ = dart.generic(T => {
    class _ViewMaterialChipComponent1 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        _el_0.className = "left-icon";
        this.addShimC(html.HtmlElement._check(_el_0));
        this.project(_el_0, 0);
        this.init0(_el_0);
      }
    }
    (_ViewMaterialChipComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialChipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
    }).prototype = _ViewMaterialChipComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent1);
    _ViewMaterialChipComponent1.prototype[_is__ViewMaterialChipComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialChipComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent$(T)), [])
    }));
    return _ViewMaterialChipComponent1;
  });
  material_chips__material_chip$46template._ViewMaterialChipComponent1 = material_chips__material_chip$46template._ViewMaterialChipComponent1$();
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponent1, _is__ViewMaterialChipComponent1_default);
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent1 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chip$46template._ViewMaterialChipComponent1$(T)).new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _is__ViewMaterialChipComponent2_default = Symbol('_is__ViewMaterialChipComponent2_default');
  material_chips__material_chip$46template._ViewMaterialChipComponent2$ = dart.generic(T => {
    class _ViewMaterialChipComponent2 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
        this.createAttr(this[_el_0], "buttonDecorator", "");
        this.createAttr(this[_el_0], "class", "delete-icon");
        this.createAttr(this[_el_0], "height", "24");
        this.createAttr(this[_el_0], "viewBox", "0 0 24 24");
        this.createAttr(this[_el_0], "width", "24");
        this.createAttr(this[_el_0], "xmlns", "http://www.w3.org/2000/svg");
        this.addShimE(this[_el_0]);
        this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
        let _el_1 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
        this[_el_0][$append](_el_1);
        this.createAttr(_el_1, "d", "M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n               13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n               3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z");
        this.addShimE(_el_1);
        this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this.ctx, 'removeChip')));
        this.init([this[_el_0]], [subscription_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_ButtonDirective_0_5].instance.ngOnInit();
        }
        if (firstCheck) {
          if (!(material_chips__material_chip.MaterialChipComponent.chipDeleteButtonMessage == null)) {
            this.setAttr(this[_el_0], "aria-label", material_chips__material_chip.MaterialChipComponent.chipDeleteButtonMessage);
          }
        }
        let currVal_1 = _ctx.uuid;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this.setAttr(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      }
    }
    (_ViewMaterialChipComponent2.new = function(parentView, parentIndex) {
      this[_el_0] = null;
      this[_ButtonDirective_0_5] = null;
      this[_expr_1] = null;
      _ViewMaterialChipComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.componentType = material_chips__material_chip$46template.ViewMaterialChipComponent0._renderType;
    }).prototype = _ViewMaterialChipComponent2.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent2);
    _ViewMaterialChipComponent2.prototype[_is__ViewMaterialChipComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialChipComponent2.__proto__),
      [_el_0]: dart.fieldType(html.Element),
      [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialChipComponent2;
  });
  material_chips__material_chip$46template._ViewMaterialChipComponent2 = material_chips__material_chip$46template._ViewMaterialChipComponent2$();
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponent2, _is__ViewMaterialChipComponent2_default);
  material_chips__material_chip$46template.viewFactory_MaterialChipComponent2 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chip$46template._ViewMaterialChipComponent2$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template.styles$MaterialChipComponentHost*/get styles$MaterialChipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialChipComponent_0_5 = Symbol('_MaterialChipComponent_0_5');
  const _is__ViewMaterialChipComponentHost0_default = Symbol('_is__ViewMaterialChipComponentHost0_default');
  material_chips__material_chip$46template._ViewMaterialChipComponentHost0$ = dart.generic(T => {
    let ViewMaterialChipComponent0OfT = () => (ViewMaterialChipComponent0OfT = dart.constFn(material_chips__material_chip$46template.ViewMaterialChipComponent0$(T)))();
    let MaterialChipComponentOfT = () => (MaterialChipComponentOfT = dart.constFn(material_chips__material_chip.MaterialChipComponent$(T)))();
    let ComponentRefOfMaterialChipComponentOfT = () => (ComponentRefOfMaterialChipComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialChipComponentOfT())))();
    class _ViewMaterialChipComponentHost0 extends src__core__linker__app_view.AppView$(material_chips__material_chip.MaterialChipComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialChipComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialChipComponent_0_5] = new (MaterialChipComponentOfT()).new(this.rootEl);
        this[_compView_0].create(this[_MaterialChipComponent_0_5], this.projectableNodes);
        this.init0(this.rootEl);
        return new (ComponentRefOfMaterialChipComponentOfT()).new(0, this, this.rootEl, this[_MaterialChipComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
          return this[_MaterialChipComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let changed = false;
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        let t = this[_compView_0];
        t == null ? null : t.destroy();
      }
    }
    (_ViewMaterialChipComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipComponent_0_5] = null;
      _ViewMaterialChipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialChipComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipComponentHost0);
    _ViewMaterialChipComponentHost0.prototype[_is__ViewMaterialChipComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialChipComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chip.MaterialChipComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialChipComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialChipComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialChipComponent0OfT()),
      [_MaterialChipComponent_0_5]: dart.fieldType(MaterialChipComponentOfT())
    }));
    return _ViewMaterialChipComponentHost0;
  });
  material_chips__material_chip$46template._ViewMaterialChipComponentHost0 = material_chips__material_chip$46template._ViewMaterialChipComponentHost0$();
  dart.addTypeTests(material_chips__material_chip$46template._ViewMaterialChipComponentHost0, _is__ViewMaterialChipComponentHost0_default);
  material_chips__material_chip$46template.viewFactory_MaterialChipComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chip$46template._ViewMaterialChipComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template._MaterialChipComponentNgFactory*/get _MaterialChipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialChipComponent()).new("material-chip", dart.gbind(dart.fn(material_chips__material_chip$46template.viewFactory_MaterialChipComponentHost0, AppViewAndintToAppViewOfMaterialChipComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_chips__material_chip$46template, {
    get MaterialChipComponentNgFactory() {
      return material_chips__material_chip$46template._MaterialChipComponentNgFactory;
    }
  });
  dart.defineLazy(material_chips__material_chip$46template, {
    /*material_chips__material_chip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_chips__material_chip$46template.initReflector = function() {
    if (dart.test(material_chips__material_chip$46template._visited)) {
      return;
    }
    material_chips__material_chip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_chips__material_chip.MaterialChipComponent), material_chips__material_chip$46template.MaterialChipComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.template.ddc", {
    "package:angular_components/material_chips/material_chip.template.dart": material_chips__material_chip$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.template.dart"],"names":[],"mappings":"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","file":"material_chip.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip$46template: material_chips__material_chip$46template
  };
});

//# sourceMappingURL=material_chip.template.ddc.js.map
