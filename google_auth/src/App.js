import "./App.css";
import {signInWithGoogle} from "./firebase";

function App() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign In with google</button>
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem("profilePic")}/>
    </div>
  );
}

export default App;
