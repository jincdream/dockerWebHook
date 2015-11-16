stop(){
  docker stop nodde
}
remove(){
  docker remove node
{
pull(){
  docker pull loop/dockertest
}
run(){
  docker run --name=node -d -p 10086:8099 loop/dockertest
}

stop && remove && pull && run
