import 'package:json_annotation/json_annotation.dart';
part 'game.g.dart';

@JsonSerializable()
class Game {
  String response;

  /* Constructors */
  Game.empty();
  Game(this.response);

  /* Json serialization utility */
  factory Game.fromJson(Map<String, dynamic> json) => _$GameFromJson(json);
  Map<String, dynamic> toJson() => _$GameToJson(this);
}