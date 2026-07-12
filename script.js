const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);


let words = [];

const columns = 14;


function createRain(){

    words = [];

    let width = canvas.width / columns;


    for(let i = 0; i < columns; i++){

        for(let j = 0; j < 12; j++){

            words.push({

                x: i * width,

                y: j * -70,

                speed: 2 + Math.random()*1.5,

                size: 22

            });

        }

    }

}


createRain();


function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle = "red";


    words.forEach(word=>{

        ctx.font = `${word.size}px Arial`;

        ctx.fillText(
            "I love you",
            word.x,
            word.y
        );


        word.y += word.speed;


        if(word.y > canvas.height + 50){

            word.y = -100;

        }

    });


    requestAnimationFrame(animate);

}


animate();
