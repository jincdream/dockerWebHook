#!/bin/bash
stop (){
  docker stop node
}

remove (){
  docker remove node
}

pull (){
  docker pull loop/dockertest
}

run (){
  docker run --name=node -d -p 10086:8099 looj/dockertest
}

stop & remove & pull & run
