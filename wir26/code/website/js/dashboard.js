let locate = window.location.search;
console.log(locate);
let getPageVal = new URLSearchParams(locate);
let risk_acp = getPageVal.get("risk_acp");
let invest_value = getPageVal.get("invest");
invest_value = parseInt(invest_value, 10);
console.log(invest_value);
console.log(risk_acp);

var ctx = document.getElementById("myChart");

d3.json("../dataset/json_data.json").then((data) => {
  console.log(data);
  if (risk_acp == "low") {
    createPieChart(
      data.low.fund,
      data.low.return,
      data.low.sd,
      data.low.weight
    );
    tabulate(data.low, ["Fund", "Weight", "Investment cost"], invest_value);
  } else if (risk_acp == "mid") {
    createPieChart(
      data.mid.fund,
      data.mid.return,
      data.mid.sd,
      data.mid.weight
    );
    tabulate(data.mid, ["Fund", "Weight", "Investment cost"], invest_value);
  } else if (risk_acp == "high") {
    createPieChart(
      data.high.fund,
      data.high.return,
      data.high.sd,
      data.high.weight
    );
    tabulate(data.high, ["Fund", "Weight", "Investment cost"], invest_value);
  }
});

function createPieChart(dataLabel, data_return, data_sd, data_weight) {
  let ann_return = document.getElementById("annualize-return");
  let ann_sd = document.getElementById("annualize-sd");
  let sharp = document.getElementById("sharp-ratio");
  ann_return.innerHTML = data_return;
  ann_sd.innerHTML = data_sd;
  sharp.innerHTML = (data_return / data_sd).toFixed(2);
  var myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      datasets: [
        {
          data: data_weight,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
      // backgroundColor: fillPattern,
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: dataLabel,
    },
    options: {
      legend: {
        display: true,
        position: "right",
      },
    },
  });
}

function tabulate(data, columns, invest_value) {
  let table = document.getElementById("fund-table");

  for (i = 0; i < data.fund.length; i++) {
    let row = table.insertRow(i);
    for (j = 0; j < columns.length; j++) {
      let cell = row.insertCell(j);
      if (j == 0) {
        cell.innerHTML = data.fund[i];
      } else if (j == 1) {
        cell.innerHTML = data.weight[i];
      } else if (j == 2) {
        cell.innerHTML = (invest_value * data.weight[i]) / 100;
      }
    }
  }
}
