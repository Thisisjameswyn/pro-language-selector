$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const op1 = parseInt($("input:radio[name=question1]:checked").val());
    const op2 = parseInt($("input:radio[name=question2]:checked").val());
    const op3 = parseInt($("input:radio[name=question3]:checked").val());
    const op4 = parseInt($("input:radio[name=question4]:checked").val());
    const total = op1+op2+op3+op4;
    console.log(total);

    if(total >= 7) {
      $("#answer1").show();
    }else if(total < 7 && total > 4) {
      $("#answer2").show();
    }else if(total === 4){
      $("#answer3").show();
    }else {
      $(".magicWord").show();
    }
    
    // if(operator1 === "yes") {
    //   $(".question1").show();
    //   $(".magicWord").hide();

    // } else {
    //   $(".magicWord").show();
    //   $(".question1").hide();
    //   $("#noBtn").hide();
    // }

    event.preventDefault();
  });
  $("form#reset").submit(function(event) {
    location.reload();
  });
});