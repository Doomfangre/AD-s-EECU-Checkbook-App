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
    let essen = document.getElementById("bill2");
    let student = document.getElementById("bill3");
    let life = document.getElementById("bill4");
    let future = document.getElementById("bill5");
    if (document.getElementById("bill2") == null) {
      essen = 0;
      console.log("nope");
    } else {
      essen = document.getElementById("bill2").innerHTML;
    }
    if (document.getElementById("bill3") == null) {
      student = 0;
      console.log("nope");
    } else {
      student = document.getElementById("bill3").innerHTML;
    }
    if (document.getElementById("bill4") == null) {
      life = 0;
      console.log("nope");
    } else {
      life = document.getElementById("bill4").innerHTML;
    }
    if (document.getElementById("bill5") == null) {
      future = 0;
      console.log("nope");
    } else {
      future = document.getElementById("bill5").innerHTML;
    }
    
    if (essen == null) {
      console.log("aaaaaaaaaa");
    }
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