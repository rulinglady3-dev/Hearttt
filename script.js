const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let texts = [];

const columnCount = 12; // sütun sayısı
const gap = canvas.width / columnCount;


for(let i = 0; i < columnCount; i++){

    texts.push({
        x: i * gap + 10,
        y: -Math.random()*500,
        speed: 2,
        size: 22
    });

}



function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle="white";
    ctx.font="22px Arial";


    texts.forEach(t=>{


        ctx.fillText(
            "I love you",
            t.x,
            t.y
        );


        t.y += t.speed;


        if(t.y > canvas.height + 40){

            t.y = -50;

        }


    });


    requestAnimationFrame(animate);

}


animate();



window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
