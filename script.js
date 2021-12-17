let winner = document.querySelector("#winner");
let loser = document.querySelector("#loser");
console.log(winner);

winner.addEventListener("mouseover", () => {

    let top = Math.floor(Math.random()*(window.innerHeight-200)+100);
    let left = Math.floor(Math.random() * (window.innerWidth- 300) + 100);
    winner.style.position = "absolute";
    winner.style.top = top + "px";
    winner.style.left = left + "px";
    // console.log(Math.floor(Math.random() * (1900 - 100)) + 100);

})


let finalText = document.querySelector("#final p");
let final = document.querySelector("#final");
loser.addEventListener("click" , () => {
    final.style.cssText = "display : flex";
    animate();
    finalText.innerHTML = "You are Loser"
})
winner.addEventListener("click" , () => {
    final.style.cssText = "display : flex";
    animate();
    finalText.innerHTML = "You are Realy Winner !!!"
})


const animate = () => {
    let i = 10;
    setInterval(
        () => {
            if(i == 200) clearInterval();
            else {
                final.style.height = i + "px";
                i++;
            }
        }, 1
    )
    winner.style.position = "static";
    return;
}