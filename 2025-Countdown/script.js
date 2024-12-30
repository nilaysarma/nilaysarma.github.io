// Set the date and time we're counting down to
const countDownDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s `;
    
    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy New Year 2025!";
    }
}, 1000);