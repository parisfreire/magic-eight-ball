// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'statistics.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Statistics _$StatisticsFromJson(Map<String, dynamic> json) {
  return Statistics(
      json['totalQuestions'] as int,
      json['totalAffirmativeResponses'] as int,
      json['totalNonCommittalResponses'] as int,
      json['totalNegativeResponses'] as int);
}

Map<String, dynamic> _$StatisticsToJson(Statistics instance) =>
    <String, dynamic>{
      'totalQuestions': instance.totalQuestions,
      'totalAffirmativeResponses': instance.totalAffirmativeResponses,
      'totalNonCommittalResponses': instance.totalNonCommittalResponses,
      'totalNegativeResponses': instance.totalNegativeResponses
    };
