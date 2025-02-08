let location= () => {
    let menu = ` <span id="closeBtn" class="close">&times;</span>
        <h1>SELECT YOUR LOCATION</h1>
        <h3>To Check Products & Delivery Options available at your location</h3>
        <input type="text"  placeholder="Enter pin code"/>
        <input type="text" placeholder="⌖ Get Current Location" /><br><br>
        <span>OR</span>
        <input id="submit" type="submit" value="Signin to select address" />
        <input id="submit" type="submit" value="Continue" />
                          <span style="cursor:pointer" onclick="openNav()">&#9776; Location</span>`
    document.getElementById("form").innerHTML = menu;
  }
  location();


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