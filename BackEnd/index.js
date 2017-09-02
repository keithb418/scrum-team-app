import express from 'express';
let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World, I am the Back End server for the Scrum Team app.  I now change as you code!\n');
});

let server = app.listen(8081, function() {
    
    let port = server.address().port;
    console.log(`Scrum Team App BackEnd listening at http://localhost:${port}`);

});