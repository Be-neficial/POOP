
let matrix = [];

let icons = document.querySelectorAll('.icon');

const audio_1 = new Audio();
audio_1.src = "audio/poopSound_1.mp3";

const audio_2 = new Audio();
audio_2.src = "audio/poopSound_2.mp3";



for(let i = 0; i< icons.length; i++)
{
    icons[i].addEventListener('click', iconClickFn);
}


function iconClickFn(event)
{
    let tempClickNum = event.path[1].getAttribute('clickVal');
    let tempImgDom = event.path[0];
    changeMatrix(tempClickNum,tempImgDom);
}


function init()
{
    makeMatrix(); 
}

init();

function changeMatrix(index, target)
{
    if(matrix[index] == 0)
    {
        target.src = "img/ikon_0.png";
    }else if(matrix[index] == 1)
    {
        target.src = "img/ikon_1.png";
    }else if(matrix[index] == 2)
    {
        target.src = "img/ikon_2.png";
        audio_1.play();
    }else if(matrix[index] == 3)
    {
        target.src = "img/ikon_3.png";
        audio_2.play();
    }
}


function makeMatrix()
{
    for(let j =0; j < 32; j++)
    {
        let tempRandomVal = Math.random() * 10;

        if(tempRandomVal > 6)
        {
            matrix.push(Math.round(Math.random())+2)
        }else{
            matrix.push(Math.round(Math.random()));
        }
    }

    console.log(matrix);
}

