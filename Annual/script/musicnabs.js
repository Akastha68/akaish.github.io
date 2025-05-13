// Select audio element
const backgroundSound = document.getElementById("bg-music");
// Define all user interaction events
const interactionEvents = ['click', 'mouseenter', 'touchstart'];

function playMusicOnce() {
    backgroundSound.volume = 1.0; // Ensure volume is full
    backgroundSound.play()
    .then(() => {
        console.log("Audio started successfully");
    })
    .catch((error) => {
        console.log("Autoplay blocked or error:", error);
    });

    // Remove all event listeners after first interaction
    interactionEvents.forEach(eventType => {
        document.removeEventListener(eventType, playMusicOnce);
    });
}

// Attach all events
interactionEvents.forEach(eventType => {
    document.addEventListener(eventType, playMusicOnce);
});

