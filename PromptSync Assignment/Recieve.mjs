import promptSync from 'prompt-sync';
const prompt=promptSync();
import { additon } from "./Send.mjs";
let num1 = parseFloat(prompt("Please enter first number to add "));
let num2 = parseFloat(prompt("Please enter second number to add "));
let add = additon(num1,num2);
console.log(`The sum of both numbers is ${add}`);