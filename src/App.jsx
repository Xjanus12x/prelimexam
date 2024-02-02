import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BibleQuiz from './components/biblequiz'
import './App.css'
var hide = true;

function App() {
  
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);
  return (
    <>
      <BibleQuiz isCorrect1={true} isCorrect2={true} isCorrect3={false} isHidden={checked}/>
        <button onClick={toggleChecked}>Display answer</button>
    </>
  )
}

export default App
