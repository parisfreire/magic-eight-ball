define(['dart_sdk', 'packages/http_parser/http_parser'], function(dart_sdk, http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__media_type = http_parser.src__media_type;
  const _root = Object.create(null);
  const src__byte_stream = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__exception = Object.create(_root);
  const src__request = Object.create(_root);
  const src__streamed_response = Object.create(_root);
  const src__base_response = Object.create(_root);
  const src__response = Object.create(_root);
  const src__client = Object.create(_root);
  const src__base_request = Object.create(_root);
  const src__base_client = Object.create(_root);
  const src__browser_client = Object.create(_root);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $hashCode = dartx.hashCode;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  const $length = dartx.length;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $addAll = dartx.addAll;
  const $cast = dartx.cast;
  const $response = dartx.response;
  const $result = dartx.result;
  const $responseHeaders = dartx.responseHeaders;
  const $onLoad = dartx.onLoad;
  const $onError = dartx.onError;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let ListOfStringToString = () => (ListOfStringToString = dart.constFn(dart.fnType(core.String, [ListOfString()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let Uint8ListToResponse = () => (Uint8ListToResponse = dart.constFn(dart.fnType(src__response.Response, [typed_data.Uint8List])))();
  let ResponseToString = () => (ResponseToString = dart.constFn(dart.fnType(core.String, [src__response.Response])))();
  let ResponseToUint8List = () => (ResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [src__response.Response])))();
  let _HashSetOfHttpRequest = () => (_HashSetOfHttpRequest = dart.constFn(collection._HashSet$(html.HttpRequest)))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(src__streamed_response.StreamedResponse)))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let SetOfHttpRequest = () => (SetOfHttpRequest = dart.constFn(core.Set$(html.HttpRequest)))();
  src__byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new src__byte_stream.ByteStream.new(StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8List().new();
      let sink = convert.ByteConversionSink.withCallback(dart.fn(bytes => completer.complete(typed_data.Uint8List.fromList(bytes)), ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding) {
      if (encoding === void 0) encoding = convert.utf8;
      return encoding.decodeStream(this);
    }
    toStringStream(encoding) {
      if (encoding === void 0) encoding = convert.utf8;
      return encoding.decoder.bind(this);
    }
  };
  (src__byte_stream.ByteStream.new = function(stream) {
    src__byte_stream.ByteStream.__proto__.new.call(this, stream);
  }).prototype = src__byte_stream.ByteStream.prototype;
  dart.addTypeTests(src__byte_stream.ByteStream);
  dart.setMethodSignature(src__byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(src__byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  src__utils.mapToQuery = function(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => dart.str(pair[$_get](0)) + "=" + dart.str(pair[$_get](1)), ListOfStringToString()))[$join]("&");
  };
  src__utils.split1 = function(toSplit, pattern) {
    if (toSplit[$isEmpty]) return JSArrayOfString().of([]);
    let index = toSplit[$indexOf](pattern);
    if (index === -1) return JSArrayOfString().of([toSplit]);
    return JSArrayOfString().of([toSplit[$substring](0, index), toSplit[$substring](index + pattern.length)]);
  };
  src__utils.encodingForCharset = function(charset, fallback) {
    if (fallback === void 0) fallback = convert.latin1;
    if (charset == null) return fallback;
    let encoding = convert.Encoding.getByName(charset);
    return encoding == null ? fallback : encoding;
  };
  src__utils.requiredEncodingForCharset = function(charset) {
    let encoding = convert.Encoding.getByName(charset);
    if (encoding != null) return encoding;
    dart.throw(new core.FormatException.new("Unsupported encoding \"" + dart.str(charset) + "\"."));
  };
  dart.defineLazy(src__utils, {
    /*src__utils._ASCII_ONLY*/get _ASCII_ONLY() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  src__utils.isPlainAscii = function(string) {
    return src__utils._ASCII_ONLY.hasMatch(string);
  };
  src__utils.toUint8List = function(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return typed_data.Uint8List.fromList(input);
  };
  src__utils.toByteStream = function(stream) {
    if (src__byte_stream.ByteStream.is(stream)) return stream;
    return new src__byte_stream.ByteStream.new(stream);
  };
  src__utils.onDone = function(T, stream, onDone) {
    return stream.transform(T, async.StreamTransformer$(T, T).fromHandlers({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  src__utils.store = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => {
        sink.close();
        completer.complete();
      }, VoidToNull())});
    return completer.future;
  };
  src__utils.writeStreamToSink = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => completer.complete(), VoidTovoid())});
    return completer.future;
  };
  const _is_Pair_default = Symbol('_is_Pair_default');
  src__utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
      toString() {
        return "(" + dart.str(this.first) + ", " + dart.str(this.last) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        if (!src__utils.Pair.is(other)) return false;
        return dart.equals(dart.dload(other, 'first'), this.first) && dart.equals(dart.dload(other, 'last'), this.last);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.last))) >>> 0;
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    const first$ = Symbol("Pair.first");
    const last$ = Symbol("Pair.last");
    dart.setMethodSignature(Pair, () => ({
      __proto__: dart.getMethods(Pair.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(Pair, () => ({
      __proto__: dart.getGetters(Pair.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    dart.defineExtensionMethods(Pair, ['toString', '_equals']);
    dart.defineExtensionAccessors(Pair, ['hashCode']);
    return Pair;
  });
  src__utils.Pair = src__utils.Pair$();
  dart.addTypeTests(src__utils.Pair, _is_Pair_default);
  src__utils.chainToCompleter = function(future, completer) {
    future.then(dart.void, dart.bind(completer, 'complete'), {onError: dart.bind(completer, 'completeError')});
  };
  src__exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (src__exception.ClientException.new = function(message, uri) {
    if (uri === void 0) uri = null;
    this[message$] = message;
    this[uri$] = uri;
  }).prototype = src__exception.ClientException.prototype;
  dart.addTypeTests(src__exception.ClientException);
  const message$ = Symbol("ClientException.message");
  const uri$ = Symbol("ClientException.uri");
  src__exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__exception.ClientException, () => ({
    __proto__: dart.getFields(src__exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(src__exception.ClientException, ['toString']);
  const _defaultEncoding = Symbol('_defaultEncoding');
  const _bodyBytes = Symbol('_bodyBytes');
  const _contentType = Symbol('_contentType');
  const _checkFinalized = Symbol('_checkFinalized');
  const _contentLength = Symbol('_contentLength');
  const _persistentConnection = Symbol('_persistentConnection');
  const _followRedirects = Symbol('_followRedirects');
  const _maxRedirects = Symbol('_maxRedirects');
  const _finalized = Symbol('_finalized');
  const _checkFinalized$ = Symbol('_checkFinalized');
  src__base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let client = src__client.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = src__utils.onDone(ListOfint(), response.stream, dart.bind(client, 'close'));
          return new src__streamed_response.StreamedResponse.new(new src__byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (_) {
          client.close();
          dart.rethrow(_);
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str(this.method) + " " + dart.str(this.url);
    }
  };
  (src__base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringToint())});
  }).prototype = src__base_request.BaseRequest.prototype;
  dart.addTypeTests(src__base_request.BaseRequest);
  const method$ = Symbol("BaseRequest.method");
  const url$ = Symbol("BaseRequest.url");
  const headers = Symbol("BaseRequest.headers");
  dart.setMethodSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(src__base_request.BaseRequest.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(src__base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(src__base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setFieldSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getFields(src__base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(core.int),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(MapOfString$String()),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__base_request.BaseRequest, ['toString']);
  src__request.Request = class Request extends src__base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]("charset"))) {
        return this[_defaultEncoding];
      }
      return src__utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]("charset"));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = src__utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("text", "plain", new (IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]("charset"))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + ("content-type \"" + dart.str(contentType.mimeType) + "\".")));
      }
      this.body = src__utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return src__byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return src__media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]("content-type", dart.toString(value));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (src__request.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = typed_data.Uint8List.new(0);
    src__request.Request.__proto__.new.call(this, method, url);
  }).prototype = src__request.Request.prototype;
  dart.addTypeTests(src__request.Request);
  dart.setMethodSignature(src__request.Request, () => ({
    __proto__: dart.getMethods(src__request.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__request.Request, () => ({
    __proto__: dart.getGetters(src__request.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: src__media_type.MediaType
  }));
  dart.setSetterSignature(src__request.Request, () => ({
    __proto__: dart.getSetters(src__request.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: src__media_type.MediaType
  }));
  dart.setFieldSignature(src__request.Request, () => ({
    __proto__: dart.getFields(src__request.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  let const$;
  let const$0;
  src__base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (src__base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$0 || (const$0 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = src__base_response.BaseResponse.prototype;
  dart.addTypeTests(src__base_response.BaseResponse);
  const request$ = Symbol("BaseResponse.request");
  const statusCode$ = Symbol("BaseResponse.statusCode");
  const reasonPhrase$ = Symbol("BaseResponse.reasonPhrase");
  const contentLength$ = Symbol("BaseResponse.contentLength");
  const headers$ = Symbol("BaseResponse.headers");
  const isRedirect$ = Symbol("BaseResponse.isRedirect");
  const persistentConnection$ = Symbol("BaseResponse.persistentConnection");
  dart.setFieldSignature(src__base_response.BaseResponse, () => ({
    __proto__: dart.getFields(src__base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(src__base_request.BaseRequest),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(core.String),
    contentLength: dart.finalFieldType(core.int),
    headers: dart.finalFieldType(MapOfString$String()),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  src__streamed_response.StreamedResponse = class StreamedResponse extends src__base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (src__streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$ || (const$ = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = src__utils.toByteStream(stream);
    src__streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(src__streamed_response.StreamedResponse);
  const stream$ = Symbol("StreamedResponse.stream");
  dart.setFieldSignature(src__streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(src__streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(src__byte_stream.ByteStream)
  }));
  let const$1;
  let const$2;
  src__response.Response = class Response extends src__base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return src__response._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return response.stream.toBytes().then(src__response.Response, dart.fn(body => new src__response.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), Uint8ListToResponse()));
    }
  };
  (src__response.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$1 || (const$1 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    src__response.Response.bytes.call(this, src__response._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__response.Response.prototype;
  (src__response.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$2 || (const$2 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = src__utils.toUint8List(bodyBytes);
    src__response.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__response.Response.prototype;
  dart.addTypeTests(src__response.Response);
  const bodyBytes$ = Symbol("Response.bodyBytes");
  dart.setGetterSignature(src__response.Response, () => ({
    __proto__: dart.getGetters(src__response.Response.__proto__),
    body: core.String
  }));
  dart.setFieldSignature(src__response.Response, () => ({
    __proto__: dart.getFields(src__response.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  src__response._encodingForHeaders = function(headers) {
    return src__utils.encodingForCharset(src__response._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  src__response._contentTypeForHeaders = function(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return src__media_type.MediaType.parse(contentType);
    return new src__media_type.MediaType.new("application", "octet-stream");
  };
  src__client.Client = class Client extends core.Object {
    static new() {
      return src__browser_client.createClient();
    }
  };
  (src__client.Client[dart.mixinNew] = function() {
  }).prototype = src__client.Client.prototype;
  dart.addTypeTests(src__client.Client);
  const _sendUnstreamed = Symbol('_sendUnstreamed');
  const _checkResponseSuccess = Symbol('_checkResponseSuccess');
  src__base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(core.String, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.body;
      }, ResponseToString()));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(typed_data.Uint8List, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }, ResponseToUint8List()));
    }
    [_sendUnstreamed](method, url, headers, body, encoding) {
      return async.async(src__response.Response, (function* _sendUnstreamed() {
        if (body === void 0) body = null;
        if (encoding === void 0) encoding = null;
        if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
        let request = new src__request.Request.new(method, core.Uri._check(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return src__response.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
      dart.throw(new src__exception.ClientException.new(message + ".", core.Uri._check(url)));
    }
    close() {}
  };
  (src__base_client.BaseClient.new = function() {
  }).prototype = src__base_client.BaseClient.prototype;
  dart.addTypeTests(src__base_client.BaseClient);
  src__base_client.BaseClient[dart.implements] = () => [src__client.Client];
  dart.setMethodSignature(src__base_client.BaseClient, () => ({
    __proto__: dart.getMethods(src__base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    get: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    post: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String), body: dart.dynamic, encoding: convert.Encoding}),
    put: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String), body: dart.dynamic, encoding: convert.Encoding}),
    patch: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String), body: dart.dynamic, encoding: convert.Encoding}),
    delete: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    read: dart.fnType(async.Future$(core.String), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    [_sendUnstreamed]: dart.fnType(async.Future$(src__response.Response), [core.String, dart.dynamic, core.Map$(core.String, core.String)], [dart.dynamic, convert.Encoding]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, src__response.Response]),
    close: dart.fnType(dart.void, [])
  }));
  src__browser_client.createClient = function() {
    return new src__browser_client.BrowserClient.new();
  };
  const _xhrs = Symbol('_xhrs');
  const _openHttpRequest = Symbol('_openHttpRequest');
  src__browser_client.BrowserClient = class BrowserClient extends src__base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        this[_openHttpRequest](xhr, request.method, dart.toString(request.url), {asynch: true});
        xhr.responseType = "blob";
        xhr.withCredentials = this.withCredentials;
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponse().new();
        xhr[$onLoad].first.then(core.Null, dart.fn(_ => {
          let blob = xhr[$response] == null ? html.Blob.new([]) : xhr[$response];
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(core.Null, dart.fn(_ => {
            let body = typed_data.Uint8List.as(reader[$result]);
            completer.complete(new src__streamed_response.StreamedResponse.new(src__byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventToNull()));
          reader[$onError].first.then(core.Null, dart.fn(error => {
            completer.completeError(new src__exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventToNull()));
          reader.readAsArrayBuffer(html.Blob._check(blob));
        }, ProgressEventToNull()));
        xhr[$onError].first.then(core.Null, dart.fn(_ => {
          completer.completeError(new src__exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventToNull()));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    [_openHttpRequest](request, method, url, opts) {
      let asynch = opts && 'asynch' in opts ? opts.asynch : null;
      let user = opts && 'user' in opts ? opts.user : null;
      let password = opts && 'password' in opts ? opts.password : null;
      request.open(method, url, {async: asynch, user: user, password: password});
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (src__browser_client.BrowserClient.new = function() {
    this[_xhrs] = new (_HashSetOfHttpRequest()).new();
    this[withCredentials] = false;
  }).prototype = src__browser_client.BrowserClient.prototype;
  dart.addTypeTests(src__browser_client.BrowserClient);
  const withCredentials = Symbol("BrowserClient.withCredentials");
  dart.setMethodSignature(src__browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(src__browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest]),
    [_openHttpRequest]: dart.fnType(dart.void, [html.HttpRequest, core.String, core.String], {asynch: core.bool, user: core.String, password: core.String})
  }));
  dart.setFieldSignature(src__browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(src__browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(SetOfHttpRequest()),
    withCredentials: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/http/src/base_client.ddc", {
    "package:http/src/byte_stream.dart": src__byte_stream,
    "package:http/src/utils.dart": src__utils,
    "package:http/src/exception.dart": src__exception,
    "package:http/src/request.dart": src__request,
    "package:http/src/streamed_response.dart": src__streamed_response,
    "package:http/src/base_response.dart": src__base_response,
    "package:http/src/response.dart": src__response,
    "package:http/src/client.dart": src__client,
    "package:http/src/base_request.dart": src__base_request,
    "package:http/src/base_client.dart": src__base_client,
    "package:http/src/browser_client.dart": src__browser_client
  }, '{"version":3,"sourceRoot":"","sources":["byte_stream.dart","utils.dart","exception.dart","base_request.dart","request.dart","base_response.dart","streamed_response.dart","response.dart","client.dart","base_client.dart","browser_client.dart"],"names":[],"mappings":"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","file":"base_client.ddc.js"}');
  // Exports:
  return {
    src__byte_stream: src__byte_stream,
    src__utils: src__utils,
    src__exception: src__exception,
    src__request: src__request,
    src__streamed_response: src__streamed_response,
    src__base_response: src__base_response,
    src__response: src__response,
    src__client: src__client,
    src__base_request: src__base_request,
    src__base_client: src__base_client,
    src__browser_client: src__browser_client
  };
});

//# sourceMappingURL=base_client.ddc.js.map
