import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    dictionaryApi();
  }, []);

  return <div>Dictionary</div>;
}

export default App;
