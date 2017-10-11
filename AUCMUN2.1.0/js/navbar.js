// Functions for the navigation bar
$(document).ready(function () {
    $(".home").on("click", function () { home() });
    navBar();

    nav();
});

function home() {
    document.location.href = "index.html";
};

function navBar() {
    var menuItem = document.getElementsByClassName("menuItem");
    $(menuItem).on("mouseenter", function () {
        if ($("ul.displayList") == undefined) {
            console.log("alright");
        }
        else { $(".displayList").removeClass("showThis") };

        if (this.nextElementSibling.tagName == 'UL') {
            this.nextElementSibling.className += " showThis";
        }
    })

    $(menuItem).on("click", function () {
        if ($("ul.displayList") == undefined) {
            console.log("alright");
        } else if ($("ul.displayList").hasClass("showThis")) {
            $(".displayList").removeClass("showThis");
        } else {
            this.nextElementSibling.className += " showThis";
        }
    })

    $(".displayList").on("mouseleave", function () {
        $(".displayList").removeClass("showThis");
    })

}

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons.
The "active" class is used to add a background color to the current button when its belonging panel is open.
The "show" class is used to open the specific accordion panel */
function nav() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        };
    };
};