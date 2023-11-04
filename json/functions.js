const fs=require('fs');

function jsonReadFile(filename)
{
    fs.readFile(filename,'utf-8',(err,jsonString)=>
    {
        // jsonString is a string
        try {
            // console.log(jsonString);
            const data = JSON.parse(jsonString);
            return(data);
        }
        catch(err){
            console.log(err);
        }
    }
    )
}

module.exports.jsonReadFile = jsonReadFile;