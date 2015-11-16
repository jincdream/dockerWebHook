'use strict'
const http = require('http')
const child = require('child_process')
const path = require('path')


var shFile = path.resolve('./test.sh')

var server = http.createServer((req,res) => {
  child.execFile(shFile)
  res.end(110)
}).listen('9990')

// var request = require('request');
// var url ='http://requestb.in/1jxdm741'
// request(url, (error, response, body) => {
//   if (!error) {
//     console.log(body);
//   }
// });
