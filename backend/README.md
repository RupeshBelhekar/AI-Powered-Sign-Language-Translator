# AI-Powered Sign Language Translator Backend

This backend serves as the core of the AI-Powered Sign Language Translator project. It is responsible for handling gesture recognition and serving the trained model to the frontend application.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/AI-Powered-Sign-Language-Translator.git
   cd AI-Powered-Sign-Language-Translator/backend
   ```

2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Requirements**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   ```bash
   python src/app.py
   ```

## API Usage

- **POST /recognize**
  - Description: Sends a frame of video to the server for gesture recognition.
  - Request Body: JSON containing the frame data.
  - Response: JSON with the recognized gesture and corresponding text.

## Model Training

The model is trained using a dataset of hand gestures. The training script is located in the `src` directory. Ensure that you have the necessary data and follow the instructions in the script to train the model.

## Dependencies

- OpenCV
- MediaPipe
- TensorFlow/Keras
- Flask or FastAPI

## Contributing

Feel free to submit issues or pull requests to improve the project. Your contributions are welcome!