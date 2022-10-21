const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.join(__dirname, 'config.cfg'), path.join(__dirname, 'configModified.cfg'))



var fileContent = readFileContent();

function readFileContent() {
    fs.readFileSync(path.join(__dirname, 'configModified.cfg'), 'utf8', (err, dat) => {
        if (err) {
            console.log('Error1: ', err);
            return
        }
        return dat;
    })
} 

function replaceData(objParamas) {
    console.log('hit replaceData!!!', objParamas)
    fs.copyFileSync(path.join(__dirname, 'config.cfg'), path.join(__dirname, 'configModified.cfg'))
    fileContent = fs.readFileSync(path.join(__dirname, 'configModified.cfg'), 'utf8', (err, dat) => {
        if (err) {
            console.log('Error1: ', err);
            return
        }
        return dat;
    })
    Object.entries(objParamas).forEach(param => {
        fileContent = fileContent.replace('{' + param[0] + '}', param[1])
        fs.writeFileSync(path.join(__dirname, 'configModified.cfg'), fileContent, 'utf-8', err => {
            if (err) {
                console.log(err);
                return
            }
        })
    })
}

module.exports = 
    {replaceData};