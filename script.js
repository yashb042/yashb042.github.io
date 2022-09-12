$('.cross-button').click(function() {
    $('.video-container').removeClass("overlay");
});

var userData = [
    {
        name: "Intro",
        video: "./videoRupa/Intro.mp4",
        image: "./images/Intro.png",
        unlockTime: 0,
    },
    {
        name: "Munmun",
        video: "./video/Ritu.mp4",
        image: "./images/demo.jpg",
        unlockTime: 0,
    },
    {
        name: "Gunnu",
        video: "./video/Modi.mp4",
        image: "./images/demo.jpg",
        unlockTime: 120,
    },
    {
        name: "Yash",
        video: "./video/Akshat.mp4",
        image: "./images/demo.jpg",
        unlockTime: 240,
    },
    {
        name: "Sheilja",
        video: "./video/Aniket.mp4",
        image: "./images/demo.jpg",
        unlockTime: 360,
    },
    {
        name: "Dixika",
        video: "./video/Anushka.mp4",
        image: "./images/demo.jpg",
        unlockTime: 480,
    },
    {
        name: "Rama",
        video: "./videoRupa/Rama.mp4",
        image: "./images/demo.jpg",
        unlockTime: 600,
    },
    {
        name: "Vrinda",
        video: "./videoRupa/Vrinda.mp4",
        image: "./images/demo.jpg",
        unlockTime: 720,
    },
    {
        name: "Maitri",
        video: "./video/Deepak.mpg",
        image: "./images/demo.jpg",
        unlockTime: 840,
    },
    {
        name: "Ruman",
        video: "./video/Enakshi.mp4",
        image: "./images/demo.jpg",
        unlockTime: 960,
    },
    {
        name: "Riddhu",
        video: "./video/Kaushik.mp4",
        image: "./images/demo.jpg",
        unlockTime: 1080,
    },
    {
        name: "Sehal",
        video: "./videoRupa/Sehal.mp4",
        image: "./images/demo.jpg",
        unlockTime: 1200,
    },
    {
        name: "Harshita",
        video: "./video/Milind.mp4",
        image: "./images/demo.jpg",
        unlockTime: 1320,
    },
    {
        name: "Bonus 1",
        video: "./video/Bonus1.mp4",
        image: "./images/Bonus1.jpg",
        unlockTime: 1320,
    }
];

// Render Tiles
function renderTilesData() {
    var bdate = new Date(2022, 8, 12, 10);

    var dif = Math.round(((new Date() - bdate)/1000)/60);
    console.log(new Date())
    console.log(bdate)
    var content = "";

    for (var user of userData) {
        console.log(dif)
        //console.log(user.unlockTime)
        var locked = dif > user.unlockTime ? "": "locked";

        content += '<div class="video-item ' + locked + '" data-name="' + user.name +'">'
        content +=     '<div class="video-thumbnail">';
        content +=         '<img src="' + user.image + '">';
        content +=         '<div class="lock-overlay"><img src="./images/lock.png" /></div>';
        content +=     '</div>';
        content +=     '<div class="video-text">' + user.name + '</div>';
        content += '</div>';
    }

    $('.video-carousal > div').html(content);
    $('.video-item').get(0).style.marginLeft = "0px";
}


$('body').on("click", ".video-item", function(e) {
    if (e.currentTarget.classList.contains("locked")){
        return;
    }

    $('.video-container').addClass("overlay");
    var key = e.currentTarget.dataset.name;
    var user = userData.filter(x => x.name == key)[0];
    $('.video-block > video').get(0).src = user.video;
    $('.video-block > div').html(key);
});


$('.left-arrow').click(function(e) {
    var val = parseInt($('.video-item').get(0).style.marginLeft);
    if (val < 0){
        $('.video-item').get(0).style.marginLeft = (val + 180) + "px";
    }
});

$('.right-arrow').click(function(e) {
    var val = parseInt($('.video-item').get(0).style.marginLeft);
    if (val > -180 * (userData.length - 2)){
        $('.video-item').get(0).style.marginLeft = (val - 180) + "px";
    }
});

// render titles
renderTilesData();

setTimeout(function(){
    setInterval(() => {
        setAndFade();
    }, 5000);
}, 3000);

function setAndFade(){
    var index = Math.floor(Math.random() * 35) + 1;
    var imagePath =  "./images/bday/" + index + ".jpg";
    $('<img src="'+ imagePath +'">').on("load", function() {
        $('#image-bg').fadeOut(100);
        setTimeout(function(){
            $('#image-bg').get(0).src = imagePath;
            $('#image-bg').fadeIn(300);
        }, 100);
    });
}