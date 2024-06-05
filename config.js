const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/a1ce3bc8fd18e6eb51251.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ahsan Panhwar " 


global.devs = "923706302550" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03706302550";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1bXlwekdqelRLZ3ltRm1TOG8ybHRZRHJyUTJlZUtROTJ4MlZreXM3N3NJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzMUN2OVgzQ1NLeUp4X2kyeU1Oa3RnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY0NmViZmI3LWJmY2QtNGUzOC04OTZiLTFkMDc0NWQ1N2U3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDg4LFxuICAgICAgOTgsXG4gICAgICAyMyxcbiAgICAgIDEwNyxcbiAgICAgIDc2LFxuICAgICAgNyxcbiAgICAgIDEwNCxcbiAgICAgIDE2OCxcbiAgICAgIDI2LFxuICAgICAgODMsXG4gICAgICAyNTEsXG4gICAgICAxOTAsXG4gICAgICA5NixcbiAgICAgIDU1LFxuICAgICAgMTM5LFxuICAgICAgMTU0LFxuICAgICAgMixcbiAgICAgIDI0NCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAzMSxcbiAgICAgIDcwLFxuICAgICAgODEsXG4gICAgICA2MixcbiAgICAgIDE3OSxcbiAgICAgIDIyMCxcbiAgICAgIDE1MCxcbiAgICAgIDEzNixcbiAgICAgIDEzMCxcbiAgICAgIDgsXG4gICAgICAzMixcbiAgICAgIDEyNSxcbiAgICAgIDEwMixcbiAgICAgIDE1MixcbiAgICAgIDIyNixcbiAgICAgIDk3LFxuICAgICAgMjUwLFxuICAgICAgMTQxLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEVUVlBQV01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzcwNjMwMjU1MDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNBTEwgTUUgQUhTQU46KVwiLFxuICAgIFwibGlkXCI6IFwiNDIzNDg3NDY2OTQ4MDc6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2F3aGM4QkVNSGErN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrd0VJZForQmdXOHVXcWdHRkJvQTMzZUcvNEdxZ1VPUmlBSURtR0lqalZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpoZ3AxYndnN3ZjSEt4YmJCTlBZZjZMc0tIcWVGSDNUcjVLZjJweDRHVUFqZjFaR00zQVlKRlF3TmE5NlJIemM5Ky9qVUQ1TndXU21paTZpQm9pOERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFudm91ZnRBUUhPYTNTbC9UL0IrNFpWb3RWYzEwcVV3V0RqZ1dzVVJMY0J0bzROdzd1UUdvaWJtZ0QyelRFREVBTWpvTTNJcEpHcnBNWVBrREdPMmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzcwNjMwMjU1MDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0OTcxNTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "AHSAN PANHWAR" , // 『 Ahsan Panhwar  』```", //*『Ahsan Panhwar 』*\n youtube.com/@funwithahsan"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ahsan-panhwar",
  ownername:process.env.OWNER_NAME|| " Ahsan Panhwar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "www.remove.bg/upload#api-key",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Ahsan"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
