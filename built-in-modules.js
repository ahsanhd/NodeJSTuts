/* so there are built in modules on node js 
like os, fs, path ... */

const os = require("os");

console.log(os.userInfo());

const userData = {
  name: os.userInfo().username,
  upTime: os.uptime(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.info({ userData_: userData });
