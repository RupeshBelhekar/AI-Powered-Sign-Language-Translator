const videoElement = document.querySelector('video');
const captionElement = document.createElement('div');
captionElement.style.position = 'absolute';
captionElement.style.bottom = '10px';
captionElement.style.left = '10px';
captionElement.style.color = 'white';
captionElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
captionElement.style.padding = '5px';
captionElement.style.borderRadius = '5px';
captionElement.style.fontSize = '20px';
document.body.appendChild(captionElement);

const socket = new WebSocket('ws://localhost:5000'); // Adjust the URL as needed

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    if (data.gesture) {
        captionElement.textContent = data.gesture;
    }
};

videoElement.addEventListener('play', () => {
    const stream = videoElement.captureStream();
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
        socket.send(event.data);
    };
});