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
let lifeExpectancy = "";
let planetLifeExpectancy = "";
let averageLifeExpectancy = 80;

// let mercury = $("option:value[1]")

  $("#calculate").click(function(event){
    event.preventDefault();
    let userDateOfBirth = parseInt($("#birthDayYear").val());
    let year = new Date().getFullYear();
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

console.log(year - 2000);
console.log($("#planet :selected").val());
console.log(answer);
          // console.log(answer);
  $("#output").text("You are " answer + " years old on the planet of " + $("#planet :selected").val());
  $("#output2").text(lifeExpectancy + " Is the average human life expectancy on the planet of " + $("#planet :selected").val());
  });
// console.log(year - 2000);
});
