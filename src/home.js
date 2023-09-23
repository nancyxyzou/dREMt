import React, { useState } from "react";

const DreamInterpreter = () => {
  const [dream, setDream] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleSubmit = async () => {
    const prompt = `Interpret the following dream: ${dream}`;

    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt, max_tokens: 150 }),
      }
    );

    const data = await response.json();

    console.log(data);
    if (data.choices && data.choices.length > 0) {
      setInterpretation(data.choices[0].text.trim());
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
