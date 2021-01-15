$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const op1 = parseInt($("input:radio[name=question1]:checked").val());
    const op2 = parseInt($("input:radio[name=question2]:checked").val());
    const op3 = parseInt($("input:radio[name=question3]:checked").val());
    const op4 = parseInt($("input:radio[name=question4]:checked").val());
    const total = op1+op2+op3+op4;

    if(total >= 7) {
      $(".welcome").hide();
      $(".questions").hide();
      $("#answer1").toggle("slow");
    }else if(total < 7 && total > 4) {
      $(".welcome").hide();
      $(".questions").hide();
      $("#answer2").toggle("slow");
    }else if(total === 4){
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