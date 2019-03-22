import 'dart:async';
import 'dart:convert';
import 'package:angular/core.dart';
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';

import 'package:http/http.dart';

@Injectable()
class StatisticsService {

  final Client _http;
  static const API_URL = "http://localhost:8090/api/v1/statistics";

  StatisticsService(this._http);

  Future<Statistics> getStatistics() async{

  Response response = await _http.get("$API_URL");
    Statistics statistics = Statistics.fromJson(json.decode(response.body));

    return statistics;
  }
}
