const constant = require('../Constant/constant')

exports.firstApi = (req,res) => {
    console.log(req.body);
    console.log(constant.personalInfoArray)
    return res.status(200).send({'message':'success',status:200})
}