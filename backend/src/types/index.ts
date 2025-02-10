// This file defines TypeScript types and interfaces used in the backend for better type safety and code organization.

export interface Gesture {
    id: number;
    name: string;
    description: string;
}

export interface Prediction {
    gesture: Gesture;
    confidence: number;
}

export interface GestureData {
    landmarks: number[];
    timestamp: number;
}