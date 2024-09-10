// window.onload = function(){
//     var button = document.getElementById("hateAdsButton")
//     button.addEventListener("click", hateOnThemAds)
// }
var millisecond = 1000

setInterval(() => {
    var detectedAd = document.getElementsByClassName("ytp-ad-player-overlay-layout")
    console.log(detectedAd)
    if(detectedAd.length > 0 && detectedAd != undefined){
        let check = "AD DETECTED >:("
        console.log(check)
        detectedAd[0].click()
    }
}, millisecond);

function hateOnThemAds(){
    window.alert("I HATE ADS!")
    console.log("I HATE ADS!")
}