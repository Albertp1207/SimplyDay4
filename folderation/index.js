const getFilesPaths = require("./getFilesPaths");
const getFilesPathsSync = require("./getFilesPathsSync");



getFilesPaths(__dirname);

const files = getFilesPathsSync(__dirname)
console.log(files)
