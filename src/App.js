import Profile from "./components/Profile.js";
import LinkList from "./components/LinkList.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";

function App() {
  return (
    <div id="app__div">
      <Profile />
      <LinkList />
      <Footer />
    </div>
  );
}

export default App;
