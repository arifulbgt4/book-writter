import { useState } from "react";
import Book from "./components/Book";
import SignUp from "./components/Signup";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(
    Boolean(localStorage.getItem("token") !== null)
  );

  console.log(isAuthenticate, "auth");

  return <div className="App">{isAuthenticate ? <Book /> : <SignUp />}</div>;
}

export default App;
