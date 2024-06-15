const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('https://telegra.ph/file/23998e60fad313cd316fc.jpg')
const BOTNAME = 'ODS TECHNOLOGIES™';
const FOOTERNAME = '> ODS TECHNOLOGIES V4';
global.owner = process.env.OWNER_NUMBER  || '233596780685' ;  // ADD YOUR NUMBER WITHOUT +
    
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=iR10TbwB#kXj2zyF-o8yx-7pC_VPXu5q2hpnhcjJelbzluXcjV1M' ,
travaSend: process.env.TRAVA_SEND || '25' ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '7000': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'ODS-TECHNOLOGIES' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/23998e60fad313cd316fc.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech',
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://sachintharashan26:9hVStJbuE3uxwRtZ@cluster0.o0ec025.mongodb.net/' : process.env.MONGODB_URI,  
FOOTER: process.env.FOOTER || '‌👨‍💻 ODS - TECHNOLOGIES - Ｖ5 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'EN' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
DISABLE_PM: process.env.DISABLE_PM || false ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
};
