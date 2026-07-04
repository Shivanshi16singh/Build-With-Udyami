let headElement=document.getElementById("head");
let resElement=document.getElementById("res");

console.log(headElement.innerHTML);
console.log(headElement.innerText);

resElement.innerHTML= headElement.innerHTML;

let pElement=document.getElementsByTagName("p"); 
console.log(pElement); // html collection 
console.log(pElement[1].innerHTML);

let pCElement=document.getElementsByClassName("para");
console.log(pCElement);

// query selector

let headingElement=document.querySelector("h1");// used for all tag , element, id 
// picks only first tag

let paraElement=document.querySelectorAll(".para"); // creates a node list => you can access using for each loop

paraElement.forEach((item,index)=>{
    console.log(item.innerText);
});

// event handling 

let submitBtn= document.querySelector("button");
let inputElement= document.querySelector("#psw");

submitBtn.addEventListener("click",()=>{// call back function
    if(submitBtn.innerText=="Show"){
        inputElement.type="text";
        submitBtn.innerText="Hide";
    }else if(submitBtn.innerText=="Hide"){
        inputElement.type="password";
        submitBtn.innerText="Show";
    }

    // alert("Your data is submitted");
});

// classList object => add(), remove(), toggle()

// change the color of para1 while it gets hovered on it

let para1= document.querySelector("#p1");

para1.addEventListener("mouseover",()=>{
    para1.style.color="red";
});

let acElement=document.querySelector("#ac");

acElement.addEventListener("click",()=>{
    para1.classList.add("ac");
});

let rcElement= document.querySelector("#rc");

rcElement.addEventListener("click",()=>{
    para1.classList.remove("ac");
});

let tcElement= document.querySelector("#tc");

tcElement.addEventListener("click",()=>{
    // if(tcElement.innerText=="toggle class"){
    //     para1.classList.add("ac");
    //     tcElement.innerText="untoggle class";
    // }
    // else{
    //     para1.classList.remove("ac");
    //     tcElement.innerText="toggle class";
    // }
    para1.classList.toggle("ac");

});

// now create an element

let newElem= document.createElement("p");
newElem.innerText="lorem100";
resElement.appendChild(newElem);

let newElem2= document.createElement("h2");
resElement.replaceChild(newElem2,newElem);

// set timeout- itne seconds k baad y function kroo

print= ()=>{
    newElem2.innerText="Hellooo ishiiiiiii";
};

setTimeout(print, 2000);
// setInterval(print,2);

// if you want to stop this:
// clear interval=> set interval
// clear timeout=> set timeout