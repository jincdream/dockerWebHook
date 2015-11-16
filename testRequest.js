// var request = require('request');
'use strict'
const http = require('http')
const querystring = require('querystring')
const url = 'http://127.0.0.1:9990'
var postData = querystring.stringify({
  'msg' : 'Hello Docker!'
});

var options = {
  hostname: '127.0.0.1',
  port: 9990,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
}
var req = http.request(options,res => {
  var data = ''
  res.on('data',(bf) => {
    data = data + bf
  })
  res.on('end',err => {
    console.error(data)
  })
})
req.write(postData)
req.end()

// request.post({
//   url: url,
//   form: {
//     key: 'docker'
//   }
// }, function(err, httpResponse, body) {
//   console.log(body)
// })
