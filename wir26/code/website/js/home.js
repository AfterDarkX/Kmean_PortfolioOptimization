$(document).ready(() => {
  let locate = window.location.search;
  console.log(locate);
  let getPageVal = new URLSearchParams(locate);
  let riskAcp = getPageVal.get("risk_acp");
  let radgroup = document.getElementsByClassName("radio_group");
  var radios = document.getElementsByName("rad");

  if (riskAcp != "") {
    document.getElementsByClassName("radio_group").style = "none";
  }

  function toForm() {
    window.location = "form2.html?";
  }

  function toDashboard() {
    let invest = document.getElementById("invest").value;
    window.location =
      "dashboard.html?risk_acp=" + riskAcp + "&invest=" + invest;
  }
});
