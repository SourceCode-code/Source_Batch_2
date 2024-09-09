document.getElementById("enterButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("message").textContent = "Your journey to coding has started!";
});


document.getElementById("exitButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "Red";
    document.getElementById("message").textContent = "Thank you for visiting please come back soon";
});
