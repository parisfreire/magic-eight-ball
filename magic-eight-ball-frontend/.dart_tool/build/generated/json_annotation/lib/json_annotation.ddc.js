define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const json_annotation = Object.create(_root);
  const src__allowed_keys_helpers = Object.create(_root);
  const src__checked_helpers = Object.create(_root);
  const src__json_converter = Object.create(_root);
  const src__json_literal = Object.create(_root);
  const src__json_serializable = Object.create(_root);
  const src__wrapper_helpers = Object.create(_root);
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $cast = dartx.cast;
  const $keys = dartx.keys;
  const $isNotEmpty = dartx.isNotEmpty;
  const $map = dartx.map;
  const $entries = dartx.entries;
  const $join = dartx.join;
  const $_get = dartx._get;
  const $name = dartx.name;
  const $first = dartx.first;
  const $message = dartx.message;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $_set = dartx._set;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let MapEntryToString = () => (MapEntryToString = dart.constFn(dart.fnType(core.String, [core.MapEntry])))();
  let MapEntryTobool = () => (MapEntryTobool = dart.constFn(dart.fnType(core.bool, [core.MapEntry])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__allowed_keys_helpers.$checkKeys = function(map, opts) {
    let allowedKeys = opts && 'allowedKeys' in opts ? opts.allowedKeys : null;
    let requiredKeys = opts && 'requiredKeys' in opts ? opts.requiredKeys : null;
    let disallowNullValues = opts && 'disallowNullValues' in opts ? opts.disallowNullValues : null;
    if (map != null && allowedKeys != null) {
      let invalidKeys = map[$keys][$cast](core.String)[$where](dart.fn(k => !dart.test(allowedKeys[$contains](k)), StringTobool()))[$toList]();
      if (dart.test(invalidKeys[$isNotEmpty])) {
        dart.throw(new src__allowed_keys_helpers.UnrecognizedKeysException.new(invalidKeys, map, allowedKeys));
      }
    }
    if (requiredKeys != null) {
      let missingKeys = requiredKeys[$where](dart.fn(k => !dart.test(map[$keys][$contains](k)), StringTobool()))[$toList]();
      if (dart.test(missingKeys[$isNotEmpty])) {
        dart.throw(new src__allowed_keys_helpers.MissingRequiredKeysException.new(missingKeys, map));
      }
    }
    if (map != null && disallowNullValues != null) {
      let nullValuedKeys = map[$entries][$where](dart.fn(entry => dart.test(disallowNullValues[$contains](entry.key)) && entry.value == null, MapEntryTobool()))[$map](core.String, dart.fn(entry => core.String.as(entry.key), MapEntryToString()))[$toList]();
      if (dart.test(nullValuedKeys[$isNotEmpty])) {
        dart.throw(new src__allowed_keys_helpers.DisallowedNullValueException.new(nullValuedKeys, map));
      }
    }
  };
  src__allowed_keys_helpers.BadKeyException = class BadKeyException extends core.Object {
    get map() {
      return this[map$];
    }
    set map(value) {
      super.map = value;
    }
  };
  (src__allowed_keys_helpers.BadKeyException.__ = function(map) {
    this[map$] = map;
  }).prototype = src__allowed_keys_helpers.BadKeyException.prototype;
  dart.addTypeTests(src__allowed_keys_helpers.BadKeyException);
  const map$ = Symbol("BadKeyException.map");
  src__allowed_keys_helpers.BadKeyException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__allowed_keys_helpers.BadKeyException, () => ({
    __proto__: dart.getFields(src__allowed_keys_helpers.BadKeyException.__proto__),
    map: dart.finalFieldType(core.Map)
  }));
  src__allowed_keys_helpers.UnrecognizedKeysException = class UnrecognizedKeysException extends src__allowed_keys_helpers.BadKeyException {
    get allowedKeys() {
      return this[allowedKeys$];
    }
    set allowedKeys(value) {
      super.allowedKeys = value;
    }
    get unrecognizedKeys() {
      return this[unrecognizedKeys$];
    }
    set unrecognizedKeys(value) {
      super.unrecognizedKeys = value;
    }
    get message() {
      return "Unrecognized keys: [" + dart.str(this.unrecognizedKeys[$join](", ")) + "]; supported keys: " + ("[" + dart.str(this.allowedKeys[$join](", ")) + "]");
    }
  };
  (src__allowed_keys_helpers.UnrecognizedKeysException.new = function(unrecognizedKeys, map, allowedKeys) {
    this[unrecognizedKeys$] = unrecognizedKeys;
    this[allowedKeys$] = allowedKeys;
    src__allowed_keys_helpers.UnrecognizedKeysException.__proto__.__.call(this, map);
  }).prototype = src__allowed_keys_helpers.UnrecognizedKeysException.prototype;
  dart.addTypeTests(src__allowed_keys_helpers.UnrecognizedKeysException);
  const allowedKeys$ = Symbol("UnrecognizedKeysException.allowedKeys");
  const unrecognizedKeys$ = Symbol("UnrecognizedKeysException.unrecognizedKeys");
  dart.setGetterSignature(src__allowed_keys_helpers.UnrecognizedKeysException, () => ({
    __proto__: dart.getGetters(src__allowed_keys_helpers.UnrecognizedKeysException.__proto__),
    message: core.String
  }));
  dart.setFieldSignature(src__allowed_keys_helpers.UnrecognizedKeysException, () => ({
    __proto__: dart.getFields(src__allowed_keys_helpers.UnrecognizedKeysException.__proto__),
    allowedKeys: dart.finalFieldType(ListOfString()),
    unrecognizedKeys: dart.finalFieldType(ListOfString())
  }));
  src__allowed_keys_helpers.MissingRequiredKeysException = class MissingRequiredKeysException extends src__allowed_keys_helpers.BadKeyException {
    get missingKeys() {
      return this[missingKeys$];
    }
    set missingKeys(value) {
      super.missingKeys = value;
    }
    get message() {
      return "Required keys are missing: " + dart.str(this.missingKeys[$join](", ")) + ".";
    }
  };
  (src__allowed_keys_helpers.MissingRequiredKeysException.new = function(missingKeys, map) {
    this[missingKeys$] = missingKeys;
    if (!dart.test(missingKeys[$isNotEmpty])) dart.assertFailed();
    src__allowed_keys_helpers.MissingRequiredKeysException.__proto__.__.call(this, map);
  }).prototype = src__allowed_keys_helpers.MissingRequiredKeysException.prototype;
  dart.addTypeTests(src__allowed_keys_helpers.MissingRequiredKeysException);
  const missingKeys$ = Symbol("MissingRequiredKeysException.missingKeys");
  dart.setGetterSignature(src__allowed_keys_helpers.MissingRequiredKeysException, () => ({
    __proto__: dart.getGetters(src__allowed_keys_helpers.MissingRequiredKeysException.__proto__),
    message: core.String
  }));
  dart.setFieldSignature(src__allowed_keys_helpers.MissingRequiredKeysException, () => ({
    __proto__: dart.getFields(src__allowed_keys_helpers.MissingRequiredKeysException.__proto__),
    missingKeys: dart.finalFieldType(ListOfString())
  }));
  src__allowed_keys_helpers.DisallowedNullValueException = class DisallowedNullValueException extends src__allowed_keys_helpers.BadKeyException {
    get keysWithNullValues() {
      return this[keysWithNullValues$];
    }
    set keysWithNullValues(value) {
      super.keysWithNullValues = value;
    }
    get message() {
      return "These keys had `null` values, " + ("which is not allowed: " + dart.str(this.keysWithNullValues));
    }
  };
  (src__allowed_keys_helpers.DisallowedNullValueException.new = function(keysWithNullValues, map) {
    this[keysWithNullValues$] = keysWithNullValues;
    src__allowed_keys_helpers.DisallowedNullValueException.__proto__.__.call(this, map);
  }).prototype = src__allowed_keys_helpers.DisallowedNullValueException.prototype;
  dart.addTypeTests(src__allowed_keys_helpers.DisallowedNullValueException);
  const keysWithNullValues$ = Symbol("DisallowedNullValueException.keysWithNullValues");
  dart.setGetterSignature(src__allowed_keys_helpers.DisallowedNullValueException, () => ({
    __proto__: dart.getGetters(src__allowed_keys_helpers.DisallowedNullValueException.__proto__),
    message: core.String
  }));
  dart.setFieldSignature(src__allowed_keys_helpers.DisallowedNullValueException, () => ({
    __proto__: dart.getFields(src__allowed_keys_helpers.DisallowedNullValueException.__proto__),
    keysWithNullValues: dart.finalFieldType(ListOfString())
  }));
  let const$;
  const _className = Symbol('_className');
  src__checked_helpers.$checkedNew = function(T, className, map, constructor, opts) {
    let fieldKeyMap = opts && 'fieldKeyMap' in opts ? opts.fieldKeyMap : null;
    let t = fieldKeyMap;
    t == null ? fieldKeyMap = const$ || (const$ = dart.constMap(core.String, core.String, [])) : t;
    try {
      return constructor();
    } catch (e$) {
      if (src__checked_helpers.CheckedFromJsonException.is(e$)) {
        let e = e$;
        if (e.map == map && e[_className] == null) {
          e[_className] = className;
        }
        dart.rethrow(e);
      } else {
        let error = e$;
        let stack = dart.stackTrace(error);
        let key = null;
        if (core.ArgumentError.is(error)) {
          let l = fieldKeyMap[$_get](error[$name]);
          key = l != null ? l : error[$name];
        } else if (src__allowed_keys_helpers.MissingRequiredKeysException.is(error)) {
          key = error.missingKeys[$first];
        } else if (src__allowed_keys_helpers.DisallowedNullValueException.is(error)) {
          key = error.keysWithNullValues[$first];
        }
        dart.throw(new src__checked_helpers.CheckedFromJsonException.__(error, stack, map, key, {className: className}));
      }
    }
  };
  src__checked_helpers.$checkedConvert = function(T, map, key, castFunc) {
    try {
      return castFunc(map[$_get](key));
    } catch (e) {
      if (src__checked_helpers.CheckedFromJsonException.is(e)) {
        dart.rethrow(e);
      } else {
        let error = e;
        let stack = dart.stackTrace(error);
        dart.throw(new src__checked_helpers.CheckedFromJsonException.__(error, stack, map, key));
      }
    }
  };
  src__checked_helpers.CheckedFromJsonException = class CheckedFromJsonException extends core.Object {
    get innerError() {
      return this[innerError$];
    }
    set innerError(value) {
      super.innerError = value;
    }
    get innerStack() {
      return this[innerStack$];
    }
    set innerStack(value) {
      super.innerStack = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get map() {
      return this[map$0];
    }
    set map(value) {
      super.map = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get className() {
      return this[_className];
    }
    static _getMessage(error) {
      if (core.ArgumentError.is(error)) {
        return error[$message] == null ? null : dart.toString(error[$message]);
      } else if (src__allowed_keys_helpers.BadKeyException.is(error)) {
        return error.message;
      } else if (core.FormatException.is(error)) {
        let message = error.message;
        if (error.offset != null) {
          message = dart.str(message) + " at offset " + dart.str(error.offset) + ".";
        }
        return message;
      }
      return null;
    }
  };
  (src__checked_helpers.CheckedFromJsonException.new = function(map, key, className, message) {
    this[map$0] = map;
    this[key$] = key;
    this[message$] = message;
    this[_className] = className;
    this[innerError$] = null;
    this[innerStack$] = null;
  }).prototype = src__checked_helpers.CheckedFromJsonException.prototype;
  (src__checked_helpers.CheckedFromJsonException.__ = function(innerError, innerStack, map, key, opts) {
    let className = opts && 'className' in opts ? opts.className : null;
    this[innerError$] = innerError;
    this[innerStack$] = innerStack;
    this[map$0] = map;
    this[key$] = key;
    this[_className] = className;
    this[message$] = src__checked_helpers.CheckedFromJsonException._getMessage(innerError);
  }).prototype = src__checked_helpers.CheckedFromJsonException.prototype;
  dart.addTypeTests(src__checked_helpers.CheckedFromJsonException);
  const innerError$ = Symbol("CheckedFromJsonException.innerError");
  const innerStack$ = Symbol("CheckedFromJsonException.innerStack");
  const key$ = Symbol("CheckedFromJsonException.key");
  const map$0 = Symbol("CheckedFromJsonException.map");
  const message$ = Symbol("CheckedFromJsonException.message");
  src__checked_helpers.CheckedFromJsonException[dart.implements] = () => [core.Exception];
  dart.setGetterSignature(src__checked_helpers.CheckedFromJsonException, () => ({
    __proto__: dart.getGetters(src__checked_helpers.CheckedFromJsonException.__proto__),
    className: core.String
  }));
  dart.setFieldSignature(src__checked_helpers.CheckedFromJsonException, () => ({
    __proto__: dart.getFields(src__checked_helpers.CheckedFromJsonException.__proto__),
    innerError: dart.finalFieldType(core.Object),
    innerStack: dart.finalFieldType(core.StackTrace),
    key: dart.finalFieldType(core.String),
    map: dart.finalFieldType(core.Map),
    message: dart.finalFieldType(core.String),
    [_className]: dart.fieldType(core.String)
  }));
  const _is_JsonConverter_default = Symbol('_is_JsonConverter_default');
  src__json_converter.JsonConverter$ = dart.generic((T, S) => {
    class JsonConverter extends core.Object {}
    (JsonConverter.new = function() {
    }).prototype = JsonConverter.prototype;
    dart.addTypeTests(JsonConverter);
    JsonConverter.prototype[_is_JsonConverter_default] = true;
    return JsonConverter;
  });
  src__json_converter.JsonConverter = src__json_converter.JsonConverter$();
  dart.addTypeTests(src__json_converter.JsonConverter, _is_JsonConverter_default);
  src__json_literal.JsonLiteral = class JsonLiteral extends core.Object {
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get asConst() {
      return this[asConst$];
    }
    set asConst(value) {
      super.asConst = value;
    }
  };
  (src__json_literal.JsonLiteral.new = function(path, opts) {
    let asConst = opts && 'asConst' in opts ? opts.asConst : false;
    this[path$] = path;
    this[asConst$] = asConst != null ? asConst : false;
  }).prototype = src__json_literal.JsonLiteral.prototype;
  dart.addTypeTests(src__json_literal.JsonLiteral);
  const path$ = Symbol("JsonLiteral.path");
  const asConst$ = Symbol("JsonLiteral.asConst");
  dart.setFieldSignature(src__json_literal.JsonLiteral, () => ({
    __proto__: dart.getFields(src__json_literal.JsonLiteral.__proto__),
    path: dart.finalFieldType(core.String),
    asConst: dart.finalFieldType(core.bool)
  }));
  src__json_serializable.FieldRename = class FieldRename extends core.Object {
    toString() {
      return {
        0: "FieldRename.none",
        1: "FieldRename.kebab",
        2: "FieldRename.snake"
      }[this.index];
    }
  };
  (src__json_serializable.FieldRename.new = function(x) {
    this.index = x;
  }).prototype = src__json_serializable.FieldRename.prototype;
  dart.addTypeTests(src__json_serializable.FieldRename);
  dart.setFieldSignature(src__json_serializable.FieldRename, () => ({
    __proto__: dart.getFields(src__json_serializable.FieldRename.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__json_serializable.FieldRename, ['toString']);
  src__json_serializable.FieldRename.none = dart.const(new src__json_serializable.FieldRename.new(0));
  src__json_serializable.FieldRename.kebab = dart.const(new src__json_serializable.FieldRename.new(1));
  src__json_serializable.FieldRename.snake = dart.const(new src__json_serializable.FieldRename.new(2));
  src__json_serializable.FieldRename.values = dart.constList([src__json_serializable.FieldRename.none, src__json_serializable.FieldRename.kebab, src__json_serializable.FieldRename.snake], src__json_serializable.FieldRename);
  src__json_serializable.JsonSerializable = class JsonSerializable extends core.Object {
    get disallowUnrecognizedKeys() {
      return this[disallowUnrecognizedKeys$];
    }
    set disallowUnrecognizedKeys(value) {
      super.disallowUnrecognizedKeys = value;
    }
    get createFactory() {
      return this[createFactory$];
    }
    set createFactory(value) {
      super.createFactory = value;
    }
    get createToJson() {
      return this[createToJson$];
    }
    set createToJson(value) {
      super.createToJson = value;
    }
    get includeIfNull() {
      return this[includeIfNull$];
    }
    set includeIfNull(value) {
      super.includeIfNull = value;
    }
    get nullable() {
      return this[nullable$];
    }
    set nullable(value) {
      super.nullable = value;
    }
    get fieldRename() {
      return this[fieldRename$];
    }
    set fieldRename(value) {
      super.fieldRename = value;
    }
  };
  (src__json_serializable.JsonSerializable.new = function(opts) {
    let disallowUnrecognizedKeys = opts && 'disallowUnrecognizedKeys' in opts ? opts.disallowUnrecognizedKeys : false;
    let createFactory = opts && 'createFactory' in opts ? opts.createFactory : true;
    let createToJson = opts && 'createToJson' in opts ? opts.createToJson : true;
    let includeIfNull = opts && 'includeIfNull' in opts ? opts.includeIfNull : true;
    let nullable = opts && 'nullable' in opts ? opts.nullable : true;
    let fieldRename = opts && 'fieldRename' in opts ? opts.fieldRename : src__json_serializable.FieldRename.none;
    this[disallowUnrecognizedKeys$] = disallowUnrecognizedKeys != null ? disallowUnrecognizedKeys : false;
    this[createFactory$] = createFactory != null ? createFactory : true;
    this[createToJson$] = createToJson != null ? createToJson : true;
    this[includeIfNull$] = includeIfNull != null ? includeIfNull : true;
    this[nullable$] = nullable != null ? nullable : true;
    this[fieldRename$] = fieldRename != null ? fieldRename : src__json_serializable.FieldRename.none;
  }).prototype = src__json_serializable.JsonSerializable.prototype;
  dart.addTypeTests(src__json_serializable.JsonSerializable);
  const disallowUnrecognizedKeys$ = Symbol("JsonSerializable.disallowUnrecognizedKeys");
  const createFactory$ = Symbol("JsonSerializable.createFactory");
  const createToJson$ = Symbol("JsonSerializable.createToJson");
  const includeIfNull$ = Symbol("JsonSerializable.includeIfNull");
  const nullable$ = Symbol("JsonSerializable.nullable");
  const fieldRename$ = Symbol("JsonSerializable.fieldRename");
  dart.setFieldSignature(src__json_serializable.JsonSerializable, () => ({
    __proto__: dart.getFields(src__json_serializable.JsonSerializable.__proto__),
    disallowUnrecognizedKeys: dart.finalFieldType(core.bool),
    createFactory: dart.finalFieldType(core.bool),
    createToJson: dart.finalFieldType(core.bool),
    includeIfNull: dart.finalFieldType(core.bool),
    nullable: dart.finalFieldType(core.bool),
    fieldRename: dart.finalFieldType(src__json_serializable.FieldRename)
  }));
  src__json_serializable.JsonKey = class JsonKey extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get nullable() {
      return this[nullable$0];
    }
    set nullable(value) {
      super.nullable = value;
    }
    get includeIfNull() {
      return this[includeIfNull$0];
    }
    set includeIfNull(value) {
      super.includeIfNull = value;
    }
    get ignore() {
      return this[ignore$];
    }
    set ignore(value) {
      super.ignore = value;
    }
    get fromJson() {
      return this[fromJson$];
    }
    set fromJson(value) {
      super.fromJson = value;
    }
    get toJson() {
      return this[toJson$];
    }
    set toJson(value) {
      super.toJson = value;
    }
    get defaultValue() {
      return this[defaultValue$];
    }
    set defaultValue(value) {
      super.defaultValue = value;
    }
    get required() {
      return this[required$];
    }
    set required(value) {
      super.required = value;
    }
    get disallowNullValue() {
      return this[disallowNullValue$];
    }
    set disallowNullValue(value) {
      super.disallowNullValue = value;
    }
  };
  (src__json_serializable.JsonKey.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nullable = opts && 'nullable' in opts ? opts.nullable : null;
    let includeIfNull = opts && 'includeIfNull' in opts ? opts.includeIfNull : null;
    let ignore = opts && 'ignore' in opts ? opts.ignore : null;
    let fromJson = opts && 'fromJson' in opts ? opts.fromJson : null;
    let toJson = opts && 'toJson' in opts ? opts.toJson : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let required = opts && 'required' in opts ? opts.required : null;
    let disallowNullValue = opts && 'disallowNullValue' in opts ? opts.disallowNullValue : null;
    this[name$] = name;
    this[nullable$0] = nullable;
    this[includeIfNull$0] = includeIfNull;
    this[ignore$] = ignore;
    this[fromJson$] = fromJson;
    this[toJson$] = toJson;
    this[defaultValue$] = defaultValue;
    this[required$] = required;
    this[disallowNullValue$] = disallowNullValue;
  }).prototype = src__json_serializable.JsonKey.prototype;
  dart.addTypeTests(src__json_serializable.JsonKey);
  const name$ = Symbol("JsonKey.name");
  const nullable$0 = Symbol("JsonKey.nullable");
  const includeIfNull$0 = Symbol("JsonKey.includeIfNull");
  const ignore$ = Symbol("JsonKey.ignore");
  const fromJson$ = Symbol("JsonKey.fromJson");
  const toJson$ = Symbol("JsonKey.toJson");
  const defaultValue$ = Symbol("JsonKey.defaultValue");
  const required$ = Symbol("JsonKey.required");
  const disallowNullValue$ = Symbol("JsonKey.disallowNullValue");
  dart.setFieldSignature(src__json_serializable.JsonKey, () => ({
    __proto__: dart.getFields(src__json_serializable.JsonKey.__proto__),
    name: dart.finalFieldType(core.String),
    nullable: dart.finalFieldType(core.bool),
    includeIfNull: dart.finalFieldType(core.bool),
    ignore: dart.finalFieldType(core.bool),
    fromJson: dart.finalFieldType(core.Function),
    toJson: dart.finalFieldType(core.Function),
    defaultValue: dart.finalFieldType(core.Object),
    required: dart.finalFieldType(core.bool),
    disallowNullValue: dart.finalFieldType(core.bool)
  }));
  src__json_serializable.JsonValue = class JsonValue extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
  };
  (src__json_serializable.JsonValue.new = function(value) {
    this[value$] = value;
  }).prototype = src__json_serializable.JsonValue.prototype;
  dart.addTypeTests(src__json_serializable.JsonValue);
  const value$ = Symbol("JsonValue.value");
  dart.setFieldSignature(src__json_serializable.JsonValue, () => ({
    __proto__: dart.getFields(src__json_serializable.JsonValue.__proto__),
    value: dart.finalFieldType(dart.dynamic)
  }));
  src__wrapper_helpers.$JsonMapWrapper = class $JsonMapWrapper extends collection.UnmodifiableMapBase$(core.String, dart.dynamic) {};
  (src__wrapper_helpers.$JsonMapWrapper.new = function() {
  }).prototype = src__wrapper_helpers.$JsonMapWrapper.prototype;
  dart.addTypeTests(src__wrapper_helpers.$JsonMapWrapper);
  src__wrapper_helpers.$wrapMap = function(K, V, source, converter) {
    return new (src__wrapper_helpers._MappingMap$(K, V)).new(source, converter);
  };
  src__wrapper_helpers.$wrapMapHandleNull = function(K, V, source, converter) {
    return source == null ? null : new (src__wrapper_helpers._MappingMap$(K, V)).new(source, converter);
  };
  src__wrapper_helpers.$wrapList = function(T, source, converter) {
    return new (src__wrapper_helpers._MappingList$(T)).new(source, converter);
  };
  src__wrapper_helpers.$wrapListHandleNull = function(T, source, converter) {
    return source == null ? null : new (src__wrapper_helpers._MappingList$(T)).new(source, converter);
  };
  const _source = Symbol('_source');
  const _converter = Symbol('_converter');
  const _is__MappingList_default = Symbol('_is__MappingList_default');
  src__wrapper_helpers._MappingList$ = dart.generic(S => {
    let ListOfS = () => (ListOfS = dart.constFn(core.List$(S)))();
    let STodynamic = () => (STodynamic = dart.constFn(dart.fnType(dart.dynamic, [S])))();
    class _MappingList extends collection.ListBase {
      _get(index) {
        return this[_converter](this[_source][$_get](index));
      }
      _set(index, value) {
        return dart.throw(new core.UnsupportedError.new(""));
      }
      get length() {
        return this[_source][$length];
      }
      set length(value) {
        return dart.throw(new core.UnsupportedError.new(""));
      }
    }
    (_MappingList.new = function(source, converter) {
      this[_source] = source;
      this[_converter] = converter;
    }).prototype = _MappingList.prototype;
    dart.addTypeTests(_MappingList);
    _MappingList.prototype[_is__MappingList_default] = true;
    dart.setMethodSignature(_MappingList, () => ({
      __proto__: dart.getMethods(_MappingList.__proto__),
      _get: dart.fnType(dart.dynamic, [core.int]),
      [$_get]: dart.fnType(dart.dynamic, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.dynamic]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.dynamic])
    }));
    dart.setGetterSignature(_MappingList, () => ({
      __proto__: dart.getGetters(_MappingList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_MappingList, () => ({
      __proto__: dart.getSetters(_MappingList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setFieldSignature(_MappingList, () => ({
      __proto__: dart.getFields(_MappingList.__proto__),
      [_source]: dart.finalFieldType(ListOfS()),
      [_converter]: dart.finalFieldType(STodynamic())
    }));
    dart.defineExtensionMethods(_MappingList, ['_get', '_set']);
    dart.defineExtensionAccessors(_MappingList, ['length']);
    return _MappingList;
  });
  src__wrapper_helpers._MappingList = src__wrapper_helpers._MappingList$();
  dart.addTypeTests(src__wrapper_helpers._MappingList, _is__MappingList_default);
  const _is__MappingMap_default = Symbol('_is__MappingMap_default');
  src__wrapper_helpers._MappingMap$ = dart.generic((K, V) => {
    let KToString = () => (KToString = dart.constFn(dart.fnType(core.String, [K])))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let VTodynamic = () => (VTodynamic = dart.constFn(dart.fnType(dart.dynamic, [V])))();
    class _MappingMap extends collection.UnmodifiableMapBase$(core.String, dart.dynamic) {
      get keys() {
        return this[_source][$keys][$map](core.String, dart.fn(k => core.String.as(k), KToString()));
      }
      _get(key) {
        return this[_converter](this[_source][$_get](key));
      }
    }
    (_MappingMap.new = function(source, converter) {
      this[_source] = source;
      this[_converter] = converter;
    }).prototype = _MappingMap.prototype;
    dart.addTypeTests(_MappingMap);
    _MappingMap.prototype[_is__MappingMap_default] = true;
    dart.setMethodSignature(_MappingMap, () => ({
      __proto__: dart.getMethods(_MappingMap.__proto__),
      _get: dart.fnType(dart.dynamic, [core.Object]),
      [$_get]: dart.fnType(dart.dynamic, [core.Object])
    }));
    dart.setGetterSignature(_MappingMap, () => ({
      __proto__: dart.getGetters(_MappingMap.__proto__),
      keys: core.Iterable$(core.String),
      [$keys]: core.Iterable$(core.String)
    }));
    dart.setFieldSignature(_MappingMap, () => ({
      __proto__: dart.getFields(_MappingMap.__proto__),
      [_source]: dart.finalFieldType(MapOfK$V()),
      [_converter]: dart.finalFieldType(VTodynamic())
    }));
    dart.defineExtensionMethods(_MappingMap, ['_get']);
    dart.defineExtensionAccessors(_MappingMap, ['keys']);
    return _MappingMap;
  });
  src__wrapper_helpers._MappingMap = src__wrapper_helpers._MappingMap$();
  dart.addTypeTests(src__wrapper_helpers._MappingMap, _is__MappingMap_default);
  dart.trackLibraries("packages/json_annotation/json_annotation.ddc", {
    "package:json_annotation/json_annotation.dart": json_annotation,
    "package:json_annotation/src/allowed_keys_helpers.dart": src__allowed_keys_helpers,
    "package:json_annotation/src/checked_helpers.dart": src__checked_helpers,
    "package:json_annotation/src/json_converter.dart": src__json_converter,
    "package:json_annotation/src/json_literal.dart": src__json_literal,
    "package:json_annotation/src/json_serializable.dart": src__json_serializable,
    "package:json_annotation/src/wrapper_helpers.dart": src__wrapper_helpers
  }, '{"version":3,"sourceRoot":"","sources":["src/allowed_keys_helpers.dart","src/checked_helpers.dart","src/json_converter.dart","src/json_literal.dart","src/json_serializable.dart","src/wrapper_helpers.dart"],"names":[],"mappings":"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","file":"json_annotation.ddc.js"}');
  // Exports:
  return {
    json_annotation: json_annotation,
    src__allowed_keys_helpers: src__allowed_keys_helpers,
    src__checked_helpers: src__checked_helpers,
    src__json_converter: src__json_converter,
    src__json_literal: src__json_literal,
    src__json_serializable: src__json_serializable,
    src__wrapper_helpers: src__wrapper_helpers
  };
});

//# sourceMappingURL=json_annotation.ddc.js.map
