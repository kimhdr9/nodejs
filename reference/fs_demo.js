const path = require('path');
const fs = require('fs');
const dir = '/test';
//  test if the directory is already exist 
if ( !fs.existsSync(path.join(__dirname,dir)) )
{
    //  Create a folder use async version with arrow function
    fs.mkdir(path.join(__dirname,dir),{}, err=>{
        // sort de l'application
        if(err) throw err;
        // cas sans erreur
        console.log('Folder created');
    });
}
else{
    console.log(`the directory ${path.join(__dirname,dir)} is already existed !`);
}

const file = path.join(__dirname,dir,'hello.txt');
console.log(file);

// put true for execute
if (false) {
//  Create a file
    fs.writeFile(file,'Hello !', err => {
        // sort de l'application
        if(err) throw err;
        // cas sans erreur
        console.log('File written to ..');
        }
    );
    // it's over write  
    fs.writeFile(file,'I love Nodejs', err => {
        // sort de l'application
        if(err) throw err;
        // cas sans erreur
        console.log('File written to ..');
        }
    );
}
// if I want to add information I need to add in the callback function the appendFile.

if ( false)
{
    fs.writeFile(file,'Hello ! ', err => {
        // sort de l'application
        if(err) throw err;
        // cas sans erreur
        console.log('File written to ..');
    // File append
        fs.appendFile(file,'I love Nodejs', err => {
            // sort de l'application
            if(err) throw err;
            // cas sans erreur
            console.log('File written to ..');
            }
        );
        }
);
}
// readfile
//  utf8 
if ( false )
{
    fs.readFile(file,'utf8',(err,data)=>{
        if (err) throw err;
        console.log(data);
    })
}
const file2= path.join(__dirname,dir,'helloworld.txt');

fs.rename(file,file2,err =>{
    if(err) throw err;
    console.log(`File renamed in ${file2}`);
})