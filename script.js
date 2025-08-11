const pesanHover = document.getElementById("pesan-hover");

pesanHover.addEventListener("mouseover", function() {
    pesanHover.style.backgroundColor = "lightgreen";
    pesanHover.style.color = "black";
    pesanHover.style.padding = "10px";
    pesanHover.style.borderRadius = "8px";
});

pesanHover.addEventListener("mouseout", function() {
    pesanHover.style.backgroundColor = "";
    pesanHover.style.color = "";
    pesanHover.style.padding = "";
    pesanHover.style.borderRadius = "";
});
