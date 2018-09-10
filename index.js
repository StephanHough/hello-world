var express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/',function(req, res){
res.sendfile(__dirname + '/index.html')
});

app.get('/profile/:id', function(req, res){
    res.render('profile', {
        personId: req.params.id
    });
});

app.listen(3000);