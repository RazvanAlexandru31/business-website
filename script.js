const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".navlist");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const thisYear = document.getElementById('date')

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  navlist.classList.toggle("change");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
});

// make video work
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

let isPlaying = false;
const playVideo = () => {
  video.play();
  isPlaying = true;
  btn.className = "far fa-pause-circle";
  btn.title = "Pause";
  video.style.opacity = ".8";
};

const pauseVideo = () => {
  video.pause();
  isPlaying = false;
  btn.className = "far fa-play-circle";
  btn.title = "Play";
  video.style.opacity = ".3";
};

const playPause = () => {
  isPlaying ? pauseVideo() : playVideo();
};

btn.addEventListener("click", () => {
  playPause();
  console.log(123);
});

video.addEventListener("timeupdate", () => {
  // console.log(video.currentTime, video.duration)
  const barWidth = (video.currentTime / video.duration) * 100;
  console.log(barWidth);
  bar.style.width = `${barWidth}%`;
  if (video.ended) {
    btn.className = "far fa-play-circle";
    btn.title = "Play";
    video.style.opacity = ".3";
  }
});

//  Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});


const date = new Date();
const today = date.toLocaleDateString('en-US', {year: 'numeric'})
thisYear.textContent = today;