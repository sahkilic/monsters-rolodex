import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

// Exporting a function component, rtaher than a class one.
// Props are just properties, so when we we use this <CardList/> we can add any property like name="Sah" and that will be the prop
// Our CardList component shouldn't render the monsters, its just in charge of making the list
export const CardList = (props) => {
  // props has a property called children, which is what we pass inbetween the tags when we use it.
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((el) => (
        <Card key={el.id} monster={el} />
      ))}
    </div>
  );
};
