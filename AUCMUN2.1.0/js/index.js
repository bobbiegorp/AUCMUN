$(document).ready(function () {
    $(".home").on("click", function() {
        home()});
    $(".faceBook").on("click", function() {
        window.open("https://www.facebook.com/profile.php?id=100013721208284&fref=ts");
    });
});

function home() {
    document.location.href = "index.html";
};

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */

$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            removeOthers();
            this.classList.toggle("active");
            this.parentElement.nextElementSibling.classList.toggle("show");
        };      
    };
    
    positionInfo();
    
    $(window).resize(function() {
        positionInfo();
    });
});

function positionInfo() {
    var extraInfo = document.getElementById("extraInfo")
    var clientHeight = document.getElementById('background').clientHeight;
    extraInfo.style.top = clientHeight + 30 + 'px';
}

function removeOthers() {
    $(".panel2").removeClass("show");
    $(".accordion").removeClass("active");
}
