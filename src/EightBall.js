import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const defaultMsg = "Think of a Question";
  const defaultBallColor = "black";

  const getRandAnswer = () => {
    const idx = Math.floor(Math.random() * answers.length);
    const answer = answers[idx];
    setMessage(answer.msg);
    setBallColor(answer.color);
  };

  const reset = () => {
    setMessage(defaultMsg);
    setBallColor(defaultBallColor);
  };

  const [message, setMessage] = useState(defaultMsg);
  const [ballColor, setBallColor] = useState(defaultBallColor);

  return (
    <>
      <div className="EightBall-title">
        <h1>Magic Eightball!</h1>
        <h3>Ask your question, then click on the ball!</h3>
      </div>
      <div
        className="EightBall"
        style={{ backgroundColor: ballColor }}
        onClick={getRandAnswer}
      >
        <h1 className="EightBall-message">{message}</h1>
      </div>
      <button className="EightBall-button" onClick={reset}>
        Reset
      </button>
    </>
  );
};

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
