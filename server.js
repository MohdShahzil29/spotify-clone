//  Initiazlize the variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progresBar = document.getElementById("progresBar");
let masterPlaySong = document.getElementById("masterPlaySong");
let gift = document.getElementById("gift");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let song = [
  // this song name is not actully right
  { SongName: "Tum Hi Ho", filePath: "songs/1.mp3", coverPath: "Cover/1.jpg" },
  {
    SongName: "Mere Rashke Qamar",
    filePath: "songs/2.mp3",
    coverPath: "Cover/2.jpg",
  },
  {
    SongName: "Midnight Serenade",
    filePath: "songs/3.mp3",
    coverPath: "Cover/3.jpg",
  },
  {
    SongName: "main banda e aasi hoon",
    filePath: "songs/11.mp3",
    coverPath: "Cover/4.jpg",
  },
  {
    SongName: "faslon ko takalluf hai",
    filePath: "songs/12.mp3",
    coverPath: "Cover/5.jpg",
  },
  {
    SongName: "Tera Ban Jaunga",
    filePath: "songs/6.mp3",
    coverPath: "Cover/6.jpg",
  },
];

songItem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = song[i].SongName;
});

// handle play and pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gift.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gift.style.opacity = 0;
  }
});
// Listen to event
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // update seekBar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  progresBar.value = progress;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = "songs/" + songIndex + ".mp3";
      masterPlaySong.innerText = song[songIndex].SongName;
      audioElement.play();
      audioElement.currentTime = 0;
      gift.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = "songs/" + songIndex + ".mp3";
  masterPlaySong.innerText = song[songIndex].SongName;
  audioElement.play();
  audioElement.currentTime = 0;
  gift.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = "songs/" + songIndex + ".mp3";
  audioElement.play();
  masterPlaySong.innerText = song[songIndex].SongName;
  audioElement.currentTime = 0;
  gift.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
