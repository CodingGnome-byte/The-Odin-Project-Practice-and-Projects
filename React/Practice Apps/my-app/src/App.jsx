import { useState } from 'react'
import './App.css'
import { GsapTo } from './pages/GsapTo'
import { GsapForm } from './pages/GsapFrom'
import { GsapFromTo } from './pages/GsapFromTo'
import { GsapTimeline } from './pages/GsapTimeline'
import { GsapStagger } from './pages/GsapStagger'

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
      <GsapTimeline></GsapTimeline>
      <br/>
      <GsapStagger></GsapStagger>
    </>
  )
}

export default App
