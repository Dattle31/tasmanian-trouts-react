import React from "react";
import { useState } from "react";

export default function Footer() {

    const [selectedFooterItem, setSelectedFooterItem] = useState("Welcome");
    const footerItems = [
        { id: 1, title: "Copyright 2022 Tasmanian Trouts", name: "Name" },
        { id: 2, title: "Administrator", name: "Administrator" },
        { id: 3, title: "Terms and Conditions", name: "TermsAndConditions" },
        { id: 4, title: "Privacy Policy", name: "PrivacyPolicy" },
    ]


    return (
        <div className="Footer">
            <ul id="footerToggle" className="FooterMenus">
                {footerItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setSelectedFooterItem(item.name)}
                            className={selectedFooterItem === item.name ? `activeFooterItem` : ""}
                        >
                            <a href ={`#${item.name}`}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
)
}