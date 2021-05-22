import React from "react";
import Card from "../Card/Card";

function CardDeck (props) {
return(
    <div class="card-group ">
        <Card>{props.children}</Card>
    </div> 
);
}

export default CardDeck;
