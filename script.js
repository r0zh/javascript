// The goal of this script is to make a number in the page go from 0 to any given number with a smooth animation //
let num = 0
let end = 1000000
numberholdder = document.getElementById("numberholder")
btm = document.getElementById("boton")
numberholdder.innerHTML = 0
btm.addEventListener("click", start);
async function start(){
    for(let i = 1;i <= end; i++){
        console.log(i)
        numberholdder.innerHTML = i
        await sleep((i**(end**0.634363))*(1-(1-i^(2))**1/2)/end**(end**0.634363 + 1))
    }
}
async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }