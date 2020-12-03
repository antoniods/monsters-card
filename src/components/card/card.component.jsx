import React from 'react';
import './card.styles.css';

export const Card = props => (
<div className="class-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h2> {props.monster.name}</h2>
    <h2> {props.monster.email}</h2>2</div>
);