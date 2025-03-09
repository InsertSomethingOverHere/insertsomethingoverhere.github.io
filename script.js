const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.src = "assets/sun.svg";
}
toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.src = "assets/sun.svg";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.src = "assets/moon.svg";
        localStorage.setItem("theme", "light");
    }
});
