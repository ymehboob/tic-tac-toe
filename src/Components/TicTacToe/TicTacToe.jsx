import React, { useRef } from 'react';
import { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import circle1_icon from '../Assets/circle-1.png';
import circle2_icon from '../Assets/circle-2.png';
import circle3_icon from '../Assets/circle-3.png';
import circle4_icon from '../Assets/circle-4.png';
import cross_icon from '../Assets/cross.png';
import cross1_icon from '../Assets/cross-1.png';
import cross2_icon from '../Assets/cross-2.png';
import cross3_icon from '../Assets/cross-3.png';
import cross4_icon from '../Assets/cross-4.png';
import react_logo from '../Assets/logo_light.svg';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) => {
      if (lock) {
        return 0;
      }
      if (count%2 ===0) {
        e.target.innerHTML = `<img src='${cross_icon}'>`;
        data[num]="X";
        setCount(++count);
      }
      else {
        e.target.innerHTML = `<img src='${circle_icon}'>`;
        data[num]="O";
        setCount(++count);
      }

      checkWin();
    }

    const checkWin = () => {
      if (data[0]===data[1] && data[1]===data[2] && data[2]!=="") 
      {
        if (data[2]==="O") {
          box1.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box2.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box3.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
        }
        else if (data[2]==="X") {
          box1.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box2.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box3.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
        }
        won(data[2]);
      }
      else if (data[3]===data[4] && data[4]===data[5] && data[5]!=="") 
      {
        if (data[5]==="O") {
          box4.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box6.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
        }
        else if (data[5]==="X") {
          box4.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box6.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
        }
        won(data[5]);
      }
      else if (data[6]===data[7] && data[7]===data[8] && data[8]!=="") 
      {
        if (data[8]==="O") {
          box7.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box8.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
        }
        else if (data[8]==="X") {
          box7.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box8.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
        }
        won(data[8]);
      }
      else if (data[0]===data[3] && data[3]===data[6] && data[6]!=="") 
      {
        if (data[6]==="O") {
          box1.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box4.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box7.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
        }
        else if (data[6]==="X") {
          box1.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box4.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box7.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
        }
        won(data[6]);
      }
      else if (data[1]===data[4] && data[4]===data[7] && data[7]!=="") 
      {
        if (data[7]==="O") {
          box2.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box8.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
        }
        else if (data[7]==="X") {
          box2.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box8.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
        }
        won(data[7]);
      }
      else if (data[2]===data[5] && data[5]===data[8] && data[8]!=="") 
      {
        if (data[8]==="O") {
          box3.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box6.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${circle3_icon}" alt="circle icon" />`;
        }
        else if (data[8]==="X") {
          box3.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box6.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${cross3_icon}" alt="circle icon" />`;
        }
        won(data[8]);
      }
      else if (data[0]===data[4] && data[4]===data[8] && data[8]!=="") 
      {
        if (data[8]==="O") {
          box1.current.innerHTML = `<img src="${circle1_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${circle1_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${circle1_icon}" alt="circle icon" />`;
        }
        else if (data[8]==="X") {
          box1.current.innerHTML = `<img src="${cross1_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${cross1_icon}" alt="circle icon" />`;
          box9.current.innerHTML = `<img src="${cross1_icon}" alt="circle icon" />`;
        }
        won(data[8]);
      }
      else if (data[0]===data[1] && data[1]===data[2] && data[2]!=="") 
      {
        if (data[2]==="O") {
          box1.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box2.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
          box3.current.innerHTML = `<img src="${circle2_icon}" alt="circle icon" />`;
        }
        else if (data[2]==="X") {
          box1.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box2.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
          box3.current.innerHTML = `<img src="${cross2_icon}" alt="circle icon" />`;
        }
        won(data[2]);
      }
      else if (data[2]===data[4] && data[4]===data[6] && data[6]!=="") 
      {
        if (data[6]==="O") {
          box3.current.innerHTML = `<img src="${circle4_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${circle4_icon}" alt="circle icon" />`;
          box7.current.innerHTML = `<img src="${circle4_icon}" alt="circle icon" />`;
        }
        else if (data[6]==="X") {
          box3.current.innerHTML = `<img src="${cross4_icon}" alt="circle icon" />`;
          box5.current.innerHTML = `<img src="${cross4_icon}" alt="circle icon" />`;
          box7.current.innerHTML = `<img src="${cross4_icon}" alt="circle icon" />`;
        }
        won(data[6]);
      }

    }

    const won = (winner) => {
      setLock(true);
      if (winner==="X") {
        titleRef.current.innerHTML = `<img src='${cross_icon}'/> is the Winner!`
      }
      else if (winner==="O") {
        titleRef.current.innerHTML = `<img src='${circle_icon}'/> is the Winner!`
      }
    }

    const reset = () => {
      setLock(false);
      data = ["","","","","","","","",""];
      titleRef.current.innerHTML = `<img src='${react_logo}'/> Play X O X`;
      box_array.map((e)=>{
        e.current.innerHTML = "";
        return 0;
      })
    }

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        <img src={react_logo} alt="React Logo"/>
        Play X O X
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}} ></div>
          <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}} ></div>
          <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}} ></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}} ></div>
          <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}} ></div>
          <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}} ></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}} ></div>
          <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}} ></div>
          <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}} ></div>
        </div>
      </div>

      <button className="reset" onClick={() =>{reset()}}>Reset</button>

      <div>Built with React by <a href="https://www.linkedin.com/in/yohannm/" target="_blank" rel="noreferrer">Yohann</a></div>
    </div>
  )

}

export default TicTacToe
