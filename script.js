let itemOpener = document.querySelector(".reviewItem_review-opener");
let reviewText = document.querySelector(".reviewItem__text");

itemOpener.onclick = function () {
    reviewText.classList.toggle("hiddenPart");
}


let zoomImage = document.querySelectorAll(".extraReview__photos-photo");
let zoomActivate = document.querySelector(".zoomer");
let imageOfZoom = zoomActivate.querySelector(".zoomer__image");

for (let image of zoomImage) {
    image.addEventListener("click", function () {
    zoomActivate.classList.toggle("disactivated");
    imageOfZoom.src = this.firstElementChild.src
})
}

window.addEventListener("keydown", function(e){
    if (e.key == "Escape") {
        zoomActivate.classList.add("disactivated");
    } 
});

zoomActivate.querySelector(".zoomer__close").onclick = function () {
    zoomActivate.classList.toggle("disactivated");
}

zoomActivate.onclick = function (e) {
    if(e.target == imageOfZoom) {
        return
    }
    zoomActivate.classList.add("disactivated");
}

let extraReview = document.querySelector(".extraReview__title");
let allextraReview = document.querySelector(".fullReview");
if (window.innerWidth < 768) {
    let dupNode = extraReview.cloneNode(true);
    document.querySelector(".extraReview").prepend(dupNode);
    extraReview.style.display="none";
}
