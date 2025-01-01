import React, { useState } from "react";
import axios from "axios";
import "./Bot.css";
const Bot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAhm9J4KCsrfhb7tXdBnukuqFiOEESf82s",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: question }],
          },
        ],
      },
    });

    setAnswer(
      response["data"]["candidates"]["0"]["content"]["parts"]["0"]["text"]
    );
  }
  return (
    <div>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={20}
        cols={20}
      ></textarea>
      <button onClick={generateAnswer}>Generate</button>
      <p>{answer}</p>
    </div>
  );
};

export default Bot;
