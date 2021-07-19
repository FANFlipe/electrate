import React from 'react';
import Greeting from './components/Greeting'
import Bold from './components/Bold';
import ChangeColor from './components/ChangeColor';
const App = () => { //arrow fuction
    return (       
    <>
    <Greeting name='Felipe'age={34}/>
     <Greeting name='Favoretto' age={45}/>
   Alguma informação em <Bold>negrito </Bold>
   <ChangeColor/>
  </>
)
    }
export default App;
