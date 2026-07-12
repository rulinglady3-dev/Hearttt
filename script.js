const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);


let words = [];

const columnCount = 10;


function createWords(){

    words = [];

    const columnWidth = canvas.width / columnCount;


    for(let i = 0; i < columnCount; i++){

        words.push({
            x: i * columnWidth + columnWidth / 2 - 45,
            y: Math.random() * -800,
            speed: 2,
            text: "I love you"
        });

    }

}


createWords();



function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle = "#ffffff";
    ctx.font = "20px Arial";


    words.forEach(word=>{

        ctx.fillText(
            word.text,
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
