const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');


// Song List

const songList = [
    {
        path: "playlist/Bootylicious.mp3", // playlist\Bootylicious.mp3
        songName: "Bootylicious"
    },

     {
        path: "playlist/High.opus", // playlist\Bootylicious.mp3
        songName: "High"
    },

     {
        path: "playlist/Im_Missing_You.mp3", // playlist\Bootylicious.mp3
        songName: "I'm Missing You"
    },

     {
        path: "playlist/Independent_Women.mp3", // playlist\Bootylicious.mp3
        songName: "Independent Women"
    },

     {
        path: "playlist/Irreplaceable.mp3", // playlist\Bootylicious.mp3
        songName: "Irreplaceable"
    },

     {
        path: "playlist/Nasty_Girl.mp3", // playlist\Bootylicious.mp3
        songName: "Nasty Girl"
    },

     {
        path: "playlist/Please_Forgive_Me.mp3", // playlist\Bootylicious.mp3
        songName: "Please Forgive Me"
    },

     {
        path: "playlist/Survivor.mp3", // playlist\Bootylicious.mp3
        songName: "Survivor"
    },
];

let song_Playing = false;

// Play song
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');

    // change play icon

    playPause.innerHTML = "<ion-icon name='pause-outline'></ion-icon>";
}

//pause song
function pauseSong() {
    song_Playing = false;
    audio.pause();
    playPause.classList.remove('active');

    //change icon
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
}

//play or pause song on click
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

//load song 
function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}

// current song 
let i = 0;

// on load, select first song from song list.

loadSong(songList[i])

//previous song 

function prevSong() {
    i--;
    if (i < 0){
        i = songList.length -1;
    }
    loadSong(songList[i])
    playSong()
}
prev.addEventListener("click", prevSong);


//next song 

function nextSong() {
    i++;
    if (i > songList.length - 1){
        i = 0;
    }
    loadSong(songList[i])
    playSong()
}
next.addEventListener("click", nextSong);