// function createCard(title, cName, views, monthOld, duration, thumbNail){
//     let cont = document.querySelector(".container");
//     cont.style.display = "flex";
//     cont.style.backgroundColor = "rgb(222, 222, 170)"
//     let bgc = document.createElement("div");
//     bgc.classList.add("thumbnail");
//     bgc.style.position = "relative"
//     cont.append(bgc);

//     let d = document.createElement("span");
//     d.innerText = duration;
//     d.style.backgroundColor = "black";
//     d.style.color = "white"
//     d.style.position = "absolute";
//     d.style.bottom = "10px";
//     d.style.right = "10px";
//     d.style.fontSize = "30px"
//     d.style.padding = "5px"
//     bgc.append(d);

//     let right = document.createElement("div");
//     right.style.backgroundColor = "white";
//     right.style.width = "43%"
//     right.style.margin = "20px"
//     cont.append(right);

//     let h = document.createElement("h1");
//     h.style.padding = "20px";
//     h.style.margin = "0";
//     h.innerText = title;
//     right.append(h);
    
//     let s = document.createElement("div");
//     s.style.width = "90";
//     s.style.height = "100px";
//     s.style.margin = "20px";
//     s.style.paddingTop = "20px"
//     s.style.backgroundColor = "rgb(222, 222, 170)";
//     s.style.zIndex = "10";
//     s.style.color = "rgb(63, 61, 61)";
//     right.appendChild(s);

//     let c = document.createElement("span");
//     c.innerText = cName;
//     s.append(c);
//     c.style.padding = "40px"

//     let v = document.createElement("span");
//     v.innerText = views;
//     s.append(v);
//     v.style.padding = "40px"

//     let m = document.createElement("span");
//     m.innerText = monthOld;
//     s.append(m);
//     m.style.padding = "40px"

// }

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

    // b.addEventListener('click', () => {
    //     // console.log(123)
    //     cont.add(createCard);
    // })
}

// const add = createCard("Introduction to Backend | Sigma Web Development video #222", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

// createCard("Introduction to Backend | Sigma Web Development video #222", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

// let cont = document.querySelector(".container");

// btn.addEventListener("click", () => {
//     cont.append(add);
// });

// btn.addEventListener("click", add);