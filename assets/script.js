function save() {
  console.log("click");
  var data = document.getElementsByClassName("description").value;
  console.log(data);
 }

var eventBlock = [];


$(function () {
   
  });
  

  function initState() {
    var data = JSON.parse(localStorage.getItem("data"));
    var textAreas = Array.from(document.querySelectorAll(`.description`));
    textAreas.forEach((text) => {
      var id = text.parentElement.id;
      if(data && data[id]){
        text.value = data[id] || "";
      }
    });
   }
//getting the data from localStorage whatever we have (can be null)
//with the loop we are trying the get the data for each row using id.

initState();
//calling the function.



// stored everything into the full date variable 
// We are trying to get the month alone
// we are setting all the values(day, month, year) to one variable 
var fullDate = new Date();
var twoDigitMonth =
 fullDate.getMonth().length + 1 === 1
   ? fullDate.getMonth() + 1
   : "0" + (fullDate.getMonth() + 1);
var currentDate =
 fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
document.getElementById("datepicker").innerHTML = currentDate;

// one line 46 we stored the data into the data variable 
// we are printing it on the indexhtml file 

// storing the current hour 
// set variable and connected the variable to the class"row" 
// We are settingg the current time equal to .Localestring 
// 
var rows = document.getElementsByClassName("row");
// var currentTime = fullDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// console.log(currentTime)
var currentHour=parseInt(fullDate.getHours());
// console.log(currentHour)

//--------------------------------------
function setColor(element, color) {
  element.style.backgroundColor = color;
}


  
Array.from(rows).forEach(row => {
 var rowIdString = row.id;
 if (rowIdString) {
   rowHour = parseInt(rowIdString);
   if(rowHour<=6 ){
     rowHour+=12
   }
   if(currentHour<=6){
     currentHour+=12
   }
   // console.log("currentHour = "+currentHour+" Row Hour = "+rowHour)
   if(rowHour<currentHour){
     setColor(row, "grey");
   }
   if(rowHour==currentHour){
     setColor(row,"green")
   }
   else if(rowHour>currentHour){
     setColor(row,"skyblue")
   }
 }

 var savedBtn = Array.from(document.querySelectorAll(".saveBtn"));
 savedBtn.forEach((btn) => {
   btn.addEventListener("click", handleSave);
 });
//Using forEach loop we are traversing the rows, we match the time with row time, and according the condition we change the color
//handlesave is used to save the planner that we have type in the row



// This is a JavaScript code snippet using the jQuery library.
// The first line declares a variable named btnId and assigns it the value of the id property of the parent element of the current 
// element, accessed using jQuery's parent() method.
function handleSave(e) {
   var btnId = $(this).parent()[0].id;
   var eventText = $(this).siblings("textarea").val();
   //storing the text that we write
   setData(btnId, eventText);
   console.log("Button : " + eventText, btnId);
 }


 function setData(label, value) {
   var data = localStorage.getItem("data");
   var resObj = {};
   if (data) {
     data = JSON.parse(data);
     data = { ...data, ...{ [label]: value } };
     resObj = data;
   } else {
     resObj[label] = value;
   }
   localStorage.setItem("data", JSON.stringify(resObj));
 }
});
//this function mainly helps to set data and to append the new data into the old one.
// This code snippet checks if the variable data exists, and if it does, it is parsing the JSON data using JSON.parse method.
// Then, it is creating a new object by spreading the data object and adding a new property with a key label and value value



//--------------------------------------

//   

// <!-- Pseudo Code:-->
// <!-- 1. Current Day is displayed at the top when user opens calendar -->
// <!-- 2. There are timeblocks for standard Buisiness hours (Mon-Fri 9am-6pm) -->
// <!-- 3. Color coded Time Blocks: past:grey   present:green    future: Purple -->
// <!-- 4. Time blocks when clicked can be made an event that contains: Text area for input and a save button-->
// <!--5. When save is clicked, text is saved to localstorage  -->
          //  <!--5. When save is clicked, text is saved to localstorage  -->
          // create a queryselectorall for the save buttons
          // create event listner for save button
          // capture the text in a variable
          // save text to localstorage 
          // innerHTML means it will save to the screen 
          // local 
// <!--6. Upon refresh the saved event stays  -->