import "./NavBar.scss";
import React from "react";
import Logo from "../../assets/logo.png"
export const NavBar: React.FC=()=>
{
    return(
    <>
        <nav className="NavBar">
            <ul>
                <li>About Me</li>
                <li>About This Website</li>
                <li>My Blogs</li>
                <li>My Artworks</li>
                <li>My Contributions</li>
                <li>My Projects</li>
                <img src={Logo} className="Logo"/>
            </ul>
            
        </nav>
    </>
)
}