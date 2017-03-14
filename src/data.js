(function() {
  window.jobapp = window.jobapp || {};
  window.jobapp.submit = submit;
  //creating a new key in the object jobapp and making the value to that key
  //= the function submit created with in this file
  //created name space object to equal a name space object with the same name
  //or an empty object / not linked yet
  //this allows us to link the files together when i go add this same line in my
  //jobapp.js
  function submit(){
    document.querySelectorAll('#results')[0].style.display = 'block';
    //console.log('submit');
    console.log(document.querySelectorAll('#results'));
    //querryselectorall is a core js method that returns an array the [0] allows
    //us to dig into all those element styles and methods
    //grabbed the element with results id# digging into its display style
    //block is in quotes when changing string values in css i have to set that
    //value here in JS as a string data type
    document.querySelectorAll('#results')[0].innerText = "Your application has been received!";
    //didnt put end '' in () because when youre setting a style usign docsel
    //return values have to equal that data type of that style in this instance
    //that data type is a string
    //
    //This other function (for now) should change the style of the "results"
    //alert box to have display equal block and add a success message inside the tag
    //(like: "Your application has been received!")
  }
  //every function has a block {} where we do stuff
}());
