const constant = require('../Constant/constant')

exports.firstApi = (req,res) => {
    console.log(req.body);
    console.log(constant.personalInfoArray)
    return res.status(200).send({'message':'success',status:200})
}

exports.secondApi = (req,res) => {
    console.log(req.body);
    let {phone, firstName, lastName} = req.body;

    let info = {};
    info["phoneNum"] = phone;
    info["fullName"] = firstName + lastName;
    console.log(info)

    return res.status(200).send({message:"result", status:200, data:info})

    
}

exports.thirdApi = (req,res) => {
 req.body.plan_of_management.data.forEach((element)=>{
        if(element.sub_section_internal_val == "surgery_suggested"){
            element.data.forEach((innerElement)=>{
                if(innerElement.value == "01/09/2023"){
                    console.log(innerElement.value)
                    return res.status(200).send({message:"result", status:200, data:innerElement.value})
                }
            }) 
        }else if(element.sub_section_internal_val == "surgery_not_suggested"){
            return res.status(200).send({message:"result", status:200, data:element.sub_section_internal_val})
        }
    })  
}