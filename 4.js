const moment = require("moment-timezone")

function find(input, timezone){
    if(typeof input != "string"){
        let firstDate = moment.tz(input.toISOString(), timezone).startOf("month");
        let lastDate = moment.tz(input.toISOString(), timezone).endOf("month");
        console.log(firstDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(lastDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
    else{
        let firstDate = moment.tz(input, timezone).startOf("month");
        let lastDate = moment.tz(input, timezone).endOf("month");
        console.log(firstDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
        console.log(lastDate.format("Y-MM-DD HH:mm:ss.SSS Z"))
    }
}
find("2022-12-31","Asia/Ho_Chi_Minh")
// function find(input, timezone) {
//     const start = new Date(input.getFullYear(), input.getMonth(), 1);
//     let end = new Date(input.getFullYear(), input.getMonth() + 1, 1);
//     const timestamp = end.getTime() - 1;
//     if (timezone) {
//       return {
//         start: new Date(start),
//         end: new Date(timestamp),
//       };
//     }
//   }

// console.log(find(new Date(),"Asia/Ho_Chi_Minh"))