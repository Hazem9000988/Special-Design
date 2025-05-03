let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor)

    document.querySelectorAll(".option-colors li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active")
        }
    })
}

document.querySelector(".setting-box .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")

}
// switch colors
let colorLi = document.querySelectorAll(".option-colors li");

colorLi.forEach(li => {
    li.addEventListener("click", function (e) {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

        localStorage.setItem("color-option", e.target.dataset.color)

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})


// switch background

let landing = document.querySelector(".landing-page");

let arrayLanding = ["Stupid-Church-Tricks-Leadership-Staffing.png", "website-background-sdki780prxb1nfs5.jpg"];

setInterval(() => {
    let random = Math.floor(Math.random() * arrayLanding.length)
    landing.style.backgroundImage = 'url("CSS/photo/' + arrayLanding[random] + '")'
}, 10000)


let skill = document.querySelector(".skill");

window.onscroll = function () {
    let skilltop = skill.offsetTop;
    let skillHeight = skill.offsetHeight;
    let windowtop = this.innerHeight;
    let windowHeight = this.pageYOffset;

    if (windowHeight > (skilltop + skillHeight - windowtop)) {
        let all = document.querySelectorAll(".skill .info .prog span")
        all.forEach(element => {
            element.style.width = element.dataset.progress
        })
    }
}


// create popup

let image = document.querySelectorAll(".images img");

image.forEach(img => {
    img.addEventListener("click", function (e) {
        let popup = document.createElement("div");

        popup.className = "overlay";

        document.body.appendChild(popup);

        let popupbox = document.createElement("div");
        popupbox.className = "popup-image";
        let popuptitle = document.createElement("h3")
        popuptitle.className = "title-box"
        popuptitle.textContent = img.alt;
        popupbox.appendChild(popuptitle)


        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupbox.appendChild(popupImage);
        document.body.appendChild(popupbox)

        let close = document.createElement("span");
        close.className = "close-box";
        close.textContent = "X";
        popupbox.appendChild(close)

    })
})
// close popup 
document.addEventListener("click", function (e) {
    if (e.target.className === "close-box") {
        e.target.parentNode.remove();

        document.querySelector(".overlay").remove()
    }
})


let allLinks = document.querySelectorAll(".link li a");


allLinks.forEach(span => {
    span.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })
})


// button
let btn = document.querySelector("button");
let links = document.querySelector(".link")
btn.onclick = function (e) {
    e.stopPropagation()
    links.classList.toggle("open")
}
links.onclick = function (e) {
    e.stopPropagation()
}

document.addEventListener("click", function (e) {
    if (e.target !== btn && e.target !== links)
        if (links.classList.contains("open")) {
            links.classList.toggle("open")
        }
})


