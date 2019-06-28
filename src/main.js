import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgeCalculator } from './fridayproject5.js';

//front-end
$(document).ready(function() {

  $("#calculate").click(function(event){
    event.preventDefault();
    // let userDateOfBirth = $("#birthDayYear").val();
    // AgeCalculator();
    // console.log(getFullYear);
    // console.log(beb);
    console.log(AgeCalculator());
    console.log("Hello World");
  // $("output").text(userDateOfBirth);
  });
});
