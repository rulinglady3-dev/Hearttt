const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let texts=[];

const columns = 40;


for(let i=0;i<columns;i++){

    texts.push({
        x: Math.random()*canvas.width,
        y: Math.random()*-canvas.height,
        speed: 1 + Math.random()*3,
        size: 16 + Math.random()*10
    });

}


function animate(){

    ctx.fillStyle="rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);


    ctx.font="bold 20px Arial";


    texts.forEach(t=>{

        ctx.fillStyle="#ff4d88";

        ctx.font=`${t.size}px Arial`;

        ctx.fillText(
            "I love you",
            t.x,
            t.y
        );


        t.y += t.speed;


        if(t.y > canvas.height+50){

            t.y=-50;
            t.x=Math.random()*canvas.width;

        }

    });


    requestAnimationFrame(animate);

}


animate();


window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});
