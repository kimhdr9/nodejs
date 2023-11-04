const express = require('express');
const app = express();
const path  =require('path');
const PORT=5000; 
const funct = require('./biblio/functions');

// fs.open(logfile,'w',(err,fd)=>{
//     if(err) throw ' could not open file : ' + err;
// })




// Init middleware
app.use(funct.logger);

// Api router
app.use('/api/members',require('./routes/api/members'));

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT,()=>{
    console.log(`the server is listening et the port ${PORT} `);
});