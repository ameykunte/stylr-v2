import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import './Shop.css'

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png'
  },
  {
    name: 'Erlich Bachman', 
    url: 'https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png'
  },
  {
    name: 'Monica Hall',   
    url: 'https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png'
  },
  {
    name: 'Jared Dunn',
    url: 'https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png'
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