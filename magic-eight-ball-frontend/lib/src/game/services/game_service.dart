import 'dart:async';
import 'dart:convert';
import 'package:angular/core.dart';
import 'package:magic_eight_ball_frontend/src/game/model/game.dart';

import 'package:http/http.dart';

@Injectable()
class GameService {

  /* Angular Dart HTTP library */
  final Client _http;
  static const API_URL = "http://localhost:8090/api/v1/game";

  /* Constructor */
  GameService(this._http);

  Future<Game> getGameResponse(String question) async{
  /* Json string to set the body request*/  
  String jsonString = '{"question":"${question}"}';
  /* Json string to set the headers request */
  Map<String, String> requestHeaders = {"Accept": "application/json","Content-Type":"application/json"};

  /* Http post request */
  Response response = await _http.post("$API_URL",headers: requestHeaders, body: jsonString);
    /* Object serialization from the JSON response */
    Game game = Game.fromJson(json.decode(response.body));
    return game;
  }
}
