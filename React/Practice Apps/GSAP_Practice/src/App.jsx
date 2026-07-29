import { useState } from 'react'
import './App.css'
import { GsapTo } from './components/GsapTo'
import { GsapForm } from './components/GsapFrom'
import { GsapFromTo } from './components/GsapFromTo'
import { GsapTimeline } from './components/GsapTimeline'
import { GsapStagger } from './components/GsapStagger'
import { GsapScrollTrigger } from './components/GsapScrollTrigger'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <GsapTo></GsapTo>
      <br />
      <GsapForm></GsapForm>
      <br />
      <GsapFromTo></GsapFromTo>
      <br />
      <GsapTimeline/>
      <br/>
      <GsapStagger/>
      <br/>
      <GsapScrollTrigger/>
    </>
  )
}

export default App
