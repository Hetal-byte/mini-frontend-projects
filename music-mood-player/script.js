const audio = document.getElementById("audioPlayer");
const trackName = document.getElementById("trackName");
const moodGif = document.getElementById("moodGif");
const moodSelect = document.getElementById("moodSelect");
const volumeSlider = document.getElementById("volumeSlider");
const likeBtn = document.getElementById("likeBtn");
const themeToggle = document.getElementById("themeToggle");

let currentMood = "happy";
let currentIndex = 0;

const moodData = {
  happy: {
    gif: "https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif",
    tracks: [
      { name: "Happy Vibes", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { name: "Cheer Up", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
    ]
  },
  chill: {
    gif: "https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif",
    tracks: [
      { name: "Evening Chill", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { name: "Lo-Fi Flow", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" }
    ]
  },
  sad: {
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    tracks: [
      { name: "Rainy Days", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { name: "Melancholy Mood", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" }
    ]
  },
  energetic: {
    gif: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
    tracks: [
      { name: "Power Boost", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { name: "Beast Mode", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ]
  }
};

function changeMood() {
  currentMood = moodSelect.value;
  currentIndex = 0;
  updateTrack();
}

function updateTrack() {
  const mood = moodData[currentMood];
  const track = mood.tracks[currentIndex];
  audio.src = track.src;
  trackName.textContent = "🎵 Track: " + track.name;
  moodGif.src = mood.gif;
  checkLiked(track.src);
}

function playMusic() {
  audio.play();
}

function nextSong() {
  const tracks = moodData[currentMood].tracks;
  currentIndex = (currentIndex + 1) % tracks.length;
  updateTrack();
  playMusic();
}

function checkLiked(src) {
  if (localStorage.getItem(src)) {
    likeBtn.classList.add("liked");
    likeBtn.textContent = "❤️ Liked";
  } else {
    likeBtn.classList.remove("liked");
    likeBtn.textContent = "🤍 Like";
  }
}

likeBtn.addEventListener("click", () => {
  const track = moodData[currentMood].tracks[currentIndex];
  if (localStorage.getItem(track.src)) {
    localStorage.removeItem(track.src);
  } else {
    localStorage.setItem(track.src, "liked");
  }
  checkLiked(track.src);
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

changeMood();
