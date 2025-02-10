const popup = document.getElementById('popup');
const gestureText = document.getElementById('gesture-text');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let isCapturing = false;

// Function to start capturing gestures
startButton.addEventListener('click', () => {
    if (!isCapturing) {
        isCapturing = true;
        gestureText.textContent = 'Capturing gestures...';
        // Add logic to start gesture recognition
    }
});

// Function to stop capturing gestures
stopButton.addEventListener('click', () => {
    if (isCapturing) {
        isCapturing = false;
        gestureText.textContent = 'Stopped capturing.';
        // Add logic to stop gesture recognition
    }
});

// Function to update the gesture text
function updateGestureText(gesture) {
    gestureText.textContent = `Recognized Gesture: ${gesture}`;
}

// Example of receiving gesture updates from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.gesture) {
        updateGestureText(request.gesture);
    }
});