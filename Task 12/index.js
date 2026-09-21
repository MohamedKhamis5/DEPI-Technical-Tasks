aud=document.getElementById("audio");
img=document.getElementById("cover");
btnplay=document.getElementById("play");
btnpause=document.getElementById("pause");
btnstop=document.getElementById("stop");
audRange=document.getElementById("audioRange");
volRange=document.getElementById("volRange");
plt=document.getElementById("playlist");
tracktitle = document.querySelector(".tracktitle");
btnplay.addEventListener("click", () => {
  aud.play();
});
btnpause.addEventListener("click", () => {
  aud.pause();
});
btnstop.addEventListener("click", () => {
  aud.currentTime=0;
  aud.pause();
});
aud.addEventListener("timeupdate",()=>{
    audRange.value=aud.currentTime
})
aud.addEventListener("loadedmetadata", () => {
  audRange.max = aud.duration;
});
audRange.addEventListener("input", () => {
  aud.currentTime = audioRange.value;
});
volRange.addEventListener("input", () => {
  aud.volume = volRange.value;
});
var playlist = [
    { title: "Tamally Maak", src: "./assets/02.Tamally_Maak.mp3" ,cover:"./assets/1.jfif"},
    { title: "Ana Mosh Anany", src: "./assets/04._Ana_Mosh_Anany.mp3" ,cover:"./assets/2.jfif"},
    { title: "Maak Alby", src: "./assets/04_-_Maak_Alby.mp3" ,cover:"./assets/3.jfif"},
    { title: "Mosh Gedid", src: "./assets/06._Mosh_Gedeed.mp3" ,cover:"./assets/4.jfif"},
    { title: "Saeet ElForaaa", src: "./assets/07._Saaet_El_Foraaa.mp3" ,cover:"./assets/5.jfif"},
    { title: "Qusad Einy", src: "./assets/08.Qusad_Einy.mp3" ,cover:"./assets/6.jfif"},
    { title: "Wehiati Khaliki", src: "./assets/09.Wehyati_Khaliki.Starz.mp3" ,cover:"./assets/7.jfif"},
    { title: "Wahy Zekrayat", src: "./assets/11_Wahy_Zekrayat.mp3" ,cover:"./assets/8.jfif"},
  ];
  var currentTrack = 0;
  function loadTrack(index) {
    currentTrack = index;
    aud.src = playlist[index].src;
    tracktitle.textContent = playlist[index].title;
    img.src=playlist[index].cover;
    var tracks = document.querySelectorAll(".track");
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].classList.toggle("active", i === index);
    }
  }
  aud.addEventListener("ended", () => {
  loadTrack((currentTrack + 1) % playlist.length);
  audio.play();
  });
  function playit() {
    plt.innerHTML = "";
    playlist.forEach(function(track, i) {
      var div = document.createElement("div");
      div.className = "track";
      div.textContent = track.title;
      div.onclick = function() {
        loadTrack(i);
        aud.play();
      };
      plt.appendChild(div);
    });
  }
  playit();
  loadTrack(0);

