import React from "react";
import propTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Fried Chicken",
    image: "https://www.amnews.co.kr/news/photo/201706/22467_11650_433.jpg",
    rating: 10,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 10,
  },
  {
    id: 3,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwoochonfood.com%2Fwp-content%2Fuploads%2F2019%2F05%2F%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-Napa-Cabbage-Kimchi.jpg&f=1&nofb=1",
    rating: 9,
  },
  {
    id: 4,
    name: "Sushi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.siksinhot.com%2Fplace%2F1465397707971416.png&f=1&nofb=1",
    rating: 8,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>{rating}/10</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
