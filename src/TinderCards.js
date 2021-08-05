import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase.js';
import './TinderCards.css';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        });

        return () => {
            //this is clean up code, before attching with new listner first detach with old listner
            unsubscribe();
        };

    }, [people]);
    console.log(setPeople);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: '+nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name+ "left the screen");
    }
    return (
        <div className="tindercards">

            <div className="tinderCards__cardContainer">
            {
                people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                        <h3 style={{color: 'white'}}>{person.name}</h3>
                    </div>

                    </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
