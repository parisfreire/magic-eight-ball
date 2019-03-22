library asset_angular_components_lib_material_datepicker_date_range_editor.scss.css.dart;


final List<dynamic> styles = ['::ng-deep date-range-editor ::-webkit-scrollbar {\n  background-color: rgba(0, 0, 0, 0);\n  height: 8px;\n  width: 8px;\n}\n\n::ng-deep date-range-editor ::-webkit-scrollbar:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n::ng-deep date-range-editor ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n  min-height: 48px;\n  min-width: 48px;\n}\n\n::ng-deep date-range-editor ::-webkit-scrollbar-thumb:hover {\n  background-color: #4285f4;\n}\n\n::ng-deep date-range-editor ::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  display: inline-flex;\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n}\n\n.preset-list {\n  border-right: 1px solid #e0e0e0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.preset-list ::ng-deep material-list {\n  padding: 0;\n}\n.preset-list ::ng-deep material-list {\n  max-width: 100%;\n}\n.preset-list .group {\n  padding: 10px 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.preset-list .group:last-child {\n  border-bottom: 0;\n}\n.preset-list .group material-select-item {\n  font-size: inherit;\n}\n.preset-list .group .days-input {\n  display: flex;\n  height: 32px;\n  align-items: center;\n}\n.preset-list .group .days-input material-input {\n  flex-shrink: 0;\n  padding: 0;\n  position: relative;\n  margin-right: 4px;\n  width: 28px;\n}\n.preset-list .group .days-input material-input ::ng-deep .top-section {\n  margin: 0;\n}\n.preset-list .group .days-input material-input ::ng-deep .top-section {\n  line-height: 22px;\n}\n\n.preset-dropdown-button {\n  position: relative;\n  display: inline-flex;\n  margin-left: auto;\n  left: 8px;\n}\n.preset-dropdown-button material-icon {\n  transform: rotate(-90deg);\n}\n:host-context([dir=rtl]) .preset-dropdown-button material-icon {\n  transform: rotate(90deg);\n}\n\n.preset-dropdown-button[icon] ::ng-deep .content {\n  padding: 0;\n}\n\n.preset-dropdown-item {\n  font-size: 13px;\n}\n\n.basic-preset-list {\n  min-width: 260px;\n}\n\n.right-column {\n  display: flex;\n  flex-direction: column;\n  width: 344px;\n  border-left: 1px solid #e0e0e0;\n  margin-left: -1px;\n  padding-top: 10px;\n}\n:host(.compact) .right-column {\n  width: 260px;\n}\n\n.range-title {\n  color: rgba(0, 0, 0, 0.38);\n  font-size: 13px;\n  padding: 2px 16px;\n}\n\n.range-input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  min-height: 32px;\n  line-height: 32px;\n  margin-bottom: 10px;\n  padding: 0 16px;\n}\n\n.month-selector-toolbar {\n  align-items: center;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-shrink: 0;\n  margin-bottom: 10px;\n  padding: 0 16px;\n}\n\n.month-selector-dropdown {\n  display: flex;\n  align-items: center;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.month-selector-dropdown-icon {\n  will-change: transform;\n  transition: transform 218ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.month-selector-dropdown-icon.flipped {\n  transform: scaleY(-1);\n}\n\n.visible-month {\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.picker-container {\n  height: 384px;\n  position: relative;\n  overflow: hidden;\n  flex-grow: 1;\n}\n.picker-container.compact {\n  height: 288px;\n}\n\n.picker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateY(0);\n  transition: transform 218ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.picker.acx-showhide-hide {\n  transform: translateY(100%);\n}\n.picker.acx-showhide-hidden {\n  visibility: hidden;\n}\n\n.month-selector {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.month-selector.acx-showhide-hide {\n  transform: translateY(-100%);\n}\n\n.range {\n  flex: 1;\n}\n\n.button-decorator {\n  display: flex;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.expend-more {\n  color: rgba(0, 0, 0, 0.54);\n  height: 24px;\n}\n\n.expand-less {\n  margin-top: auto;\n  margin-bottom: auto;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.custom-tab-left {\n  margin-right: auto;\n  line-height: 24px;\n}\n\n.custom_tab-left-selected {\n  margin-top: 9px;\n  margin-right: auto;\n  line-height: 17px;\n}\n\n.custom-tab-right {\n  margin-right: auto;\n  line-height: 32px;\n}\n\n.custom_range_desc {\n  margin-bottom: 9px;\n  font-size: 12px;\n}\n\n.content-separator {\n  background: #e0e0e0;\n  height: 1px;\n  color: #757575;\n}\n\n.range-input ::ng-deep .range material-input.active ::ng-deep .focused-underline:not(.invalid) {\n  background-color: #4285f4;\n}\n.range-input ::ng-deep .range material-input.active ::selection {\n  background: #c6dafc;\n}\n\n.range-input ::ng-deep .comparison material-input.active ::ng-deep .focused-underline:not(.invalid) {\n  background-color: #f4b400;\n}\n.range-input ::ng-deep .comparison material-input.active ::selection {\n  background: #fce8b2;\n}\n\n.calendar ::ng-deep .today .boundary.boundary-comparison:not(.boundary-range).circle {\n  border: 0;\n  height: inherit;\n  width: inherit;\n}\n'];
