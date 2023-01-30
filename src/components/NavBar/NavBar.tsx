import "./NavBar.scss";
import React from "react";
import Logo from "../../assets/logo.png"
export const NavBar: React.FC=()=>
{
    return(
    <>
        <nav className="NavBar">
            <ul>
                <li>My Projects</li>
                <li>My Contributions</li>
                <li>My Artworks</li>
                <li>About This Website</li>
                <img src={Logo} className="Logo"/>
            </ul>
            
        </nav>
    </>
)
}