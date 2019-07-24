const fs = require("fs");

const promisify = f => {    
    return (...args) => {
        return new Promise((res,rej) => {
            f(...args,(err,data)=>{
                if(err) {
                    rej(err)
                }
                res(data)
            })
        })
    }
}


module.exports = promisify;