import React from "react";
import { useState } from "react";



function LatestNews (props) {
  const maxChars = 350;

  const [hidden, setHidden] = useState(true);

  if (props.text.length <= maxChars) {
    return (
      <span>{props.text}</span>
    );
  }

 return (
    <span>
      {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> Read more</a>
      ) : (
        <a onClick={() => setHidden(true)}> Read less</a>
      )}
    </span>
  );

}

export default LatestNews;