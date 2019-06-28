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
// let mercury = $("option:value[1]")

  $("#calculate").click(function(event){
    event.preventDefault();
    let userDateOfBirth = parseInt($("#birthDayYear").val());
    let year = new Date().getFullYear();
    if ($("#planet option:selected").val().equals("Mercury") == true) {
      let answer = userDateOfBirth * .24 - year;
    } else if ($("#planet :selected").val() == "Venus") {
      let answer = userDateOfBirth * .62 - year;
    } else if ($("#planet :selected").val() == "Mars") {
      let answer = userDateOfBirth * 1.88 - year;
    } else if ($("#planet :selected").val() == "Jupiter") {
      let answer = userDateOfBirth * 11.86 - year;
          }
console.log(year - 2000);
console.log($("#planet :selected").val());
console.log(answer);
          // console.log(answer);
  $("output").text();
  });
// console.log(year - 2000);
});
