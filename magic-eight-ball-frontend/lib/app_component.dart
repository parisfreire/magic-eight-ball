import 'package:angular/angular.dart';

import 'src/game/game_component.dart';

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [GameComponent],
)
class AppComponent {
  // Nothing here yet. All logic is in GameComponent.
}
