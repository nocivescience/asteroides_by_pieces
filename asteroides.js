const fps=30;
const friction=0.8;
const roid_jag=0.4;
const roid_num=5;
const roid_size=100;
const roid_spd=50;
const roid_vert=10;
const ship_size=30;
const ship_thrust=5;
const ship_turn_spd=360;
const shpw_centre_dot=false;
const game_lives=3;
const laser_dist=.6;
const laser_explode_dur=0.3;
const laser_max=10;
const laser_spd=400;
const roid_pts_lge=20;
const roid_pts_med=50;
const roid_pts_sml=100;
const save_key_score='highscore';
const ship_inv_dur=3;
const ship_blink_dur=0.1;
const ship_explode_dur=0.3;
const show_bounding=false;
const music_on=true;
const sound_on=true;
const text_fade_time=3;
const text_size=40;
var rotation;
var gamesEl=document.getElementById('games');
var ship={
    x:gamesEl.width/2,
    y:gamesEl.height-20,
    a:90/180*Math.PI,
    r:10,
    blinkNum:Math.ceil(ship_inv_dur/ship_blink_dur),
    blinkTime:Math.ceil(ship_inv_dur*fps),
    canShot:true,
    lasers:[],
    thrusting:false,
    thrust: {
        x:0,
        y:0
    },
    explodeTime:0,
    rot:null,
    dead:false,
}
gamesEl.width=window.innerWidth;
gamesEl.height=window.innerHeight;
var ctx=gamesEl.getContext('2d');
var roidsLeft,roidsTotal;
var level,lives,roids,score,scoreHight,ship,text,textAlpha;
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
function drawShip(x,y,a,r,color='white'){
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(
        x+4/3*r*Math.cos(a),
        y-4/3*r*Math.sin(a)
    );
    ctx.lineTo(
        x-r*(2/3*Math.cos(a)+Math.sin(a)),
        y+r*(2/3*Math.sin(a)-Math.cos(a))
    );
    ctx.lineTo(
        x-r*(2/3*Math.cos(a)-Math.sin(a)),
        y+r*(2/3*Math.sin(a)+Math.cos(a))
    );
    ctx.closePath();
    ctx.stroke();
}
function rotateShip(ship){
    ship.a+=ship.rot;
}
function keyDown(e){
    e.preventDefault();
    switch(e.key){
        case 'a':
            ship.rot=-.01;
            break;
        case 'd':
            ship.rot=.01;
            break;
    }
}
function draw(){
    drawShip(ship.x,ship.y,ship.a,ship.r);
}
function update(){
    ctx.clearRect(0,0,gamesEl.width,gamesEl.height);
    rotateShip(ship);
    draw();
    requestAnimationFrame(update);
}
update();
document.addEventListener('keydown',keyDown);