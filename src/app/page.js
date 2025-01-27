import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="body">
      <div id="container">
        <p id="title">Online Timer & Stopwatch</p>
        <div id="time">00:00:00</div>
        <div id="buttonContainer">
          <button id="startButton" className="button">Start</button>
          <button id="stopButton" className="button">Stop</button>
          <button is="resetButton" className="button">Reset</button>
        </div>
      </div>
    </div>
  );
}
