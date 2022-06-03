// Hide button if Picture-in-Picture is not supported or disabled.
pipButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButton.addEventListener('click', function () {
    // If there is no element in Picture-in-Picture yet, let's request
    // Picture-in-Picture for the video, otherwise leave it.
    if (!document.pictureInPictureElement) {
        video.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {
                // Video failed to enter Picture-in-Picture mode.
            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {
                // Video failed to leave Picture-in-Picture mode.
            });
    }
});

function updateVideoSize(width, height) {
    // TODO: Update video size based on pip window width and height.
}

video.addEventListener('enterpictureinpicture', function () {
    // Video element entered Picture-In-Picture mode.
});

video.addEventListener('leavepictureinpicture', function () {
    // Video element left Picture-In-Picture mode.
});



// Hide button if Picture-in-Picture is not supported or disabled.
pipButtonone.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

pipButtonone.addEventListener('click', function () {
    // If there is no element in Picture-in-Picture yet, let's request
    // Picture-in-Picture for the video, otherwise leave it.
    if (!document.pictureInPictureElement) {
        videoone.requestPictureInPicture()
            .then(pipWindow => {
                updateVideoSize(pipWindow.width, pipWindow.height);
                pipWindow.addEventListener('resize', function (event) {
                    updateVideoSize(pipWindow.width, pipWindow.height);
                });
            })
            .catch(error => {
                // Video failed to enter Picture-in-Picture mode.
            });
    } else {
        document.exitPictureInPicture()
            .catch(error => {
                // Video failed to leave Picture-in-Picture mode.
            });
    }
});

function updateVideoSize(width, height) {
    // TODO: Update video size based on pip window width and height.
}

videoone.addEventListener('enterpictureinpicture', function () {
    // Video element entered Picture-In-Picture mode.
});

videoone.addEventListener('leavepictureinpicture', function () {
    // Video element left Picture-In-Picture mode.
});


