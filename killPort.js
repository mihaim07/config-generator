const { exec } = require('child_process');
const fs = require(`fs`);

const port = process.argv.length > 2 ? process.argv[2] : ``;
if (!port || isNaN(port)) console.log(`port is required as an argument and has to be a number`);
else {
    exec(`netstat -ano | findstr :${port}`, (err, stdout, stderr) => {
        if (!stdout) console.log(`nobody listens on port ${port}`);
        else {
            const res = stdout.split(`\n`).map(s => s.trim());
            const pid = res.map(s => s.split(` `).pop()).filter(s => s).pop();
            console.log(`Listener of ${port} is found, its pid is ${pid}, killing it...`);
            exec(`taskkill /PID ${pid} /F`, (err, stdout, stderr) => {
                if (!stdout) console.log(`we tried to kill it, but not sure about the result, please run me again`);
                else console.log(stdout);
            })
        }
    });
}