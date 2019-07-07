// import './styles.css';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // export default calculator;
// export default Triangle;
// import { AgeCalculator } from './fridayproject5.js';

//front-end
$(document).ready(function() {

//Variables
const year = new Date().getFullYear();
const averageLifeExpectancy = 80;
let answer = "";
let lifeExpectancy = "";
let planetLifeExpectancy = "";

//Front-end click function
function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}
//Added for testing reasons;
   function calculator() {
    // event.preventDefault();
    let userDateOfBirth = parseInt($("#birthDayYear").val());
    if ($("#planet :selected").val() == "Mercury") {
       answer = (year - userDateOfBirth) * .24;
       planetLifeExpectancy = averageLifeExpectancy * .24;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if ($("#planet :selected").val() == "Venus") {
       answer = (year - userDateOfBirth) * .62;
       planetLifeExpectancy = averageLifeExpectancy * .62;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if ($("#planet :selected").val() == "Mars") {
       answer = (year - userDateOfBirth) * 1.88;
       planetLifeExpectancy = averageLifeExpectancy * 1.88;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if ($("#planet :selected").val() == "Jupiter") {
       answer = (year - userDateOfBirth) * 11.86;
       planetLifeExpectancy = averageLifeExpectancy * 11.86;
      lifeExpectancy = planetLifeExpectancy - answer;
    }
// Function Output
  $("#output").text("You are " +  answer + " years old on the planet of " + $("#planet :selected").val());
  $("#output2").text(lifeExpectancy + " Is the average human life expectancy on the planet of " + $("#planet :selected").val());
}
  $("#calculate").click( function(event) {
    event.preventDefault();
    calculator();  });

});
