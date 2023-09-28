import React, { useState } from "react";
/*import uuid from "uuid";*/
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const addCard = async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
    );
    setCards(cards => [...cards, { ...response.data, id: uuidv4() }]);
  };
  /*Update the cards state by spreading the previous cards, and adding the new card data with a unique id.
This uses the functional update form of setCards to avoid issues with closures.*/
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;



// import React from "react";
// import { v4 as uuidv4 } from "uuid";
// import PlayingCard from "./PlayingCard";
// import "./PlayingCardList.css";
// import useAxios from "./hooks/useAxios"; 

// function PlayingCardList() {
//   const [cards, addCard] = useAxios(
//     "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
//     responseData => ({
//       id: uuidv4(),
//       front: responseData.cards[0].image,
//     })
//   );

//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={addCard}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(cardData => (
//           <PlayingCard key={cardData.id} front={cardData.front} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlayingCardList;


// Original code snippet from PlayingCardList.js
// import React, { useState } from "react";
// import {v1 as uuid} from "uuid";
// import axios from "axios";
// import PlayingCard from "./PlayingCard";
// import "./PlayingCardList.css";

// /* Renders a list of playing cards.
//  * Can also add a new card at random. */
// function CardTable() {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={addCard}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(cardData => (
//           <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//         ))}
//       </div>
//     </div>
//   );
// }

// CardTable.defaultProps = {};

// export default CardTable;