import { useState } from 'react'
import profile from '/profile.jpg'
import './App.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="page">
      <Bio />
      <UseSlide count={count} setCount={setCount} />
    </div>
  )
}

function Bio() {
  return (
    <div id='profile'>
      <div><img id='selfie' src={profile}/></div>
      <div><h2 id='name'>Chris Hu</h2></div>
      <div>chrishudev@yahoo.com</div>
      <div>(313) 312-0260</div>
      <div>Michigan</div>
    </div>
  )
}

function UseSlide({count, setCount}) {
  return(
    <div id='slides'>
      <Slide count={count} />
      <button onClick={() => setCount((count) => bound_slide(count + 1))}>
        count is {count}
      </button>
    </div>
  )
}

function Slide({count}) {
  switch(count) {
    case 0:
      return(
        <p>Slide 0!!!</p>
      )
    case 1:
      return(
        <p>Slide 1</p>
      )
    case 2:
      return (
        <p>Slide 2!!!</p>
      )
    default:
      return (
        <p>Slide no longer counting!!!</p>
      )
  }
}

function bound_slide(count) {
  if (count < 0) {
    return 3
  }
  if (count > 3) {
    return 0
  }
  return count
}

export default App
*/