import React from "react";
import axios from "axios";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = React.useState("");
  const [meanings, setMeanings] = React.useState([]);
  const [category, setCategory] = React.useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  React.useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
