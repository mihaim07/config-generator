const replaceData = require('../../models/form.model');



function postForm(req, res) {
    console.log(req.body)
    const aaa = replaceData(req.body.ipAdd1)
    console.log(aaa)
    return res.status(200).json("Test ok");
}

module.exports = {
    postForm,
};