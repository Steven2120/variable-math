let x1 = 1;
let x2 = 7;
let y1 = 3;
let y2 = 6;

let step1 = x2 - x1;
let step2 = y2 - y1;
let step3 = Math.pow(step1, 2);
let step4 = Math.pow(step2, 2);
let step5 = step3 + step4;
let finalStep = Math.sqrt(step5);

console.log(`The distance between coordinates is ${finalStep}`);
