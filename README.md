# daily-timeline-pro

## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      | 
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Jquery UI  | [https://jqueryui.com/](https://jqueryui.com/)      |
| Bootstrap  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)      |
| Day.js  | [https://day.js.org/docs/en/installation/installation](hhttps://day.js.org/docs/en/installation/installation)      |



## Description:

[Visit Deployed Site]:

This web application is a useful tool for any employee, company, or busy individual who would like a concise way of organizing their daily tasks. Having a daily planner is crucial to maintaining an effective schedule. With this dynamic web application I’ve brought together HTML, CSS, JavaScript, Bootstrap, Jquery, and Day.js to help enhance the users productivity. With Daily Timeline Pro, a user can save events for each hour of the day as well as insert them into easily distinguishable time blocks. Time management can be made easy, the user simply clicks into the time block they would like to add an event/task to, and click save. Not only can they save their events and better prioritize for increased productivity, but the current time and date will always remain at the top of the calendar, and as long as they click the save icon, when the page is refreshed, their events will remain on the calendar. Daily Timeline Pro is also color coded: the present day will be green, the future days will be blue, and the past events turn gray. 


## Table of Contents:
* Installation (HTML, CSS, JavaScript, Bootstrap, Jquery, getElementById, Event Listeners, and Objects, API’s )
* Usage
* Credits
* License


### Installation:

To install this project, a knowledge of HTML, CSS, JavaScript, API’s like Bootstrap, and Jquery were required. Methods used ranged from functions, document window methods, querySelector, getElementById, Event Listeners, Local Storage, Variables, If/Else Statements, and Data Types, Jquery UI widgets, and Bootstrap’s pre-designed styling components and classes. The web application is intended for the user to be able to input and store their daily tasks and click save so the data will not be lost and can be accessed later. Upon refresh, the tasks should still remain in their spot. Additionally, the planner is  time responsive and the colors of the time blocks change according to if the time slot is in the past, present, or future.  

```
var fullDate = new Date()
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
document.getElementById("datepicker").innerHTML=currentDate
```
(Above we are trying to get the month alone, so we set all the values(day, month, year) to one variable. Then we are trying to use getElementById in order to access the datepicker id we input and print the input to the HTML file with innerHTML.)


```
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
```
(Above: Getting the data from localStorage whatever we have (can be null) with the loop we are trying the get the data for each row using id.



(Below: I stored everything into the full date variable. I was trying to get the month alone. I set all the values(day, month, year) to one variable. On line 46 stored the data into the data variable. I want it to print it on the .indexhtml file)
```
var fullDate = new Date();
var twoDigitMonth =
fullDate.getMonth().length + 1 === 1
  ? fullDate.getMonth() + 1
  : "0" + (fullDate.getMonth() + 1);
var currentDate =
fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
document.getElementById("datepicker").innerHTML = currentDate;


```


```
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
```
(Above: This function mainly helps to set data and to append the new data into the old one. This code snippet checks if the variable data exists, and if it does, it is parsing the JSON data using JSON.parse method. Then, it is creating a new object by spreading the data object and adding a new property with a key label and value.)



### Usage:
Weekly planners are used to help you plan your week. They give you a place to jot down the things that need to get done for the week, plus space for all of your appointments and events. They also have plenty of room for notes and reminders so you can keep track of important things to remember.



## Credits:
*  Traversing the DOM: https://zellwk.com/blog/dom-traversals/
* JavaScript Assignment: https://www.w3schools.com/js/js_assignment.asp
* Query Selector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
* Get Element By Id: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
*JavaScript Siblings: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/ 
JavaScript Objects: https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_object 
*Local Storage: https://www.javatpoint.com/javascript-localstorage &
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
* JavaScript Function Parameters: https://www.w3schools.com/js/js_functi on_parameters.asp
* Local Storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
* ForEach (Array Prototype): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
* Spread Syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
* 12 Hr am/pm Format: https://linuxhint.com/display-datetime-in-12-hour-am-pm-format-javascript/  
* Date/Time: https://www.sitepoint.com/jquery-todays-date-ddmmyyyy/ 
* JQuery UI Widgets: https://jqueryui.com/datepicker/ 


### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

<!-- Pseudo Code:-->
<!-- 1. Current Day is displayed at the top when user opens calendar -->
<!-- 2. There are timeblocks for standard Buisiness hours (Mon-Fri 9am-6pm) -->
<!-- 3. Color coded Time Blocks: past:grey   present:green    future: Purple -->
<!-- 4. Time blocks when clicked can be made an event that contains: Text area for input and a save button-->
<!--5. When save is clicked, text is saved to localstorage  -->
<!--6. Upon refresh the saved event stays  -->

https://linuxhint.com/display-datetime-in-12-hour-am-pm-format-javascript/ 
https://www.sitepoint.com/jquery-todays-date-ddmmyyyy/
https://api.jquery.com/Types/#Date
https://jqueryui.com/datepicker/
https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone. 
