import React, { useState } from "react";

const DreamInterpreter = () => {
  const [dream, setDream] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleSubmit = async () => {
    const prompt = `this was my dream: ${dream}, can u interpret it and tell me what it means?`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a dream interpreter that helps people make sense of their dreams. Do not exceed 3-4 sentences in your response.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 200,
      }),
    });

    const data = await response.json();

    console.log(data);
    if (data.choices && data.choices.length > 0) {
      const responseData = data.choices[0].message.content.trim();
      const interpretationResponse = responseData.split("\n").pop();
      setInterpretation(interpretationResponse);
    } else {
      console.error("No interpretation received from the API.");
      setInterpretation("Unable to interpret the dream.");
    }
  };

  return (
    <div>
      <textarea
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        placeholder="Describe your dream..."
      ></textarea>
      <button onClick={handleSubmit}>Interpret</button>
      {interpretation && (
        <div>
          <strong>Interpretation:</strong> {interpretation}
        </div>
      )}
    </div>
  );
};

export default DreamInterpreter;
