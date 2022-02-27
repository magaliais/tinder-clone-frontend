import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from '../../services/axios';


export function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/tinder/cards');
      setPeople(request.data);
    }

    fetchData();
  }, [])

  console.log(people);

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
                style={{ backgroundImage: `url(${person.imgUrl})`}}  
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