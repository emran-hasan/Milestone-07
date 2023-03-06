
let count = 0;
let timeInterval;
document.getElementById('start').addEventListener('click', function(){
    console.log('this is clock');

     timeInterval = setInterval(()=>{
        document.getElementById('value').innerText = count++;
     },1000)
})
document.getElementById("end").addEventListener("click", () => {
    clearInterval(timeInterval);
  });
  document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    document.getElementById("value").innerText = count;
  });