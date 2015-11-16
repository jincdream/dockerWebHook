#!/bin/bash
stop (){
  docker stop node
}

remove (){
  docker rm node
}

pull (){
  docker pull looj/dockertest
}

run (){
  docker run --name=node -d -p 10086:8099 looj/dockertest
}

stop & remove & pull & run
