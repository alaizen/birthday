
// ===============================
// CLICK BASED BLOW (NO MIC)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const blowBtn = document.getElementById("blow-instruction");

  if (!blowBtn) return;

  blowBtn.addEventListener("click", () => {
    // Hide button
    blowBtn.style.display = "none";

    // Turn off candle (clear canvas)
    const canvas = document.getElementById("cake-candle-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Show greeting messages
    const congratsMsg = document.getElementById("congrats-message");
    const celebrateMsg = document.getElementById("celebrate-message");
    const resetBtn = document.getElementById("reset-btn");

    if (congratsMsg) congratsMsg.style.display = "block";
    if (celebrateMsg) celebrateMsg.style.display = "block";
    if (resetBtn) resetBtn.style.display = "inline-block";

    // Play birthday song
    const audio = document.getElementById("birthday-audio");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    // Confetti animation
    if (typeof launchConfetti === "function") {
      launchConfetti();
    }
  });
});

