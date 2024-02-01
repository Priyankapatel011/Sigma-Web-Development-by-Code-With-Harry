// you have to write a Node.js programme to clear clutter inside of a directory and organize the contents of that directory into different folders.

// for example, these files become:

// 1. names.jpg
// 2. name2.png
// 3. hello.pdf
// 4. harry.zip
// 5. pinku.zip
// 6. bird.jpg

// this -->
// jpg/names.jpg, jpg/bird.jpg
// zip/harry.zip, zip/pinku.zip....and so on

import fs from "fs/promises"
import fsn from "fs"
import path from "path";
// console.log(fs)

let basepath = "E:\\Sigma Web Development\\Backend-ClearTheClutter";

let files = await fs.readdir(basepath);
console.log(files);

let extensions = [];

for (const item of files) {
    console.log("running for", item);

    let ext = item.split(".")[1];
    // console.log(ext);

    if(ext != "js" && ext != "json" && item.split(".").length > 1){   // --> should not be a folder
        if(fsn.existsSync(path.join(basepath, ext))){                   // if jpg exists then directly move bird.jpg --> jpg folder
            //move the file to this directory(ext)(Eg move to the jpg directory)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{             // if jpg folder not exists --> make dir jpg --> then move birs.jpg into jpg folder
            fs.mkdir(ext);
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

    // console.log(item);

}

 