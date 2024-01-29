import path from "path";

// console.log(path);

let myPath = "E:\\Sigma Web Development\\BackendWithFiles\\pinku.txt";
console.log(path.extname(myPath));           // extension

console.log(path.dirname(myPath));

console.log(path.basename(myPath));

console.log(path.join("e:/","programs//pinku.txt"));