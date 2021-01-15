$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const operator1 = $("input:radio[name=question1]:checked").val();
    const operator2 = $("input:radio[name=question2]:checked").val();
    const operator3 = $("input:radio[name=question3]:checked").val();
    const operator4 = $("input:radio[name=question4]:checked").val(); 
    
    let button1
    let button2
    
    if(operator1 === "yes") {
      $(".question1").show();
      $(".magicWord").hide();

    } else {
      $(".magicWord").show();
      $(".question1").hide();
      $("#noBtn").hide();
    }

    event.preventDefault();
  });
  $("form#reset").submit(function(event) {
    location.reload();
  });

  // function questions() {
  //   const operator = $("input:radio[name=operator]:checked").val();
  //   console.log(operator);
    
  // }
});