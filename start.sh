#!/bin/bash;

stopn()
{
  docker stop nodep
}

remove()
{
  docker rm -f nodep
}

pull()
{
  docker pull looj/dockertest
}

runn()
{
  docker run --name=nodep -d --publish 10086:8099 looj/dockertest
}

stopn & remove & pull & runn
