const app = require('express')();
const path  =require('path');
const PORT=5000; 


//  route
app.get("/",(req,res) =>{
//    res.send('Hello World !');
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get("/about",(req,res) =>{
    res.send('About page');
 });

 
 

app.listen(PORT,()=>{
    console.log(`the server is listening et the port ${PORT} `);
});