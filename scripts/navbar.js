function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("menu-div").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menu-div").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
let navMenu = () => {
  let menu = ` <div id="mySidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                            <a href="televisions.html">Televisions & Accessoris</a>
                            <a href="#">Home Appliances</a>
                            <a href="#">Phones & Wearable</a>
                            <a href="#">Computers & Tablets</a>
                            <a href="#">Kitchen Appliances</a>
                            <a href="#">Audio & Video</a>
                            <a href="#">Health & Fitness</a>
                            <a href="#">Gaming</a>
                            <a href="#">Smart Devices</a>
                            <a href="">Top Brands</a>
                        </div>
                        <span style="cursor:pointer" onclick="openNav()">&#9776; Menu</span>`
  document.getElementById("menu-div").innerHTML = menu;
}
navMenu();

