import 'package:angular/angular.dart';

import 'package:angular_components/scorecard/scorecard.dart';

import 'package:magic_eight_ball_frontend/src/statistics/model/statistics.dart';

@Component(
    selector: 'statistics',
    templateUrl: 'statistics_component.html',
    styleUrls: ['statistics_component.css'],
    directives: [ScorecardComponent],
    providers: [],
    exports: []
)
class StatisticsComponent{

  /* Parameter when component is called */
  @Input()
  Statistics statistics;

  /* Empty constructor */
  StatisticsComponent();

}

