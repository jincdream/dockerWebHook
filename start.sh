#!/bin/bash
stop (){
  docker stop nodep
}

remove (){
  docker rm nodep
}

pull (){
  docker pull looj/dockertest
}

run (){
  docker run -n nodep -d -p 10086:8099 looj/dockertest
}

stop & remove & pull & run
