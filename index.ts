// Import stylesheets
import './style.css';

//"MVCte TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const person:{
  name:string;
  age:number;
  tech:string[];
  role:[number,string];
} ={
  name : "Koti",
  age  :  25,
  tech : [".Net","MVC","SqlServer"],
  role : [0,"Hello"]
}
person.tech.push("Angular");
console.log(person.tech)

person.role.push("KoKoteswaraRao")
console.log(person.role)



