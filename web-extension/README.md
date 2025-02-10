# AI-Powered Sign Language Translator with Real-Time Web Integration

This project is an AI-powered sign language translator that integrates real-time gesture detection and conversion into text. The web extension overlays live captions during video calls, enhancing communication accessibility.

## Overview

The project consists of three main components:

1. **Backend**: A server that handles gesture recognition using a trained LSTM model. It processes video input and serves predictions via an API.
2. **Frontend**: A React application that displays recognized gestures and their corresponding text in real-time.
3. **Web Extension**: A browser extension that overlays captions on web pages, particularly useful during video calls.

## Installation

### Backend

1. Navigate to the `backend` directory.
2. Install the required Python libraries:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```
   python src/app.py
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

### Web Extension

1. Navigate to the `web-extension` directory.
2. Load the extension in your browser:
   - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `web-extension` directory.

## Usage

- **Gesture Recognition**: Use the webcam to capture hand gestures. The backend processes the video feed and returns the recognized gesture.
- **Real-Time Display**: The frontend application displays the recognized gesture and corresponding text.
- **Live Captions**: The web extension overlays captions on video calls, providing real-time translation of sign language.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.