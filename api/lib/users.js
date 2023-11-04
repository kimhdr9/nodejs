// bibliothèque pour simuler des comptes
const radom = require('faker');
// un tableau d'utilisateurs fictifs
let maxUsers = 10 ;
let users = [];

for ( let i=0; i<maxUsers;i++){
    const user = {
        id : i,
        "firstName" : radom.name.findName(), 
        "lasttName" : radom.name.lastName(),
        "gender": radom.name.gender() 
    };
    // ajoute un nouveau utilisateur dans le tableau users.
    users.push(user);
}

module.exports.users = users ;
module.exports.maxUsers =maxUsers ;