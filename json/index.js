// première méthode pour afficher le contenu d'un fichier au format json
if ( false ) {
    const customer = require('./customer.json');
    console.log(customer.address);
    console.log(customer.phonenumber);
}
//
const func = require('./functions');
// 3 arguments
// chemin du fichier
// charset
// une fonction à deux entrées 
var myArgs = process.argv.slice(2); // skip the first two

if ( myArgs.length > 0)
{
    const filename=myArgs[0];
    console.log('filename  is '+ filename);
    const data=func.jsonReadFile(filename);
    console.log(data);
   
}
else
{
    console.log(' missing argument !');
}
