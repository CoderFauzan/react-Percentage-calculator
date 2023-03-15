import React from 'react';
import './style.scss';
import { useMemo, useState } from 'react';

const Default_sub1 = 50;
const Default_sub2 = 50;
const Default_sub3 = 50;
const Default_sub4 = 50;
const Default_sub5 = 50;

export default function App() {
  const [sub1, setSub1] = useState(Default_sub1);
  const [sub2, setSub2] = useState(Default_sub2);
  const [sub3, setSub3] = useState(Default_sub3);
  const [sub4, setSub4] = useState(Default_sub4);
  const [sub5, setSub5] = useState(Default_sub5);

  function onSubChange1(event) {
    const change1 = event.target.value;
    setSub1(change1);
  }

  function onSubChange2(event) {
    const change2 = event.target.value;
    setSub2(change2);
  }

  function onSubChange3(event) {
    const change3 = event.target.value;
    setSub3(change3);
  }

  function onSubChange4(event) {
    const change4 = event.target.value;
    setSub4(change4);
  }

  function onSubChange5(event) {
    const change5 = event.target.value;
    setSub5(change5);
  }

  const output = useMemo(() => {
    const sum =
      parseInt(sub1) +
      parseInt(sub2) +
      parseInt(sub3) +
      parseInt(sub4) +
      parseInt(sub5);
    // console.log(sum);
    return ((sum / 500) * 100).toFixed(1);
  }, [sub1, sub2, sub3, sub4, sub5]);

  return (
    <main>
      <h1>PERCENTAGE % CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Subject 1: {sub1} </p>
        <input
          className="input-slider"
          onChange={onSubChange1}
          type="range"
          step="1"
          min="0"
          max="100"
        />
        <p className="slider-output">Subject 2: {sub2} </p>
        <input
          className="input-slider"
          onChange={onSubChange2}
          type="range"
          step="1"
          min="0"
          max="100"
        />
        <p className="slider-output">Subject 3: {sub3} </p>
        <input
          className="input-slider"
          onChange={onSubChange3}
          type="range"
          step="1"
          min="0"
          max="100"
        />
        <p className="slider-output">Subject 4: {sub4} </p>
        <input
          className="input-slider"
          onChange={onSubChange4}
          type="range"
          step="1"
          min="0"
          max="100"
        />
        <p className="slider-output">Subject 5: {sub5} </p>
        <input
          className="input-slider"
          onChange={onSubChange5}
          type="range"
          step="1"
          min="0"
          max="100"
        />
      </div>
      <div className="output-section">
        <p>Your Percentage is :</p>
        <p className="output">{output} %</p>
      </div>
    </main>
  );
}
