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
        name: "Baby Girl",
        video: "./videoRupa/Happy.mp4",
        image: "./images/Happy.jpg",
        unlockTime: 0,
    },
    {
        name: "Munmun",
        video: "./videoRupa/Munmun.mp4",
        image: "./images/Munmun.jpg",
        unlockTime: 0,
    },
    {
        name: "Mom",
        video: "./videoRupa/Mom.mp4",
        image: "./images/Mom.jpg",
        unlockTime: 60,
    },
    {
        name: "Babusa",
        video: "./videoRupa/Babusa.mp4",
        image: "./images/Babusa.jpg",
        unlockTime: 120,
    },
    {
        name: "Yash",
        video: "./videoRupa/Yash.mp4",
        image: "./images/Yash.jpg",
        unlockTime: 180,
    },
    {
        name: "Dixika",
        video: "./videoRupa/Dixika.mp4",
        image: "./images/Dixika.jpg",
        unlockTime: 240,
    },
    {
        name: "Rama",
        video: "./videoRupa/Rama.mp4",
        image: "./images/Rama.jpg",
        unlockTime: 300,
    },
    {
        name: "Ruman",
        video: "./videoRupa/Ruman.mp4",
        image: "./images/Ruman.jpg",
        unlockTime: 360,
    },
    {
        name: "Sehal",
        video: "./videoRupa/Sehal.mp4",
        image: "./images/Sehal.jpg",
        unlockTime: 420,
    },
    {
        name: "Shobhit",
        video: "./videoRupa/Shobhit.mp4",
        image: "./images/Shobhit.jpg",
        unlockTime: 480,
    },
    {
        name: "Tiny",
        video: "./videoRupa/Tiny.mp4",
        image: "./images/Tiny.jpg",
        unlockTime: 540,
    },
    {
        name: "Vrinda",
        video: "./videoRupa/Vrinda.mp4",
        image: "./images/Vrinda.jpg",
        unlockTime: 600,
    },
    {
        name: "Winnie",
        video: "./videoRupa/Winnie.mp4",
        image: "./images/Winnie.jpg",
        unlockTime: 660,
    },
    {
        name: "Bonus 1",
        video: "./videoRupa/Bonus1.mp4",
        image: "./images/Bonus1.jpg",
        unlockTime: 0,
    },
    {
        name: "Bonus 2",
        video: "./videoRupa/Bonus2.mp4",
        image: "./images/Bonus2.jpg",
        unlockTime: 360,
    }
];

// Render Tiles
function renderTilesData() {
    var bdate = new Date(2022, 8, 16, 13);

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