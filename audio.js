const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey' , 'summer' , 'ukulele'];
let songIndex = 2 ;
loadsong(songs[songIndex])
function loadsong(song){
  title.innerText = song;
  audio.src = `/music/${song}.mp3`;
  cover.src = `/images/${song}.jpg` 
}

function playmusic(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}
function stopmusic(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fas-pause');
    playBtn.querySelector('i.fas').classList.add('fas-play');
    audio.pause();
}

function PrevSong(){
    songIndex--;
    if(songIndex < 0){
       songIndex = songs.length-1 ;
    }
    loadsong(songs[songIndex]);
    playmusic();
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length-1){
       songIndex = 0 ;
    }
    loadsong(songs[songIndex]);
    playmusic();
}
function update(e){
    const {duration , currentTime} = e.srcElement;
    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;


}



playBtn.addEventListener('click', ()=>{
const isplaying = musicContainer.classList.contains('play');
if(isplaying){
    stopmusic()
}
else{
    playmusic();
}
})

prevBtn.addEventListener('click' , PrevSong);
nextBtn.addEventListener('click' , nextSong);
audio.addEventListener('timeupdate' , update)








// // songs title
// const songs = ['hey' , 'summer' , 'ukulele'];
// // Tract the Song
// let songIndex = 2;
// //initially Load songs
// loadsong(songs[songIndex]);

// function loadsong(song){
//     title.innerText = song;
//     audio.src = `/music/${song}.mp3`;
//     cover.src = `/images/${song}.jpg`;
// }
// function playmusic(){
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     audio.play()

// }
// function stopmusic(){
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     audio.pause()
    

// }

// function PrevSong(){
//     songIndex--;
//     if(songIndex < 0){
//         songIndex = songs.length-1;
//     }
//     console.log(songIndex)
//     loadsong(songs[songIndex]);
//     playmusic();
// }
// function nextSong(){
//     console.log(1)
//     songIndex++;
//     if(songIndex > songs.length-1){
//         songIndex = 0;
//     }
//     loadsong(songs[songIndex]);
//     playmusic();
// }
// function update(e){
//     const {duration , currentTime}  = e.srcElement;
//     const progresspercent = (currentTime / duration) * 100;
//     progress.style.width  = `${progresspercent}%` 
// }

// playBtn.addEventListener('click' , function(){
//     const isplaying = musicContainer.classList.contains('play');
//     if(isplaying){
//         stopmusic();
//     }
//     else{
//         playmusic()
//     }
//  })


//  prevBtn.addEventListener('click' , PrevSong);
//  nextBtn.addEventListener('click' , nextSong);
//  audio.addEventListener('timeupdate' , update)



