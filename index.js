const HEIGHT = 12;
const WIDTH = 12;
const PALLETSIZE = 5;
let currentColor = "white";
const colorArray = ['red', 'blue', 'green', 'yellow','black'];
let parentDiv = document.createElement("div")
parentDiv.className = "parentDiv"
for (let i = 0; i < HEIGHT; i++) {
    let childDiv = document.createElement("div");
    childDiv.className = "childDiv";
    for (let j = 0; j < WIDTH; j++) {
        let grandChildDiv = document.createElement("div");
        grandChildDiv.className = "grandChildDiv";
        grandChildDiv.onclick = () => grandChildDiv.style.backgroundColor = currentColor
        childDiv.appendChild(grandChildDiv);
    }
    parentDiv.appendChild(childDiv);
}
document.body.appendChild(parentDiv);
let palletDiv = document.createElement("div")
palletDiv.className = "palletDiv";
parentDiv.appendChild(palletDiv);
for(let i = 0; i<PALLETSIZE; i++) {
    let palletChildDiv = document.createElement("div");
    palletChildDiv.className = "palletChildDiv";
    palletChildDiv.style.backgroundColor = colorArray[i];
    palletChildDiv.onclick = (event) => currentColor = event.target.style.backgroundColor;
    palletDiv.appendChild(palletChildDiv);
}

/*palletChildDiv.onclick = (event) => {
    currentColor = event.target.style.backgroundColor;
}

palletChildDiv1.onclick = (event) => {
    currentColor = event.target.style.backgroundColor;
}*/





//}


