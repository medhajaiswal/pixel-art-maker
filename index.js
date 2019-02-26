let parentDiv = document.createElement("div")
parentDiv.style.border = '1px solid black';
parentDiv.style.backgroundColor = "white";
parentDiv.style.height = "100%";
parentDiv.style.width = "100%";
document.body.appendChild(parentDiv)
// parentDiv.innerHTML = "qwerty"
let i;
let j;
for( i= 0; i<2; i++){
    let childDiv = document.createElement("div");
    childDiv.setAttribute("id", "childDiv_"+i);
    childDiv.style.border = '1px solid black';
    childDiv.style.height = "50%";
    childDiv.style.width = "100%";
    childDiv.style.display = "flex";
    parentDiv.appendChild(childDiv);
    for(j= 0; j<2; j++) {
        let grandChildDiv = document.createElement("div");
        grandChildDiv.setAttribute("id", "grandChildDiv_"+j);
        grandChildDiv.style.border = '1px solid black';
        grandChildDiv.style.height = "100%";
        grandChildDiv.style.width = "50%";
        grandChildDiv.onclick = () => grandChildDiv.style.backgroundColor = "red"
        childDiv.appendChild(grandChildDiv);

    }
}
