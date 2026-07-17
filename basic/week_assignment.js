/* Week Assignment Develop a Student Record Management System using JavaScript. 
  Features: 
  ● Add Student
  ● Update Student
  ● Delete Student 
  ● Search Student
  ● Display All Students*/
//Array
let students=[];
function addStudent(){
//Add student 
 const prompt=require('prompt-sync')();
let student_id=Number(prompt("Enter the Student ID:"));
let student_name=String(prompt("Enter the student Name:"));
let student_age=Number(prompt("Enter the Student Age:"));
//create object to store record togetter
let student ={
  student_id,student_name,student_age
};
students.push(student);
  console.log('Student Add successfully');
}
//delete 
function deleteStudent(){
const prompt=require('prompt-sync')();
let delete_id=Number(prompt("Enter the Student ID:"));
for(let i=0;i<students.length;i++){
  if(delete_id ==students[i].student_id){
  students.splice(i,1);
  console.log("Delete Succesfully");
  }
  else{
    console.log("Invalid ID number");
  }
}
}
//updata 
function updateStudent(){
const prompt=require('prompt-sync')();
let update_id=Number(prompt("Enter the Student ID:"));
for(let i=0;i<students.length;i++){
  if(update_id ==students[i].student_id){
   students[i].student_name = prompt("Enter New Name:");
   students[i].student_age = Number(prompt("Enter New Age:"));
   console.log("Update Succesfully");
  }
  else{
  console.log("Invalid ID number");
  }
 }
}
// //search
function searchStudent(){
  const prompt=require('prompt-sync')();
let search_id=Number(prompt("Enter the search Student ID:"));
for(let i=0;i<students.length;i++){
  if(search_id ==students[i].student_id){
    console.log(students[i]);
  }
  else{
console.log("Student are not fount");
  }
}
}
//display all function
function displayStudent(){
 if(students.length === 0){
    return "No Student Record Found";
 }
  for(let i=0;i<students.length;i++){
    console.log(students[i]);
  }
console.log("Display all Successfully");
}

let choice=0;
while(choice!=6){
console.log("**** WELCOME TO STUDENT RECORD MANAGEMENT SYSTEM****");
console.log("1 Add Student");
console.log("2 Delete Student");
console.log("3 Update Student")
console.log("4 Search Student");
console.log("5 Display All Student");
console.log("6 Exit")
  const prompt=require('prompt-sync')();
choice=Number(prompt('Enter the Choice:'));
  switch(choice)
    {
      case 1:
            addStudent();
            break;
       case 2:
            deleteStudent();
            break;
       case 3:
            updateStudent();
            break;
       case 4:
            searchStudent();
            break;
        case 5:
            displayStudent();
            break;
        case 6:
          console.log("Exit Successfully");
           break;
      default:
        console.log("Invalid Choice");
        break;
    }
}