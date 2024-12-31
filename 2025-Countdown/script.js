const countdown = () => {
    const now = new Date().getTime();
    const newYear = new Date('Dec 31, 2024 11:35:00').getTime();
    const distance = newYear - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "HAPPY NEW YEAR!";
        startConfetti();
    }
};

const interval = setInterval(countdown, 1000);

const startConfetti = () => {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiElements = 300;
    const confettiArray = [];

    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedX = Math.random() * 5 - 2.5;
            this.speedY = Math.random() * 5 + 3;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.size, this.size);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    const createConfetti = () => {
        for (let i = 0; i < confettiElements; i++) {
            confettiArray.push(new Confetti());
        }
    };

    const animateConfetti = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiArray.forEach(confetti => {
            confetti.update();
            confetti.draw();
        });

        requestAnimationFrame(animateConfetti);
    };

    createConfetti();
    animateConfetti();
};