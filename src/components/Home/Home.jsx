import React from "react";
import "./home.css";
import { pizzaMenu } from "./Data";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  // const [item, setItem ] = useState({});

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: 3,
        pizza_name: "Meat Deluxe",
        quantity: 10,
        price: 570,
        description: "For meat lovers, taste variant from beef to mutton.",
      })
    );
  };

  return (
    <section className="container menu__section ">
      <div className="section__title">
        <h1>Our Menu</h1>
      </div>

      <div className="menu__section-content grid">
      {pizzaMenu.map(
            ({ id, image, pizza_name, quantity, description, price }) => {
              return (
                <div className="item__card" key={id}>
                  <div className="card__infomation">
                    <div className="card__image">
                        <img src={image} alt={pizza_name} />
                    </div>
                    <div className="item__description">
                      <h3 className="item__card-title">{pizza_name}</h3>
                      <div className="item__card-description">
                        <p>{description}</p>
                        <p>Price: {price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="item__card-footer">
                    <p>In Stock: {quantity}</p>
                    <button className="cart__button" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            }
          )}
      </div>
              {/* <div className="home__content">
          {pizzaMenu.map(
            ({ id, image, pizza_name, quantity, description, price }) => {
              return (
                <div className="item__card" key={id}>
                  <div className="card__infomation">
                    <div className="card__image">
                        <img src={image} alt={pizza_name} />
                    </div>
                    <div className="item__description">
                      <h3 className="item__card-title">{pizza_name}</h3>
                      <div className="item__card-description">
                        <p>{description}</p>
                        <p>Price: {price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="item__card-footer">
                    <p>In Stock: {quantity}</p>
                    <button className="cart__button" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div> */}
    </section>
  );
};

export default Home;
