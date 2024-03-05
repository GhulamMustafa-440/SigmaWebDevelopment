let bgColor = ["red", "yellow", "green", "blue", "orange", "voilet", "brown"];
let color = ["aliceblue", "aqua", "blueviolet", "greenyellow", "hotpink", "khaki"];

let boxes = document.querySelectorAll(".box");

function changeColor() {
    boxes.forEach((e) => {
        let random1 = Math.floor(Math.random() * bgColor.length);
        let random2 = Math.floor(Math.random() * color.length);
        e.style.backgroundColor = bgColor[random1];
        e.style.color = color[random2];
    })
}

changeColor();