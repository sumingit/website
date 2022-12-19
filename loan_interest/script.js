function calculateHandler(){
  var loan = $("#loan").val();
  var interest = $("#interest").val();
  var period = $("#period").val();

  loan = parseFloat(loan);
  interest = parseFloat(interest);
  period = parseFloat(period);

  var interestMonth = interest / 12 / 100;

  var div1 = loan * interestMonth * ( 1 + interestMonth) ** period;
  var div2 = ( 1 + interestMonth ) ** period - 1;
  var result = div1 / div2;

  result = Math.round(result).toLocaleString();
  var resultText = `고객님의 ${period}개월동안 월 상환액은 <mark>${result}원</mark> 입니다.`;

  $("#result").html(resultText);
}
function loan100Handler(){
  var loan = $("#loan").val();
  if (loan == ""){
    loan = 0;
  }
  loan = parseFloat(loan);
  loan = loan + 1000000;
  $("#loan").val(loan);
}
function loan1000Handler(){
  var loan = $("#loan").val();
  if (loan == ""){
    loan = 0;
  }
  loan = parseFloat(loan);
  loan = loan + 10000000;
  $("#loan").val(loan);
}
function loan10000Handler(){
  var loan = $("#loan").val();
  if (loan == ""){
    loan = 0;
  }
  loan = parseFloat(loan);
  loan = loan + 100000000;
  $("#loan").val(loan);
}

function interest3Handler(){
  $("#interest").val(3);
}
function interest4Handler(){
  $("#interest").val(4);
}
function interest5Handler(){
  $("#interest").val(5);
}

function period1Handler(){
  $("#period").val(12);
}
function period3Handler(){
  $("#period").val(36);
}
function period5Handler(){
  $("#period").val(60);
}

$(document).ready(function() {
  $("#calculate").click(calculateHandler);

  $("#loan-100").click(loan100Handler);
  $("#loan-1000").click(loan1000Handler);
  $("#loan-10000").click(loan10000Handler);

  $("#interest-3").click(interest3Handler);
  $("#interest-4").click(interest4Handler);
  $("#interest-5").click(interest5Handler);

  $("#period-1").click(period1Handler);
  $("#period-3").click(period3Handler);
  $("#period-5").click(period5Handler);
});