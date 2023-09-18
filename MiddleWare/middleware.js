exports.middleware = async(req,res,next) => {
    if(!req.body.phone) return res.status(400).send({message:"phone is missing", status:400});
    if(!req.body.firstName) return res.status(400).send({message:"firstName is missing", status:400});
    if(!req.body.lastName) return res.status(400).send({message:"lastName is missing", status:400});
    if(typeof(req.body.phone) !== "number") return res.status(404).send({'message':'fail'})
    if(req.body.firstName.length == 0 || req.body.lastName.length == 0) return res.status(404).send({'message':'fail'})
    next()
}