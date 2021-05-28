import { useState, useEffect } from 'react'
import { useCards, createCard } from '../graphql/api'
import {cardList} from '../styles/card'

function getCards(data) {
  return data ? data.allCards.data.reverse() : []
}

export default function Hero(props) {
  const query = `query findCards {
    allCards {
      data {
        id
        name
        description
        entity
        actionType
        attack
        shield
        energy
        ability
        symbol
        frequency
        energyEfficiency
        extraDamage
        cardOrderManipulation
        advantage
        team
        image
        specialText
        multiAttack
        releaseDate
        role
        set
        color
      }
    }
  }`
  const postQuery = `mutation CreateCard{
    createCard(data: {
        name: "big punch"
        description: "punch that hurts"
        set: "Starter set"
        id: 0
        entity: RANGER
      }) {
        name
        description
        set
        id
        entity
      }
  }`
  const { data, errorMessage } = useCards(query)
 
  return (
    <div /*className={heroContainer.className}*/>
      <div /*className={cardEntries.className}*/>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : !data ? (
          <p>Loading cards...</p>
        ) : (
          data.allCards.data.map((card) => {
            return (
              <div className={cardList.className}>
                <ul className={cardList.className}>
                  <li>{card.id}</li>
                  <li>{card.name}</li>
                  <li>{card.description}</li>
                  <li>{card.entity}</li>
                  <li>{card.actionType}</li>
                  <li>{card.attack}</li>
                  <li>{card.shield}</li>
                  <li>{card.energy}</li>
                  <li>{card.ability}</li>
                  <li>{card.symbol}</li>
                  <li>{card.frequency}</li>
                  <li>{card.energyEfficiency}</li>
                  <li>{card.extraDamage}</li>
                  <li>{card.cardOrderManipulation}</li>
                  <li>{card.advantage}</li>
                  <li>{card.team}</li>
                  <li>{card.image}</li>
                  <li>{card.specialText}</li>
                  <li>{card.multiAttack}</li>
                  <li>{card.releaseDate}</li>
                  <li>{card.role}</li>
                  <li>{card.settings}</li>
                  <li>{card.color}</li>
                </ul>
              </div>
            )
          })
        )
      }
      <button onClick={createCard(postQuery)}>Add Card</button>
      </div>
      {/* {heroContainer.styles} */}
      {/* {hero.styles} */}
    </div>
  )
}