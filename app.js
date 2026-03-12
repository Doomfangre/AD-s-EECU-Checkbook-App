
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


document.getElementById("careerSelect").addEventListener("change", () => {
    
  });


getCareers(); //initating dropdown creation

function getMonthlyIncome(monthlyIncome) {
    const salary = career.Salary.toLocaleString; //grabbing salary from dropdown, needs to be fixed
    monthlyIncome = salary / 12;
    options.addEventListener("click", getMonthlyIncome);
    return monthlyIncome;
}

console.log(getMonthlyIncome());









