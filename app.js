var express = require('express');
var app = express();

var server = app.listen(3000, function(){
    console.log('Node.js is listening to PORT:' + server.address().port);
});

//photo data
var photoList = [
    {
        id: '001',
        name: 'photo001.jpg',
        type: 'jpg',
        dataUrl: 'http://localhost:300/data/photo001.jpg'
    },{
        id: '002',
        name: 'photo002.jpg',
        type: 'jpg',
        dataUrl: 'http://localhost:300/data/photo002.jpg'
    }
]


// app.get('/api/photo/:photoId', function(req, res, next){
//     var photo;
//     for (i = 0; i < photoList.length; i++){
//         if (photoList[i] == req.params.photoId){
//             var photo = photoList[i];
//         }
//     }
//     res.json(photo);
// });

app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
    res.render('index', { title: 'Hey!' });
});