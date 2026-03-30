import pizzaImg from "./assets/pizza-with-pepperoni2.png";

function Hero() {
  return (
    <div className="hero">
      <div className="slogan">
        <h3>Enjoy the <br />Process</h3>
        <h4>Do it by yourself!</h4>
      </div>
      <img id="ppimg" src={pizzaImg} alt="pizza with pepperoni and salad" />
    </div>
  );
}

export default Hero;