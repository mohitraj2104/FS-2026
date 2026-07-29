import React from 'react'
import {Hero} from './Hero'
import CustomButton from './CustomButton'
import './App.css'
export default function App() {
  let style = {
    color: "red",
    backgroundColor: "yellow",
    padding: "1rem 2rem",
    margin: "10px",
    borderRadius: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  }

  let btn1 = {...style};
  btn1.backgroundColor = "white";
  btn1.border= "3px solid lightblue"
  let login = true;

  return (
    <div>
      <Hero props="Hello, I am Hero!" login={login} age={19} welcome={false} />
      {/*<Hero/>
      <Hero/>
      <Hero/>
      <Hero/>*/}
      <div style={{ display: "flex", gap: "20px" }}></div>
      <CustomButton title="Login" style={style} />
      <CustomButton title="Sign Up" style={btn1} />
      <CustomButton  style={btn1} />
    </div>
  )
}
