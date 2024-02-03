let noButtonClickCount = 0;

document.getElementById('yes').addEventListener('click', function() {
    const valentineVideo = document.getElementById('valentineVideo');

    if (noButtonClickCount > 0) {
        // Change the video source for "No" clicks
        valentineVideo.src = 'noMov.mp4';
    } else {
        // Change the video source for "Yes" clicks
        valentineVideo.src = 'yesMov.mp4';
    }


    valentineVideo.style.display = 'none';


    valentineVideo.addEventListener('playing', function() {
        valentineVideo.style.display = 'block';
    });


    valentineVideo.play();
    document.querySelector('.text').innerText = 'HEHEHEHEHE I LOVE YOU FOREVER LISA💗';
});

document.getElementById('no').addEventListener('click', function() {
    noButtonClickCount++;

    if (noButtonClickCount < 5) {

        const noButton = document.getElementById('no');
        noButton.style.marginTop = `${noButtonClickCount * 10}px`;


        document.querySelector('.text').innerText = `DONT CLICK NO!  ${noButtonClickCount} `;
    } else {

        document.getElementById('no').style.display = 'none';
        document.querySelector('.text').innerText = 'YOU CLICKED "NO" 10 TIMES (IM GONNA KILL YOU!) Click yes to play the video))) Also enjoy the vid babe :3';
    }

    // Increase the size of the "Yes" button on each "No" click
    const yesButton = document.getElementById('yes');
    yesButton.style.fontSize = `${parseInt(getComputedStyle(yesButton).fontSize) + 2}px`;
});
