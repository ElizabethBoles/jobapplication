(function() {
  'use strict';
   window.jobapp = window.jobapp || {};
//----------------------------Question #1-------------------------------------//

    console.log("hello!");//finding this element button warning adding an event
    //handler on click of that button
    //set the call back in the second arg function printhello which is an event
    //handler
    document.querySelector('.btn-warning').addEventListener('click', function printHello(evt) {
    console.log("i love to code");//logged it out to make sure it was working
    console.log(evt);//all we did in the call back was log out the event
  });
    document.querySelector("#full-name").addEventListener('blur', function fullName(evt) {
      console.log(evt.target.value.length);//created another event handler which selects
      //the element with an # of full name listens for blur event

      if (evt.target.value.length) {//when the above function runs evt is always returned
        //by our event listener inside the return event is all the data about the element
        //the event happened on
        evt.target.parentNode.parentNode.classList.remove("has-error");
        //i want to find the target element that the event happened on
      } else {
        evt.target.parentNode.parentNode.classList.add("has-error");
      }
     });
//----------------------------Question #2-------------------------------------//
        document.querySelector('#exp').addEventListener('change', function experience(evt) {
           evt.target.parentNode.childNodes[3].innerText = evt.target.value + " years";
           //evt is the change evt on whenever exp changes the target to that event
           //is the exp element then the exp element has a parent node which has children
           //we know we want to select the fourth child of that parent
      });
//----------------------------Question #3-------------------------------------//
    let count = 0;
       Array.from(document.querySelectorAll('[name= "languages"]'))
           .forEach(function addClickEvent(item){
            item.addEventListener('change', function checkedBoxes(evt){
              console.log(evt);
               if (evt.target.checked) {
               count++;
               } else {
               count--;
             }
             //. is for classes #ids
             document.querySelector('.lngs').innerHTML = count + "languages";
             //a simple doc selector will only give you back what the element
             //looks like in code but when i put a [0] outside of the bubble
             //it allows me to then dig through all the elements styles and methods
             //console.log(document.querySelectorAll('.lngs') );
    });
  });
//-------------------------Question 4-----------------------------------------//
  document.querySelector('form').addEventListener('submit', function prevent(evt){
    evt.preventDefault();//calling function
    //console.log('happend');
     window.jobapp.submit();//calling function
  });

})();
