score = 0;
cross = true;
audio = new Audio('Elevator Music - Vanoss Gaming Background Music (HD).mp3')
audiogo = new Audio('SUPER MARIO - game over - sound effect.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(event) {
    console.log("Key code is: ",
        event.keyCode)
    if (event.keyCode == 38) {
        player = document.querySelector('.player');
        player.classList.add('animateplayer');
        setTimeout(() => {
            player.classList.remove('animateplayer')
        }, 700);

    }
    if (event.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + "px";
    }
    if (event.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX - 112 + "px";
    }

}
setInterval(() => {
    player = document.querySelector('.player');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = "Game Over - Reload To Play"
        obstacle.classList.remove('obstacleani')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 5000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 700);

    }

}, 10);

function updatescore(score) {
    scorcount.innerHTML = "Your Score: " + score
}