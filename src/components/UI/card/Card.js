import { useSelector } from "react-redux";
import { selectCards } from "../../../store/card-slice";
import "./Card.css";

import clubs_2 from "../../../assets/images/cards/2_of_clubs.png";
import diamonds_2 from "../../../assets/images/cards/2_of_diamonds.png";
import hearts_2 from "../../../assets/images/cards/2_of_hearts.png";
import spades_2 from "../../../assets/images/cards/2_of_spades.png";

import clubs_3 from "../../../assets/images/cards/3_of_clubs.png";
import diamonds_3 from "../../../assets/images/cards/3_of_diamonds.png";
import hearts_3 from "../../../assets/images/cards/3_of_hearts.png";
import spades_3 from "../../../assets/images/cards/3_of_spades.png";

import clubs_4 from "../../../assets/images/cards/4_of_clubs.png";
import diamonds_4 from "../../../assets/images/cards/4_of_diamonds.png";
import hearts_4 from "../../../assets/images/cards/4_of_hearts.png";
import spades_4 from "../../../assets/images/cards/4_of_spades.png";

import clubs_5 from "../../../assets/images/cards/5_of_clubs.png";
import diamonds_5 from "../../../assets/images/cards/5_of_diamonds.png";
import hearts_5 from "../../../assets/images/cards/5_of_hearts.png";
import spades_5 from "../../../assets/images/cards/5_of_spades.png";

import clubs_6 from "../../../assets/images/cards/6_of_clubs.png";
import diamonds_6 from "../../../assets/images/cards/6_of_diamonds.png";
import hearts_6 from "../../../assets/images/cards/6_of_hearts.png";
import spades_6 from "../../../assets/images/cards/6_of_spades.png";

import clubs_7 from "../../../assets/images/cards/7_of_clubs.png";
import diamonds_7 from "../../../assets/images/cards/7_of_diamonds.png";
import hearts_7 from "../../../assets/images/cards/7_of_hearts.png";
import spades_7 from "../../../assets/images/cards/7_of_spades.png";

import clubs_8 from "../../../assets/images/cards/8_of_clubs.png";
import diamonds_8 from "../../../assets/images/cards/8_of_diamonds.png";
import hearts_8 from "../../../assets/images/cards/8_of_hearts.png";
import spades_8 from "../../../assets/images/cards/8_of_spades.png";

import clubs_9 from "../../../assets/images/cards/9_of_clubs.png";
import diamonds_9 from "../../../assets/images/cards/9_of_diamonds.png";
import hearts_9 from "../../../assets/images/cards/9_of_hearts.png";
import spades_9 from "../../../assets/images/cards/9_of_spades.png";

import clubs_10 from "../../../assets/images/cards/10_of_clubs.png";
import diamonds_10 from "../../../assets/images/cards/10_of_diamonds.png";
import hearts_10 from "../../../assets/images/cards/10_of_hearts.png";
import spades_10 from "../../../assets/images/cards/10_of_spades.png";

import clubs_jack from "../../../assets/images/cards/jack_of_clubs2.png";
import diamonds_jack from "../../../assets/images/cards/jack_of_diamonds2.png";
import hearts_jack from "../../../assets/images/cards/jack_of_hearts2.png";
import spades_jack from "../../../assets/images/cards/jack_of_spades2.png";

import clubs_king from "../../../assets/images/cards/king_of_clubs2.png";
import diamonds_king from "../../../assets/images/cards/king_of_diamonds2.png";
import hearts_king from "../../../assets/images/cards/king_of_hearts2.png";
import spades_king from "../../../assets/images/cards/king_of_spades2.png";

import clubs_queen from "../../../assets/images/cards/queen_of_clubs2.png";
import diamonds_queen from "../../../assets/images/cards/queen_of_diamonds2.png";
import hearts_queen from "../../../assets/images/cards/queen_of_hearts2.png";
import spades_queen from "../../../assets/images/cards/queen_of_spades2.png";

import clubs_ace from "../../../assets/images/cards/ace_of_clubs.png";
import diamonds_ace from "../../../assets/images/cards/ace_of_diamonds.png";
import hearts_ace from "../../../assets/images/cards/ace_of_hearts.png";
import spades_ace from "../../../assets/images/cards/ace_of_spades2.png";

const renderImage = (card) => {
  switch (card.value) {
    case "1":
      switch (card.state) {
        case "S":
          return spades_ace;
        case "C":
          return clubs_ace;
        case "D":
          return diamonds_ace;
        case "H":
          return hearts_ace;
      }
      break;
    case "2":
      switch (card.state) {
        case "S":
          return spades_2;
        case "C":
          return clubs_2;
        case "D":
          return diamonds_2;
        case "H":
          return hearts_2;
      }
      break;
    case "3":
      switch (card.state) {
        case "S":
          return spades_3;
        case "C":
          return clubs_3;
        case "D":
          return diamonds_3;
        case "H":
          return hearts_3;
      }
      break;
    case "4":
      switch (card.state) {
        case "S":
          return spades_4;
        case "C":
          return clubs_4;
        case "D":
          return diamonds_4;
        case "H":
          return hearts_4;
      }
      break;
    case "5":
      switch (card.state) {
        case "S":
          return spades_5;
        case "C":
          return clubs_5;
        case "D":
          return diamonds_5;
        case "H":
          return hearts_5;
      }
      break;
    case "6":
      switch (card.state) {
        case "S":
          return spades_6;
        case "C":
          return clubs_6;
        case "D":
          return diamonds_6;
        case "H":
          return hearts_6;
      }
      break;
    case "7":
      switch (card.state) {
        case "S":
          return spades_7;
        case "C":
          return clubs_7;
        case "D":
          return diamonds_7;
        case "H":
          return hearts_7;
      }
      break;
    case "8":
      switch (card.state) {
        case "S":
          return spades_8;
        case "C":
          return clubs_8;
        case "D":
          return diamonds_8;
        case "H":
          return hearts_8;
      }
      break;
    case "9":
      switch (card.state) {
        case "S":
          return spades_9;
        case "C":
          return clubs_9;
        case "D":
          return diamonds_9;
        case "H":
          return hearts_9;
      }
      break;
    case "10":
      switch (card.state) {
        case "S":
          return spades_10;
        case "C":
          return clubs_10;
        case "D":
          return diamonds_10;
        case "H":
          return hearts_10;
      }
      break;
    case "J":
      switch (card.state) {
        case "S":
          return spades_jack;
        case "C":
          return clubs_jack;
        case "D":
          return diamonds_jack;
        case "H":
          return hearts_jack;
      }
      break;
    case "Q":
      switch (card.state) {
        case "S":
          return spades_queen;
        case "C":
          return clubs_queen;
        case "D":
          return diamonds_queen;
        case "H":
          return hearts_queen;
      }
      break;
    case "K":
      switch (card.state) {
        case "S":
          return spades_king;
        case "C":
          return clubs_king;
        case "D":
          return diamonds_king;
        case "H":
          return hearts_king;
      }
      break;
  }
};

function Card(props) {
  const card = props.model;

  return (
    <div className={"Card"}>
      <img src={renderImage(card)} alt="" />
    </div>
  );
}

export default Card;
