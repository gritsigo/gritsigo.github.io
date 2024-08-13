let topbutton =
document.getElementById("topBtn");

window.onscroll = function()
{scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 170 ||
        document.documentElement.scrollTop > 170
    ) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}