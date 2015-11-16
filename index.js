'use strict'
const http = require('http')
const child = require('child_process')
const path = require('path')


var shFile = path.resolve('./start.sh')
var time   = +new Date
/*
{
  "push_data":{
    "pushed_at":1385141110,
    "images":[
      "imagehash1",
      "imagehash2",
      "imagehash3"
    ],
    "pusher":"username"
  },
  "repository":{
    "status":"Active",
    "description":"my docker repo that does cool things",
    "is_trusted":false,
    "full_description":"This is my full description",
    "repo_url":"https://registry.hub.docker.com/u/username/reponame/",
    "owner":"username",
    "is_official":false,
    "is_private":false,
    "name":"reponame",
    "namespace":"username",
    "star_count":1,
    "comment_count":1,
    "date_created":1370174400,
    "dockerfile":"my full dockerfile is listed here",
    "repo_name":"username/reponame"
  }
}
*/
var checkDockPost = (json) => {
  return new Promise((resovle,reject) => {
    let diff = Date.now() - time
    // if(diff <= 120000){
      time = +new Date
      console.log(json)
      resovle(json)
    // }else{
      // reject(json)
    // }
  })
}
var server = http.createServer((req,res) => {
  var data = ''
  if(req.method === 'GET'){
    console.log('GET')
    res.end('GET')
    return;
  }
  req.on('data',(postBuffer) => {
    data += postBuffer
  })
  req.on('end',(err) => {
    checkDockPost(data)
      .then((json) => {
        let run = child.spawn('sh',[shFile])
        run.on('close',(code, signal) => {
          console.log('child process terminated due to receipt of signal ' + signal)
        })
        res.end(data + '--- ok')
      })
      .catch((err) => {
        console.log(err)
        res.end('err')
      })
  })

}).listen('9990')
