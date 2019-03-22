define(['dart_sdk', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/select', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/selection_input_adapter', 'packages/angular_components/material_input/input_wrapper', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/mixins/highlight_assistant_mixin', 'packages/angular_forms/src/directives', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_input/material_input', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, active_item, template_support, selection_model, id_generator, selection_options, properties, selectable, select, material_select_base, selection_input_adapter, input_wrapper, keyboard_handler_mixin, highlight_assistant_mixin, directives, focus_interface, change_detection, has_renderer, has_factory, material_dropdown_base, popup_hierarchy, alignment, material_input, async_update_scheduler, modules) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const model__ui__template_support = template_support.model__ui__template_support;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__selection__select = select.model__selection__select;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const mixins__selection_input_adapter = selection_input_adapter.mixins__selection_input_adapter;
  const material_input__input_wrapper = input_wrapper.material_input__input_wrapper;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const mixins__highlight_assistant_mixin = highlight_assistant_mixin.mixins__highlight_assistant_mixin;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const material_input__material_input = material_input.material_input__material_input;
  const src__utils__async__disposable_future = async_update_scheduler.src__utils__async__disposable_future;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const _root = Object.create(null);
  const material_input__material_auto_suggest_input = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $firstWhere = dartx.firstWhere;
  const $values = dartx.values;
  const $first = dartx.first;
  const $isEmpty = dartx.isEmpty;
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _cd = Symbol('_cd');
  const _popupSizeDelegate = Symbol('_popupSizeDelegate');
  const _isInitialized = Symbol('_isInitialized');
  const _showPopup = Symbol('_showPopup');
  const _focusPending = Symbol('_focusPending');
  const _input = Symbol('_input');
  const _callback = Symbol('_callback');
  const _inputText = Symbol('_inputText');
  const _inputChange = Symbol('_inputChange');
  const _lastSelectedItem = Symbol('_lastSelectedItem');
  const _lastFilterFuture = Symbol('_lastFilterFuture');
  const _filterScheduled = Symbol('_filterScheduled');
  const _isDisposed = Symbol('_isDisposed');
  const _limit = Symbol('_limit');
  const _popupPositions = Symbol('_popupPositions');
  const _selectionListener = Symbol('_selectionListener');
  const _optionsListener = Symbol('_optionsListener');
  const _showPopupController = Symbol('_showPopupController');
  const _onClear = Symbol('_onClear');
  const _isFocused = Symbol('_isFocused');
  const _onFocus = Symbol('_onFocus');
  const _onBlur = Symbol('_onBlur');
  const _filterSuggestions = Symbol('_filterSuggestions');
  const _setInitialActiveItem = Symbol('_setInitialActiveItem');
  const _setInputText = Symbol('_setInputText');
  const _is_MaterialAutoSuggestInputComponent_default = Symbol('_is_MaterialAutoSuggestInputComponent_default');
  material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent$ = dart.generic(T => {
    let ActiveItemModelOfT = () => (ActiveItemModelOfT = dart.constFn(model__a11y__active_item.ActiveItemModel$(T)))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let MaterialAutoSuggestInputComponentOfT = () => (MaterialAutoSuggestInputComponentOfT = dart.constFn(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let ListOfOptionGroupOfT = () => (ListOfOptionGroupOfT = dart.constFn(core.List$(OptionGroupOfT())))();
    let ListOfOptionGroupOfTToNull = () => (ListOfOptionGroupOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfOptionGroupOfT()])))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    const MaterialSelectBase_SelectionInputAdapter$ = class MaterialSelectBase_SelectionInputAdapter extends material_select__material_select_base.MaterialSelectBase$(T) {};
    (MaterialSelectBase_SelectionInputAdapter$.new = function() {
      mixins__selection_input_adapter.SelectionInputAdapter$(T).new.call(this);
      MaterialSelectBase_SelectionInputAdapter$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_SelectionInputAdapter$.prototype;
    dart.applyMixin(MaterialSelectBase_SelectionInputAdapter$, mixins__selection_input_adapter.SelectionInputAdapter$(T));
    const MaterialSelectBase_MaterialInputWrapper$ = class MaterialSelectBase_MaterialInputWrapper extends MaterialSelectBase_SelectionInputAdapter$ {};
    (MaterialSelectBase_MaterialInputWrapper$.new = function() {
      material_input__input_wrapper.MaterialInputWrapper.new.call(this);
      MaterialSelectBase_MaterialInputWrapper$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialInputWrapper$.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialInputWrapper$, material_input__input_wrapper.MaterialInputWrapper);
    const MaterialSelectBase_KeyboardHandlerMixin$ = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_MaterialInputWrapper$ {};
    (MaterialSelectBase_KeyboardHandlerMixin$.new = function() {
      model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
      MaterialSelectBase_KeyboardHandlerMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_KeyboardHandlerMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
    const MaterialSelectBase_HighlightAssistantMixin$ = class MaterialSelectBase_HighlightAssistantMixin extends MaterialSelectBase_KeyboardHandlerMixin$ {};
    (MaterialSelectBase_HighlightAssistantMixin$.new = function() {
      mixins__highlight_assistant_mixin.HighlightAssistantMixin$(T).new.call(this);
      MaterialSelectBase_HighlightAssistantMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_HighlightAssistantMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_HighlightAssistantMixin$, mixins__highlight_assistant_mixin.HighlightAssistantMixin$(T));
    class MaterialAutoSuggestInputComponent extends MaterialSelectBase_HighlightAssistantMixin$ {
      get popupId() {
        return this[popupId];
      }
      set popupId(value) {
        super.popupId = value;
      }
      get inputId() {
        return this[inputId];
      }
      set inputId(value) {
        super.inputId = value;
      }
      get activeModel() {
        return this[activeModel];
      }
      set activeModel(value) {
        super.activeModel = value;
      }
      get shouldClearInputOnSelection() {
        return this[shouldClearInputOnSelection];
      }
      set shouldClearInputOnSelection(value) {
        this[shouldClearInputOnSelection] = value;
      }
      get shouldClearSelectionOnInput() {
        return this[shouldClearSelectionOnInput];
      }
      set shouldClearSelectionOnInput(value) {
        this[shouldClearSelectionOnInput] = value;
      }
      get closeOnActivate() {
        return this[closeOnActivate];
      }
      set closeOnActivate(value) {
        this[closeOnActivate] = value;
      }
      get hideCheckbox() {
        return this[hideCheckbox];
      }
      set hideCheckbox(value) {
        this[hideCheckbox] = value;
      }
      get enforceSpaceConstraints() {
        return this[enforceSpaceConstraints];
      }
      set enforceSpaceConstraints(value) {
        this[enforceSpaceConstraints] = value;
      }
      get constrainToViewport() {
        return this[constrainToViewport];
      }
      set constrainToViewport(value) {
        this[constrainToViewport] = value;
      }
      get initialActivateSelection() {
        return this[initialActivateSelection];
      }
      set initialActivateSelection(value) {
        this[initialActivateSelection] = value;
      }
      get filterSuggestions() {
        return this[filterSuggestions];
      }
      set filterSuggestions(value) {
        this[filterSuggestions] = value;
      }
      get closeOnEnter() {
        return this[closeOnEnter];
      }
      set closeOnEnter(value) {
        this[closeOnEnter] = value;
      }
      get popupShadowCssClass() {
        return this[popupShadowCssClass];
      }
      set popupShadowCssClass(value) {
        this[popupShadowCssClass] = value;
      }
      get popupMatchInputWidth() {
        return this[popupMatchInputWidth];
      }
      set popupMatchInputWidth(value) {
        this[popupMatchInputWidth] = value;
      }
      get slide() {
        return this[slide];
      }
      set slide(value) {
        this[slide] = value;
      }
      get showClearIcon() {
        return this[showClearIcon];
      }
      set showClearIcon(value) {
        this[showClearIcon] = value;
      }
      get clearIconTooltip() {
        return this[clearIconTooltip];
      }
      set clearIconTooltip(value) {
        this[clearIconTooltip] = value;
      }
      get hasClearIconTooltip() {
        let t = this.clearIconTooltip;
        let l = t == null ? null : t[$isNotEmpty];
        return l != null ? l : false;
      }
      get emptyPlaceholder() {
        return this[emptyPlaceholder];
      }
      set emptyPlaceholder(value) {
        this[emptyPlaceholder] = value;
      }
      set itemRenderer(value) {
        return super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set componentRenderer(value) {
        return super.componentRenderer = value;
      }
      set factoryRenderer(value) {
        return super.factoryRenderer = value;
      }
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      static new(cd, idGenerator, popupSizeDelegate) {
        return new (MaterialAutoSuggestInputComponentOfT()).protected(cd, idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID(), popupSizeDelegate);
      }
      get textChanged() {
        return this[_inputChange].stream;
      }
      get errorText() {
        if (this.error != null) return this.error;
        if ((() => {
          let t = this[_cd];
          let t$ = t == null ? null : t.control;
          return t$ == null ? null : t$.errors;
        })() != null) {
          let errorMap = this[_cd].control.errors;
          let stringValue = errorMap[$values][$firstWhere](dart.fn(v => typeof v == 'string' && v[$isNotEmpty], dynamicTobool()), {orElse: dart.fn(() => null, VoidToNull())});
          if (stringValue != null) return core.String.as(stringValue);
        }
        return null;
      }
      set selection(selection) {
        SelectionModelOfT()._check(selection);
        super.selection = selection;
        if (dart.test(this.isSingleSelect) && dart.test(selection.selectedValues[$isNotEmpty])) {
          this[_lastSelectedItem] = selection.selectedValues[$first];
          if (dart.test(this[_isInitialized])) {
            this.inputText = this.itemRenderer(T._check(this[_lastSelectedItem]));
          }
        }
        let t = this[_selectionListener];
        t == null ? null : t.cancel();
        this[_selectionListener] = selection.selectionChanges.listen(dart.fn(_ => {
          if (dart.test(this.shouldClearInputOnSelection)) {
            this.inputText = "";
          } else if (dart.test(this.isSingleSelect)) {
            let selectedItem = dart.test(selection.selectedValues[$isNotEmpty]) ? selection.selectedValues[$first] : null;
            if (!dart.equals(this[_lastSelectedItem], selectedItem)) {
              this[_lastSelectedItem] = selectedItem;
              this.inputText = this[_lastSelectedItem] != null ? this.itemRenderer(T._check(this[_lastSelectedItem])) : "";
            }
          }
          this.emitSelectionChange();
        }, ListOfSelectionChangeRecordOfTToNull()));
      }
      get selection() {
        return super.selection;
      }
      set optionsInput(value) {
        super.optionsInput = value;
      }
      set options(options) {
        SelectionOptionsOfT()._check(options);
        if (options == null) return;
        super.options = options;
        this[_filterSuggestions]();
        this.activeModel.items = options.optionsList;
        let t = this[_optionsListener];
        t == null ? null : t.cancel();
        this[_optionsListener] = options.stream.listen(dart.fn(_ => {
          this.activeModel.items = options.optionsList;
          this[_setInitialActiveItem]();
        }, ListOfOptionGroupOfTToNull()));
      }
      get options() {
        return super.options;
      }
      set limit(value) {
        let newLimit = utils__angular__properties__properties.getInt(value);
        if (this[_limit] != newLimit) {
          this[_limit] = newLimit;
          this[_filterSuggestions]();
        }
      }
      get visibleSuggestionGroups() {
        return this.options.optionGroups;
      }
      get hasOptions() {
        return this.options.optionsList[$isNotEmpty];
      }
      get showLoadingSpinner() {
        return dart.test(this.loading) && dart.test(this.options.optionsList[$isEmpty]);
      }
      get labelRenderer() {
        return this[labelRenderer];
      }
      set labelRenderer(value) {
        this[labelRenderer] = value;
      }
      get labelFactory() {
        return this[labelFactory];
      }
      set labelFactory(value) {
        this[labelFactory] = value;
      }
      get hasCustomLabelRenderer() {
        return this.labelRenderer != null || this.labelFactory != null;
      }
      isOptionDisabled(item) {
        return !dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(core.Object, this.options, item, true));
      }
      get highlightOptions() {
        return this[highlightOptions];
      }
      set highlightOptions(value) {
        this[highlightOptions] = value;
      }
      get componentRenderer() {
        return dart.test(this.highlightOptions) && super.componentRenderer == null && super.factoryRenderer == null ? this.highlightComponentRenderer : super.componentRenderer;
      }
      get factoryRenderer() {
        return dart.test(this.highlightOptions) && super.factoryRenderer == null && super.componentRenderer == null ? this.highlightFactoryRenderer : super.factoryRenderer;
      }
      get showPopupChange() {
        return this[_showPopupController].stream;
      }
      get showPopup() {
        return dart.test(this[_showPopup]) && !dart.test(this.disabled);
      }
      set showPopup(value) {
        if (value != this[_showPopup]) {
          this[_showPopup] = value;
          this[_showPopupController].add(this[_showPopup]);
          this[_setInitialActiveItem]();
        }
        if (!dart.test(this[_showPopup]) && !dart.test(this[_isFocused])) {
          this[_onBlur].add(null);
        }
      }
      get loading() {
        return this[loading];
      }
      set loading(value) {
        this[loading] = value;
      }
      get showEmptyPlaceholder() {
        return this.emptyPlaceholder[$isNotEmpty] && dart.test(this.options.optionsList[$isEmpty]) && !dart.test(this.showLoadingSpinner);
      }
      get popupPositions() {
        return this[_popupPositions];
      }
      set popupPositions(positions) {
        if ((positions == null ? null : positions[$isNotEmpty]) === true) {
          this[_popupPositions] = positions;
        } else {
          this[_popupPositions] = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
        }
      }
      get inputText() {
        return this[_inputText];
      }
      set inputText(inputText) {
        if (dart.test(this[_setInputText](inputText)) && this[_callback] != null) {
          this[_callback](this[_inputText]);
        }
      }
      [_setInputText](inputText) {
        let t = inputText;
        t == null ? inputText = "" : t;
        if (inputText == this[_inputText]) {
          return false;
        }
        if (dart.test(this.shouldClearSelectionOnInput) && !dart.test(this.shouldClearInputOnSelection) && this[_lastSelectedItem] != null) {
          if (inputText != this.itemRenderer(T._check(this[_lastSelectedItem]))) {
            this.selection.deselect(T._check(this[_lastSelectedItem]));
            this[_lastSelectedItem] = null;
          }
        }
        this[_inputText] = inputText;
        this[_inputChange].add(inputText);
        this[_filterSuggestions]();
        return true;
      }
      get onClear() {
        return this[_onClear].stream;
      }
      onClearIcon() {
        this[_onClear].add(null);
        this.showPopup = false;
        this.inputText = "";
      }
      get onFocus() {
        return this[_onFocus].stream;
      }
      handleFocus(event) {
        if (dart.test(this[_isFocused])) return;
        this.showPopup = true;
        this[_onFocus].add(event);
        this[_isFocused] = true;
      }
      get onBlur() {
        return this[_onBlur].stream;
      }
      handleBlur(event) {
        this[_isFocused] = false;
        if ((!dart.test(this.showPopup) || !dart.test(this.hasOptions)) && this[_onBlur] != null) {
          this[_onBlur].add(null);
        }
      }
      [_filterSuggestions]() {
        if (dart.test(this[_filterScheduled]) || !dart.test(this.filterSuggestions) || !model__selection__select.Filterable.is(this.options)) {
          return;
        }
        this[_filterScheduled] = true;
        async.scheduleMicrotask(dart.fn(() => {
          if (dart.test(this[_isDisposed])) return;
          this[_filterScheduled] = false;
          let t = this[_lastFilterFuture];
          t == null ? null : t.dispose();
          this[_lastFilterFuture] = model__selection__select.Filterable.as(this.options).filter(this[_inputText], {limit: this[_limit]});
        }, VoidToNull()));
      }
      [_setInitialActiveItem]() {
        if (!dart.test(this.showPopup) || !dart.test(this.initialActivateSelection)) return;
        if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
          this.activeModel.activate(null);
        } else if (this.activeModel.activeItem == null || !dart.test(this.selection.isSelected(this.activeModel.activeItem))) {
          this.activeModel.activate(this.selection.selectedValues[$first]);
        }
      }
      handleEnterKey(event) {
        if (!dart.test(this.showPopup)) {
          this.showPopup = true;
        } else {
          let item = this.activeModel.activeItem;
          if (item != null) {
            if (!dart.test(this.isOptionDisabled(item))) {
              this.onListItemSelected(item);
            }
          } else if (dart.test(this.closeOnEnter)) {
            this.showPopup = false;
          }
        }
      }
      get deselectOnActivate() {
        return this.isMultiSelect;
      }
      onListItemSelected(item) {
        if (dart.test(this.isSingleSelect)) {
          this.showPopup = false;
        }
        if (!dart.test(this.selection.isSelected(T._check(item)))) {
          if (!dart.test(this.isOptionDisabled(item))) {
            this.selection.select(T._check(item));
          }
        } else if (dart.test(this.deselectOnActivate)) {
          this.selection.deselect(T._check(item));
        }
      }
      handleUpKey(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activatePrevious();
        }
      }
      handleDownKey(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateNext();
        }
      }
      handlePageUp(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateFirst();
        }
      }
      handlePageDown(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateLast();
        }
      }
      handleEscapeKey(event) {
        if (dart.test(this.showPopup)) {
          this.showPopup = false;
          event.stopPropagation();
          this[_isFocused] = true;
          this.focus();
        }
      }
      call(_) {
        return null;
      }
      writeValue(newValue) {
        this[_setInputText](core.String.as(newValue));
      }
      registerOnChange(callback) {
        this[_callback] = StringToString().as(callback);
      }
      registerOnTouched(_) {}
      set input(input) {
        this[_input] = input;
        if (dart.test(this[_focusPending])) {
          this[_focusPending] = false;
          this[_input].focus();
        }
      }
      focus() {
        if (this[_input] == null) {
          this[_focusPending] = true;
        } else {
          this[_input].focus();
        }
      }
      ngOnInit() {
        this[_isInitialized] = true;
        async.scheduleMicrotask(dart.fn(() => {
          if (this.inputText[$isEmpty] && this[_lastSelectedItem] != null) {
            this[_setInputText](this.itemRenderer(T._check(this[_lastSelectedItem])));
          }
        }, VoidToNull()));
      }
      ngOnDestroy() {
        this[_isDisposed] = true;
        let t = this[_selectionListener];
        t == null ? null : t.cancel();
        let t$ = this[_optionsListener];
        t$ == null ? null : t$.cancel();
        let t$0 = this[_lastFilterFuture];
        t$0 == null ? null : t$0.dispose();
      }
      get autoDismiss() {
        return this[autoDismiss];
      }
      set autoDismiss(value) {
        this[autoDismiss] = value;
      }
      close() {
        this.showPopup = false;
      }
      open() {
        this.showPopup = true;
      }
      toggle() {
        this.showPopup = !dart.test(this.showPopup);
      }
      getMinHeight(positionY, viewportHeight) {
        return this[_popupSizeDelegate] == null ? null : this[_popupSizeDelegate].getMinHeight(positionY, viewportHeight);
      }
      getMinWidth(positionX, viewportWidth) {
        return this[_popupSizeDelegate] == null ? null : this[_popupSizeDelegate].getMinWidth(positionX, viewportWidth);
      }
      getMaxHeight(positionY, viewportHeight) {
        if (this[_popupSizeDelegate] != null) {
          return this[_popupSizeDelegate].getMaxHeight(positionY, viewportHeight);
        } else {
          return 400;
        }
      }
      getMaxWidth(positionX, viewportWidth) {
        if (this[_popupSizeDelegate] != null) {
          return this[_popupSizeDelegate].getMaxWidth(positionX, viewportWidth);
        } else {
          return 448;
        }
      }
      onDisabledChanged(isDisabled) {
        this.disabled = isDisabled;
      }
    }
    (MaterialAutoSuggestInputComponent.protected = function(cd, idGenerator, popupSizeDelegate) {
      if (popupSizeDelegate === void 0) popupSizeDelegate = null;
      this[_isInitialized] = false;
      this[shouldClearInputOnSelection] = false;
      this[shouldClearSelectionOnInput] = true;
      this[closeOnActivate] = true;
      this[hideCheckbox] = false;
      this[enforceSpaceConstraints] = true;
      this[constrainToViewport] = false;
      this[_showPopup] = false;
      this[_focusPending] = false;
      this[_input] = null;
      this[_callback] = null;
      this[_inputText] = "";
      this[_inputChange] = StreamControllerOfString().broadcast({sync: true});
      this[_lastSelectedItem] = null;
      this[_lastFilterFuture] = null;
      this[_filterScheduled] = false;
      this[_isDisposed] = false;
      this[initialActivateSelection] = false;
      this[_limit] = 10;
      this[filterSuggestions] = true;
      this[closeOnEnter] = false;
      this[popupShadowCssClass] = "";
      this[popupMatchInputWidth] = false;
      this[_popupPositions] = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
      this[_selectionListener] = null;
      this[_optionsListener] = null;
      this[slide] = null;
      this[showClearIcon] = false;
      this[clearIconTooltip] = null;
      this[emptyPlaceholder] = "";
      this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
      this[labelRenderer] = null;
      this[labelFactory] = null;
      this[highlightOptions] = true;
      this[_showPopupController] = StreamControllerOfbool().broadcast({sync: true});
      this[loading] = false;
      this[_onClear] = StreamControllerOfvoid().broadcast({sync: true});
      this[_isFocused] = false;
      this[_onFocus] = StreamControllerOfFocusEvent().broadcast({sync: true});
      this[_onBlur] = StreamControllerOfvoid().broadcast({sync: true});
      this[autoDismiss] = true;
      this[_cd] = cd;
      this[_popupSizeDelegate] = popupSizeDelegate;
      this[activeModel] = new (ActiveItemModelOfT()).new(idGenerator, {loop: true});
      this[popupId] = idGenerator.nextId();
      this[inputId] = idGenerator.nextId();
      MaterialAutoSuggestInputComponent.__proto__.new.call(this);
      if (this[_cd] != null) {
        this[_cd].valueAccessor = this;
      }
      this.selection = SelectionModelOfT().single();
    }).prototype = MaterialAutoSuggestInputComponent.prototype;
    dart.addTypeTests(MaterialAutoSuggestInputComponent);
    MaterialAutoSuggestInputComponent.prototype[_is_MaterialAutoSuggestInputComponent_default] = true;
    const popupId = Symbol("MaterialAutoSuggestInputComponent.popupId");
    const inputId = Symbol("MaterialAutoSuggestInputComponent.inputId");
    const activeModel = Symbol("MaterialAutoSuggestInputComponent.activeModel");
    const shouldClearInputOnSelection = Symbol("MaterialAutoSuggestInputComponent.shouldClearInputOnSelection");
    const shouldClearSelectionOnInput = Symbol("MaterialAutoSuggestInputComponent.shouldClearSelectionOnInput");
    const closeOnActivate = Symbol("MaterialAutoSuggestInputComponent.closeOnActivate");
    const hideCheckbox = Symbol("MaterialAutoSuggestInputComponent.hideCheckbox");
    const enforceSpaceConstraints = Symbol("MaterialAutoSuggestInputComponent.enforceSpaceConstraints");
    const constrainToViewport = Symbol("MaterialAutoSuggestInputComponent.constrainToViewport");
    const initialActivateSelection = Symbol("MaterialAutoSuggestInputComponent.initialActivateSelection");
    const filterSuggestions = Symbol("MaterialAutoSuggestInputComponent.filterSuggestions");
    const closeOnEnter = Symbol("MaterialAutoSuggestInputComponent.closeOnEnter");
    const popupShadowCssClass = Symbol("MaterialAutoSuggestInputComponent.popupShadowCssClass");
    const popupMatchInputWidth = Symbol("MaterialAutoSuggestInputComponent.popupMatchInputWidth");
    const slide = Symbol("MaterialAutoSuggestInputComponent.slide");
    const showClearIcon = Symbol("MaterialAutoSuggestInputComponent.showClearIcon");
    const clearIconTooltip = Symbol("MaterialAutoSuggestInputComponent.clearIconTooltip");
    const emptyPlaceholder = Symbol("MaterialAutoSuggestInputComponent.emptyPlaceholder");
    const trackByIndexFn = Symbol("MaterialAutoSuggestInputComponent.trackByIndexFn");
    const labelRenderer = Symbol("MaterialAutoSuggestInputComponent.labelRenderer");
    const labelFactory = Symbol("MaterialAutoSuggestInputComponent.labelFactory");
    const highlightOptions = Symbol("MaterialAutoSuggestInputComponent.highlightOptions");
    const loading = Symbol("MaterialAutoSuggestInputComponent.loading");
    const autoDismiss = Symbol("MaterialAutoSuggestInputComponent.autoDismiss");
    MaterialAutoSuggestInputComponent[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, focus__focus_interface.Focusable, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, HasRendererOfT(), HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic(), mixins__material_dropdown_base.DropdownHandle, src__laminate__popup__popup_size_provider.PopupSizeProvider];
    dart.setMethodSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getMethods(MaterialAutoSuggestInputComponent.__proto__),
      isOptionDisabled: dart.fnType(core.bool, [core.Object]),
      [_setInputText]: dart.fnType(core.bool, [core.String]),
      onClearIcon: dart.fnType(dart.void, []),
      handleFocus: dart.fnType(dart.void, [html.FocusEvent]),
      handleBlur: dart.fnType(dart.void, [html.FocusEvent]),
      [_filterSuggestions]: dart.fnType(dart.void, []),
      [_setInitialActiveItem]: dart.fnType(dart.void, []),
      handleEnterKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      onListItemSelected: dart.fnType(dart.void, [dart.dynamic]),
      handleUpKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleDownKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handlePageUp: dart.fnType(dart.void, [html.KeyboardEvent]),
      handlePageDown: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleEscapeKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      call: dart.fnType(dart.dynamic, [dart.dynamic]),
      writeValue: dart.fnType(dart.void, [dart.dynamic]),
      registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})]),
      registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
      focus: dart.fnType(dart.void, []),
      ngOnInit: dart.fnType(dart.void, []),
      ngOnDestroy: dart.fnType(dart.void, []),
      close: dart.fnType(dart.void, []),
      open: dart.fnType(dart.void, []),
      toggle: dart.fnType(dart.void, []),
      getMinHeight: dart.fnType(core.num, [core.num, core.num]),
      getMinWidth: dart.fnType(core.num, [core.num, core.num]),
      getMaxHeight: dart.fnType(core.num, [core.num, core.num]),
      getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
      onDisabledChanged: dart.fnType(dart.void, [core.bool])
    }));
    dart.setGetterSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getGetters(MaterialAutoSuggestInputComponent.__proto__),
      hasClearIconTooltip: core.bool,
      textChanged: async.Stream$(core.String),
      errorText: core.String,
      visibleSuggestionGroups: core.List$(model__selection__selection_options.OptionGroup),
      hasOptions: core.bool,
      showLoadingSpinner: core.bool,
      hasCustomLabelRenderer: core.bool,
      showPopupChange: async.Stream$(core.bool),
      showPopup: core.bool,
      showEmptyPlaceholder: core.bool,
      popupPositions: core.List$(laminate__enums__alignment.RelativePosition),
      inputText: core.String,
      onClear: async.Stream$(dart.void),
      onFocus: async.Stream$(html.FocusEvent),
      onBlur: async.Stream$(dart.void),
      deselectOnActivate: core.bool
    }));
    dart.setSetterSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getSetters(MaterialAutoSuggestInputComponent.__proto__),
      limit: dart.dynamic,
      showPopup: core.bool,
      popupPositions: core.List$(laminate__enums__alignment.RelativePosition),
      inputText: core.String,
      input: material_input__material_input.MaterialInputComponent
    }));
    dart.setFieldSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getFields(MaterialAutoSuggestInputComponent.__proto__),
      popupId: dart.finalFieldType(core.String),
      inputId: dart.finalFieldType(core.String),
      activeModel: dart.finalFieldType(ActiveItemModelOfT()),
      [_isInitialized]: dart.fieldType(core.bool),
      shouldClearInputOnSelection: dart.fieldType(core.bool),
      shouldClearSelectionOnInput: dart.fieldType(core.bool),
      closeOnActivate: dart.fieldType(core.bool),
      hideCheckbox: dart.fieldType(core.bool),
      enforceSpaceConstraints: dart.fieldType(core.bool),
      constrainToViewport: dart.fieldType(core.bool),
      [_showPopup]: dart.fieldType(core.bool),
      [_focusPending]: dart.fieldType(core.bool),
      [_input]: dart.fieldType(material_input__material_input.MaterialInputComponent),
      [_callback]: dart.fieldType(StringToString()),
      [_inputText]: dart.fieldType(core.String),
      [_inputChange]: dart.finalFieldType(StreamControllerOfString()),
      [_lastSelectedItem]: dart.fieldType(core.Object),
      [_lastFilterFuture]: dart.fieldType(src__utils__async__disposable_future.DisposableFuture),
      [_filterScheduled]: dart.fieldType(core.bool),
      [_isDisposed]: dart.fieldType(core.bool),
      initialActivateSelection: dart.fieldType(core.bool),
      [_limit]: dart.fieldType(core.int),
      filterSuggestions: dart.fieldType(core.bool),
      closeOnEnter: dart.fieldType(core.bool),
      popupShadowCssClass: dart.fieldType(core.String),
      popupMatchInputWidth: dart.fieldType(core.bool),
      [_popupPositions]: dart.fieldType(ListOfRelativePosition()),
      [_selectionListener]: dart.fieldType(async.StreamSubscription),
      [_optionsListener]: dart.fieldType(async.StreamSubscription),
      slide: dart.fieldType(core.String),
      showClearIcon: dart.fieldType(core.bool),
      clearIconTooltip: dart.fieldType(core.String),
      emptyPlaceholder: dart.fieldType(core.String),
      trackByIndexFn: dart.finalFieldType(core.Function),
      [_popupSizeDelegate]: dart.finalFieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
      [_cd]: dart.fieldType(src__directives__ng_control.NgControl),
      labelRenderer: dart.fieldType(dynamicToType()),
      labelFactory: dart.fieldType(dynamicToComponentFactory()),
      highlightOptions: dart.fieldType(core.bool),
      [_showPopupController]: dart.finalFieldType(StreamControllerOfbool()),
      loading: dart.fieldType(core.bool),
      [_onClear]: dart.finalFieldType(StreamControllerOfvoid()),
      [_isFocused]: dart.fieldType(core.bool),
      [_onFocus]: dart.finalFieldType(StreamControllerOfFocusEvent()),
      [_onBlur]: dart.finalFieldType(StreamControllerOfvoid()),
      autoDismiss: dart.fieldType(core.bool)
    }));
    return MaterialAutoSuggestInputComponent;
  });
  material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent = material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent$();
  dart.defineLazy(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, {
    /*material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions*/get _defaultPopupPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomRight, laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopRight], laminate__enums__alignment.RelativePosition);
    }
  });
  dart.addTypeTests(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, _is_MaterialAutoSuggestInputComponent_default);
  dart.trackLibraries("packages/angular_components/material_input/material_auto_suggest_input.ddc", {
    "package:angular_components/material_input/material_auto_suggest_input.dart": material_input__material_auto_suggest_input
  }, '{"version":3,"sourceRoot":"","sources":["material_auto_suggest_input.dart"],"names":[],"mappings":"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","file":"material_auto_suggest_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_auto_suggest_input: material_input__material_auto_suggest_input
  };
});

//# sourceMappingURL=material_auto_suggest_input.ddc.js.map
