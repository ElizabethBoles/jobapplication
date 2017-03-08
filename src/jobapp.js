

(function jobApplication() {
    console.log("hello!");
    document.querySelector('.btn-warning').addEventListener('click', function printHello(evt) {
    console.log("i love to code");
    console.log(evt);
    });
    document.querySelector("#full-name").addEventListener('blur', function fullName(evt) {
      console.log(evt.target.value.length);

      if (evt.target.value.length) {
        evt.target.parentNode.parentNode.classList.remove("has-error");
      } else {
        evt.target.parentNode.parentNode.classList.add("has-error");
      }


     });
      //When the range input ("experience") is changed, update the text in the figure
       //with the correct value from the input.

        document.querySelector("#exp").addEventListener('change', function experience(evt) {
           evt.target.parentNode.childNodes[3].innerText = evt.target.value + " years";




       //function needs to be above
       //So if I slide the dot to the right 1 step the figure should read "6 years".
      });
})();
