const gamesEl=document.getElementById('games');
const ctx=gamesEl.getContext('2d');
function drawShip(x,y){
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.moveTo(x,y);
    ctx.lineTo(x+10,y);
    ctx.lineTo(x+5,y-10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}
function newShip(){
    return {
        x:gamesEl.width/2,
        y:gamesEl.height-20,
        a:90/180*Math.PI,
        r:10,
        blinkNum:,
    }
}
drawShip(100,100);