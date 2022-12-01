import React from "react";
import { useState } from "react";

export default function Navigation() {

    const [selectedNavItem, setSelectedNavItem] = useState("Welcome");
    const navItems = [
        { id: 1, title: "Welcome", name: "Welcome" },
        { id: 2, title: "News", name: "News" },
        { id: 3, title: "Upcoming Games", name: "UpcomingGames" },
        { id: 4, title: "Ladder", name: "Ladder" },
        { id: 5, title: "Other Scores", name: "OtherScores" },
        { id: 6, title: "Highlights", name: "Highlights" },
        { id: 7, title: "Stadium Radar", name: "StadiumRadar" },
        { id: 8, title: "Contact", name: "Contact" },
    ]
    

    return (
        <div className="Navigation">
            <ul id="navigationToggle" className="NavigationMenus">
                {navItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setSelectedNavItem(item.name)}
                            className={selectedNavItem === item.name ? `activeNavItem` : ""}
                        >
                            <a href ={`#${item.name}`}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}