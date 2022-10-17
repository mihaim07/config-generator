const replaceData = require('../../models/form.model');



function postForm(req, res) {
    console.log(req.body);
    let networkParams = {
        ipAdd1: req.body.ipAdd1,
        ipAdd2: req.body.ipAdd2,
        gw1: req.body.gw1,
        gw2: req.body.gw2, 
        netw1: req.body.netw1,
        netw2: req.body.netw2, 
        broadcast1: req.body.broadcast1, 
        broadcast2: req.body.broadcast2,
        name: req.body.name,
    }
    const aaa = replaceData(networkParams)
    console.log(aaa)
    return res.status(200).json("Test ok");
}

module.exports = {
    postForm,
};