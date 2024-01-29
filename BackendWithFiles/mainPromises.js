// In --> "type":"module"

import { readFile, writeFile } from "fs";


import fs from "fs/promises";

// let z = await fs.writeFile("pinku.txt", "\n\nThis is Promises amazing");
let c = await fs.appendFile("pinku.txt", "\n\n\n\n\n\n\n\n\nWoooooooooooooowwww");


let a = await fs.readFile("pinku.txt");      // read    // we can directly use await as it's a module 
console.log(a.toString(), c);

