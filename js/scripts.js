$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const operator = $("input:radio[name=operator]:checked").val();
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();

    event.preventDefault();
  });
});