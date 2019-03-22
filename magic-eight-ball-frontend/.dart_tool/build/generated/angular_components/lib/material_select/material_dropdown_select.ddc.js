define(['dart_sdk', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/mixins/selection_input_adapter', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_select/shift_click_selection', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/dropdown_button'], function(dart_sdk, active_item, css, id_generator, template_support, alignment, selection_options, selection_model, selectable, material_select_base, material_dropdown_base, selection_input_adapter, button_wrapper, track_layout_changes, keyboard_handler_mixin, shift_click_selection, popup_hierarchy, change_detection, modules, dropdown_button) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const utils__angular__css__css = css.utils__angular__css__css;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__ui__template_support = template_support.model__ui__template_support;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const mixins__selection_input_adapter = selection_input_adapter.mixins__selection_input_adapter;
  const mixins__button_wrapper = button_wrapper.mixins__button_wrapper;
  const mixins__track_layout_changes = track_layout_changes.mixins__track_layout_changes;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const material_select__shift_click_selection = shift_click_selection.material_select__shift_click_selection;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detection_util = change_detection.src__core__change_detection__change_detection_util;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const _root = Object.create(null);
  const material_select__material_dropdown_select = Object.create(_root);
  const $classes = dartx.classes;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $first = dartx.first;
  const $insert = dartx.insert;
  const $isEmpty = dartx.isEmpty;
  const $containsKey = dartx.containsKey;
  const $single = dartx.single;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $_set = dartx._set;
  const $startsWith = dartx.startsWith;
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let ItemRenderer = () => (ItemRenderer = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let LinkedMapOfdynamic$String = () => (LinkedMapOfdynamic$String = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, core.String)))();
  let dynamicAndStringTobool = () => (dynamicAndStringTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic, core.String])))();
  let IdentityMapOfint$String = () => (IdentityMapOfint$String = dart.constFn(_js_helper.IdentityMap$(core.int, core.String)))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _popupSizeDelegate = Symbol('_popupSizeDelegate');
  const _optionsListener = Symbol('_optionsListener');
  const _selectionListener = Symbol('_selectionListener');
  const _deselectOnActivate = Symbol('_deselectOnActivate');
  const _ariaActiveDescendant = Symbol('_ariaActiveDescendant');
  const _focus = Symbol('_focus');
  const _blur = Symbol('_blur');
  const _setInitialActiveItem = Symbol('_setInitialActiveItem');
  const _updateActiveModel = Symbol('_updateActiveModel');
  const _handleNavigationKey = Symbol('_handleNavigationKey');
  const _handleKeyboardTrigger = Symbol('_handleKeyboardTrigger');
  const _enteredKeys = Symbol('_enteredKeys');
  const _charCodeToString = Symbol('_charCodeToString');
  material_select__material_dropdown_select.ActivateItemOnKeyPressMixin = class ActivateItemOnKeyPressMixin extends core.Object {
    activateOnKeyPress(activeModel, charCode, options, itemRenderer, selection) {
      if (itemRenderer == null || options == null) return;
      let key = this[_charCodeToString](charCode);
      let optionsList = options.optionsList;
      let searchMap = new (LinkedMapOfdynamic$String()).new();
      let startsWith = (option, keys) => {
        if (option == null) return false;
        let searchString = searchMap[$_get](option);
        if (searchString == null) {
          searchString = itemRenderer(option)[$toLowerCase]();
          searchMap[$_set](option, searchString);
        }
        return searchString[$startsWith](keys);
      };
      dart.fn(startsWith, dynamicAndStringTobool());
      let maybeSelectOption = (option, keys) => {
        if (dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(dart.dynamic, options, option)) && dart.test(startsWith(option, keys))) {
          activeModel.activate(option);
          selection == null ? null : selection.select(option);
          this[_enteredKeys] = keys;
          return true;
        }
        return false;
      };
      dart.fn(maybeSelectOption, dynamicAndStringTobool());
      if (this[_enteredKeys][$isNotEmpty]) {
        let keys = dart.notNull(this[_enteredKeys]) + dart.notNull(key);
        for (let option of optionsList) {
          if (dart.test(maybeSelectOption(option, keys))) return;
        }
      }
      if (dart.test(startsWith(activeModel.activeItem, key))) {
        if (dart.test(maybeSelectOption(activeModel.peekNext, key))) return;
      }
      for (let option of optionsList) {
        if (dart.test(maybeSelectOption(option, key))) return;
      }
      this.resetEnteredKeys();
    }
    resetEnteredKeys() {
      this[_enteredKeys] = "";
    }
    [_charCodeToString](charCode) {
      let key = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_get](charCode);
      if (key == null) {
        key = core.String.fromCharCode(charCode)[$toLowerCase]();
        material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_set](charCode, key);
      }
      return key;
    }
  };
  (material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new = function() {
    this[_enteredKeys] = "";
  }).prototype = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.prototype;
  dart.addTypeTests(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
  dart.setMethodSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    activateOnKeyPress: dart.fnType(dart.void, [model__a11y__active_item.ActiveItemModel, core.int, model__selection__selection_options.SelectionOptions, dart.fnType(core.String, [dart.dynamic]), model__selection__selection_model.SelectionModel]),
    resetEnteredKeys: dart.fnType(dart.void, []),
    [_charCodeToString]: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    [_enteredKeys]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, {
    /*material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap*/get _charCodeMap() {
      return new (IdentityMapOfint$String()).new();
    },
    set _charCodeMap(_) {}
  });
  const _is_MaterialDropdownSelectComponent_default = Symbol('_is_MaterialDropdownSelectComponent_default');
  material_select__material_dropdown_select.MaterialDropdownSelectComponent$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let ListOfOptionGroupOfT = () => (ListOfOptionGroupOfT = dart.constFn(core.List$(OptionGroupOfT())))();
    let ListOfOptionGroupOfTToNull = () => (ListOfOptionGroupOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfOptionGroupOfT()])))();
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    let StreamSubscriptionOfListOfOptionGroupOfT = () => (StreamSubscriptionOfListOfOptionGroupOfT = dart.constFn(async.StreamSubscription$(ListOfOptionGroupOfT())))();
    let StreamSubscriptionOfListOfSelectionChangeRecordOfT = () => (StreamSubscriptionOfListOfSelectionChangeRecordOfT = dart.constFn(async.StreamSubscription$(ListOfSelectionChangeRecordOfT())))();
    const MaterialSelectBase_MaterialDropdownBase$ = class MaterialSelectBase_MaterialDropdownBase extends material_select__material_select_base.MaterialSelectBase$(T) {};
    (MaterialSelectBase_MaterialDropdownBase$.new = function() {
      mixins__material_dropdown_base.MaterialDropdownBase.new.call(this);
      MaterialSelectBase_MaterialDropdownBase$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialDropdownBase$.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialDropdownBase$, mixins__material_dropdown_base.MaterialDropdownBase);
    const MaterialSelectBase_SelectionInputAdapter$ = class MaterialSelectBase_SelectionInputAdapter extends MaterialSelectBase_MaterialDropdownBase$ {};
    (MaterialSelectBase_SelectionInputAdapter$.new = function() {
      mixins__selection_input_adapter.SelectionInputAdapter$(T).new.call(this);
      MaterialSelectBase_SelectionInputAdapter$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_SelectionInputAdapter$.prototype;
    dart.applyMixin(MaterialSelectBase_SelectionInputAdapter$, mixins__selection_input_adapter.SelectionInputAdapter$(T));
    const MaterialSelectBase_MaterialButtonWrapper$ = class MaterialSelectBase_MaterialButtonWrapper extends MaterialSelectBase_SelectionInputAdapter$ {};
    (MaterialSelectBase_MaterialButtonWrapper$.new = function() {
      mixins__button_wrapper.MaterialButtonWrapper.new.call(this);
      MaterialSelectBase_MaterialButtonWrapper$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialButtonWrapper$.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialButtonWrapper$, mixins__button_wrapper.MaterialButtonWrapper);
    const MaterialSelectBase_TrackLayoutChangesMixin$ = class MaterialSelectBase_TrackLayoutChangesMixin extends MaterialSelectBase_MaterialButtonWrapper$ {};
    (MaterialSelectBase_TrackLayoutChangesMixin$.new = function() {
      mixins__track_layout_changes.TrackLayoutChangesMixin.new.call(this);
      MaterialSelectBase_TrackLayoutChangesMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_TrackLayoutChangesMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_TrackLayoutChangesMixin$, mixins__track_layout_changes.TrackLayoutChangesMixin);
    const MaterialSelectBase_KeyboardHandlerMixin$ = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_TrackLayoutChangesMixin$ {};
    (MaterialSelectBase_KeyboardHandlerMixin$.new = function() {
      model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
      MaterialSelectBase_KeyboardHandlerMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_KeyboardHandlerMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
    const MaterialSelectBase_ActivateItemOnKeyPressMixin$ = class MaterialSelectBase_ActivateItemOnKeyPressMixin extends MaterialSelectBase_KeyboardHandlerMixin$ {};
    (MaterialSelectBase_ActivateItemOnKeyPressMixin$.new = function() {
      material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new.call(this);
      MaterialSelectBase_ActivateItemOnKeyPressMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_ActivateItemOnKeyPressMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_ActivateItemOnKeyPressMixin$, material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
    const MaterialSelectBase_ShiftClickSelectionMixin$ = class MaterialSelectBase_ShiftClickSelectionMixin extends MaterialSelectBase_ActivateItemOnKeyPressMixin$ {};
    (MaterialSelectBase_ShiftClickSelectionMixin$.new = function() {
      material_select__shift_click_selection.ShiftClickSelectionMixin$(T).new.call(this);
      MaterialSelectBase_ShiftClickSelectionMixin$.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_ShiftClickSelectionMixin$.prototype;
    dart.applyMixin(MaterialSelectBase_ShiftClickSelectionMixin$, material_select__shift_click_selection.ShiftClickSelectionMixin$(T));
    class MaterialDropdownSelectComponent extends MaterialSelectBase_ShiftClickSelectionMixin$ {
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      get activeModel() {
        return this[activeModel];
      }
      set activeModel(value) {
        super.activeModel = value;
      }
      get listId() {
        return this[listId];
      }
      set listId(value) {
        super.listId = value;
      }
      get buttonAriaRole() {
        return this[buttonAriaRole$];
      }
      set buttonAriaRole(value) {
        super.buttonAriaRole = value;
      }
      get buttonAriaLabelledBy() {
        return this[buttonAriaLabelledBy];
      }
      set buttonAriaLabelledBy(value) {
        this[buttonAriaLabelledBy] = value;
      }
      get deselectLabel() {
        return this[deselectLabel];
      }
      set deselectLabel(value) {
        this[deselectLabel] = value;
      }
      get error() {
        return this[error];
      }
      set error(value) {
        this[error] = value;
      }
      get showButtonBorder() {
        return this[showButtonBorder];
      }
      set showButtonBorder(value) {
        this[showButtonBorder] = value;
      }
      set deselectOnActivate(value) {
        this[_deselectOnActivate] = value;
      }
      get deselectOnActivate() {
        return dart.test(this.isMultiSelect) || dart.test(this[_deselectOnActivate]);
      }
      get labelFactory() {
        return this[labelFactory];
      }
      set labelFactory(value) {
        this[labelFactory] = value;
      }
      get hasCustomLabelRenderer() {
        return this.labelFactory != null;
      }
      get activateFirstOption() {
        return this[activateFirstOption];
      }
      set activateFirstOption(value) {
        this[activateFirstOption] = value;
      }
      get popupClassName() {
        return this[popupClassName];
      }
      set popupClassName(value) {
        super.popupClassName = value;
      }
      get dropdownButton() {
        return this[dropdownButton];
      }
      set dropdownButton(value) {
        this[dropdownButton] = value;
      }
      get ariaActiveDescendant() {
        if (!dart.test(this.visible)) return "";
        if (this[_ariaActiveDescendant] != null) return this[_ariaActiveDescendant];
        if (this.options != null) {
          return this.activeModel.activeId;
        }
        return "";
      }
      set ariaActiveDescendant(id) {
        this[_ariaActiveDescendant] = id;
      }
      get listAutoFocus() {
        return this[listAutoFocus];
      }
      set listAutoFocus(value) {
        this[listAutoFocus] = value;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = dart.fn(item => core.String._check(dart.dcall(value, [item])), TToString());
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set width(value) {
        super.width = value;
      }
      get width() {
        return super.width;
      }
      set visible(value) {
        super.visible = value;
        this.resetEnteredKeys();
        if (dart.test(value)) {
          this[_setInitialActiveItem]({allowDeactivate: false});
        }
      }
      get visible() {
        return super.visible;
      }
      set optionsInput(value) {
        super.optionsInput = value;
      }
      set options(newOptions) {
        SelectionOptionsOfT()._check(newOptions);
        super.options = newOptions;
        this[_updateActiveModel]();
        this[_setInitialActiveItem]();
        let t = this[_optionsListener];
        t == null ? null : t.cancel();
        let t$ = this.options;
        let t$0 = t$ == null ? null : t$.stream;
        this[_optionsListener] = t$0 == null ? null : t$0.listen(dart.fn(_ => {
          this[_updateActiveModel]();
          this[_setInitialActiveItem]();
        }, ListOfOptionGroupOfTToNull()));
      }
      get options() {
        return super.options;
      }
      get focus() {
        return this[_focus].stream;
      }
      get blur() {
        return this[_blur].stream;
      }
      onFocus(event) {
        this[_focus].add(event);
      }
      onBlur(event) {
        this[_blur].add(event);
      }
      set selection(newSelection) {
        SelectionModelOfT()._check(newSelection);
        super.selection = newSelection;
        this[_setInitialActiveItem]();
        let t = this[_selectionListener];
        t == null ? null : t.cancel();
        let t$ = this.selection;
        let t$0 = t$ == null ? null : t$.selectionChanges;
        this[_selectionListener] = t$0 == null ? null : t$0.listen(dart.fn(changes => {
          let added = dart.test(changes[$last].added[$isNotEmpty]) ? changes[$last].added[$first] : null;
          if (added != null && !dart.test(this.activeModel.isActive(added))) {
            this.activeModel.activate(added);
          }
          this.emitSelectionChange();
        }, ListOfSelectionChangeRecordOfTToNull()));
      }
      get selection() {
        return super.selection;
      }
      [_updateActiveModel]() {
        let items = core.List.from((() => {
          let t = this.options;
          let l = t == null ? null : t.optionsList;
          return l != null ? l : [];
        })());
        if (dart.test(this.showDeselectItem)) {
          items[$insert](0, this.deselectLabel);
        }
        this.activeModel.items = items;
      }
      [_setInitialActiveItem](opts) {
        let allowDeactivate = opts && 'allowDeactivate' in opts ? opts.allowDeactivate : true;
        if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
          if (dart.test(allowDeactivate)) this.activeModel.activate(null);
        } else if (this.activeModel.activeItem == null || dart.test(this.showDeselectItem) && dart.equals(this.activeModel.activeItem, this.deselectLabel) || !dart.test(this.selection.isSelected(T._check(this.activeModel.activeItem)))) {
          this.activeModel.activate(this.selection.selectedValues[$first]);
        }
        if (dart.test(this.activateFirstOption) && this.activeModel.activeItem == null) {
          this.activeModel.activateFirst();
        }
      }
      [_handleNavigationKey](event, activateFunction) {
        if (dart.test(this.disabled)) return;
        event.preventDefault();
        dart.dcall(activateFunction, []);
        if (!dart.test(this.visible) && this.selection != null && dart.test(this.isSingleSelect)) {
          let item = this.activeModel.activeItem;
          if (dart.equals(item, this.deselectLabel)) {
            this.deselectCurrentSelection();
          } else if (item != null && !dart.test(this.isOptionDisabled(T._check(item)))) {
            this.selection.select(T._check(item));
          }
        }
      }
      handleUpKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
      }
      handleDownKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
      }
      handleLeftKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
      }
      handleRightKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
      }
      handlePageUp(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateFirst'));
      }
      handlePageDown(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateLast'));
      }
      [_handleKeyboardTrigger]() {
        if (dart.test(this.disabled)) return;
        if (!dart.test(this.visible)) {
          this.open();
        } else {
          let item = this.activeModel.activeItem;
          if (item != null && this.selection != null) {
            if (dart.equals(item, this.deselectLabel)) {
              this.deselectCurrentSelection();
            } else if (!dart.test(this.selection.isSelected(T._check(item)))) {
              if (!dart.test(this.isOptionDisabled(T._check(item)))) {
                this.selection.select(T._check(item));
              }
            } else if (dart.test(this.deselectOnActivate)) {
              this.selection.deselect(T._check(item));
            }
          }
          if (dart.test(this.isSingleSelect)) {
            this.close();
            this.dropdownButton.focus();
          }
        }
      }
      handleEnterKey(event) {
        this[_handleKeyboardTrigger]();
      }
      handleSpaceKey(event) {
        event == null ? null : event.preventDefault();
        this[_handleKeyboardTrigger]();
      }
      handleClick(event) {
        if (!html.MouseEvent.is(event)) return;
        if (!dart.test(this.disabled)) this.toggle();
      }
      handleEscapeKey(event) {
        if (dart.test(this.visible)) {
          this.close();
          event.stopPropagation();
          this.dropdownButton.focus();
        }
      }
      handleCharCodeKey(event) {
        if (this.itemRenderer != null && this.options != null && !dart.test(this.disabled)) {
          this.activateOnKeyPress(this.activeModel, event.charCode, this.options, ItemRenderer()._check(this.itemRenderer), !dart.test(this.visible) && dart.test(this.isSingleSelect) ? this.selection : null);
        }
      }
      ngOnChanges(changes) {
        if (dart.test(changes[$containsKey]("disabled")) && dart.test(this.disabled)) {
          this.close();
        }
      }
      ngOnDestroy() {
        let t = this[_optionsListener];
        t == null ? null : t.cancel();
        let t$ = this[_selectionListener];
        t$ == null ? null : t$.cancel();
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
      isOptionDisabled(item) {
        T._check(item);
        return !dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(T, this.options, item));
      }
      isOptionHidden(item) {
        T._check(item);
        return src__model__selection__interfaces__selectable.Selectable.isHiddenIn(T, this.options, item, false);
      }
      get showDeselectItem() {
        return !dart.test(this.isMultiSelect) && (() => {
          let t = this.deselectLabel;
          return t == null ? null : t[$isNotEmpty];
        })() === true;
      }
      get isDeselectItemSelected() {
        return this.selection.isEmpty;
      }
      deselectCurrentSelection() {
        if (dart.test(this.selection.isNotEmpty)) {
          this.selection.deselect(this.selection.selectedValues[$single]);
        }
      }
    }
    (MaterialDropdownSelectComponent.new = function(idGenerator, popupSizeDelegate, rtl, popupClass, buttonAriaRole, element) {
      this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
      this[buttonAriaLabelledBy] = null;
      this[_optionsListener] = null;
      this[_selectionListener] = null;
      this[deselectLabel] = null;
      this[error] = null;
      this[showButtonBorder] = null;
      this[_deselectOnActivate] = true;
      this[labelFactory] = null;
      this[activateFirstOption] = false;
      this[_ariaActiveDescendant] = null;
      this[dropdownButton] = null;
      this[listAutoFocus] = true;
      this[_focus] = StreamControllerOfFocusEvent().broadcast({sync: true});
      this[_blur] = StreamControllerOfFocusEvent().broadcast({sync: true});
      this[_popupSizeDelegate] = popupSizeDelegate;
      this[buttonAriaRole$] = buttonAriaRole;
      this[activeModel] = new model__a11y__active_item.ActiveItemModel.new(idGenerator);
      this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(popupClass, element[$classes]);
      this[listId] = (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
      MaterialDropdownSelectComponent.__proto__.new.call(this);
      this.isRtl = rtl;
      this.preferredPositions = laminate__enums__alignment.RelativePosition.overlapAlignments;
      this.iconName = "arrow_drop_down";
    }).prototype = MaterialDropdownSelectComponent.prototype;
    dart.addTypeTests(MaterialDropdownSelectComponent);
    MaterialDropdownSelectComponent.prototype[_is_MaterialDropdownSelectComponent_default] = true;
    const trackByIndexFn = Symbol("MaterialDropdownSelectComponent.trackByIndexFn");
    const activeModel = Symbol("MaterialDropdownSelectComponent.activeModel");
    const listId = Symbol("MaterialDropdownSelectComponent.listId");
    const buttonAriaRole$ = Symbol("MaterialDropdownSelectComponent.buttonAriaRole");
    const buttonAriaLabelledBy = Symbol("MaterialDropdownSelectComponent.buttonAriaLabelledBy");
    const deselectLabel = Symbol("MaterialDropdownSelectComponent.deselectLabel");
    const error = Symbol("MaterialDropdownSelectComponent.error");
    const showButtonBorder = Symbol("MaterialDropdownSelectComponent.showButtonBorder");
    const labelFactory = Symbol("MaterialDropdownSelectComponent.labelFactory");
    const activateFirstOption = Symbol("MaterialDropdownSelectComponent.activateFirstOption");
    const popupClassName = Symbol("MaterialDropdownSelectComponent.popupClassName");
    const dropdownButton = Symbol("MaterialDropdownSelectComponent.dropdownButton");
    const listAutoFocus = Symbol("MaterialDropdownSelectComponent.listAutoFocus");
    MaterialDropdownSelectComponent[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider, src__core__metadata__lifecycle_hooks.OnChanges, src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getMethods(MaterialDropdownSelectComponent.__proto__),
      onFocus: dart.fnType(dart.void, [html.FocusEvent]),
      onBlur: dart.fnType(dart.void, [html.FocusEvent]),
      [_updateActiveModel]: dart.fnType(dart.void, []),
      [_setInitialActiveItem]: dart.fnType(dart.void, [], {allowDeactivate: core.bool}),
      [_handleNavigationKey]: dart.fnType(dart.void, [html.KeyboardEvent, core.Function]),
      handleUpKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleDownKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleLeftKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleRightKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handlePageUp: dart.fnType(dart.void, [html.KeyboardEvent]),
      handlePageDown: dart.fnType(dart.void, [html.KeyboardEvent]),
      [_handleKeyboardTrigger]: dart.fnType(dart.void, []),
      handleEnterKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleSpaceKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleClick: dart.fnType(dart.void, [html.UIEvent]),
      handleEscapeKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      handleCharCodeKey: dart.fnType(dart.void, [html.KeyboardEvent]),
      ngOnChanges: dart.fnType(dart.void, [core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)]),
      ngOnDestroy: dart.fnType(dart.void, []),
      getMinHeight: dart.fnType(core.num, [core.num, core.num]),
      getMinWidth: dart.fnType(core.num, [core.num, core.num]),
      getMaxHeight: dart.fnType(core.num, [core.num, core.num]),
      getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
      isOptionDisabled: dart.fnType(core.bool, [core.Object]),
      isOptionHidden: dart.fnType(core.bool, [core.Object]),
      deselectCurrentSelection: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getGetters(MaterialDropdownSelectComponent.__proto__),
      deselectOnActivate: core.bool,
      hasCustomLabelRenderer: core.bool,
      ariaActiveDescendant: core.String,
      focus: async.Stream$(html.FocusEvent),
      blur: async.Stream$(html.FocusEvent),
      showDeselectItem: core.bool,
      isDeselectItemSelected: core.bool
    }));
    dart.setSetterSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getSetters(MaterialDropdownSelectComponent.__proto__),
      deselectOnActivate: core.bool,
      ariaActiveDescendant: core.String,
      itemRenderer: core.Function,
      visible: core.bool
    }));
    dart.setFieldSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getFields(MaterialDropdownSelectComponent.__proto__),
      trackByIndexFn: dart.finalFieldType(core.Function),
      activeModel: dart.finalFieldType(model__a11y__active_item.ActiveItemModel),
      listId: dart.finalFieldType(core.String),
      buttonAriaRole: dart.finalFieldType(core.String),
      buttonAriaLabelledBy: dart.fieldType(core.String),
      [_optionsListener]: dart.fieldType(StreamSubscriptionOfListOfOptionGroupOfT()),
      [_selectionListener]: dart.fieldType(StreamSubscriptionOfListOfSelectionChangeRecordOfT()),
      [_popupSizeDelegate]: dart.finalFieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
      deselectLabel: dart.fieldType(core.String),
      error: dart.fieldType(core.String),
      showButtonBorder: dart.fieldType(core.bool),
      [_deselectOnActivate]: dart.fieldType(core.bool),
      labelFactory: dart.fieldType(dynamicToComponentFactory()),
      activateFirstOption: dart.fieldType(core.bool),
      popupClassName: dart.finalFieldType(core.String),
      [_ariaActiveDescendant]: dart.fieldType(core.String),
      dropdownButton: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
      listAutoFocus: dart.fieldType(core.bool),
      [_focus]: dart.fieldType(StreamControllerOfFocusEvent()),
      [_blur]: dart.fieldType(StreamControllerOfFocusEvent())
    }));
    return MaterialDropdownSelectComponent;
  });
  material_select__material_dropdown_select.MaterialDropdownSelectComponent = material_select__material_dropdown_select.MaterialDropdownSelectComponent$();
  dart.addTypeTests(material_select__material_dropdown_select.MaterialDropdownSelectComponent, _is_MaterialDropdownSelectComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.ddc", {
    "package:angular_components/material_select/material_dropdown_select.dart": material_select__material_dropdown_select
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select: material_select__material_dropdown_select
  };
});

//# sourceMappingURL=material_dropdown_select.ddc.js.map
