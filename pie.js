document.getElementById("dise").innerHTML = JSON.parse(localStorage.getItem("name"));
document.getElementById("monmon").innerHtml = ("$" + JSON.parse(localStorage.getItem("money")));


let count = 1;

const good = document.getElementById("openCategory");


good.addEventListener("click", (typo) => {
  if (count == 6) {
    alert("No more than 5!")
  } else {
    typo = document.getElementById("billy").value;
    let bill = document.getElementById("actualBill").value;
    if (typo == "" || bill == "") {
      alert("Something please!");
    } else {
    let pick = document.createElement("p");
    let pock = document.createElement("p");
    pick.setAttribute("id", `${typo}`);
    pock.setAttribute("id", `bill${count}`);
    pick.textContent = typo;
    pock.textContent = bill;
    let tough = document.createElement("section");
    tough.setAttribute("id", "llib");
    document.getElementById("manage").appendChild(tough);
    tough.appendChild(pick);
    tough.appendChild(pock);
    count += 1;
    }
  }
});


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
    } else {
      essen = document.getElementById("bill2").innerHTML;
    }
    if (document.getElementById("bill3") == null) {
      student = 0;
    } else {
      student = document.getElementById("bill3").innerHTML;
    }
    if (document.getElementById("bill4") == null) {
      life = 0;
    } else {
      life = document.getElementById("bill4").innerHTML;
    }
    if (document.getElementById("bill5") == null) {
      future = 0;
    } else {
      future = document.getElementById("bill5").innerHTML;
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

document.getElementById("assign").addEventListener( "click", () => {
window.location.reload();
});