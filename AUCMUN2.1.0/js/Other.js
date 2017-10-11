$(document).ready(function () {
    $("#nav_bar").load("navbar.html");
    
    moreInfo();
    
    $(".faceBook").on("click", function() {
        window.open("https://www.facebook.com/profile.php?id=100013721208284&fref=ts");
    });
});

function moreInfo() {
    $(".teamPic").on("click", function() {
       $(this).next().addClass("showThis");
       $(".blur").foggy();
       $(".focus").foggy(false);
    });
    
    $(".clsBtn").on("click", function() {
        $(this).parent().removeClass("showThis");
        $(".blur").foggy(false);
    });
}




