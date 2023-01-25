import "./styles/main.css";

import NavBar from "./component/navbar/NavBar";
import Footer from "./component/footer/Footer";
// import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Project/>
      <Footer />
    </div>
  );
}

export default App;
       