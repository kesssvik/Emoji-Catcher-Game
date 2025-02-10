document.addEventListener('DOMContentLoaded', () => {
    let gameBox = document.querySelectorAll(".game-box")
    let timer = document.getElementById("timer")
    let score = document.getElementById("score")
    let button=document.querySelector("button")

    let result = 0
    let currentTime = 3
    // let timerid=null
    let hitPosition = null

    const clickSound = new Audio('click.mp3')

    function randomSqaure() {
        gameBox.forEach((box) => {
            box.classList.remove("emoji")
        });

        let randomSqaure = gameBox[Math.floor(Math.random() * gameBox.length)]
        randomSqaure.classList.add("emoji")
        hitPosition = randomSqaure.id
        console.log(hitPosition);
    }
    let squareTimer = setInterval(randomSqaure, 2000)

    gameBox.forEach((box) => {
        box.addEventListener("click", function () {
            if (box.id == hitPosition) {
                result++;
                score.textContent = result
                hitPosition=null
                clickSound.play()
            }
        })
    })
    function countDown() {
        currentTime--;
        timer.textContent = currentTime

        if (currentTime === 0) {
            clearInterval(squareTimer)
            clearInterval(countDownTimer)
            alert(`Game Over! Your result is: ${result}`);
            button.style.display="block" 
        }

    }

    let countDownTimer = setInterval(countDown, 1000)

});