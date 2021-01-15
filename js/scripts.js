$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const userName = $("input#name").val();
    const op1 = parseInt($("input:radio[name=question1]:checked").val());
    const op2 = parseInt($("input:radio[name=question2]:checked").val());
    const op3 = parseInt($("input:radio[name=question3]:checked").val());
    const op4 = parseInt($("input:radio[name=question4]:checked").val());
    const op5 = parseInt($("input:radio[name=question5]:checked").val());
    const total = op1+op2+op3+op4+op5;

    $(".name").text(userName);

    if(total >= 9) {
      $(".welcome").hide();
      $(".questions").hide();
      $("#answer1").toggle("slow");
    }else if(total <= 8 && total > 6) {
      $(".welcome").hide();
      $(".questions").hide();
      $("#answer2").toggle("slow");
    }else if(total < 6) {
      $(".welcome").hide();
      $(".questions").hide();
      $("#answer3").toggle("slow");
    }else {
      $(".magicWord").toggle("slow");
      $(".welcome").hide();
      $(".questions").hide();
    }

    event.preventDefault();
  });
  $("form#reset").submit(function(event) {
    location.reload();
  });
});