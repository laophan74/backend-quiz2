const moment = require("moment-timezone")

function find(input, timezone){
    if(typeof input != "string"){
        let Sunday = moment.tz(input.toISOString(), timezone).startOf("week")
        let startOfWeek = moment.tz(Sunday.toISOString(), timezone).startOf("isoWeek")
        let endOfWeek = Sunday.endOf("day")

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(endOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
    else{
        let Sunday = moment.tz(input, timezone).startOf("week")
        let startOfWeek = moment.tz(Sunday.toISOString(), timezone).startOf("isoWeek")
        let endOfWeek = Sunday.endOf("day")

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(endOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
}
find(new Date("2001-12-02"),"Asia/Ho_Chi_Minh")