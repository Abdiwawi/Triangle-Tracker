$(document).ready(function() {
  $("#forms form").submit(function(event){
      var a = parseInt($("input#Sidea").val());
      var b = parseInt($("input#sideb").val());
      var c = parseInt($("input#sidec").val());
      var results = "";


      if(a > b + c || b > a + c || c > a + b){
        return "Not a Triangle!";
      }
      else if (a === b, b === c, a === c) {
        return "Equilateral";
      }
      else if (a === b,) {

      }

      }
  }
}
