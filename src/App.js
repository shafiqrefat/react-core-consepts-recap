import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Abir' ,'Farhan', 'Shishir', 'Dishan'];
  const friendsAge = [22, 23, 21, 25]
  return (
    <div className="App">
      <FriendsCounter></FriendsCounter>
       <Friend name={friends[0]} age={friendsAge[3]}></Friend>
       <Friend name={friends[1]} age={friendsAge[2]}></Friend>
       <Friend name={friends[2]} age={friendsAge[1]}></Friend>
       <Friend name={friends[3]} age=''></Friend>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

const friendStyle = {
  border:'2px solid purple',
  margin:'15px',
  borderRadius:'25px',
  backgroundColor:'gray'
}
const buttonStyle = {
  margin:'15px 10px 0 0',
  padding:'10px',
  borderRadius:'10px',
  backgroundColor:'purple',
  color:'white'
}
function Friend(props){
  return  <div style={friendStyle}>
    <h2>Friends are like family. Myself {props.name} . </h2>
<h1>Everyone's time is limited. You have to done within {props.age || 29} years.</h1>
  </div>
}

function FriendsCounter(){
  const [count,setCount] = useState(0);
  const handleClickAdd = () => setCount(count+1);
  const handleClickRemove = () => {
    if(count>0){
      setCount(count-1)
    }
    else{
      alert("Your friend list is empty")
    }
  };
  return (
    <div>
      <button onClick={handleClickAdd} style={buttonStyle}>Add Friend</button>
      <button onClick={handleClickRemove} style={buttonStyle}>Remove Friend</button>
      <h3>Number of Friends : {count}  </h3>
    </div>
  )
}

export default App;
