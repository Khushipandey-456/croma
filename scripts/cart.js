getData()
async function getData() {
    try {
        let res = await fetch("https://puddle-indigo-city.glitch.me/cart")
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (err) {
        console.log("err", err);
    }

}
function displayData(arr) {
    let div = document.getElementsByClassName(".card");
    let add = document.getElementById("addbtn");

    arr.map((el, i) => {
        add.addEventListener("click", () => {
            let user = document.createElement("h3");
            user.textContent = `Name : ${el.name}`;
            alert("User Added is server")
        });


        div.append(add)
    })

}