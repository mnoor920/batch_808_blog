import Layout from "./layout";
import AboutUsPage from "./pages/aboutus";
import Register from "./pages/auth/register";
import GetData from "./pages/GetData";
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
          <Route path="/get_data" exact element={<GetData />} />

        </Routes>
      </Layout>
      {/* <Homepage />
      <AboutUsPage /> */}
    </div>
  );
}

export default App;
