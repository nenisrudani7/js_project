const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");

for (let select of dropdown) {
    for (codecam in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = codecam;
        newOption.value = codecam;
        if (select.name === "from" && codecam === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "To" && codecam === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);


    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = (element) => {
    let codecam = element.value;
    let countryCode = countryList[codecam];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};
btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
   if(amtVal ==="" || amtVal <1){
    amtVal =1;
    amount.value = "1";
   }
const ownurl =  `${url}/${fromCurr.value.toLowerCase()}/${ toCurr.value.toLowerCase()}.json`;
let  response = await fetch(ownurl);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalAmount = amtVal * rate;
msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

});