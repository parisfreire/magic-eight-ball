import 'package:json_annotation/json_annotation.dart';

part 'statistics.g.dart';

@JsonSerializable()
class Statistics {

  int totalQuestions = 0;
  int totalAffirmativeResponses = 0;
  int totalNonCommittalResponses = 0;
  int totalNegativeResponses = 0;
  
  

  Statistics.empty();

  Statistics(this.totalQuestions, this.totalAffirmativeResponses, this.totalNonCommittalResponses, this.totalNegativeResponses);

  factory Statistics.fromJson(Map<String, dynamic> json) => _$StatisticsFromJson(json);

  Map<String, dynamic> toJson() => _$StatisticsToJson(this);
}