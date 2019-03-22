## Magic 8 Ball App using [Grails](https://grails.org)

### Stand-alone deployment with Docker

Building the image.

```
docker build -t "magic-eight-ball-backend:dockerfile" .
```

Running the container from the previous image.

```
docker run -it -p 8090:8090 magic-eight-ball-backend:dockerfile
```

