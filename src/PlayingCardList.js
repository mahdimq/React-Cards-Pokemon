import React from 'react';
import useAxios from './hooks/useAxios';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [cards, addCard, cleanup] = useAxios(`https://deckofcardsapi.com/api/deck/new/draw/`);
	// const [cards, setCards] = useState([]);
	// const addCard = async () => {
	//   const response = await axios.get(
	//     "https://deckofcardsapi.com/api/deck/new/draw/"
	//   );
	//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
	// };
	return (
		<div className='PlayingCardList'>
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard()}>Add a playing card!</button>
				<button onClick={() => cleanup()}>Remove all cards!</button>
			</div>
			<div className='PlayingCardList-card-area'>
				{cards.map((cardData) => (
					<PlayingCard key={cardData.id} front={cardData.cards[0].image} />
				))}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
