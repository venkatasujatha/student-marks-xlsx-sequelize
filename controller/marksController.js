const Marks =require("../entity/marks");
//const Student =require("../entity/student");
//post
const add = async (req, res) => {
    try {
       
        const resp= await Marks.create(req.body);
     console.log(" data saved successfully");
     console.log(Marks.toJSON());
    
     res.send(resp);
    }
    catch (err) {
        console.error(err.message);
    }
   
 }
 module.exports={add}