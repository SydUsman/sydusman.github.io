document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Software Developer", "Freelancer", "UI/UX Designer"];
  let currentIndex = 0;
  let currentCharIndex = 0;
  let currentText = "";
  const typewriterElement = document.getElementById("typewriter");

  function type() {
    if (currentCharIndex < roles[currentIndex].length) {
      currentText += roles[currentIndex].charAt(currentCharIndex);
      typewriterElement.textContent = currentText;
      currentCharIndex++;
      setTimeout(type, 150); // typing speed
    } else {
      setTimeout(erase, 1000); // pause before erasing
    }
  }

  function erase() {
    if (currentCharIndex > 0) {
      currentText = currentText.substring(0, currentCharIndex - 1);
      typewriterElement.textContent = currentText;
      currentCharIndex--;
      setTimeout(erase, 100); // erasing speed
    } else {
      currentIndex = (currentIndex + 1) % roles.length;
      setTimeout(type, 500); // pause before typing next word
    }
  }

  type();
});

