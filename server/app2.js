const express  = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const { nextTick } = require('process');
//  renvoie le chemin complet 
const options = { root : path.join(__dirname)};

// register view engine
app.set('view engine','ejs');

// écoute sur le port PORT

app.listen(PORT);

// acces au point d'entrée /
app.get('/',(req,res)=>{
    const blogs = [
        { title : 'Yoshi finds eggs', snippet : ' do you really know that ?'},
        { title : 'Yoshi eats all of them', snippet : 'No why he did that ?'},
        { title : 'Yoshi  is very hungry..', snippet : 'yep i do understand'},
        { title : 'Mario fasts', snippet : 'he wants to loose weigth ??'}
    ];
    const blogs1 = [];
    res.render('index',{title : 'home',blogs});
});

// acces à about
app.get('/about',(req,res)=>{
    res.render('about',{ title : 'About'});
});

// acces au point d'entrée /about
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'create a blog'});
});

// middleware for 404 page

app.use((req,res,next) =>{
    res.status(404).render('404',{title : '404'});
})
