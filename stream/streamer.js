const fs = require("fs");
const moment = require("moment");
const stream = require('stream');


const readTimes = new stream.Readable();
const writeTimes = new stream.Writable();
const transformTime = new stream.Transform();


transformTime._transform = function(chunk,encoding,next) {
    transformTime.push(chunk +'\n')
    next()
}

readTimes._read = function(){
}
setInterval(()=>{
    readTimes.push(moment().format("LTS"))
},1000)



writeTimes._write = (chunk, encoding, next) => {
    fs.appendFile("times.txt",chunk,"utf-8",err=>{
        if(err){
            throw err;
        }
        next();
    })
}

readTimes.pipe(transformTime).pipe(writeTimes);
