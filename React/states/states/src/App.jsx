import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter  from './Counter.jsx';
import LikeButton from './LikeButton.jsx';
function App() {
  return (
    <>
      <h1>this is counter page </h1>
      <Counter/>
      <LikeButton/>
    </>
  )
}

export default App
