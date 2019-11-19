import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const messages = ['You Are an Amazing Person', 'Your Smile', 'The Way it Feels When You Put My Arm Around You', 'When You Kiss Me', 'Cuddling Up With You At Night', 'Your Beauty, Inside and Out', 'Your Memes', 'Your Sense Of Humor', 'Your Friendship']
  const [count, setCount] = useState(0)

  const counter = () => {
    if (count <= messages.length - 1){
      setCount(count + 1)
    }
    else{
      setCount(0)
    }
  }

  return (
    <div className="App" style={{marginTop: '100px'}}>
      <h2>Things I Might Just Kind Of Like About You</h2>
      <div>
      <h4>{messages[count]}</h4>
      </div>
      <button onClick = {counter} style={{marginTop:'50px', borderRadius:'5px', background:'purple', color:'white', padding:'10px', border:'none', outline:'none' }}>Click Me</button>
    </div>
  );
}

export default App;
