//mainhome script
        function scrollToListings() {
            document.querySelector('.recent-review').scrollIntoView({ behavior: 'smooth' });
        }

        //progress indicator
        let progress = 0;

function updateProgress(amount) {
  progress = Math.min(100, Math.max(0, progress + amount));
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent = progress + "%";
}

// Create and add reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Progress";
resetBtn.onclick = () => updateProgress(-progress);
document.querySelector(".progress-controls").appendChild(resetBtn);

// Example: Auto increase (demo)
setInterval(() => {
  if (progress < 100) updateProgress(1);
}, 200);
