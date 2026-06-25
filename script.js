const starsEl = document.getElementById("stars");
const dayEl = document.getElementById("day");
const wallpaper = document.getElementById("wallpaper");

const totalStars = 365;

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function updateBackground() {
  const hour = new Date().getHours();

  let gradient;

  if (hour >= 5 && hour < 8) {
    gradient = "linear-gradient(to bottom, #d9a7c7 0%, #f6b38a 55%, #ffd3a5 100%)";
  } else if (hour >= 8 && hour < 17) {
    gradient = "linear-gradient(to bottom, #4f83bd 0%, #7fb7d9 55%, #b7e3ee 100%)";
  } else if (hour >= 17 && hour < 20) {
    gradient = "linear-gradient(to bottom, #e9a05f 0%, #f26d5b 55%, #f7b267 100%)";
  } else {
    gradient = "linear-gradient(to bottom, #101827 0%, #23324a 55%, #86c5d8 100%)";
  }

  wallpaper.style.background = gradient;
}

function renderStars() {
  const dayOfYear = getDayOfYear();

  dayEl.textContent = `day ${dayOfYear}`;

  for (let i = 1; i <= totalStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.textContent = i <= dayOfYear ? "★" : "☆";
    star.style.setProperty("--r", `${Math.random() * 40 - 20}deg`);
    star.style.setProperty("--o", i <= dayOfYear ? "1" : "0.22");

    if (i === dayOfYear) {
      star.classList.add("today");
    }

    starsEl.appendChild(star);
  }
}

updateBackground();
renderStars();

setInterval(updateBackground, 60 * 1000);