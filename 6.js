const moment = require("moment-timezone")

function find(input, timezone){
    if(typeof input != "string"){
        let Sunday = moment.tz(input.toISOString(), timezone).startOf("isoWeek")-1 //Chủ nhật tuần trước theo kiểu timestamp
        let endOfWeek = moment(Sunday).toISOString()//Chủ nhật tuần trước theo kiểu ISO String
        let startOfWeek = moment.tz(endOfWeek, timezone).startOf("isoWeek")//Thứ 2 tuần trước

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(moment.tz(endOfWeek, timezone).format("Y-MM-DD HH:mm:ss.SSS Z"))//Trả lại đúng timezone cho chủ nhật tuần trước
    }
    else{
        let Sunday = moment.tz(input, timezone).startOf("isoWeek")-1
        let endOfWeek = moment(Sunday).toISOString()
        let startOfWeek = moment.tz(endOfWeek, timezone).startOf("isoWeek")

        console.log(startOfWeek.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(moment.tz(endOfWeek, timezone).format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
}
find(new Date("2022-10-30"),"America/Maceio")