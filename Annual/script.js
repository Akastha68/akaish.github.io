// Floating Hearts Animation
    const canvas = document.getElementById('hearts-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];
    function createHeart() {
        return {
            x: Math.random() * canvas.width,
            y: canvas.height + 20,
            size: Math.random() * 20 + 10,
            speed: Math.random() * 2 + 1
        };
    }
    for (let i = 0; i < 50; i++) {
        hearts.push(createHeart());
    }
    function drawHeart(x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(size / 100, size / 100);
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.closePath();
        ctx.fillStyle = 'pink';
        ctx.fill();
        ctx.restore();
    }
    function animateHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < hearts.length; i++) {
            let h = hearts[i];
            drawHeart(h.x, h.y, h.size);
            h.y -= h.speed;
            if (h.y < -20) {
                hearts[i] = createHeart();
            }
        }
        requestAnimationFrame(animateHearts);
    }
    animateHearts();

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

   // Particle.js config
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ff69b4' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ff69b4', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 3 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });


