import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_tab/fixed_material_tab_strip.dart';

import 'package:magic_eight_ball_frontend/src/game/model/game.dart';
import 'package:magic_eight_ball_frontend/src/game/services/game_service.dart';
import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';
import 'package:magic_eight_ball_frontend/src/statistics/services/statistics_service.dart';
import 'package:magic_eight_ball_frontend/src/statistics/statistics_component.dart';


@Component(
  selector: 'game',
  styleUrls: ['game_component.css'],
  templateUrl: 'game_component.html',
  directives: [
    StatisticsComponent,
    materialInputDirectives,
    MaterialButtonComponent,
    FixedMaterialTabStripComponent,
    NgFor,
    NgIf
  ],
  providers: [ClassProvider(GameService), ClassProvider(StatisticsService), materialProviders]
)
class GameComponent {

  final GameService _gameService;
  final StatisticsService _statisticsService;

  Game game = new Game("");
  Statistics statistics = new Statistics(0, 0, 0, 0);

  String question = "";

  /* Tab index and tab headers name */
  int tabIndex = 0;
  final tabLabels = const <String>[
    'Game',
    'Statistics'
  ];

  /* Constructor injecting the services */
  GameComponent(this._gameService, this._statisticsService);

  /* This method submits the user question to the backend */
  Future<void> submitQuestion() async{
    /* Empty the response to display the 8 again*/
    game.response = "";
    /* Get element with eight-ball class to add the shaking class*/
    querySelectorAll('.eight-ball').classes.add("shaking");
    /* Backend petition to post the question and retrieve the random response*/
    this._gameService.getGameResponse(question).then((Game g){
      /* Timer to wait to finish the shaking css */
      new Timer(const Duration(seconds: 2), () => 
        querySelectorAll('.eight-ball').classes.remove("shaking")
      );
      /* Timer to set the response once the ball stopped shaking */
     new Timer(const Duration(seconds: 1), () => 
        game = g
      );
    });
  }

  /* Tab change listener */
  Future<void> onTabChange(TabChangeEvent event) async{
    tabIndex = event.newIndex;

    /* tabIndex 1: Statistics tab */
    if(tabIndex == 1){
      this._statisticsService.getStatistics().then((Statistics s){
        statistics = s;
      });
    }
  }
}
