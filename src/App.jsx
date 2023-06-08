import { useState } from "react";
import Header from "./assets/Components/Header";
import Hero from "./assets/Components/Hero";
import Footer from "./assets/Components/Footer";
import "./index.css";
import Card from "./assets/Components/Card";
import cardData from "./assets/Components/cardData";

const App = () => {
  const [favImg, setFavImg] = useState([]);

  const getFavImg = (img) => {
    setFavImg([...favImg, img]);
  };
  const removeFavImg = (img) => {
    setFavImg([...favImg].filter((currentImg) => {
      return currentImg != img;
    }))
  }







  const userFavImg = favImg.map((img, index) => (
    
      <div className="favImgBox" key={index}>
        {/* <img className="close" src="/src/assets/remove.svg"/> */}
        <img className="favImg" src={img} alt={`Favorite ${index}`}  />
      </div>
  ));

  const cards = cardData.map((cardItem, index) => (
    <Card
      key={index}
      cardContent={{
        img: cardItem.img,
        name: cardItem.name,
        desc: cardItem.desc,
      }}
      getFavImg={getFavImg}
      removeFavImg={removeFavImg}
    />
  ));




  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container">
        <div className="column-1">
          <h2 className="sec-title">Destinations</h2>
          <div className="card-flex">{cards}</div>
        </div>
        <div className="column-2">
          <h2>Favorites</h2>
          <div className="fav-flex">{userFavImg}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;