


//Variables for this js file

var studentSearch;
var studentGrade; 
var studentGender;
var studentClub; 

//function used to save the filters picked by the students in the local storage

function getData(){ 

    studentSearch=document.getElementById("search for announcements").value;
    localStorage.setItem("studentGrade Key", studentGrade); 
    
    studentGrade=document.getElementById("htmlSGrade").value;
    localStorage.setItem("studentGender Key", studentGender);
    
    studentGender=document.getElementById("htmlSGender").value; 
    localStorage.setItem("studentClub Key", studentClub); 
    
    studentClub=document.getElementById("htmlSClub").value;
    localStorage.setItem("studentSearch Key", studentSearch);

}
