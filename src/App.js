
import DraggableCard from './DraggableCards';

const cardData = [
  { id: 1, title: "Card One", content: "My Card.", position: { x: 50, y: 100 } },
  { id: 2, title: "Card Two", content: "Mr Azeez card.", position: { x: 300, y: 150 } },
  { id: 3, title: "Card Three", content: "Madame Funmi's card.", position: { x: 550, y: 200 } },
];

const App = () => {
  return (
    <div>
      {cardData?.map((card) => (
        <DraggableCard
          key={card?.id}
          initialPosition={card?.position}
          title={card?.title}
          content={card?.content}
        />
      ))}
    </div>
  );
};

export default App;
