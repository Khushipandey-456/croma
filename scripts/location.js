closeBtn.onclick = function () {
    form.style.display = "none";
}

let form = document.getElementById("form")
form.addEventListener("submit", () => {
    alert("Signed in Successfully.......!")
    window.location.href = "index.html"
    alert("redirectiong on Home page")
    let form = document.createElement("form")
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = "Please enter your Emial ID or Phone number";
    let input = document.createElement("input")
    input.placeholder = "Enter your Emial ID or Phone number"

    div.append(p, input)
    form.append(div)
})