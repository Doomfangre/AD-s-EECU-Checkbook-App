if (document.getElementById("next") == null) {
    console.log("cool");
} else {
    document.getElementById("next").addEventListener("click", () => {
    const name = document.getElementById("account").value;

  });
}

let currentChart = null;

document.getElementById("but").addEventListener("click", () => {
    const canvas = document.getElementById("chartCanvas");
    const house = document.getElementById("bill1").innerHTML;
    const essen = document.getElementById("bill2").innerHTML;
    const student = document.getElementById("bill3").innerHTML;
    const life = document.getElementById("bill4").innerHTML;
    const future = document.getElementById("bill5").innerHTML;
    // Destroy old chart if it exists (common Chart.js gotcha)
    if (currentChart) currentChart.destroy();
  
    // Build chart config based on type
    const config = doughnutte (house, essen, student, life, future);
  
    currentChart = new Chart(canvas, config);
  });

// DOUGHNUTTE
function doughnutte(one, two, three, four, five) {
    

 return {
      type: "doughnut",
      data: {
        labels: [one + "(%)", two + "(%)", three + "(%)", four + "(%)", five + "(%)"],
        datasets: [{ label: "Bill mix", data: [one, two, three, four, five] }]
      },
      options: {
        plugins: {
          title: { display: true, text: `Total Deduction: Bill Quanification` }
        }
      }
    };
}