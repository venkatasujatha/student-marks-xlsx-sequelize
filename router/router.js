const router = require('express').Router();
 const studentController = require("../controller/studentController");
 const marksController = require("../controller/marksController");
 
 //post student
 router.post('/addstudent',studentController.add);
//post marks
 router.post('/addMarks',marksController.add);

 //getall students
 router.get('/getallStudents',studentController.getallStudent)
 module.exports = router