let headsCount= 0;
let tailsCount= 0;
const coin= document.getElementById("coin");
const flip= document.getElementById("flip");
const reset= document.getElementById("reset");
const head= document.getElementById("head");
const tail= document.getElementById("tail");
flip.addEventListener("click",()=>{
    let isHeads = Math.random() < 0.5;
    coin.style.animation = "none";
    void coin.offsetWidth;
    if(isHeads){
        coin.style.animation = "spin-heads 2s forwards";
        headsCount++;
    }else{
        coin.style.animation = "spin-tails 2s forwards";
        tailsCount++;
    }
    flip.disabled = true;
    reset.disabled = true;
    setTimeout(()=>{
        head.textContent = `Heads: ${headsCount}`;
        tail.textContent = `Tails: ${tailsCount}`;
        flip.disabled = false;
        reset.disabled = false;
    }, 2000);
});
reset.addEventListener("click", () => {
    coin.style.animation = "none";
    headsCount = 0;
    tailsCount = 0;
    head.textContent = "Heads: 0";
    tail.textContent = "Tails: 0";
});