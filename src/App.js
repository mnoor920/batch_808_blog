import AboutUsPage from "./pages/aboutus";
import Homepage from "./pages/homepage";
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<AboutUsPage />} />
        <Route path="/about" exact element={<AboutUsPage />} />
      </Routes>
      {/* <Homepage />
      <AboutUsPage /> */}
    </div>
  );
}

export default App;
