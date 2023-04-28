import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [player , setPlayer] = useState<any>({
    name: 'Ferrari',
    nickName:'Andrei',
    score: 0
  })

const handleClick = () => {
  const newScore = player.score + 1
  setPlayer({...player,score:newScore})
  player.score++
}

const handleChangeName = (event: ChangeEvent<HTMLInputElement>) =>{
  const newName = event.target.value
  const newPlayer = {...player,name:newName}
  
  setPlayer(newPlayer)
}

const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) =>{
  const newNickName = event.target.value
  
  setPlayer({...player,nickName:newNickName})
}

  return (
    <>
      <h1>Imutabilidade</h1>
      <h2>Dados do jogador</h2>
      <p>
        <h3>Score: {player.score}</h3>
        <button onClick={handleClick} value={player.score}>+</button>
      </p>
      <hr />
      <p>
        <label htmlFor="">Player Name: 
        <input type="text" name='name' onChange={handleChangeName} value={player.name}/>
        </label>
      </p>
      <p>
        <label htmlFor="">Nick Name: 
        <input type="text" name='name' onChange={handleChangeNickName} value={player.nickName}/>
        </label>
      </p>
      <h3>{player.name} | {player.nickName}</h3>
    </>
  )
}

export default App
