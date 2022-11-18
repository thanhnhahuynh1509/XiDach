import { useSelector } from "react-redux";
import { selectCards } from "../../store/card-slice";
import Card from "../UI/card/Card";

function ContainCard(props) {
  const cards = useSelector(selectCards);

  return (
    <>
      <div className="ContainCard">
        <div className="ContainCard-container">
          <Card model={{ id: 1, value: "J", state: "S" }} />
          <Card model={{ id: 1, value: "K", state: "D" }} />
          <Card model={{ id: 1, value: "1", state: "H" }} />
          <Card model={{ id: 1, value: "Q", state: "C" }} />
        </div>
      </div>
    </>
  );
}

export default ContainCard;
