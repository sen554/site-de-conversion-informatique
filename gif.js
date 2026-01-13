const audio = document.getElementById("musique");
const fixe = document.getElementById("mariahFixe");
const gif = document.getElementById("mariahGif");

gif.style.display = "none";

audio.addEventListener("play", () => {
  fixe.style.display = "none";
  gif.style.display = "block";
});

audio.addEventListener("pause", () => {
  gif.style.display = "none";
  fixe.style.display = "block";
});

audio.addEventListener("ended", () => {
  gif.style.display = "none";
  fixe.style.display = "block";
});
