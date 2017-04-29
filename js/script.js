$(document).ready(function() {
  $("#forms1 form").submit(function(event){
      var a = parseInt($("input#Sidea").val());
      var b = parseInt($("input#Sideb").val());
      var c = parseInt($("input#Sidec").val());
      var results = "";


      if (a+b <= c || a+c <= b || c+b <=a) {
        results += "Not a Triangle"
      }
      else if ((a===b && b!==c && c!==a) || (a!==b && b!==c && c===a) || (a!==b && b===c && c!==a)) {
        results += "Isoscless Triangle"
      }
      else if (a===b && b===c && c===a) {
        results += "Equilateral"
      }
      else {
        results += "Scalene Triangle"
      }

      document.getElementById("output").innerHTML = results;
      event.preventDefault();
      $("#forms1").fadeOut();
  });
});
