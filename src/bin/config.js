var env = process.env.NODE_ENV || 'development';



if(env==='development'){
    process.env.PORT=3008;
    process.env.EMAIL_ID='sphurthi_konda@merilytics.com';
    process.env.HYPER_LINK='http://intranet.merilytics.com:1233/#/intranet/newsupdates/all';
    process.env.REDIS_DELAY=60;
    process.env.ANNIVERSARY_IMAGE='https://i.postimg.cc/SRgp8mXt/anniversary.png';
    process.env.BIRTHDAY_IMAGE='https://i.postimg.cc/G3KR6xMJ/Happy-Birthday-Images.jpg';
    process.env.THANKS_IMAGE='https://i.postimg.cc/tCgbbnw0/THANK-YOU.jpg';
    process.env.UPDATE_IMAGE='https://i.postimg.cc/rFYkwF2D/Update.jpg';
    process.env.DB_NAME='IntranetPortal_Test';
    process.env.AUTH_DB_NAME='EmployeeDB_Test';
    process.env.LOG_RANGE='dev';
    process.env.SALT='qwerty';
}else if(env==='production'){
    process.env.PORT=3008;
    process.env.EMAIL_ID='sarath_gogineni@merilytics.com';
    process.env.HYPER_LINK='http://intranet.merilytics.com:1233/#/intranet/newsupdates/all';
    process.env.REDIS_DELAY=60;
    process.env.ANNIVERSARY_IMAGE='https://i.postimg.cc/SRgp8mXt/anniversary.png';
    process.env.BIRTHDAY_IMAGE='https://i.postimg.cc/G3KR6xMJ/Happy-Birthday-Images.jpg';
    process.env.THANKS_IMAGE='https://i.postimg.cc/tCgbbnw0/THANK-YOU.jpg';
    process.env.UPDATE_IMAGE='https://i.postimg.cc/rFYkwF2D/Update.jpg';
    process.env.DB_NAME='IntranetPortal';
    process.env.LOG_RANGE='prod';
    process.env.AUTH_DB_NAME='EmployeeDB_Live';
    process.env.SALT='qwerty';
}