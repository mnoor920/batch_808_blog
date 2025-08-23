import Layout from "./layout";
import AboutUsPage from "./pages/aboutus";
import Register from "./pages/auth/register";
import Homepage from "./pages/homepage";
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about" exact element={<AboutUsPage />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Layout>
      {/* <Homepage />
      <AboutUsPage /> */}
    </div>
  );
}

export default App;
