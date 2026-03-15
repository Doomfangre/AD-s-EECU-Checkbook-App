function createAccount(sure) {
    dise.textContent = sure;
    console.log(dise);
}


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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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