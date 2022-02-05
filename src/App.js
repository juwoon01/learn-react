import React from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='input_boxes'>
      <InputBox></InputBox>
      <PhoneList></PhoneList>
      </div>
    </div>
  );
}

export default App;
