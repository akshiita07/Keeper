import React from "react";
import ReactDOM from "react-dom";

function Footer(){
    let today=new Date();
    let year=today.getFullYear();

    return(
        <p className="footer">Copyright © {year}</p>
    );
};

export default Footer;