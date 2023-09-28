import React from "react";
import "./PokemonCard.css";
import useFlip from "./hooks/useFlip"; 

function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flipCard] = useFlip();

  return (
    <div onClick={flipCard} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`${name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`${name} back`} />
        </div>
      )}
    </div>
  );
}

/*The outer div has an onClick handler to call the flipCard function, allowing the user to flip the card by clicking on it.
It uses the isFacingUp variable to determine which side of the card to show.
ex;
(If true, it renders the front side with the Pokemon name, image, and stats.
If false, it renders the back side with just the card back image.)
The front side maps over the stats array prop to render each stat name and value in a list. Each side renders the appropriate image passed in via props.*/

export default PokemonCard;



// import React, { useState } from "react";
// import "./PokemonCard.css";

// /* Renders a single pokemon card. */
// function PokemonCard({ front, back, name, stats }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
//   return (
//     <div onClick={flipCard} className="PokemonCard Card">
//       {isFacingUp ? (
//         <div className="PokemonCard-front">
//           <img src={front} alt={`{name} front`} />
//           <div>
//             <p className="PokemonCard-name">{name}</p>
//             <ul className="PokemonCard-stats">
//               {stats.map(stat => (
//                 <li key={stat.name}>
//                   <em>{stat.name}</em>: {stat.value}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div className="PokemonCard-back">
//           <img src={back} alt={`{name} back`} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default PokemonCard;