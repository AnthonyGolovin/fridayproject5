// import './styles.css';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { AgeCalculator } from './fridayproject5.js';

//front-end
$(document).ready(function() {
console.log("Hello World");
console.log(Date());
let year = new Date().getFullYear();
let answer = "";
// let mercury = $("option:value[1]")

  $("#calculate").click(function(event){
    event.preventDefault();
    let userDateOfBirth = parseInt($("#birthDayYear").val());
    let year = new Date().getFullYear();
    if ($("#planet :selected").val() == "Mercury") {
       answer = (year - userDateOfBirth) * .24;
    } else if ($("#planet :selected").val() == "Venus") {
       answer = (year - userDateOfBirth) * .62;
    } else if ($("#planet :selected").val() == "Mars") {
       answer = (year - userDateOfBirth) * 1.88;
    } else if ($("#planet :selected").val() == "Jupiter") {
       answer = (year - userDateOfBirth) * 11.86;
          }

console.log(year - 2000);
console.log($("#planet :selected").val());
console.log(answer);
          // console.log(answer);
  $("#output").text(answer);
  });
// console.log(year - 2000);
});
