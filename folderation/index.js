const getFilesPaths = require("./getFilesPaths");
const getFilesPathsSync = require("./getFilesPathsSync");

getFilesPaths(__dirname)
    .then(data=> {
        console.log("files paths by getFilesPaths function")
        console.log(data)
    })

const files = getFilesPathsSync(__dirname)
console.log("files paths by getFilesPathsSync function")
console.log(files)
