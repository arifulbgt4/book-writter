import { useState } from "react";
import Book from "./components/Book";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(
    Boolean(localStorage.getItem("token") !== null)
  );

  const [authTab, setAuthTab] = useState(1);

  return (
    <div className="App">
      {isAuthenticate ? (
        <Book />
      ) : authTab === 1 ? (
        <SignUp onClick={() => setAuthTab(2)} />
      ) : (
        <SignIn onClick={() => setAuthTab(1)} />
      )}
    </div>
  );
}

export default App;
