// Day 3: Intro to Conditional Statements
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine(), 10);
  // let myNum = N % 2;
  // if (myNum != 0){
  //     console.log("Weird");
  // } else if ((myNum == 0) && (2 >= myNum <= 5)){
  //     console.log("Not Weird");
  // } else if ((myNum == 0) && (6 >= myNum <= 20)) {
  //     console.log("Weird");
  // } else {
  //     console.log("Not Weird");
  // }

  if (N % 2 != 0 || (N > 5 && N < 21)) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}
