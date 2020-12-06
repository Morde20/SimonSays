const colors = ["blue","green","red","yellow"];
const gamePattern = [];
let userPattern = [];
let level = 1


function computerPickColor(){
        const alerts = document.getElementById("alerts");
        alerts.setAttribute("style","display:inherit")
        const changableTitle = document.getElementById("changableTitle");
        const startBtn = document.getElementById("startBtn");
        startBtn.setAttribute("style","display:none;")
        changableTitle.innerHTML = `Level ${level}`
        const randomNumber = Math.floor(Math.random() * 4);
        const randomColor = colors[randomNumber];
        var audio = new Audio(`sounds/${randomColor}.mp3`);
        audio.play();
        animatedBtn(randomColor);
        gamePattern.push(randomColor);
        yourTurnAlert()
    }

function yourTurnAlert(){
    const alerts = document.getElementById("alerts");
    alerts.innerHTML = "Your Turn!";
}


function computersTurnAlert(){
    const alerts = document.getElementById("alerts");
    alerts.innerHTML = "Wait for computer's turn:";
} 

function clearAlerts(){
    const alerts = document.getElementById("alerts")
    alerts.innerHTML = "";
}

function alertSequence(){
    const alerts = document.getElementById("alerts")
    alerts.innerHTML = `Good Job, Sequence so far: <br> ${gamePattern}`
}

function handleClick(e){
    const pickedColor = e.target.name;
    userPattern.push(pickedColor);
    const indexOfPickedColor = userPattern.indexOf(pickedColor);
    var audio = new Audio(`sounds/${pickedColor}.mp3`);
    audio.play()
    animatedBtn(pickedColor)
    if(userPattern[indexOfPickedColor] == gamePattern[indexOfPickedColor]){
        if(userPattern.length == gamePattern.length){
            if(userPattern[userPattern.length -1] == gamePattern[gamePattern.length -1]){
                userPattern = []
                alertSequence()
                setTimeout(computersTurnAlert,2500)
                setTimeout(computerPickColor,3800);
                level ++;
            }else{
                var audio = new Audio(`sounds/wrong.mp3`);
                audio.play()
                document.body.setAttribute("class","gameover")
                const changableTitle = document.getElementById("changableTitle");
                changableTitle.innerHTML = "Game Over , Refresh To Start Again!"
                const alerts = document.getElementById("alerts");
                alerts.setAttribute("style","display:none")
            }
        }
    }else{
        var audio = new Audio(`sounds/wrong.mp3`);
        audio.play()
        document.body.setAttribute("class","gameover")
        const changableTitle = document.getElementById("changableTitle");
        changableTitle.innerHTML = "Game Over <br> Refresh To Start Again!"
        const alerts = document.getElementById("alerts");
        alerts.innerHTML = `You have reached level ${level}`
    }
}

// function showSequence(){
//     gamePattern.forEach((color,i) => {
//         setTimeout(() => {
//             var audio = new Audio(`sounds/${color}.mp3`);
//             audio.play();
//             animatedBtn(color);
//         },i*2000)
//     })
// }



function animatedBtn(color){
    const clickedColor = document.getElementById(`${color}`)
    clickedColor.animate([
        {transform: 'scaleX(1.25)'},
    ],{duration:500})
}





