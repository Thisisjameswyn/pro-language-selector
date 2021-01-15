$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const operator = $("input:radio[name=operator]:checked").val();
    
    if(operator === "yes") {
      $(".question1").show();
      $(".question2").hide();
      questions();

    } else {
      $(".question2").show();
      $(".question1").hide();
      $("#noBtn").hide();
    }

    event.preventDefault();
  });
  $("form#reset").submit(function(event) {
    location.reload();
  });

  function questions() {
    console.log("Keep Going!");
  }
});