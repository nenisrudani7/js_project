const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown= document.querySelectorAll(".dropdown select"); 

for(let select of dropdown){
    for(code in countryList){
        console.log(code, countryList[code]);
    }
}