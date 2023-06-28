import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="column">
          <h2 className="">
            Bengali<span className="highlight-text">Food</span>
          </h2>
          <p className="quote">
            Immerse yourself in the rich heritage of Bengali cuisine as we bring
            you an array of traditional recipes passed down through generations.
            From delectable fish curries to aromatic rice dishes, from spicy
            vegetable preparations to indulgent sweets, our extensive collection
            of recipes captures the essence of Bengali gastronomy.
          </p>
        </div>
        <div className="column">
          <h3 className="column-header">Resturent</h3>
          <a href="/">About Us</a>
          <br />
          <a href="/">Shape</a>
          <br />
          <a href="/">Rechipe</a>
          <br />
          <a href="/">Menu</a>
        </div>
        <div className="column">
          <h3 className="column-header">Foods</h3>
          <a href="/">Dinner</a>
          <br />
          <a href="/">Lunch</a>
          <br />
          <a href="/">Breackfast</a>
          <br />
          <a href="/">Special</a>
        </div>
        <div className="column">
          <h3 className="column-header">Support</h3>
          <a href="/">Help Desk</a>
          <br />
          <a href="/">Sells</a>
          <br />
          <a href="/">Become a Partner</a>
          <br />
          <a href="/">Invest</a>
        </div>
        <div className="column">
          <h3 className="column-header">Contact</h3>
          <p>524 Bonani , Dhaka</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="copy-right">
        <p>@{currentYear} Bengali Foods. All Rights Reserved</p>
        <p>Powered by @BengaliFoods</p>
      </div>
    </footer>
  );
};

export default Footer;
