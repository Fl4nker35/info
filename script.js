function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", () => {
  const splashes = [
    "ПОПАДАНИЕ В ПУЛЕМЁТ",
    "20.05.1977",
    "echo hello world",
    "nvim>>>",
    "arch btw",
    "Sometimes i dream of saving the world.",
    "Буланников почини игру",
    "АВТ-40 контрит",
    "I was driving my merkeva tank..."
  ];

  const splashEl = document.getElementById("splash");

  if (splashEl) {
    splashEl.textContent =
      splashes[Math.floor(Math.random() * splashes.length)];
  }
});
