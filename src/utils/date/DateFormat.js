var date = require('date-and-time');
var dateFormat = require('dateformat');
var moment = require('moment');

var format1 = 'YYYY/MM/DD HH:mm:ss';
var format2 = 'yyyy-mm-dd';

var getDateforInput = ()=>{
    return moment().format('YYYY-MM-DDTHH:mm:ss.SSS');
    }

var convertFromStringToDate = (stringDate)=>{
return date.parse(stringDate, format1);
}
var convertFromDateFormat = (dateObj)=>{
    return dateFormat(dateObj, format2);
    }
var convertFromObjToTimestamp = (dateObj)=>{
    return  dateObj!=null ? new Date(dateObj).getTime():null;
}
var convertFromMilliToDate = (milliDate)=>{
    return milliDate!=null?new Date(milliDate):null;
}
module.exports = {convertFromStringToDate,convertFromObjToTimestamp,convertFromMilliToDate,convertFromDateFormat,getDateforInput};



