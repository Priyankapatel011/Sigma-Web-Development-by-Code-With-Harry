// createCard("Introduction to Backend | Sigma Web Development video #222", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")


let btn = document.querySelector(".b");
let cont = document.querySelector(".container");


function createCard(title, cName, views, monthOld, duration, thumbNail){
    let viewStr;
    if(views < 1000){
        viewStr = views;
    }
    else if(views >= 1000 && views < 1000000){
        viewStr = views / 1000 + 'K';
    }
    else {
        viewStr = views / 1000000 + 'M';
    }

    let html = `<div class="card">
                <div class="image">
                    <img src="${thumbNail}" alt="img">
                    <div class="capsule">${duration}</div>
                </div>

                <div class="text">
                    <h1>${title}</h1>
                    <p>${cName} . ${viewStr} views . ${monthOld} months old </p>
                </div>
                
            </div>
            `

    // document.querySelector(".container").innerHTML = html;

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
// createCard("Introduction to Backend | Sigma Web Development video #222", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
