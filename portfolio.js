document.addEventListener("DOMContentLoaded", function() {
    var hamburgerButton = document.getElementById("hamburger");
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var closeBtn = document.getElementById("closeBtn");
    hamburgerButton.addEventListener("click", function() {
        if (hamburgerMenu.style.display === "block") {
            hamburgerMenu.style.display = "none";
            bacl
        } else {
            hamburgerMenu.style.display = "block";
        }
    });

    closeBtn.addEventListener("click", function() {
        if (hamburgerMenu.style.display === "block") {
            hamburgerMenu.style.display = "none";
            bacl
        } else {
            hamburgerMenu.style.display = "block";
        }
    });

});
