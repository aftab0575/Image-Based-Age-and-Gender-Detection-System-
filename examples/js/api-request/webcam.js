

document.addEventListener('DOMContentLoaded', (event) => {
    const startWebcamButton = document.getElementById('StartWebcam');
    const capturePhotoButton = document.getElementById('CapturePhoto');
    const getResultButton = document.getElementById('GetWebcamResult');
    const webcamContainer = document.getElementById('webcamContainer');
    const webcamElement = document.getElementById('webcam');
    const capturedPhotoElement = document.getElementById('capturedPhoto');
    const photoFistPlaceholder = document.getElementById('photoFistPlaceholder'); // Placeholder for the captured photo

    let webcamStream;
    let capturedImageBase64;

    startWebcamButton.addEventListener('click', function() {
        var webcamContainer = document.getElementById('webcamContainer');
        if (webcamContainer.style.display === 'none' || webcamContainer.style.display === '') {
            webcamContainer.style.display = 'block'; // Show webcam container
        } else {
            webcamContainer.style.display = 'none'; // Hide webcam container
        }
    });
    

    startWebcamButton.addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                webcamElement.srcObject = stream;
                webcamStream = stream;
                webcamContainer.classList.remove('d-none');
            })
            .catch(err => {
                console.error("Error accessing webcam: " + err);
            });
    });



    capturePhotoButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = webcamElement.videoWidth;
        canvas.height = webcamElement.videoHeight;
        canvas.getContext('2d').drawImage(webcamElement, 0, 0);

        capturedImageBase64 = canvas.toDataURL('image/jpeg');
        photoFistPlaceholder.src = capturedImageBase64; // Set the captured image as the source for the placeholder
        capturedPhotoElement.src = capturedImageBase64;
        capturedPhotoElement.classList.remove('d-none');
        getResultButton.classList.remove('d-none');

        // Stop the webcam stream
        webcamStream.getTracks().forEach(track => track.stop());
        webcamContainer.classList.add('d-none');
    });

    $("#GetWebcamResult").on("click", function () {
        $("#FullScreenProgress").removeClass("d-none");
        let URL = "/api/v1/FaceAgeGender";
        let PostBody = {
            "imgBase64": capturedImageBase64,
        };
        axios.post(URL, PostBody).then((res) => {
            $("#FullScreenProgress").addClass("d-none");
            SuccessToast("Request completed");
            new JsonEditor('#json-display', res.data);
        }).catch(() => {
            $("#FullScreenProgress").addClass("d-none");
            SomethingWentWrong();
        });
    });

    new JsonEditor('#json-display-2', {
        imgBase64: ""
    });

    new JsonEditor('#json-display', {});
});
