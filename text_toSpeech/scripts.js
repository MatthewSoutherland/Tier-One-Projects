const inputText = document.getElementById("input-text");
const speakBtn = document.getElementById("speak-btn");

function speakText() {
  const text = inputText.value;
  const speechSynthesisInstance = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  speechSynthesisInstance.speak(utterance);
}

speakBtn.addEventListener("click", speakText);
