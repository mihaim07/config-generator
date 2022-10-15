const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.join(__dirname, 'config.cfg'), path.join(__dirname, 'configModified.cfg'))

const fileContent = fs.readFileSync(path.join(__dirname, 'configModified.cfg'), 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    return data;
})

function replaceData(word) {
    var newContent = fileContent.replace(/software/g, word);
    fs.writeFileSync(path.join(__dirname, 'configModified.cfg'), newContent, 'utf-8', err => {
        if (err) {
            console.log(err);
            return
        }
    })
}

module.exports = 
    replaceData;