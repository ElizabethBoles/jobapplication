

(function jobApplication() {
    console.log("hello!");
    document.querySelector('.btn-warning').addEventListener('click', function printHello(eventObj) {
    console.log("i love to code");
    console.log(eventObj);
    });
    document.querySelector("#full-name").addEventListener('blur', function fullName(evt) {
      console.log(evt.target.value.length);

      if (evt.target.value.length) {
        evt.target.parentNode.parentNode.classList.remove("has-error");
      } else {
        evt.target.parentNode.parentNode.classList.add("has-error");
      }
    });
})();
