import  { useState } from "react";
import heart from "./assets/heart.svg";




const Card = (card) => {
    const [favBtnText, setFavBtnText] = useState("Add To Favorite");
    const [btnClass, setBtnClass] = useState("");

    const addToFav = () => {
        setFavBtnText((prevText) => {
            if (prevText === "Add To Favorite") {
                return "Added To Favorite";
            } else {
                return "Add To Favorite";
            }
        });

        setBtnClass((prevClass) => {
            if (prevClass === "") {
                return "active";
            } else {
                return "";
            }
        });
    };

    return (
        <div className={`card ${btnClass}`}>
            <img src={heart} className="heart-icon"/>
            <img src={card.cardContent.img} alt={card.cardContent.name} />
            <h3>{card.cardContent.name}</h3>
            <p>{card.cardContent.desc}</p>
            <button  onClick={addToFav}>
                {favBtnText}
            </button>
        </div>
    );
};

export default Card;
