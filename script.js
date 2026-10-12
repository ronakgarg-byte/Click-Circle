// const para=document.getElementById("Output")
// const btn=document.getElementById("btn")
// const dropdown=document.getElementById("dropdown")
// let count=0;
// btn.addEventListener("click",function(){

// // console.log("ronak");

// const element=document.createElement(dropdown.value);
// element.innerText="You created "+ dropdown.value;
// para.appendChild(element);

// })

const wrapper = document.querySelector("#wrapper");
const reset = document.querySelector("#reset");
const undo = document.querySelector("#undo");
const redo = document.querySelector("#redo");
const circles = [];
const deletedCircles = [];

wrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    return;
  } else {
    const obj = {
      x: e.clientX,

      y: e.clientY,

      bg: getRandomColor(),
    };

    circles.push(obj);
    console.log(circles);
    printCircle();
    buttonStatus();
  }
});
undo.addEventListener("click", () => {
  const deletedCircle = circles.pop();
//   console.log(deletedCircle);
  
  deletedCircles.push(deletedCircle);
//   console.log(deletedCircles);
removeCircle();
});

redo.addEventListener("click", () => {
  const redocircle = deletedCircles.pop();
  circles.push(redocircle);
  console.log(circles[circles.length - 1]);
  printCircle();
});

function printCircle() {
  const lastObj = circles[circles.length - 1];
  const circle = document.createElement("div"); //<div>
  circle.classList.add("circle"); //<div class="circle">
  circle.style.top = lastObj.y - 9 + "px";
  circle.style.left = lastObj.x - 9 + "px";

  circle.style.backgroundColor = lastObj.bg;
  //<div class="circle"style="top:600px;left:400px"
  wrapper.append(circle);
}
function removeCircle(){
    const circleDivs=wrapper.querySelectorAll(".circle");
    circleDivs[circleDivs.length-1].remove();
}

function buttonStatus() {
  if (circles.length > 0) {
    undo.disabled = false;
    redo.disabled = false;
  }
}
function getRandomColor() {
  const allowedChars = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }

  return color;
}
