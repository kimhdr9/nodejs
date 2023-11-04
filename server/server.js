const http = require('http');
const fs = require('fs');
// const path = require('path');
//  création d'une variable PORT
const PORT = process.env.PORT || 3000 ;


const server =  http.createServer( (req,res) =>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');

    let path = './html';

    switch(req.url){
        case '/' :
            res.statusCode = 200;
            path +='/index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += '/about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default :
            res.statusCode = 404;
            path += '/404.html'
            break;
    }
//  
    fs.readFile(path,(err,page)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
        // res.write(page);
        // res.statusCode(200);
        res.end(page);
        }
    } );

    // page1 = renvoiePage('./html/index.html');
    // console.log(page1);
    // res.end(page1);
    
});
// le serveur écoute 
server.listen(PORT,'localhost',()=>{
    console.log(`le serveur est lancé sur le port ${PORT}`);
});