const { lstat,readdir } = require("fs");
const { join } = require("path");

const promisify = require("./promisify");

const lstatPromise = promisify(lstat);
const readdirPromise = promisify(readdir);


function getFilesPaths(dirname) { 
    readdirPromise(dirname)
        .then(files => {   
            files.forEach(file => {
                let filePath = join(dirname,file);
                lstatPromise(filePath)
                    .then(stats => {   
                        if(stats.isDirectory()) {
                            getFilesPaths(filePath)
                        } else {
                            console.log(filePath)
                        }
                    })
                    .catch(err => {
                        throw err
                    })
            })
        })                 
}    


module.exports = getFilesPaths;

