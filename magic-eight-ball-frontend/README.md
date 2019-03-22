## Magic 8 Ball App using [AngularDart](https://github.com/dart-lang/angular),[Material Design](https://material.io/design/) and [AngularDart Material Design Components](https://dart-lang.github.io/angular_components/).

### Stand-alone deployment with [Webdev](https://github.com/dart-lang/site-webdev/blob/master/src/tools/webdev.md)

Installing Pubspec dependencies.

```
pub get
```

Starting local development environment.

```
webdev serve
```

### Stand-alone deployment with Docker

Building the image.

```
docker build -t "magic-eight-ball-frontend:dockerfile" .
```

Running the container from the previous image.

```
docker run -it -p 8080:8080 magic-eight-ball-frontend:dockerfile
```

