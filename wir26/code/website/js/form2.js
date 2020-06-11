var finalScore;
function submitAnswer() {
  var one = document.getElementsByName("choice1");
  var two = document.getElementsByName("choice2");
  var three = document.getElementsByName("choice3");
  var four = document.getElementsByName("choice4");
  var five = document.getElementsByName("choice5");
  var six = document.getElementsByName("choice6");
  var seven = document.getElementsByName("choice7");
  var eight = document.getElementsByName("choice8");
  var nine = document.getElementsByName("choice9");
  var ten = document.getElementsByName("choice10");
  var check1 = false;
  var check2 = false;
  var check3 = false;
  var check4 = false;
  var check5 = false;
  var check6 = false;
  var check7 = false;
  var check8 = false;
  var check9 = false;
  var check10 = false;
  var score = [];

  for (var i = 0; i < 4; i++) {
    if (one[i].checked) {
      check1 = true;
      score.push(Number(one[i].value));
    }
    if (two[i].checked) {
      check2 = true;
      score.push(Number(two[i].value));
    }
    if (three[i].checked) {
      check3 = true;
      score.push(Number(three[i].value));
    }
    if (four[i].checked) {
      check4 = true;
      score.push(Number(four[i].value));
    }
    if (five[i].checked) {
      check5 = true;
      score.push(Number(five[i].value));
    }
    if (six[i].checked) {
      check6 = true;
      score.push(Number(six[i].value));
    }
    if (seven[i].checked) {
      check7 = true;
      score.push(Number(seven[i].value));
    }
    if (eight[i].checked) {
      check8 = true;
      score.push(Number(eight[i].value));
    }
    if (nine[i].checked) {
      check9 = true;
      score.push(Number(nine[i].value));
    }
    if (ten[i].checked) {
      check10 = true;
      score.push(Number(ten[i].value));
    }
  }
  if (
    !check1 ||
    !check2 ||
    !check3 ||
    !check4 ||
    !check5 ||
    !check6 ||
    !check7 ||
    !check8 ||
    !check9 ||
    !check10
  ) {
    alert("Please select all answer");
  }
  if (score.reduce(getSum) >= 6 && score.reduce(getSum) <= 15) {
    // alert("ต่ำ");
    finalScore = score.reduce(getSum);
    window.location = "home.html?risk_acp=" + "low";
  }
  if (score.reduce(getSum) >= 16 && score.reduce(getSum) <= 31) {
    // alert("ปานกลาง");
    finalScore = score.reduce(getSum);
    window.location = "home.html?risk_acp=" + "mid";
  }
  if (score.reduce(getSum) >= 32 && score.reduce(getSum) <= 42) {
    finalScore = score.reduce(getSum);
    window.location = "home.html?risk_acp=" + "high";
  }

  function getSum(total, num) {
    return total + num;
  }
}
