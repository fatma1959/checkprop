import "./App.css";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile/Profile";

function App() {
  const profile = {
    fullName: '',
    bio: '',
    profession: '',
  };

  return (
    <div className="App">
      <img
        src="https://wallpapercave.com/wp/wp7077605.jpg"
        alt=""
        className="im1"
      ></img>
      <Profile profile={profile} />
    </div>
  );
}

export default App;
