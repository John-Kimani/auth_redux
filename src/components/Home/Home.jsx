import React from 'react';
import "./home.css";
import { pizzaMenu } from './Data';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';

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
    <section className="section home">
        <div className="home__container">
            <div className="home__content container grid">
                {pizzaMenu.map(({id, pizza_name, quantity, description, price}) => {
                    return(
                        <div className="item__card" key={id}>
                            <h3 className="item__card-title">{pizza_name}</h3>
                            <div className="item__card-description">
                                <p>{description}</p>
                                <p>In Stock: {quantity}</p>
                                <p>Price: {price}</p>
                            </div>
                            <div className="item__card-footer">
                                <button className='cart__button' onClick={handleAddToCart}>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Home