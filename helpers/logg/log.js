const fs = require('fs');
const path = require('path');

class Log {

    constructor(){

        this.testLogFile = 'testDevPro.log';

        this.level = {
            info: "INFO",
            warning: "WARNING",
            error : "ERROR"
        }

    }

    

    log_message(message, level) {
        const timestamp = new Date().getDay();
        const log_entry = `[${timestamp}] - [${level}] - ${message}\n`;
        fs.appendFileSync(this.testLogFile, log_entry);
    }
    
    writeFile(){        
        return fs.writeFileSync(this.testLogFile, '');
    }    

    readFile(){
        return fs.readFileSync(this.testLogFile, 'utf8');
    }

}

const log = new Log();
module.exports = log;

