from flask import Flask, request, jsonify
import numpy as np
import cv2
import mediapipe as mp
from tensorflow.keras.models import load_model
from utils.gesture_detection import get_hand_landmarks

app = Flask(__name__)
model = load_model('models/sign_language_model.h5')

GESTURES = ["hello", "thanks", "yes", "no"]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    landmarks = np.array(data['landmarks']).reshape(1, -1)
    prediction = model.predict(landmarks)
    gesture_index = np.argmax(prediction)
    gesture = GESTURES[gesture_index]
    return jsonify({'gesture': gesture})

@app.route('/video_feed', methods=['GET'])
def video_feed():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        landmarks = get_hand_landmarks(frame)
        if landmarks is not None:
            # Send landmarks to the model for prediction
            # (You can implement this part based on your needs)
            pass
        cv2.imshow('Video Feed', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    app.run(debug=True)