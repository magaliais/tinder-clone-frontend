import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

// // images
import edmundoPhoto from '../../../public/images/edmundo.jpeg';
import juninhoPhoto from '../../../public/images/juninho.jpg';
import robertoPhoto from '../../../public/images/roberto.jpeg';
import violaPhoto from '../../../public/images/viola.png';

import { SwipeableDrawer } from '@material-ui/core';

export function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Juninho",
      photo: juninhoPhoto,
    },
    {
      name: "Viola",
      photo: violaPhoto,
    },
    {
      name: "Roberto",
      photo: robertoPhoto,
    },
    {
      name: "Edmundo",
      photo: edmundoPhoto,
    },
  ]);

  function swiped(direction, nameToDelete) {
    console.log(`removing ${nameToDelete}`);
  }

  function outOfFrame(name) {
    console.log(`${name} left the screen`);
  }

  return (
    <div test="tinder-cards">
      <div className="card-container">
        {people.map((person) => {
          return(
            <TinderCard 
              className="swipe"
              key={person.name} 
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div 
                className="card"
                style={{ backgroundImage: `url(${person.photo})`}}  
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  )
};