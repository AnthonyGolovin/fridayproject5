// import './styles.css';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { AgeCalculator } from './fridayproject5.js';

//front-end
$(document).ready(function() {
console.log("Hello World");
console.log(Date());

  $("#calculate").click(function(event){
    event.preventDefault();
    let userDateOfBirth = $("#birthDayYear").val();
    let year = new Date().getFullYear();
    console.log(year);
    console.log("Hello World");
  
  $("output").text(userDateOfBirth);
  });

});
