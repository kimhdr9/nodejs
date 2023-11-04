// première méthode pour afficher le contenu d'un fichier au format json
if ( false ) {
    const customer = require('./customer.json');
    console.log(customer.address);
    console.log(customer.phonenumber);
}
//
const fs=require('fs');
// 3 arguments
// chemin du fichier
// charset
// une fonction à deux entrées 
var myArgs = process.argv.slice(2); // skip the first two

if ( myArgs.length > 0)
{
    const filename=myArgs[0];
    console.log('filename  is '+ filename);

    fs.readFile(filename,'utf-8',(err,jsonString)=>{
        // jsonString is a string
        try {
            console.log(jsonString);
            const data = JSON.parse(jsonString);
            console.log(data.phonenumber);
        }
        catch(err){
            console.log(err);
        }
    })
}
else
{
    console.log(' missing argument !');
}
