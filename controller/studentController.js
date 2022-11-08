const Student = require("../entity/student");
const Mark = require("../entity/marks");
const db = require("../database");

const XLSX = require("xlsx");
const console = require("console");
//post

const add = async (req, res) => {
  try {
    
    const resp = await Student.create(req.body, {
      include: [
        {
          model: Mark,
        },
      ],
    });

    console.log(" record saved successfully");

    console.log(resp.toJSON());

    res.send(resp);
  } catch (err) {
    console.error(err.message);
  }
};

//getall student
const getallStudent = async (req, res) => {
    try {
      const resp = await Student.findAll({
        include: [
          {
            model: Mark,
          },
        ],
      });
     
     
      const data =resp.map((record) =>{
        return [record.name,record.Mark.mark1,record.Mark.mark2]
      })
      console.log(data);
      let Heading = [['name', 'mark1', 'mark2']];
      const workBook = XLSX.utils.book_new();

      const ws =XLSX.utils.json_to_sheet([]);
      XLSX.utils.sheet_add_aoa(ws, Heading);
      XLSX.utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true });
      
      

      XLSX.utils.book_append_sheet(workBook, ws,"students-marks");
 
      //download file
      XLSX.writeFile(workBook,"students-marks.xlsx");

      res.send(resp);
      console.log("xlsx file created successfully")
    
    } catch (err) {
      console.error(err.message);
    }
  };

   
module.exports ={add,getallStudent}