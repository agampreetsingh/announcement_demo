

var viewAnnouncement=[];
var viewTGender=[];
var viewTGrade=[];
var viewTClub=[]
var viewSGender;
var viewSGrade;
var viewSClub;
var announcementTextHolder=" ";

function displayAnnouncement(){

 /*these are the keys from the localstorage 
 we are using this code to get the information related to the announcements made and saved in the local storage*/

    viewAnnouncement=JSON.parse(localStorage.getItem("teacherDetails Key"));
    viewTGender=JSON.parse(localStorage.getItem("teacherGender Key"));
    viewTGrade=JSON.parse(localStorage.getItem("teacherGrade Key"));
    viewTClub=JSON.parse(localStorage.getItem("teacherClub Key"));
    
    viewSGender=localStorage.getItem("studentGender Key");
    viewSGrade=localStorage.getItem("studentGrade Key");
    viewSClub=localStorage.getItem("studentClub Key");    
    
 //the if statement will be used to compare the filters of student and teachers page and print the announcement according to that

    for (var i = 0; i < viewTGender.length; i++) {             
          
       if (viewTGrade[i]==viewSGrade || viewTGrade[i]=="ALL" && viewTGender[i]==viewSGender || viewTGender[i]=="ALL" 
        && viewTClub[i]==viewSClub || viewTClub[i]=="ALL") 
        {
          document.getElementById("htmlAllAnnouncements").innerHTML = announcementTextHolder;
          
          announcementTextHolder += viewAnnouncement[i];
          
        }
      } 
      
      if(announcementTextHolder == " ")
      {
        document.getElementById("htmlAllAnnouncements").innerHTML="No announcements found";
      }
   
}
