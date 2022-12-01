import React from "react";


    const statsData =  [
        { name: "J Smith", disposals: "26", score: "2.1", dreamteam: "119"},
        { name: "B Tasman", disposals: "6", score: "5.1", dreamteam: "89"},
        { name: "C Bailey", disposals: "41", score: "0.1", dreamteam: "112"},
        { name: "P Safefield", disposals: "51", score: "8.4", dreamteam: "172"},
    ]


export default function Stats() {
    return (
        <div className="Stats">
            <h3>Weekly player stats</h3>
            <table id="tableStats">
          <tr>
            <th>Player</th>
            <th>Disposals</th>
            <th>Score</th>
            <th>Dreamteam</th>
          </tr>
          {statsData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.disposals}</td>
                <td>{val.score}</td>
                <td>{val.dreamteam}</td>
              </tr>
            )
          })}
        </table>
        </div>
    )
}
