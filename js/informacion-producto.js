function expandImage() {
    const img = document.getElementById("foto");
    if (img.style.width === "640px") {
        img.style.width = "1280px";
        img.style.height = "1024px";
    } else {
        img.style.width = "640px";
        img.style.height = "480px";
    }
}

const img = document.getElementById("foto");
img.addEventListener("click",expandImage);