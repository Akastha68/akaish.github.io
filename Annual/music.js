var backgroundSound = document.getElementById("bg-music");
document.addEventListener("click", async () => {
    try {
        await backgroundSound.play();
        console.log("Audio started");
    } catch (error) {
        console.log("Autoplay blocked:", error);
    }
}, { once: true });

// Quote Slider
    const quotes = [
        "<q>Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day.</q>",
        "<q>A successful marriage requires falling in love many times, always with the same person.<q>",
        "You are my today and all of my tomorrows.</q>",
        "<q>I love you not only for what you are, but for what I am when I am with you.<\q>",
        "<q>The best thing to hold onto in life is each other.</q>"
    ];
    let quoteIndex = 0;
    setInterval(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        document.getElementById('quote-slider').innerHTML = quotes[quoteIndex];
    }, 5000);