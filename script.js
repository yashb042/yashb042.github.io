$('.cross-button').click(function() {
    $('.video-container').removeClass("overlay");
});

var userData = [
    {
        name: "Ritu",
        video: "./video/Ritu.mp4",
        image: "./images/Ritu.jpg",
        unlockTime: 0,
    },
    {
        name: "Abhinav",
        video: "./video/Modi.mp4",
        image: "./images/Abhinav.jpg",
        unlockTime: 60,
    },
    {
        name: "Akshat",
        video: "./video/Akshat.mp4",
        image: "./images/Akshat.jpg",
        unlockTime: 120,
    },
    {
        name: "Aniket",
        video: "./video/Aniket.mp4",
        image: "./images/Aniket.jpg",
        unlockTime: 180,
    },
    {
        name: "Anushka",
        video: "./video/Anushka.mp4",
        image: "./images/Anushka.jpg",
        unlockTime: 240,
    },
    {
        name: "Arjun",
        video: "./video/Arjun.mp4",
        image: "./images/Arjun.jpg",
        unlockTime: 300,
    },
    {
        name: "Ayan",
        video: "./video/Ayan.mp4",
        image: "./images/Ayan.jpg",
        unlockTime: 360,
    },
    {
        name: "Deepak",
        video: "./video/Deepak.mpg",
        image: "./images/Deepak.jpg",
        unlockTime: 420,
    },
    {
        name: "Enakshi",
        video: "./video/Enakshi.mp4",
        image: "./images/Enakshi.jpg",
        unlockTime: 480,
    },
    {
        name: "Kaushik",
        video: "./video/Kaushik.mp4",
        image: "./images/Kaushik.jpg",
        unlockTime: 540,
    },
    {
        name: "Mayank",
        video: "./video/Mayank.mp4",
        image: "./images/Mayank.jpg",
        unlockTime: 600,
    },
    {
        name: "Milind",
        video: "./video/Milind.mp4",
        image: "./images/Milind.jpg",
        unlockTime: 660,
    },
    {
        name: "Payal",
        video: "./video/Payal.mp4",
        image: "./images/Payal.jpg",
        unlockTime: 720,
    },
    {
        name: "Prateek",
        video: "./video/Prateek.mp4",
        image: "./images/Prateek.jpg",
        unlockTime: 780,
    },
    {
        name: "Priyanjal",
        video: "./video/Priyanjal.mp4",
        image: "./images/Priyanjal.jpg",
        unlockTime: 840,
    },
    {
        name: "Priyansh & Yuvraj",
        video: "./video/Priyansh.mp4",
        image: "./images/Priyansh.jpg",
        unlockTime: 900,
    },
    {
        name: "Rajat",
        video: "./video/Rajat.mp4",
        image: "./images/Rajat.jpg",
        unlockTime: 960,
    },
    {
        name: "Shreyash",
        video: "./video/Shreyash.mp4",
        image: "./images/Shreyash.jpg",
        unlockTime: 1020,
    },
    {
        name: "Shubham",
        video: "./video/Shubham.mp4",
        image: "./images/Shubham.jpg",
        unlockTime: 1080,
    },
    {
        name: "Siddharth",
        video: "./video/Siddharth.mp4",
        image: "./images/Siddharth.jpg",
        unlockTime: 1140,
    },
    {
        name: "Varun",
        video: "./video/Varun.mov",
        image: "./images/Varun.jpg",
        unlockTime: 1200,
    },
    {
        name: "Yash",
        video: "./video/Yash.mp4",
        image: "./images/Yash.jpg",
        unlockTime: 1260,
    },
    {
        name: "Bonus 1",
        video: "./video/Bonus1.mp4",
        image: "./images/Bonus1.jpg",
        unlockTime: 1320,
    },
    {
        name: "Bonus 2",
        video: "./video/Bonus2.mp4",
        image: "./images/Bonus2.jpg",
        unlockTime: 1380,
    },
];

// Render Tiles
function renderTilesData() {
    var bdate = new Date(2020, 9, 11);
    var dif = Math.round(((new Date() - bdate)/1000)/60); 
    var content = "";

    for (var user of userData) {
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
    var index = Math.floor(Math.random() * 125) + 1;
    var imagePath =  "./images/background/" + index + ".jpg";
    $('<img src="'+ imagePath +'">').on("load", function() {
        $('#image-bg').fadeOut(100);
        setTimeout(function(){
            $('#image-bg').get(0).src = imagePath;
            $('#image-bg').fadeIn(300);
        }, 100);
    });
}