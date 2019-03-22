define(['dart_sdk', 'packages/http/src/base_client', 'packages/angular_components/material_tab/tab_change_event'], function(dart_sdk, base_client, tab_change_event) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__client = base_client.src__client;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const _root = Object.create(null);
  const src__game__model__game = Object.create(_root);
  const src__game__services__game_service = Object.create(_root);
  const src__statistics__model__statistics = Object.create(_root);
  const src__statistics__services__statistics_service = Object.create(_root);
  const src__statistics__statistics_component = Object.create(_root);
  const src__game__game_component = Object.create(_root);
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToGame = () => (VoidToGame = dart.constFn(dart.fnType(src__game__model__game.Game, [])))();
  let GameToNull = () => (GameToNull = dart.constFn(dart.fnType(core.Null, [src__game__model__game.Game])))();
  let StatisticsToNull = () => (StatisticsToNull = dart.constFn(dart.fnType(core.Null, [src__statistics__model__statistics.Statistics])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__game__model__game.Game = class Game extends core.Object {
    get response() {
      return this[response$];
    }
    set response(value) {
      this[response$] = value;
    }
    static fromJson(json) {
      return src__game__model__game._$GameFromJson(json);
    }
    toJson() {
      return src__game__model__game._$GameToJson(this);
    }
  };
  (src__game__model__game.Game.empty = function() {
    this[response$] = null;
  }).prototype = src__game__model__game.Game.prototype;
  (src__game__model__game.Game.new = function(response) {
    this[response$] = response;
  }).prototype = src__game__model__game.Game.prototype;
  dart.addTypeTests(src__game__model__game.Game);
  const response$ = Symbol("Game.response");
  dart.setMethodSignature(src__game__model__game.Game, () => ({
    __proto__: dart.getMethods(src__game__model__game.Game.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__game__model__game.Game, () => ({
    __proto__: dart.getFields(src__game__model__game.Game.__proto__),
    response: dart.fieldType(core.String)
  }));
  src__game__model__game._$GameFromJson = function(json) {
    return new src__game__model__game.Game.new(core.String.as(json[$_get]("response")));
  };
  src__game__model__game._$GameToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["response", instance.response]);
  };
  const _http = Symbol('_http');
  src__game__services__game_service.GameService = class GameService extends core.Object {
    getGameResponse(question) {
      return async.async(src__game__model__game.Game, (function* getGameResponse() {
        let jsonString = "{\"question\":\"" + dart.str(question) + "\"}";
        let requestHeaders = new (IdentityMapOfString$String()).from(["Accept", "application/json", "Content-Type", "application/json"]);
        let response = (yield this[_http].post("http://localhost:8090/api/v1/game", {headers: requestHeaders, body: jsonString}));
        let game = src__game__model__game.Game.fromJson(MapOfString$dynamic()._check(convert.json.decode(response.body)));
        return game;
      }).bind(this));
    }
  };
  (src__game__services__game_service.GameService.new = function(http) {
    this[_http] = http;
  }).prototype = src__game__services__game_service.GameService.prototype;
  dart.addTypeTests(src__game__services__game_service.GameService);
  dart.setMethodSignature(src__game__services__game_service.GameService, () => ({
    __proto__: dart.getMethods(src__game__services__game_service.GameService.__proto__),
    getGameResponse: dart.fnType(async.Future$(src__game__model__game.Game), [core.String])
  }));
  dart.setFieldSignature(src__game__services__game_service.GameService, () => ({
    __proto__: dart.getFields(src__game__services__game_service.GameService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__game__services__game_service.GameService, {
    /*src__game__services__game_service.GameService.API_URL*/get API_URL() {
      return "http://localhost:8090/api/v1/game";
    }
  });
  src__statistics__model__statistics.Statistics = class Statistics extends core.Object {
    get totalQuestions() {
      return this[totalQuestions$];
    }
    set totalQuestions(value) {
      this[totalQuestions$] = value;
    }
    get totalAffirmativeResponses() {
      return this[totalAffirmativeResponses$];
    }
    set totalAffirmativeResponses(value) {
      this[totalAffirmativeResponses$] = value;
    }
    get totalNonCommittalResponses() {
      return this[totalNonCommittalResponses$];
    }
    set totalNonCommittalResponses(value) {
      this[totalNonCommittalResponses$] = value;
    }
    get totalNegativeResponses() {
      return this[totalNegativeResponses$];
    }
    set totalNegativeResponses(value) {
      this[totalNegativeResponses$] = value;
    }
    static fromJson(json) {
      return src__statistics__model__statistics._$StatisticsFromJson(json);
    }
    toJson() {
      return src__statistics__model__statistics._$StatisticsToJson(this);
    }
  };
  (src__statistics__model__statistics.Statistics.empty = function() {
    this[totalQuestions$] = 0;
    this[totalAffirmativeResponses$] = 0;
    this[totalNonCommittalResponses$] = 0;
    this[totalNegativeResponses$] = 0;
  }).prototype = src__statistics__model__statistics.Statistics.prototype;
  (src__statistics__model__statistics.Statistics.new = function(totalQuestions, totalAffirmativeResponses, totalNonCommittalResponses, totalNegativeResponses) {
    this[totalQuestions$] = totalQuestions;
    this[totalAffirmativeResponses$] = totalAffirmativeResponses;
    this[totalNonCommittalResponses$] = totalNonCommittalResponses;
    this[totalNegativeResponses$] = totalNegativeResponses;
  }).prototype = src__statistics__model__statistics.Statistics.prototype;
  dart.addTypeTests(src__statistics__model__statistics.Statistics);
  const totalQuestions$ = Symbol("Statistics.totalQuestions");
  const totalAffirmativeResponses$ = Symbol("Statistics.totalAffirmativeResponses");
  const totalNonCommittalResponses$ = Symbol("Statistics.totalNonCommittalResponses");
  const totalNegativeResponses$ = Symbol("Statistics.totalNegativeResponses");
  dart.setMethodSignature(src__statistics__model__statistics.Statistics, () => ({
    __proto__: dart.getMethods(src__statistics__model__statistics.Statistics.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__statistics__model__statistics.Statistics, () => ({
    __proto__: dart.getFields(src__statistics__model__statistics.Statistics.__proto__),
    totalQuestions: dart.fieldType(core.int),
    totalAffirmativeResponses: dart.fieldType(core.int),
    totalNonCommittalResponses: dart.fieldType(core.int),
    totalNegativeResponses: dart.fieldType(core.int)
  }));
  src__statistics__model__statistics._$StatisticsFromJson = function(json) {
    return new src__statistics__model__statistics.Statistics.new(core.int.as(json[$_get]("totalQuestions")), core.int.as(json[$_get]("totalAffirmativeResponses")), core.int.as(json[$_get]("totalNonCommittalResponses")), core.int.as(json[$_get]("totalNegativeResponses")));
  };
  src__statistics__model__statistics._$StatisticsToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["totalQuestions", instance.totalQuestions, "totalAffirmativeResponses", instance.totalAffirmativeResponses, "totalNonCommittalResponses", instance.totalNonCommittalResponses, "totalNegativeResponses", instance.totalNegativeResponses]);
  };
  const _http$ = Symbol('_http');
  src__statistics__services__statistics_service.StatisticsService = class StatisticsService extends core.Object {
    getStatistics() {
      return async.async(src__statistics__model__statistics.Statistics, (function* getStatistics() {
        let response = (yield this[_http$].get("http://localhost:8090/api/v1/statistics"));
        let statistics = src__statistics__model__statistics.Statistics.fromJson(MapOfString$dynamic()._check(convert.json.decode(response.body)));
        return statistics;
      }).bind(this));
    }
  };
  (src__statistics__services__statistics_service.StatisticsService.new = function(http) {
    this[_http$] = http;
  }).prototype = src__statistics__services__statistics_service.StatisticsService.prototype;
  dart.addTypeTests(src__statistics__services__statistics_service.StatisticsService);
  dart.setMethodSignature(src__statistics__services__statistics_service.StatisticsService, () => ({
    __proto__: dart.getMethods(src__statistics__services__statistics_service.StatisticsService.__proto__),
    getStatistics: dart.fnType(async.Future$(src__statistics__model__statistics.Statistics), [])
  }));
  dart.setFieldSignature(src__statistics__services__statistics_service.StatisticsService, () => ({
    __proto__: dart.getFields(src__statistics__services__statistics_service.StatisticsService.__proto__),
    [_http$]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__statistics__services__statistics_service.StatisticsService, {
    /*src__statistics__services__statistics_service.StatisticsService.API_URL*/get API_URL() {
      return "http://localhost:8090/api/v1/statistics";
    }
  });
  src__statistics__statistics_component.StatisticsComponent = class StatisticsComponent extends core.Object {
    get statistics() {
      return this[statistics];
    }
    set statistics(value) {
      this[statistics] = value;
    }
  };
  (src__statistics__statistics_component.StatisticsComponent.new = function() {
    this[statistics] = null;
  }).prototype = src__statistics__statistics_component.StatisticsComponent.prototype;
  dart.addTypeTests(src__statistics__statistics_component.StatisticsComponent);
  const statistics = Symbol("StatisticsComponent.statistics");
  dart.setFieldSignature(src__statistics__statistics_component.StatisticsComponent, () => ({
    __proto__: dart.getFields(src__statistics__statistics_component.StatisticsComponent.__proto__),
    statistics: dart.fieldType(src__statistics__model__statistics.Statistics)
  }));
  const _gameService = Symbol('_gameService');
  const _statisticsService = Symbol('_statisticsService');
  let const$;
  let const$0;
  let const$1;
  src__game__game_component.GameComponent = class GameComponent extends core.Object {
    get game() {
      return this[game];
    }
    set game(value) {
      this[game] = value;
    }
    get statistics() {
      return this[statistics$];
    }
    set statistics(value) {
      this[statistics$] = value;
    }
    get question() {
      return this[question];
    }
    set question(value) {
      this[question] = value;
    }
    get tabIndex() {
      return this[tabIndex];
    }
    set tabIndex(value) {
      this[tabIndex] = value;
    }
    get tabLabels() {
      return this[tabLabels];
    }
    set tabLabels(value) {
      super.tabLabels = value;
    }
    submitQuestion() {
      return async.async(dart.void, (function* submitQuestion() {
        this.game.response = "";
        html.querySelectorAll(html.Element, ".eight-ball").classes.add("shaking");
        this[_gameService].getGameResponse(this.question).then(core.Null, dart.fn(g => {
          async.Timer.new(const$0 || (const$0 = dart.const(new core.Duration.new({seconds: 2}))), dart.fn(() => html.querySelectorAll(html.Element, ".eight-ball").classes.remove("shaking"), VoidTobool()));
          async.Timer.new(const$1 || (const$1 = dart.const(new core.Duration.new({seconds: 1}))), dart.fn(() => this.game = g, VoidToGame()));
        }, GameToNull()));
      }).bind(this));
    }
    onTabChange(event) {
      return async.async(dart.void, (function* onTabChange() {
        this.tabIndex = event.newIndex;
        if (this.tabIndex === 1) {
          this[_statisticsService].getStatistics().then(core.Null, dart.fn(s => {
            this.statistics = s;
          }, StatisticsToNull()));
        }
      }).bind(this));
    }
  };
  (src__game__game_component.GameComponent.new = function(gameService, statisticsService) {
    this[game] = new src__game__model__game.Game.new("");
    this[statistics$] = new src__statistics__model__statistics.Statistics.new(0, 0, 0, 0);
    this[question] = "";
    this[tabIndex] = 0;
    this[tabLabels] = const$ || (const$ = dart.constList(["Game", "Statistics"], core.String));
    this[_gameService] = gameService;
    this[_statisticsService] = statisticsService;
  }).prototype = src__game__game_component.GameComponent.prototype;
  dart.addTypeTests(src__game__game_component.GameComponent);
  const game = Symbol("GameComponent.game");
  const statistics$ = Symbol("GameComponent.statistics");
  const question = Symbol("GameComponent.question");
  const tabIndex = Symbol("GameComponent.tabIndex");
  const tabLabels = Symbol("GameComponent.tabLabels");
  dart.setMethodSignature(src__game__game_component.GameComponent, () => ({
    __proto__: dart.getMethods(src__game__game_component.GameComponent.__proto__),
    submitQuestion: dart.fnType(async.Future$(dart.void), []),
    onTabChange: dart.fnType(async.Future$(dart.void), [material_tab__tab_change_event.TabChangeEvent])
  }));
  dart.setFieldSignature(src__game__game_component.GameComponent, () => ({
    __proto__: dart.getFields(src__game__game_component.GameComponent.__proto__),
    [_gameService]: dart.finalFieldType(src__game__services__game_service.GameService),
    [_statisticsService]: dart.finalFieldType(src__statistics__services__statistics_service.StatisticsService),
    game: dart.fieldType(src__game__model__game.Game),
    statistics: dart.fieldType(src__statistics__model__statistics.Statistics),
    question: dart.fieldType(core.String),
    tabIndex: dart.fieldType(core.int),
    tabLabels: dart.finalFieldType(ListOfString())
  }));
  dart.trackLibraries("packages/magic_eight_ball_frontend/src/game/game_component.ddc", {
    "package:magic_eight_ball_frontend/src/game/model/game.dart": src__game__model__game,
    "package:magic_eight_ball_frontend/src/game/services/game_service.dart": src__game__services__game_service,
    "package:magic_eight_ball_frontend/src/statistics/model/statistics.dart": src__statistics__model__statistics,
    "package:magic_eight_ball_frontend/src/statistics/services/statistics_service.dart": src__statistics__services__statistics_service,
    "package:magic_eight_ball_frontend/src/statistics/statistics_component.dart": src__statistics__statistics_component,
    "package:magic_eight_ball_frontend/src/game/game_component.dart": src__game__game_component
  }, '{"version":3,"sourceRoot":"","sources":["model/game.dart","model/game.g.dart","services/game_service.dart","../statistics/model/statistics.dart","../statistics/model/statistics.g.dart","../statistics/services/statistics_service.dart","../statistics/statistics_component.dart","game_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;oBAOe,IAAyB;AAAE,YAAG,sCAAc,CAAC,IAAI;IAAC;;YACvC,oCAAY,CAAC;IAAK;;;IAR5C,eAAQ;EAGH;8CACP,QAAa;IAAR,eAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;mDCDD,IAAyB;AAC3C,eAAO,+BAAI,gBAAC,IAAI,QAAC;EACnB;iDAEkC,QAAa;UAC3C,2CAAkB,YAAY,QAAQ,SAAS;EAAC;;;oBCIrB,QAAe;AAAE;AAE9C,YAAO,aAAa,8BAAgB,QAAQ;AAE5C,YAAoB,iBAAiB,yCAAC,UAAU,oBAAmB,gBAAe;AAGlF,YAAS,YAAW,MAAM,WAAK,KAAK,CAAG,mCAAO,YAAW,cAAc,QAAQ,UAAU;AAEvF,YAAK,OAAO,oCAAa,8BAAC,YAAI,OAAO,CAAC,QAAQ,KAAK;AACnD,cAAO,KAAI;MACb;;;;IAbiB,WAAK;EAAC;;;;;;;;;;;MAHV,qDAAO;YAAG;;;;ICLnB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;oBAQwB,IAAyB;AAAE,YAAG,wDAAoB,CAAC,IAAI;IAAC;;YAEnD,sDAAkB,CAAC;IAAK;;;IAbrD,qBAAc,GAAG;IACjB,gCAAyB,GAAG;IAC5B,iCAA0B,GAAG;IAC7B,6BAAsB,GAAG;EAIX;gEAEP,cAAmB,EAAE,yBAA8B,EAAE,0BAA+B,EAAE,sBAA2B;IAA5G,qBAAc,GAAd,cAAc;IAAO,gCAAyB,GAAzB,yBAAyB;IAAO,iCAA0B,GAA1B,0BAA0B;IAAO,6BAAsB,GAAtB,sBAAsB;EAAC;;;;;;;;;;;;;;;;;qECR/F,IAAyB;AACvD,eAAO,iDAAU,aACb,IAAI,QAAC,gCACL,IAAI,QAAC,2CACL,IAAI,QAAC,4CACL,IAAI,QAAC;EACX;mEAEwC,QAAmB;UACvD,2CACE,kBAAkB,QAAQ,eAAe,EACzC,6BAA6B,QAAQ,0BAA0B,EAC/D,8BAA8B,QAAQ,2BAA2B,EACjE,0BAA0B,QAAQ,uBAAuB;EAC1D;;;;ACPgC;AAEnC,YAAS,YAAW,MAAM,YAAK,IAAI,CAAG,yCAAO;AAC3C,YAAW,aAAa,sDAAmB,8BAAC,YAAI,OAAO,CAAC,QAAQ,KAAK;AAErE,cAAO,WAAU;MACnB;;;;IARuB,YAAK;EAAC;;;;;;;;;;;MAFhB,uEAAO;YAAG;;;;ICOZ;;;;;;;;oBAAU;EAGA;;;;;;;;;;;;;ICYhB;;;;;;IACM;;;;;;IAEJ;;;;;;IAGH;;;;;;IACE;;;;;;;AASwB;AAE5B,iBAAI,SAAS,GAAG;AAEhB,6BAAgB,eAAC,sBAAsB,IAAI,CAAC;AAE5C,0BAAiB,gBAAgB,CAAC,aAAQ,MAAM,YAAC,QAAC,CAAM;AAEtD,UAAI,eAAK,CAAC,qCAAM,iBAAQ,WAAU,OAAI,cACpC,qBAAgB,eAAC,sBAAsB,OAAO,CAAC;AAGlD,UAAI,eAAK,CAAC,qCAAM,iBAAQ,WAAU,OAAI,cACnC,SAAI,GAAG,CAAC;;MAGd;;gBAGyB,KAAoB;AAAE;AAC7C,qBAAQ,GAAG,KAAK,SAAS;AAGzB,YAAG,aAAQ,KAAI,GAAE;AACf,kCAAuB,cAAc,OAAO,YAAC,QAAC,CAAY;AACxD,2BAAU,GAAG,CAAC;;;MAGpB;;;;IA5CK,UAAI,GAAG,IAAI,+BAAI,CAAC;IACV,iBAAU,GAAG,IAAI,iDAAU,CAAC,GAAG,GAAG,GAAG;IAEzC,cAAQ,GAAG;IAGd,cAAQ,GAAG;IACT,eAAS,GAAG,oCAChB,QACA;IAIiB,kBAAY;IAAO,wBAAkB;EAAC","file":"game_component.ddc.js"}');
  // Exports:
  return {
    src__game__model__game: src__game__model__game,
    src__game__services__game_service: src__game__services__game_service,
    src__statistics__model__statistics: src__statistics__model__statistics,
    src__statistics__services__statistics_service: src__statistics__services__statistics_service,
    src__statistics__statistics_component: src__statistics__statistics_component,
    src__game__game_component: src__game__game_component
  };
});

//# sourceMappingURL=game_component.ddc.js.map
