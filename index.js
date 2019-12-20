const fs = require('fs');
var fileNames = []

fs.writeFile(process.argv[2],"you are welcome", {flag : 'wx'}, function(err){
    if(err){
        console.log("unable to write to a new file - ", err, " please enter new filename");
    }
    else{
        console.log("added first file ");
        fileNames.push(process.argv[2]);
    }
});

