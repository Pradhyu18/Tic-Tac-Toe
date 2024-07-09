let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");
let vars = [b1,b2,b3,b4,b5,b6,b7,b8];
let z=0;
let i = 0;

b1.addEventListener("click", function1);
b2.addEventListener("click", function1);
b3.addEventListener("click", function1);
b4.addEventListener("click", function1);
b5.addEventListener("click", function1);
b6.addEventListener("click", function1);
b7.addEventListener("click", function1);
b8.addEventListener("click", function1);
b9.addEventListener("click", function1);
let ifFilled = [];
let xCount=[];
let oCount=[];

let winningCombinations = [
  [b1.id, b2.id, b3.id],
  [b4.id, b5.id, b6.id],
  [b7.id, b8.id, b9.id],
  [b1.id, b4.id, b7.id],
  [b2.id, b5.id, b8.id],
  [b3.id, b6.id, b9.id],
  [b1.id, b5.id, b9.id],
  [b3.id, b5.id, b7.id]]
let ch =false;
function function1(e) {
  if (i%2 === 0) {
    circle(e);
  } 
  else {
    cross(e);
  }
  console.log(i);
  for(arr of winningCombinations) {
    if(arr.every(val => oCount.includes(val))){
      alert("Player " + ("1") + " wins!");
      break;}
    if(arr.every(val => xCount.includes(val))){
      alert("Player " + ("2") + " wins!");
      break}
    }

    
  
}

function cross(e){
  ch = false;
    for (let z = 0; z < ifFilled.length; z++) {
      let element = ifFilled[z];
      if(element == e.target.id){ch = true ;break;}
      
    }
    if(ifFilled.length ==0){ifFilled.push(e.target.id)}
  console.log(ch,ifFilled);
  if(ch==false){
    e.target.innerHTML="<div>X</div>";
    e.target.style.color="red";
    e.target.style.fontSize="3rem";
    ifFilled.push(e.target.id);
    xCount.push(e.target.id);
    i++;
  }
    
  }
  function circle(e){
    ch = false;
    for (let j = 0; j < ifFilled.length; j++) {
      let element = ifFilled[j];
      if(element == e.target.id){ch =true;break;}
      
    }
    if(ifFilled.length ==0){ifFilled.push(e.target.id)}
  console.log(ch, ifFilled);
  if(ch==false){
    e.target.innerHTML="<div>O</div>";
    e.target.style.color="red";
    e.target.style.fontSize="3rem";
    ifFilled.push(e.target.id)
    oCount.push(e.target.id);
    i++;
  }
}

