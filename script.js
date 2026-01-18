const animeSongs = [
    {
        title: "You Say Run",
        anime: "My Hero Academia",
        img: "./images/deku.jpg",
        duration: "2:55",
        url: "./songs/You Say Run.mp3"
    },
    {
        title: "FLY HIGH!!",
        anime: "Haikyu!!",
        img: "./images/flyhigh.jpg",
        duration: "3:29",
        url: "./songs/FLY HIGH.mp3"
    },
    {
        title: "Sparkle",
        anime: "Your Name",
        img: "./images/sparkles.jpg",
        duration: "4:12",
        url: "./songs/Sparkle.mp3"
    },
    {
        title: "On The Way",
        anime: "Dandadan",
        img: "./images/aina.jpg",
        duration: "3:41",
        url: "./songs/On The Way.mp3"
    }
];
var audio = new Audio()
var selectedsong = 0
var cover = document.querySelector("#coverimg")
var play = document.querySelector("#play")
var back = document.querySelector("#back")
var front = document.querySelector("#front")


function songs() {
    var clutter = "";
    animeSongs.forEach(function (elem, idx) {
        clutter += ` <div id="songcard">
                    <div id="part1">
                        <p>#${idx + 1}</p>
                        <img id="${idx}" src="${elem.img}" alt="">
                        <div id="songname">
                            <h2>${elem.title}</h2>
                            <h4>${elem.anime}</h4>
                        </div>

                    </div>
                    <h6>${elem.duration}</h6>
                </div>`
    })
    document.querySelector("#songlist").innerHTML = clutter
    audio.src = animeSongs[selectedsong].url
    cover.innerHTML = `<img src="${animeSongs[selectedsong].img}" alt=""></img>`
}
updateNavOpacity()
songs()


document.querySelector("#songlist").addEventListener("click", function (dets) {
    selectedsong = dets.target.id
    updateNavOpacity()
    songs()
    audio.play()
    cover.classList.add("playing")
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
})

play.addEventListener("click", function () {
    if (audio.paused) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        cover.classList.add("playing")
        audio.play()
    } else {
        play.innerHTML = ` <i class="ri-play-mini-line"></i>`
        cover.classList.remove("playing")
        audio.pause()
    }
})
function updateNavOpacity() {
    if (selectedsong === 0) {
        back.style.opacity = 0.4;
    } else {
        back.style.opacity = 1;
    }

    if (selectedsong === animeSongs.length - 1) {
        front.style.opacity = 0.4;
    } else {
        front.style.opacity = 1;
    }
}


front.addEventListener("click", function () {
    if (selectedsong < animeSongs.length - 1) {
        selectedsong++
        updateNavOpacity()
        songs()
        audio.play()
    }
})
back.addEventListener("click", function () {
    if (selectedsong > 0) {
        selectedsong--
        updateNavOpacity()
        songs()



        audio.play()
    }
})

