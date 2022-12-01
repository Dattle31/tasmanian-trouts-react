import React from "react";

export default function Radar() {
    return (
        <div className="Radar" id="Radar">
            <h3>Radar</h3>
            <figure>
              <iframe width="100%" height="400px" src="https://embed.windy.com/embed2.html?lat=-42.919&lon=147.309&detailLat=-42.874&detailLon=147.286&width=208&height=287&zoom=11&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=12&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
              <figcaption>Windy Weather Web App</figcaption>
            </figure>
        </div>
    )
}