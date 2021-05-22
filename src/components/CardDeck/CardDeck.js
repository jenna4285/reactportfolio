import React from "react";
import Card from "./Card";

function CardDeck (props) {
return(
    <div className="d-flex justify-content-center">
    <Card>{props.children}</Card>
    </div> 
);
}

export default CardDeck;
