document.getElementById("careerSelect").addEventListener("change", (eventy) => {
  const salary = eventy.target.value;
  let takeIn = tax(salary);
  alert(takeIn);
  localStorage.setItem("money", JSON.stringify(takeIn));
});


document.getElementById("account").addEventListener("change", () => {
  let nam = document.getElementById("account").value;
  alert(nam);
  localStorage.setItem("name", JSON.stringify(nam));
});

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



// const openDropdown = document.querySelectorAll(".openCategory");
// const categories = document.querySelectorAll(".expenseContainer");

// openDropdown.forEach((btn, index), ()=> { //for every button, listening for a click, issue with btn not being defined
//     btn.addEventListener("click", ()=>{
//         categories.forEach((category, number), ()=> { //will go through categories, if category # = btn #, will make category "active" -> will appear
//             if (number === index){
//                 category.classList.add("active");
//             } else {
//                 category.classList.remove("active"); //else "active" is removed & will disappear
//             }
//         });
//     });
// });


getCareers(); //initating dropdown creation

// function getMonthlyIncome(monthlyIncome) {
//     const salary = career.Salary.toLocaleString; //grabbing salary from dropdown, needs to be fixed
//     monthlyIncome = salary / 12;
//     options.addEventListener("click", getMonthlyIncome);
//     return monthlyIncome;
// }

// console.log(getMonthlyIncome());
