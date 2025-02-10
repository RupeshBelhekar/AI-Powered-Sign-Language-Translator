// This file contains the background script for the Chrome extension. It manages the extension's lifecycle and handles events.

chrome.runtime.onInstalled.addListener(() => {
    console.log("AI-Powered Sign Language Translator Extension Installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getGesture") {
        // Logic to fetch gesture data from the backend
        fetch("http://localhost:5000/api/gesture")
            .then(response => response.json())
            .then(data => {
                sendResponse({ gesture: data.gesture });
            })
            .catch(error => {
                console.error("Error fetching gesture:", error);
                sendResponse({ gesture: null });
            });
        return true; // Indicates that the response will be sent asynchronously
    }
});