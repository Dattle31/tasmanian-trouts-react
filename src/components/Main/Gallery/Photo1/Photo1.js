import React from "react";


export default function Photo1() {
    return (
        <div className="Photo1">
            <h3>Our future stadium!</h3>
            <img style={{ width: "65%", height: "65%" }} src="images/Stadium.jpg" alt="Tasmanian Stadium" />
            <p style={{ maxWidth: 550 }}>Expected to be completed by 2024,
                this state-of-the-art stadium will 
                house up to 45000 patrons.
            </p>
        </div>
    )
}