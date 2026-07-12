alert("YENİ SCRIPT ÇALIŞIYOR");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);


let words = [];

const columnCount = 12;
const columnWidth = () => canvas.width / columnCount;


function createWords(){

    words = [];

    for(let col = 0; col < columnCount; col++){

        for(let row = 0; row < 8; row++){

            words.push({

                x: col * columnWidth() + 5,

                y: row * -60 - Math.random()*200,

                speed: 3 + Math.random()*2,

                size: 20

            });

        }

    }

}


createWords();



function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle = "red";


    words.forEach(w=>{

        ctx.font = `${w.size}px Arial`;

        ctx.fillText(
            "I love you",
            w.x,
            w.y
        );


        w.y += w.speed;


        if(w.y > canvas.height + 40){

            w.y = -100 - Math.random()*300;

        }


    });


    requestAnimationFrame(animate);

}


animate();
