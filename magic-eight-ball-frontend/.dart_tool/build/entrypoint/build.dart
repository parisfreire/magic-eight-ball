import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:json_serializable/builder.dart' as _i2;
import 'package:source_gen/builder.dart' as _i3;
import 'package:sass_builder/sass_builder.dart' as _i4;
import 'package:build/build.dart' as _i5;
import 'package:angular_components/builder.dart' as _i6;
import 'package:angular/builder.dart' as _i7;
import 'package:build_test/builder.dart' as _i8;
import 'package:build_config/build_config.dart' as _i9;
import 'package:build_modules/builders.dart' as _i10;
import 'package:build_web_compilers/builders.dart' as _i11;
import 'dart:isolate' as _i12;
import 'package:build_runner/build_runner.dart' as _i13;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('json_serializable|json_serializable', [_i2.jsonSerializable],
      _i1.toDependentsOf('json_serializable'),
      hideOutput: true, appliesBuilders: ['source_gen|combining_builder']),
  _i1.apply('source_gen|combining_builder', [_i3.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen|part_cleanup']),
  _i1.apply('sass_builder|sass_builder', [_i4.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions:
          new _i5.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder|sass_source_cleanup']),
  _i1.apply('angular_components|scss_builder', [_i6.scssBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true, appliesBuilders: ['sass_builder|sass_source_cleanup']),
  _i1.apply(
      'angular|angular',
      [_i7.templatePlaceholder, _i7.templateCompiler, _i7.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular|placeholder_cleanup',
        'angular|component_source_cleanup'
      ]),
  _i1.apply(
      'build_test|test_bootstrap',
      [_i8.debugIndexBuilder, _i8.debugTestBuilder, _i8.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i9.InputSet(include: const ['test/**'])),
  _i1.apply('build_modules|module_library', [_i10.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|vm',
      [
        _i10.metaModuleBuilderFactoryForPlatform('vm'),
        _i10.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i10.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dart2js',
      [
        _i10.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i10.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i10.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dartdevc',
      [
        _i10.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i10.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i10.moduleBuilderFactoryForPlatform('dartdevc'),
        _i10.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i10.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i11.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers|dart_source_cleanup',
        'build_modules|dartdevc',
        'build_modules|dart2js'
      ]),
  _i1.apply('build_web_compilers|entrypoint', [_i11.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i9.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i5.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: new _i5.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('source_gen|part_cleanup', _i3.partCleanup,
      defaultGenerateFor: const _i9.InputSet()),
  _i1.applyPostProcess('angular|placeholder_cleanup', _i7.placeholderCleanup,
      defaultGenerateFor: const _i9.InputSet()),
  _i1.applyPostProcess(
      'angular|component_source_cleanup', _i7.componentSourceCleanup,
      defaultReleaseOptions: new _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i9.InputSet(include: const ['lib/**'])),
  _i1.applyPostProcess(
      'sass_builder|sass_source_cleanup', _i4.sassSourceCleanup,
      defaultReleaseOptions: new _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i9.InputSet()),
  _i1.applyPostProcess('build_modules|module_cleanup', _i10.moduleCleanup,
      defaultGenerateFor: const _i9.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i11.dartSourceCleanup,
      defaultReleaseOptions: new _i5.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i9.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i11.dart2JsArchiveExtractor,
      defaultReleaseOptions: new _i5.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i9.InputSet())
];
main(List<String> args, [_i12.SendPort sendPort]) async {
  var result = await _i13.run(args, _builders);
  sendPort?.send(result);
}
