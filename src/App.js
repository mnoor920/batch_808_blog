import Layout from "./layout";
import AboutUsPage from "./pages/aboutus";
import Homepage from "./pages/homepage";
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about" exact element={<AboutUsPage />} />
          <Route path="/about" exact element={<AboutUsPage />} />
        </Routes>
      </Layout>
      {/* <Homepage />
      <AboutUsPage /> */}
    </div>
  );
}

export default App;
