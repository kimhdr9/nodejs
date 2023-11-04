const { text } = require("express");
const fs = require('fs');
const logfile = 'logfile.txt';
// 
//  pour ajouter un zéro
// si le nombre est sur un caractère
function zero(number){
    let text=number.toString();
    if (number<10)
    {
        text = '0'+number.toString();
    }
    return(text);
}
// 
//  retourne la date au format HH:MM:SS DD-MM-YYYY
// 
function RenvoieDate()
{ 
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = zero(date_ob.getDate());
    let month = zero(date_ob.getMonth() + 1);
    let year = date_ob.getFullYear();
    let hours = zero(date_ob.getHours());
    let minutes = zero(date_ob.getMinutes());   
    let seconds = zero(date_ob.getSeconds());
    let date_text = hours+':'+minutes+':'+seconds+':'+date+'/'+month+'/'+year;

// prints date & time in YYYY-MM-DD format
    return(date_text);
}
// 
// 
// 
const logger = (req,res,next) =>{
    
    let url = req.protocol+'://'+req.get('host')+req.originalUrl;
    let info = 'log at '+RenvoieDate()+ ' '+url;
    fs.writeFile(logfile,info,err =>{
        if(err) throw err;
    })
    next()
}

module.exports.logger = logger;