import React from "react";


const LadderData = [
    { Rank: "1", Team: "Geelong", Pts: "72", Percentage: "144.2"},
    { Rank: "2", Team: "Richmond", Pts: "64", Percentage: "121.6"},
    { Rank: "3", Team: "Melbourne", Pts: "64", Percentage: "121.4"},
    { Rank: "4", Team: "Sydney", Pts: "64", Percentage: "111.4"},
    { Rank: "5", Team: "Collingwood", Pts: "64", Percentage: "110.1"},
    { Rank: "6", Team: "Fremantle", Pts: "62", Percentage: "117.0"},
    { Rank: "7", Team: "Brisbane", Pts: "60", Percentage: "119.3"},
    { Rank: "8", Team: "Bulldogs", Pts: "48", Percentage: "108.0"},
    { Rank: "9", Team: "Carlton", Pts: "48", Percentage: "103.2"},
    { Rank: "10", Team: "St Kilda", Pts: "44", Percentage: "99.3"},
    { Rank: "11", Team: "Pt Adelaide", Pts: "40", Percentage: "110.3"},
    { Rank: "12", Team: "Gold Coast", Pts: "40", Percentage: "102.8"},
    { Rank: "13", Team: "Hawthorn", Pts: "32", Percentage: "89.8"},
    { Rank: "14", Team: "Adelaide", Pts: "32", Percentage: "86.7"},
    { Rank: "15", Team: "Essendon", Pts: "28", Percentage: "83.2"},
    { Rank: "16", Team: "GWS", Pts: "24", Percentage: "84.6"},
    { Rank: "17", Team: "West Coast", Pts: "8", Percentage: "59.8"},
    { Rank: "18", Team: "Nth Melb", Pts: "8", Percentage: "55.8"},
    { Rank: "19", Team: "Trouts", Pts: "0", Percentage: "0"},
]

export default function Ladder() {
    return (
        <div className="Ladder" id="Ladder">
            <h3>Season 2022 AFL Ladder</h3>
            <table id="tableLadder">
                <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Pts</th>
                <th>Percentage</th>
                </tr>
                {LadderData.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.Rank}</td>
                    <td>{val.Team}</td>
                    <td>{val.Pts}</td>
                    <td>{val.Percentage}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}