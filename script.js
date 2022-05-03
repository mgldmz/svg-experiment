const second = document.getElementById('second');
const svg = document.getElementById('svg');
var realX;
var realY;

function test(){
    second.setAttribute("d", "M 150 50 L 75 200 L 225 200 C 225 200 10 10 150 50");
}

svg.addEventListener('mousemove', function(e){
    realX = e.x - ((window.innerWidth-600)/2);
    realY = e.y - ((window.innerHeight-600)/2);
    second.setAttribute("d", `M 150 50 L 75 200 L 225 200 C 225 200 ${realX} ${realY} 150 50`);
});