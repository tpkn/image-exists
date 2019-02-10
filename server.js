try { process.stdout.write('\033c') } catch (err) {}

const path = require('path');
const cors = require('cors');
const express = require('express');
const server = express();

const port = 5050;

server.use(cors());
server.use(express.static(__dirname));

server.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'index.html'));
})

server.get('/ok', function(req, res){
   res.sendFile(path.join(__dirname, 'image.jpg'));
})

server.get('/fail', function(req, res){
   res.status(404).send('404');
})

server.get('/redirect', function(req, res){
   res.redirect(301, `http://localhost:${port}/ok`);
})

server.get('/endless', function(req, res){

})

server.listen(port, function(){
   console.log(`http://localhost:${port}/ok`);
   console.log(`http://localhost:${port}/fail`);
   console.log(`http://localhost:${port}/endless`);
   console.log(`http://localhost:${port}/redirect`);
});
