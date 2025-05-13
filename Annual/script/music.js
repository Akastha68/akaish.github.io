alert("Click On Any Image to See magic 💌")
var backgroundSound = document.getElementById("bg-music");
try {
    await backgroundSound.play();
}
document.addEventListener("click", async () => {
    try {
        await backgroundSound.play();
        console.log("Audio started");
    } catch (error) {
        console.log("Autoplay blocked:", error);
    }
}, { once: true });
