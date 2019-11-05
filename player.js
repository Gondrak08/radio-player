const cover = document.querySelector(".card-img");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector('.artist');
const audio = document.querySelector("audio");

const data = {
    title:
    "",
    artist: "",
    cover: "/images/logo-internet512.png",
    file: "http://s3.voscast.com:9678/;"
};
cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;
