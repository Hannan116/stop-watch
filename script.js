let displayTime = document.querySelector("#displayTime");
let play = document.querySelector(".fa-play");
let reset = document.querySelector(".fa-redo");
let stop = document.querySelector(".fa-stop");
let timer=null;
let [s, m, h] = [0, 0, 0];
play.addEventListener("click", () => {
    if(timer!=null) {
        clearInterval(timer);
    }
    
        timer=setInterval(stpowatch, 1000);

        console.log("clicked");
   
 
});
function stpowatch() {
  s++;
  if (s == 60) {
    s = 0;
    m++;
    if (m == 60) {
      m = 0;
      h++;
    }
  }
  let hours = h < 10 ? "0" + h : h;
  let minute = m < 10 ? "0" + m : m;
  let second = s < 10 ? "0" + s : s;
  displayTime.innerHTML = hours + ":" + minute + ":" + second;
}

reset.addEventListener("click",()=>{
    clearInterval(timer);
    [s, m, h] = [0, 0, 0]
  displayTime.innerHTML = "00:00:00";

})
stop.addEventListener("click", ()=>{
    clearInterval(timer);

})