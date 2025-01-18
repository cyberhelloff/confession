const noButton = document.getElementById("no-btn");
        const yesButton = document.getElementById("yes-btn");
        const popup = document.getElementById("popup");
        
        noButton.addEventListener("mouseover", () => {
            noButton.style.position = "absolute";
            noButton.style.left = Math.random() * 80 + "vw";
            noButton.style.top = Math.random() * 80 + "vh";
        });
        
        yesButton.addEventListener("click", () => {
            popup.style.display = "block";
            createHearts();
        });
        
        popup.addEventListener("click", () => {
            popup.style.display = "none";
        });
        
        // Hide the popup initially
        popup.style.display = "none";

        function createHearts() {
            for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration between 2 and 5 seconds
        document.body.appendChild(heart);
    }
        }