import React from 'react';
import './card-list.styles.css';

export const CardList = props => {
    return <div className='card-list'>
                <CardList monster = {this.state.monsters}>
                {this.state.monsters.map(monster => (
                <h1 key={monster.id}> {monster.name}</h1>
                ))}
            </CardList>
           </div>;
}