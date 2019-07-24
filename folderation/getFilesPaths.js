const { lstatSync,readdirSync } = require("fs");
const { join } = require("path")


const getFilesPaths = dirname => {

    return new Promise((resolve,reject)=>{
        let filesPaths = [];

        function getFiles(dirname) { 
            let files = readdirSync(dirname);
    
            for(let i = 0; i < files.length; i++) {
                let filePath = join(dirname,files[i]);
                let isDirectory = lstatSync(filePath).isDirectory();
                if(isDirectory){
                    getFiles(filePath)
                } else {
                    filesPaths.push(filePath)
                }
            }
    
        }
        getFiles(dirname);  

        resolve(filesPaths)
    })
    
}

module.exports = getFilesPaths;

