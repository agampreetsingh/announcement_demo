//the variables declared for the teacher.js page

var teacherGrade=[]; 
var teacherGender=[];
var teacherClub=[]; 
var teacherDetails=[]; 
var counter=0;

//function used to save the announcement made by the teacher in the local storage

function getTeacherData() { 
    
    teacherGrade[counter]=document.getElementById("htmlTGrade").value;
    localStorage.setItem("teacherGrade Key", JSON.stringify(teacherGrade));


    teacherGender[counter]=document.getElementById("htmlTGender").value;
    localStorage.setItem("teacherGender Key", JSON.stringify(teacherGender));

  
    teacherClub[counter]=document.getElementById("htmlTClub").value;
    localStorage.setItem("teacherClub Key", JSON.stringify(teacherClub));


    teacherDetails[counter]=document.getElementById("htmlTAnnouncement").value; 
    localStorage.setItem("teacherDetails Key", JSON.stringify(teacherDetails));

    counter++

}

//this function is used to save the announcements which were made before refreshing the page or making new ones

function getExistingData(){

    teacherGrade = JSON.parse(localStorage.getItem("teacherGrade Key"));

    teacherGender = JSON.parse(localStorage.getItem("teacherGender Key"));
    
    teacherClub = JSON.parse(localStorage.getItem("teacherClub Key"));

    teacherDetails = JSON.parse(localStorage.getItem("teacherDetails Key"));

    counter = teacherGrade.length;

}