import { useState, useEffect } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  // TODO: Dynamic URL
  const callAPI = () => {
    fetch("http://localhost:8080/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
