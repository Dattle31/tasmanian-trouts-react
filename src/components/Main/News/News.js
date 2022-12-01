import React from "react";

export default function News() {

    const newsItems = ["Tasmanian Trouts inaugural season in 2023", "New CEO appointed has wealth of experience", 
    "Star player in doubt for Round 1", "New Coach calling the shots", "Player's Captain appointed - read about Patrick Safefield's journey to AFL"];
    const newsList = newsItems.map((news, index) => <li key={index}>{news}</li>);

    return (
        <div className="News" id="News">
            <h3>Headlines and latest news</h3>
            <ul id="NewsList" className="NewsList">{newsList}</ul>
        </div>
    )
}