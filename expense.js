document.getElementById("careerSelect").addEventListener("change", (eventy) => {
  const salary = eventy.target.value;
  const takeIn = tax(salary);
  alert(takeIn);
});

document.getElementById("nekst").addEventListener("click", () => {
    const para = document.getElementById("ppap");
    para.innerHTML = document.getElementById("account").innerHTML;
    console.log(para);
});

// Tax function
function tax(sally) {
  const sold = sally;
  sally = sally - ((1.45 / 100) * sally);
  sally = sally - ((6.2 / 100) * sally);
  if (sold <= 12401) {
    sally = sally - ((10 / 100) * sally);
  } else if (sold >= 50400) {
    sally = sally - ((22 / 100) * sally);
  } else {
  sally = sally - ((12 / 100) * sally);
  }
  sally = sally - ((4 / 100) * sally);
  sally = Math.round(sally * 100) / 100;
  return sally;
}

//grabbing career information and adding to dropdown
async function getCareers() {
  const url = "https://eecu-data-server.vercel.app/data";
  try {
      const response = await fetch(url);
      const jobs = await response.json();
      createOptions(jobs);
      console.log("initiated");
      return jobs;
  }
  catch (error) {
      console.error("Error fetching careers data:", error);
      return [];
  }

}

//creates options for dropdowns & adds Event Listers (needs to be fixed)
function createOptions(careers) {
  const dropdown = document.getElementById("careerSelect");
  careers.forEach((career, index) => {

      const options = document.createElement("option");
      options.innerHTML = `${career.Occupation}: ${career.Salary.toLocaleString()}`;
      options.setAttribute("id", `${index}`);
      options.setAttribute("value", `${career.Salary}`);
      options.addEventListener("click", () => {
          careerTitle.innerHTML = `Future Career: ${career.Occupation}`;
      });
      dropdown.appendChild(options);
  });
}

getCareers(); //initating dropdown creation

// function getMonthlyIncome(monthlyIncome) {
//     const salary = career.Salary.toLocaleString; //grabbing salary from dropdown, needs to be fixed
//     monthlyIncome = salary / 12;
//     options.addEventListener("click", getMonthlyIncome);
//     return monthlyIncome;
// }

// console.log(getMonthlyIncome());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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