/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// use('mongodbVSCodePlaygroundDB');
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([    
        {
          "name": "Aiden",
          "Passion": "Data Scientist at Tech Startup",
          "Age": 26,
          "fav_color": "Blue"
        },
        {
          "name": "Sophie",
          "Passion": "UX/UI Designer in E-commerce",
          "Age": 24,
          "fav_color": "Purple"
        },
        {
          "name": "Raj",
          "Passion": "Product Manager in Fintech",
          "Age": 29,
          "fav_color": "Green"
        },
        {
          "name": "Isabella",
          "Passion": "Cybersecurity Analyst at Government Agency",
          "Age": 30,
          "fav_color": "Red"
        },
        {
          "name": "Elijah",
          "Passion": "AI Researcher in Academic Institution",
          "Age": 27,
          "fav_color": "Orange"
        },
        {
          "name": "Zara",
          "Passion": "Mobile App Developer in Gaming Industry",
          "Age": 25,
          "fav_color": "Yellow"
        },
        {
          "name": "Omar",
          "Passion": "Network Engineer at Telecom Company",
          "Age": 28,
          "fav_color": "Silver"
        },
        {
          "name": "Lily",
          "Passion": "Software Engineer in Healthtech",
          "Age": 23,
          "fav_color": "Pink"
        },
        {
          "name": "Kai",
          "Passion": "Blockchain Developer in Cryptocurrency",
          "Age": 22,
          "fav_color": "Gold"
        },
        {
          "name": "Mia",
          "Passion": "Frontend Developer in Fashion E-commerce",
          "Age": 24,
          "fav_color": "Turquoise"
        }
      
]);


// Print a message to the output window.
console.log(`Done inserting Data`);
