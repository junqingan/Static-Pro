/**
 * @author [junqingan]
 * @email [an_xmin@126.com]
 * @create date 2018-05-11 05:37:25
 * @modify date 2018-05-11 05:37:25
 * @desc [description]
*/

var express = require('express');
var app = express();

const port = '8080';


app.use(express.static('dist'));

// 首页
app.get('/', function(req, res) {
    res.sendfile('./dist/html/index.html');
});
// index
app.get('/index', function(req, res) {
    res.sendfile('./dist/html/main.html');
});

app.listen(port, function() {
    console.log(`server on http://localhost:${port}`);
})