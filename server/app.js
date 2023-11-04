const express  = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const { nextTick } = require('process');
//  renvoie le chemin complet 
const options = { root : path.join(__dirname)};


// écoute sur le port PORT

app.listen(PORT,'localhost',()=>{
    if(err) { 
        console.log(err);
    }
    else {
        console.log(`le serveur écoute sur le port ${PORT}`);
    } 
});

// acces au point d'entrée /
app.get('/',(req,res)=>{
    res.sendFile('./html/index.html',options,err =>{
        if(err){
            next(err);
        }else{
            console.log('Sent : ./html/index.html');
        }

    });
});

// acces au point d'entrée /about
app.get('/about',(req,res)=>{
    res.sendFile('./html/about.html',options,err =>{
        if(err){
            next(err);
        }else{
            console.log('Sent : ./html/about.html');
        }

    });
});
//redirection de about-me vers about
app.get('/about-me',(req,res)=>{
    res.redirect(301,'/about');
});
// middleware for 404 page

app.use((req,res,next) =>{
    res.status(404).sendFile('./html/404.html',options,err =>{
        if(err){
            next(err);
        }else{
            console.log('Sent : ./html/404.html');
        }
    })
})
