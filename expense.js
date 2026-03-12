const openDropdown = document.querySelectorAll(".openCategory");
const categories = document.querySelectorAll(".expenseContainer");

openDropdown.forEach((btn, index), ()=> { //for every button, listening for a click, issue with btn not being defined
    btn.addEventListener("click", ()=>{
        categories.forEach((category, number), ()=> { //will go through categories, if category # = btn #, will make category "active" -> will appear
            if (number === index){
                category.classList.add("active");
            } else {
                category.classList.remove("active"); //else "active" is removed & will disappear
            }
        });
    });
});


document.getElementById("but").addEventListener("click", () => {
    const canvas = document.getElementById("chartCanvas");
    const house = document.getElementById("bill1").value;
    const essen = document.getElementById("bill2").value;
    const student = document.getElementById("bill3").value;
    const life = document.getElementById("bill4").value;
    const future = document.getElementById("bill5").value;

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
        datasets: [{ label: "Rider mix", data: [one, two, three, four, five] }]
      },
      options: {
        plugins: {
          title: { display: true, text: `Total Deduction: ${one} ${two} ${three} ${four} ${five}` }
        }
      }
    };
  }
  
