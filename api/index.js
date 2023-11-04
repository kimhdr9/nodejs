const express=require('express');
const app = express();
const bodyParser = require('body-parser');



// bibliothèque pour les tests des requêtes
const Joi  = require('joi');

let {users,maxUsers} = require("./lib/users");

// affiche les utilisateurs sur la console
console.log(users);


// route à la racine
app.get('/',(req,res)=>{
    res.status(200).send('test');
});
// renvoie toute la liste des utilisateurs
app.get('/users',(req,res)=>{
    res.status(200).send(users);
});
// renvoie qu'un seul utilisateur
app.get('/user/:id',(req,res)=>{
    //
    // récupère la valeur de l'id dans l'url
    // convertit la chaine id en entier.
    //
    const id =parseInt(req.params.id) -1;

    // création d'un schéma pour tester la validitée de la requête get

    const schema = Joi.object({id : Joi.number().min(1).max(maxUsers) });
    // récupération de la valeur et de l'erreur par déstructuration
    const {error, value} = schema.validate({id});
    // si la requête est fausse on envoie un message d'erreur 
    if(error){
        res.status(404).send(error.details[0].message);
        return;
    }
    const user=users.find( u => u.id == id);
    res.status(200).send(user);
});
//  suppression 
app.delete('/user/:id',(req,res)=>{
    //
    // récupère la valeur de l'id dans l'url
    // convertit la chaine id en entier.
    //
    const id =parseInt(req.params.id) -1;

    // création d'un schéma pour tester la validitée de la requête get

    const schema = Joi.object({id : Joi.number().min(0).max(maxUsers) });
    // récupération de la valeur et de l'erreur par déstructuration
    const {error, value} = schema.validate({id});
    // si la requête est fausse on envoie un message d'erreur 
    if(error){
        res.status(404).send(error.details[0].message);
        return;
    }
    const user=users.find( u => u.id == id);
    res.status(200).send(user);
    //  suppression de l'utilisateur
    users.splice(id,1);
});

// post
let jsonParser = bodyParser.json();

app.post('/users',jsonParser,(req,res) =>{
    console.log(req.body);
})

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
app.post('/adduser', urlencodedParser, function (req, res) {

  const {firstName,lastName,gender} = req.body ; 
  res.send('Create a new user : ' + firstName+ ' '+lastName+' '+gender);

  
    // création d'un schéma pour tester la validitée de la requête get
    if (false)
    {
        const schema = Joi.object(
            {
                prenom : Joi.string()
                .alphanum()
                .min(2)
                .required(),
                nom : Joi.string()
                .alphanum()
                .min(1)
                .required()
            });
        // récupération de la valeur et de l'erreur par déstructuration
        const {error, value} = schema.validate({prenom : firstName, nom : lastName});
        // si la requête est fausse on envoie un message d'erreur 
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }
    }
  const newUser = {
      id : maxUsers,
      firstName : firstName,
      lastName : lastName,
      gender : gender
  };
  maxUsers = maxUsers +1;
  // ajoute le nouveau urser à la fin de la liste
  users.push(newUser);
})

// PORT prend la valeur de la variable d'environnement si elle existe sinon 5000 
const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>console.log(`le serveur est lancé sur le port ${PORT}`));