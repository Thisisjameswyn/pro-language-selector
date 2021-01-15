$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const operator = $("input:radio[name=operator]:checked").val();
    
    if(operator === "yes") {
      $(".question1").show();
      $(".question2").hide();
    } else {
      $(".question2").show();
      $(".question1").hide();
    }

    event.preventDefault();
  });
});