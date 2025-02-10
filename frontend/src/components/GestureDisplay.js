import React from 'react';

const GestureDisplay = ({ gesture, text }) => {
    return (
        <div className="gesture-display">
            <h2>Recognized Gesture:</h2>
            <p>{gesture}</p>
            <h2>Text Translation:</h2>
            <p>{text}</p>
        </div>
    );
};

export default GestureDisplay;