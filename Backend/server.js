// console.log("Hello Everyone!!!");
// console.log("Be happy😊😊");

// So this slugify code is already written inside slugify modelu. So we don't have to write this code again Simply use it😀!!!

var slugify = require('slugify');

const a = slugify('Some Awesome String'); // BY Default --> slug using '-'
console.log(a);

//if we want other than '-'
const b = slugify('Some Craziest Ideas', '&&');
const c = slugify('Some Cr#$%^5(*&^%$ty', '&&');

console.log(b);
console.log(c);