import "./NavBar.scss";
import React from "react";

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
            </ul>
        </nav>
    </>
)
}