import Header from "./assets/Components/Header";
import Hero from "./assets/Components/Hero";
import Footer from "./assets/Components/Footer";
import "./index.css";
import Card from "./assets/Components/Card";
import cardData from "./assets/Components/cardData";

const App = () => {
  let card = cardData.map((cardItem, index) => {
    return (

      <Card
        key={index}
        cardContent={{
          img: cardItem.img,
          name: cardItem.name,
          desc: cardItem.desc 
        }}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container" >
        <div className="column-1">
          <h2 className="sec-title">Destinations</h2>
          <div className="card-flex">
            {card}
          </div>
        </div>
        <div className="column-2">
          <h2>Favorites</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};






export default App;
