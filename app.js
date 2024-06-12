
const studentName = "Ninja Jhala"; 
const studentNumber="1147526";
let result = `${studentName}-${studentNumber}`;

let headerContent= document.querySelector("h1");
headerContent.innerHTML= result;
headerContent.classList.add("heading1");
console.log(result);



