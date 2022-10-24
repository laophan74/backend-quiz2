const moment = require("moment-timezone")

function find(input, timezone){
    if(typeof input != "string"){
        let firstDate = moment.tz(input.toISOString(), timezone).startOf("month");
        let lastDate = moment.tz(input.toISOString(), timezone).endOf("day");
        console.log(firstDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(lastDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
    else{
        let firstDate = moment.tz(input, timezone).startOf("month");
        let lastDate = moment.tz(input, timezone).endOf("day");
        console.log(firstDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(lastDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
}
find("2022-01-01","America/Los_Angeles")