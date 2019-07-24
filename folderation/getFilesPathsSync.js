const { lstatSync,readdirSync } = require("fs");
const { join } = require("path")


const getFilesPathsSync = dirname => {
    let filesPaths = [];


    function getFiles(dirname) { 
        let files = readdirSync(dirname);

        files.forEach(file => {
            let filePath = join(dirname,file);
            let isDirectory = lstatSync(filePath).isDirectory();
            if(isDirectory){
                getFiles(filePath)
            } else {
                filesPaths.push(filePath)
            }
        })

    }
    getFiles(dirname);

    return filesPaths;
}


module.exports = getFilesPathsSync;
