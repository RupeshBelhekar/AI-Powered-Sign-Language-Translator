# AI-Powered-Sign-Language-Translator

This project aims to create an AI-powered sign language translator that integrates real-time hand gesture detection and gesture-to-text conversion. The application consists of a backend service that processes video input to recognize gestures and a frontend interface that displays the recognized gestures in real-time. Additionally, a web extension is included to provide live captions during video calls.

## Project Structure

- **backend/**: Contains the server-side code for gesture recognition and model serving.
  - **src/**: Main source code for the backend application.
    - **app.py**: Entry point for the backend application, setting up the server and API routes.
    - **models/**: Directory containing the trained sign language model.
    - **utils/**: Utility functions for gesture detection.
    - **types/**: TypeScript definitions for better type safety.
  - **requirements.txt**: Lists the required Python libraries for the backend.
  - **README.md**: Documentation for the backend setup and usage.

- **frontend/**: Contains the client-side code for the web application.
  - **public/**: Static files for the frontend application.
    - **index.html**: Main HTML file for the frontend.
  - **src/**: Main source code for the frontend application.
    - **App.js**: Main React component managing application state.
    - **components/**: Contains reusable UI components.
      - **GestureDisplay.js**: Component for displaying recognized gestures.
    - **styles/**: CSS styles for the frontend application.
      - **App.css**: Styles for the main application layout.
    - **utils/**: Utility functions for API calls.
      - **api.js**: Functions for interacting with the backend.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **README.md**: Documentation for the frontend setup and usage.

- **web-extension/**: Contains the code for the Chrome extension.
  - **src/**: Main source code for the extension.
    - **background.js**: Background script managing the extension lifecycle.
    - **content.js**: Content script for overlaying captions on web pages.
    - **popup/**: Directory for the popup interface of the extension.
      - **popup.html**: HTML structure for the popup.
      - **popup.js**: Logic for the popup interface.
      - **popup.css**: Styles for the popup interface.
  - **manifest.json**: Metadata and permissions for the Chrome extension.
  - **README.md**: Documentation for the web extension setup and usage.

## Features

- Real-time hand gesture detection using advanced machine learning models.
- Gesture-to-text conversion for seamless communication.
- Live display of recognized gestures in a user-friendly interface.
- Web extension for providing live captions during video calls.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd AI-Powered-Sign-Language-Translator
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```
   - Run the backend server:
     ```
     python src/app.py
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install the required npm packages:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

4. Set up the web extension:
   - Load the extension in your browser by navigating to the extensions page and selecting "Load unpacked" to load the `web-extension` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.
