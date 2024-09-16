// get button first
const button = document.getElementById("first");
button.addEventListener("click", function(){
    const divobj1 = document.getElementById("up");
    divobj1.style.backgroundImage = "url(https://koshka.top/uploads/posts/2021-12/thumbs/1640037316_35-koshka-top-p-kotik-serii-polosatii-39.jpg)"
});

// get button second
const button2 = document.getElementById("second");
button2.addEventListener("click", function(){
    const divobj2 = document.getElementById("down");
    divobj2.style.backgroundImage = "url(https://avatars.mds.yandex.net/i?id=7ea90f7429f4ac244feff45f501a4c4a_sr-5392366-images-thumbs&n=13)"
});

const butmain = document.getElementById("main");
butmain.addEventListener("click", function(){
    num = Math.random();
    console.log(num);
    if (num > 0.5){
        rand = "up"
    }else{
        rand = "down"
    }
    const divobj3 = document.getElementById(rand);
    divobj3.style.border = "10px solid green"
});
 
const maindiv = document.querySelectorAll("div");
maindiv.addEventListener("mouseover", () => {
   maindiv.style.cursor = "crosshair" 
});

document.querySelector