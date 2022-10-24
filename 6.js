const moment = require("moment-timezone")

function find(input, timezone){
    if(typeof input != "string"){
        let Sunday = moment.tz(input.toISOString(), timezone).startOf("isoWeek")-1
        let endOfWeek = moment(Sunday).toISOString()
        let startOfWeek = moment.tz(endOfWeek, timezone).startOf("isoWeek")

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(moment(endOfWeek).format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
    else{
        let Sunday = moment.tz(input, timezone).startOf("isoWeek")-1
        let endOfWeek = moment(Sunday).toISOString()
        let startOfWeek = moment.tz(endOfWeek, timezone).startOf("isoWeek")

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(moment(endOfWeek).format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
}
find("2022-10-30","Asia/Ho_Chi_Minh")