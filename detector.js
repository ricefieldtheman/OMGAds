// window.onload = function(){
//     var button = document.getElementById("hateAdsButton")
//     button.addEventListener("click", hateOnThemAds)
// }
let millisecond = 1000

let interval = setInterval(() => {
    var detectedAd = document.getElementsByClassName("ytp-ad-player-overlay-layout")
    console.log("SEARCHING FOR ADS >:(")

    if(detectedAd.length > 0 && detectedAd != undefined){
        console.log("AD DETECTED >:(")
        hateOnThemAds()
        clearInterval(interval)
    }
}, millisecond);

function hateOnThemAds(){
    window.alert("I HATE ADS!")
    console.log("I HATE ADS!")
}