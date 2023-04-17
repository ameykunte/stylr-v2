import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import './Shop.css'
//This is a React component that displays a set of cards containing information about products and allows the user to swipe left or right to reject or accept them. The component uses the react-tinder-card library to implement the swiping functionality.

//The db variable holds an array of objects, where each object represents a product and contains its name, price, and an image URL.

// The component uses state hooks to manage the current index of the card being displayed (currentIndex) and the direction of the last swipe (lastDirection). It also uses a useMemo hook to create an array of refs to the child components, which are the individual cards.

//The swiped function is called when a card is swiped, and it updates the lastDirection state and the currentIndex state based on the direction of the swipe.

//The outOfFrame function is called when a card is swiped off the screen, and it logs a message to the console. If the card is swiped off the screen before the goBack function is called to restore it, the function restores the card to its original position.

//The swipe function is called when the user clicks on one of the swipe buttons, and it calls the swipe function of the child component to perform the swipe.

//The goBack function is called when the user clicks on the "Undo swipe" button, and it restores the most recently swiped card to its original position.

//Finally, the component renders a container with all the cards, and three buttons to swipe left, swipe right, or undo the most recent swipe. It also displays a message indicating the direction of the last swipe or prompting the user to swipe a card or press a button.
const db = [
  {
    name: 'Amazon Brand - Symbol Men Formal Shirt',
    price: '₹ 499.00',
    url: 'https://m.media-amazon.com/images/I/71rPzF8rYQL._UX466_.jpg'
  },
  {
    name: 'Levis Mens 512 Slim Tapered Fit Jeans', 
    price: '₹ 1,999.00',
    url: 'https://m.media-amazon.com/images/I/51XUSlpm9fL._UX679_.jpg'
  },
  {
    name: 'Urbano Fashion Mens Slim Fit Black Stretch Jeans',
    price: '₹ 1,499.00',
    url: 'https://m.media-amazon.com/images/I/611hFiiUv4L._UX679_.jpg'

  },
  {
    name:'Van Heusen Mens Regular Fit Polo Shirt',
    price: '₹ 1,499.00',
  
    url: 'https://m.media-amazon.com/images/I/91uC3XLtnNL._UX466_.jpg'
  }

]

function Shop () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)

      
    
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', height: "90vh", overflow: "hidden"}}>
      <div style={{position: "relative"}}>
        <div className='cardContainer'>
            {db.map((character, index) => (
            <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
                <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className='card'
                >
                    <h3>{character.name}</h3>
                    <h2>{character.price}</h2>
                    
                </div>

                <div>
                    
                </div>
            </TinderCard>
            ))}

        </div>

        <div className='buttons' style={{position:"absolute", bottom: 0}}>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
            <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
        </div>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  )
}

export default Shop
