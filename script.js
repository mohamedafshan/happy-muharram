const greetingText = "🌙 Muharram Mubarak 1447";
let i = 0;
const speed = 70;

function typeWriter() {
  if (i < greetingText.length) {
    document.getElementById("greeting").innerHTML =
      document.getElementById("greeting").innerHTML.replace(/<span class="shimmer"><\/span>/, '') +
      greetingText.charAt(i) + '<span class="shimmer"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
