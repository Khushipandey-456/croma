let footers = () => {
    let card = `<div id="footer">
             <div id="footer1">
                <h2>CONNECT WITH US</h2>
                <input type="email" placeholder="Enter Email ID" id="email"><br>
                <a href="https://www.youtube.com/user/CromaRetail">Youtube</a>
                <a href="">Facebook</a>
                <a href="">Instragram</a>
                <a href="">Linkedin</a>
                <a href="">Twiter</a><br>
                &copy; Copyright 2023 Croma. All rights reserved
            </div>
            <div id="footer2">
                <h2>USEFULL LINKS </h2>
                <a href="">About Croma</a><br>
                <a href="">Help And Support</a><br>
                <a href="">FAQs</a><br>
                <a href="">Buying Giude</a><br>
                <a href="">Return Policy</a><br>
                <a href="">B2B orders</a><br>
                <a href="">Store Locator</a><br>
                <a href="">E-Waste</a><br>
                <a href="">Careers At Croma</a><br>
            
            </div>
            <div id="footer3">
                <h2>PRODUCTS</h2>
                        <a href="televisons.html">Televisions & Accessoris</a><br>
                        <a href="#">Home Appliances</a><br>
                        <a href="#">Phones & Wearable</a><br>
                        <a href="#">Computers & Tablets</a><br>
                        <a href="#">Kitchen Appliances</a><br>
                        <a href="#">Audio & Video</a><br>
                        <a href="#">Health & Fitness</a><br>
                        <a href="#">Gaming</a><br>
                        <a href="#">Smart Devices</a><br>
                         <a href="">Top Brands</a><br>
            </div>
          </div>`
    document.getElementById("footer").innerHTML = card;
};
footers()