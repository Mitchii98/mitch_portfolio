// ================================
// PROFESSIONAL WEBSITE
// JavaScript
// ================================

console.log("Mitch Professional Website Loaded");


/* =========================================================
   PROJECT IMAGE VIEWER
========================================================= */

const projectImages = document.querySelectorAll(".project-image");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const viewerClose = document.querySelector(".image-viewer-close");

projectImages.forEach(function(image) {

    image.addEventListener("click", function() {

        viewerImage.src = image.src;
        viewerImage.alt = image.alt;

        viewerCaption.textContent = image.alt;

        imageViewer.classList.add("show");

    });

});


/* Close viewer */

viewerClose.addEventListener("click", function() {

    imageViewer.classList.remove("show");

});


/* Close when clicking outside image */

imageViewer.addEventListener("click", function(event) {

    if (event.target === imageViewer) {

        imageViewer.classList.remove("show");

    }

});


/* Close with ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        imageViewer.classList.remove("show");

    }

});

