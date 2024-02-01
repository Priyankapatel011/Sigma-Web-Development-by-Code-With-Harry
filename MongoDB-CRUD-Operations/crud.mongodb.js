use ("CrudDb");

// console.log(db);

// CREATE
db.createCollection("courses")

// insert elements
// db.courses.insertOne({
//     name: "Priyanka Patel",
//     role: "Student",
//     color: "Black",
//     aim: "Software Developer"
// })

// db.courses.insertMany([
//     {
//         "name": "Priyanka Patel",
//         "role": "Student",
//         "color": "Black",
//         "aim": "Software Developer"
//     },
//     {
//         "name": "John Doe",
//         "role": "Student",
//         "color": "Blue",
//         "aim": "Data Scientist"
//     },
//     {
//         "name": "Emily Smith",
//         "role": "Student",
//         "color": "Red",
//         "aim": "Web Developer"
//     },
//     {
//         "name": "Alex Rodriguez",
//         "role": "Student",
//         "color": "Green",
//         "aim": "Cybersecurity Analyst"
//     },
//     {
//         "name": "David Kim",
//         "role": "Student",
//         "color": "Yellow",
//         "aim": "AI Researcher"
//     },
//     {
//         "name": "Sophia Chen",
//         "role": "Student",
//         "color": "Purple",
//         "aim": "Mobile App Developer"
//     },
//     {
//         "name": "Ryan Taylor",
//         "role": "Student",
//         "color": "Orange",
//         "aim": "Game Developer"
//     },
//     {
//         "name": "Mia Patel",
//         "role": "Student",
//         "color": "Pink",
//         "aim": "UX/UI Designer"
//     },
//     {
//         "name": "Ethan Brown",
//         "role": "Student",
//         "color": "Brown",
//         "aim": "Software Engineer"
//     },
//     {
//         "name": "Ava Miller",
//         "role": "Student",
//         "color": "Gray",
//         "aim": "Blockchain Developer"
//     }
// ])


//READ
// let a = db.courses.find({
//     name: "Priyanka Patel"
// })
// // console.log(a);
// // console.log(a.count());

// console.log(a.toArray());


// let b = db.courses.findOne({name: "Priyanka Patel"})
// console.log(b);


// //UPDATE
// db.courses.updateOne( {color: "Black"}, {$set:{color: "Blackychan"}} )


// db.courses.updateMany( {color: "Black"}, {$set:{color: "Blaaacky"}} )



//DELETE
db.courses.deleteOne({color: "Blue"});
db.courses.deleteMany({color: "Red", color: "Pink", color: "Orange", color: "Yellow"});

