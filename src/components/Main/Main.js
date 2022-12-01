import React from "react";

import Welcome from "./Welcome/Welcome";
import Contact from "./Contact/Contact";
import Highlights from "./Highlights/Highlights";
import Ladder from "./Ladder/Ladder";
import News from "./News/News";
import LatestNews from "./News/LatestNews";
import NextGames from "./NextGames/NextGames";
import OtherScores, { CarouselItem } from "./OtherScores/OtherScores";
import Radar from "./Radar/Radar";
import Stats from "./Stats/Stats";
import Photo1 from "./Gallery/Photo1/Photo1";
import Photo2 from "./Gallery/Photo2/Photo2";



export default function Main() {
    const newsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nibh placerat, finibus nibh vitae, convallis libero. 
    Phasellus gravida ante scelerisque rhoncus bibendum. Donec finibus metus quis dolor euismod cursus. Nullam maximus nibh id tortor aliquam, id placerat diam blandit. 
    Integer ut purus nec magna bibendum consectetur. Nulla rhoncus, risus sodales pharetra consectetur, urna nunc dapibus sem, vel auctor lectus leo sed ante. 
    Ut hendrerit fringilla justo in venenatis. Nam feugiat lectus metus, eget lacinia tortor placerat vel. Donec condimentum in nibh quis imperdiet. 
    In auctor finibus porttitor. Etiam viverra ipsum at risus posuere convallis.

    Etiam porta laoreet interdum. Nunc consectetur venenatis nisl congue cursus. Curabitur vestibulum felis justo, vitae tempus nunc iaculis id. 
    In pharetra urna ut purus congue blandit. Cras eu molestie felis. Morbi vitae massa et ipsum fringilla sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nunc sodales lacus nulla, et sollicitudin mi malesuada ac. Sed orci quam, ornare a elit at, pharetra pharetra dolor. Suspendisse augue sem, mollis vitae massa eu, aliquam congue nibh. 
    Curabitur placerat tortor nec ligula ornare, sed sollicitudin sem tempus. Duis fringilla nisi vitae porttitor pretium. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis sollicitudin velit.`

    return (
        <div className="Main">
            <Welcome />
            <Contact />
            <Photo1 />
            <Photo2 />
            <Highlights />
            <Ladder />
            <News />
                <div className="LatestNews">
                    <LatestNews text={newsText}></LatestNews>
                </div>
            <NextGames>
                <CarouselItem><img src="./images/Round1.jpg" alt="future games" /></CarouselItem>
                <CarouselItem><img src="./images/Round2.jpg" alt="future games" /></CarouselItem>
                <CarouselItem><img src="./images/Round3.jpg" alt="future games" /></CarouselItem>
            </NextGames>
            <OtherScores>
                <CarouselItem><img src="./images/Scores1.jpg" alt="scores" /></CarouselItem>
                <CarouselItem><img src="./images/Scores2.jpg" alt="scores"/></CarouselItem>
                <CarouselItem><img src="./images/Scores3.jpg" alt="scores"/></CarouselItem>
            </OtherScores>
            <Radar />
            <Stats />
        </div>
    )
}