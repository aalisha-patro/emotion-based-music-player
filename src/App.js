import './App.css';
import {useState,useEffect} from 'react';
import MultiPlayer from './components/MultiPlayer';


function App() {
 
  const [emotion, setEmotion]= useState('Angry');
 
  useEffect(()=>{

    fetch('/emotion').then(res => res.json()).then(data =>{
      setEmotion(data.emotion);
    })
  },[emotion]);

  function retryemo(){
    fetch('/emotion').then(res => res.json()).then(data =>{
      setEmotion(data.emotion);
    })
  }



  return (
    
    <div className="App">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKd2NasGKhgF0NuhRjtcaS_FQvffe4Uwn5cA&usqp=CAU"/>
      <h2 className="heading2"> Odisha University of Technology and Research (2019-2023)</h2>
      <h2 className="heading">We detected your emotion to be:  
      <span className="emotion"> {emotion} </span></h2>
      <button className="retry" onClick = {retryemo}>
      <MultiPlayer emotion={emotion} />
      </button>
      <div >
      
      </div>
    </div>
  );
}

export default App;
