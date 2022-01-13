import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useState } from "react";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "+91-9149017357";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    console.log("Phone number Copied");
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            kaira.
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span onClick={copyToClipboard}>+91-9149017357</span>
            {copyState && <p>Phone number copied!!</p>}
          </div>
          <div className="itemContainer">
            <GrMail className="icon" />
            <a href="mailto: kkaira218@gmail.com" className="mail">
              kkaira218@gmail.com
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={setMenuOpen}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
