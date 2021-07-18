const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listeing on 8080')

});

app.get('/home', function(request, response){
    response.send('You can do pet shopping!')   // send message as a response!
})
app.get('/index', function(request, response){
    response.sendFile(__dirname + '/index.html')   // send the index.html file as a response!
})
app.get('/1.html', function(request, response){
    response.sendFile(__dirname + '/1.html')   // send the index.html file as a response!
})
app.get('/2.html', function(request, response){
    response.sendFile(__dirname + '/2.html')   // send the index.html file as a response!
})
app.get('/3.html', function(request, response){
    response.sendFile(__dirname + '/3.html')   // send the index.html file as a response!
})