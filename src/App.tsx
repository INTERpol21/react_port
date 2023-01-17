import "./styles/main.css";

import NavBar from "./component/navbar/NavBar";
import Footer from "./component/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
