
var coursesVisible = false;
let previousCourses = "";
const primaryNav = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click', ()=>{
   const visibility = primaryNav.getAttribute('data-visible');
   console.log(visibility);
   if(visibility === "false"){
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded',true);
   }
   else if(visibility === "true"){
      primaryNav.setAttribute('data-visible',false);
      navToggle.setAttribute('aria-expanded',false);
   }
})

function localstorage(){
   var checkbox = document.getElementsByName('course').length;
   var count = 0;
   for(var i = 0; i<checkbox;i++){
      if(document.getElementsByName('course')[i].checked == true){
         count++;
          //alert(document.getElementsByName('course')[i].value);
         if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem(document.getElementsByName('course')[i].value, document.getElementsByName('course')[i].value);
         }
      }
   }
   if(count<=0){
      alert("Please select the courses you have taken");
   }
}

// The following are the courses (designation, name, seats remaining,
// and capacity. For this first assignment, don't worry about changing
// seatsRemaining.

var second_box = document.getElementById('second_box');
var shownList = [];
var btn = document.getElementById('button_course');
function change(){
   if(btn.value === "Show Courses"){
      btn.value = "Hide Courses";
      
   }
   else{
      btn.value = "Show Courses";
      second_box.innerHTML = "";
   }
   
}
function showCourses(){
   let courses = [
      { courseNumber: "CSE101", courseName: "Algorithmic Thinking", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE114", courseName: "Introduction to Object Oriented Programming", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE214", courseName: "Data Structures", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE215", courseName: "Foundations of Computer Science", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE216", courseName: "Programing Abstractions", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE220", courseName: "System Fundamentals I", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE303", courseName: "Introduction to the Theory of Computation", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE304", courseName: "Compiler Design", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE305", courseName: "Database Systems", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE306", courseName: "Operating Systems", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE310", courseName: "Computer Networks", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE316", courseName: "Software Development", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE320", courseName: "System Fundamentals II", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE331", courseName: "Computer Security Basics", seatsRemaining: 40, capacity: 40 },
      { courseNumber: "CSE416", courseName: "Software Engineering", seatsRemaining: 40, capacity: 40 },
   
   ];
   var name = document.getElementById('name').value;
   var search = document.getElementById('search').value;
   var count = 0;

   if(search.length !=0 && name.length !=0 ){
      second_box.innerHTML +=  "<div id = 'search_border' style = \"font-size:18px;\"> "+name + " here are the courses you may select </td></tr><br>";
      for(var i = 0; i< courses.length; i++){
         console.log(courses[i].courseName.includes(search));
         if(courses[i].courseName.includes(search)===true){
            second_box.innerHTML+="<div id = 'search_border'style = \"font-size:18px;margin-top:10px;text-align: left;\"><input type = \"checkbox\" name = \"searched_courses\" value = \""+courses[i].courseNumber+"\">"+courses[i].courseNumber+" : "+ courses[i].courseName+ " - " + courses[i].seatsRemaining+" of "+ courses[i].capacity + "<br>";
            shownList.push(courses[i].courseNumber);
         }
         else{
            count++;
         }
      }
      if(count==15){
         second_box.innerHTML=""
         alert("There are no courses you are seaching for. Try again.");
         change();
      }
      else{
         second_box.insertAdjacentHTML('beforeend',"<div id = 'search_border' ><input type = \"button\" value = \"Register\" style = \"font-style:italic; margin-top: 10px;\" onclick = \"matchPrerq()\">");
      }
      
   }
   else{
      alert("You should enter your info and course you are searching for");
   }
}
let coursePre = {
   'CSE101': [],
   'CSE114': [],
   'CSE214': ['CSE114'],
   'CSE215': [],
   'CSE216': ['CSE214'],
   'CSE220': ['CSE214'],
   'CSE300': [],
   'CSE303': ['CSE214', 'CSE215'],
   // {'CSE304': ['CSE216', 'CSE220']},
   'CSE305': ['CSE216'],
   'CSE306': ['CSE216', 'CSE320'],
   'CSE310': ['CSE214', 'CSE220'],
   'CSE312': [],
   'CSE316': ['CSE216'],
   'CSE320': ['CSE220'],
   'CSE416': ['CSE316']
}

function matchPrerq(){
   var checkbox = document.getElementsByName('searched_courses').length;
   var count = 0;
   var storageList = [];
   let intersection;
   let difference;
   for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      storageList.push(localStorage.getItem( localStorage.key( i ) ));
    }
    
   for(var i = 0; i<checkbox;i++){
      if(document.getElementsByName('searched_courses')[i].checked === true){
         count++;
         intersection = coursePre[document.getElementsByName('searched_courses')[i].value].filter(x=>storageList.includes(x));
         if(JSON.stringify(intersection)==JSON.stringify(coursePre[document.getElementsByName('searched_courses')[i].value])){
            alert("Courses selected: " + document.getElementsByName('searched_courses')[i].value);
         }
         else{
            difference = coursePre[document.getElementsByName('searched_courses')[i].value].filter(x=>!intersection.includes(x));
            alert(document.getElementsByName('searched_courses')[i].value+" requires "+ difference);
         }
      }
   }
   if(count<=0){
      alert("Please select the courses you want to register");
   }
}

// This is just a bit of example code. You can try to execute this
// routine on a button click for practice.
let doSomethingOnClick = (event) => {
   console.log("Button clicked ", event);
};

document.addEventListener('DOMContentLoaded', function () {

    // This is a good place to set up code like onclick handlers

    // You can also check that certain preconditions are met like
    // the user has been to the 'Previous Courses' page and selected
    // courses taken.
    

   if (previousCourses === null) {
      alert("Please use the Update Courses page to indicate courses you have taken. Then return here.")
   }
}, false);

// These are the course pre-requisites you will need to verify the
// user may take the selected courses. We are ignorining non-CS pre-reqs
// like AMS151, etc.
// To take the course listed as the 'key' (first item on line), the user
// must have taken all the courses in the list that is the related value.



