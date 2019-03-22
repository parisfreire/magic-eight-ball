Magic 8 ball
=========

Getting started with Docker
---------------

Download [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows. [Docker Compose](https://docs.docker.com/compose) will be automatically installed. On Linux, make sure you have the latest version of [Compose](https://docs.docker.com/compose/install/). 

Run in this directory:
```
docker-compose up
```
The front-end app will be running at [http://localhost:8080](http://localhost:8080), and the back-end app will be at [http://localhost:8090](http://localhost:8090).

Manual deployment
---------------

You can run by hand the *front-end app* deploying it on a Apache/Nginx copying the files under the following directory:

 **magic-eight-ball-frontend/build** 

The *back-end app* can be deployed running a simple Java jar.

Run in the *backend app* directory:
```
java -jar build/libs/magic-eight-ball-backend-0.1.war
```
