const fs = require('fs');
const path = require('path');

// let fileContent, fileContent1, fileContent2;
const configs = ['config', 'config1', 'config2'];
// const filesContent = [fileContent, fileContent1, fileContent2];

// configs.forEach( config => fs.copyFileSync(path.join(__dirname, `${config}.cfg`), path.join(__dirname, `${config}Modified.cfg`)))

// fs.copyFileSync(path.join(__dirname, 'config.cfg'), path.join(__dirname, 'configModified.cfg'))
// fs.copyFileSync(path.join(__dirname, 'config2.cfg'), path.join(__dirname, 'configModified2.cfg'))
// fs.copyFileSync(path.join(__dirname, 'config3.cfg'), path.join(__dirname, 'configModified3.cfg'))

// filesContent.map ( (file, i) => file = readFileContent(`${configs[i]}Modified.cfg`) )

// var fileContent = readFileContent('configModified.cfg');
// var fileContent1 = readFileContent('configModified1.cfg');
// var fileContent2 = readFileContent('configModified2.cfg');



function replaceItems(objParamas, fileName) {
    fs.copyFileSync(path.join(__dirname, `${fileName}.cfg`), path.join(__dirname, `${fileName}Modified.cfg`))
    var fileContent = fs.readFileSync(path.join(__dirname,`${fileName}Modified.cfg`), {encoding:'utf8', flag:'r'})
    console.log('fileC', fileContent)
    Object.entries(objParamas).forEach(param => {
        fileContent = fileContent.replace('{' + param[0] + '}', param[1])
        fs.writeFileSync(path.join(__dirname, `${fileName}Modified.cfg`), fileContent, 'utf-8', err => {
            if (err) {
                console.log(err);
                return 
            }
        })
    })
}
//
function replaceData(objParamas) {
    console.log('hit replaceData!!!', objParamas)
    configs.forEach(config => replaceItems(objParamas, config))
    // fileContent = fs.readFileSync(path.join(__dirname, 'configModified.cfg'), 'utf8', (err, dat) => {
    //     if (err) {
    //         console.log('Error1: ', err);
    //         return
    //     }
    //     return dat;
    // })
    
}

module.exports = 
    {replaceData};