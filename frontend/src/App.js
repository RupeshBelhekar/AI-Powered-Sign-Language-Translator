import React, { useState, useEffect } from 'react';
import GestureDisplay from './components/GestureDisplay';
import './styles/App.css';
import { fetchGesture } from './utils/api';

function App() {
    const [gesture, setGesture] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchGesture()
                .then(response => {
                    setGesture(response.gesture);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching gesture:', error);
                    setLoading(false);
                });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <h1>AI-Powered Sign Language Translator</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <GestureDisplay gesture={gesture} />
            )}
        </div>
    );
}

export default App;