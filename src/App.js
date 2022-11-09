import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar.jsx";
import Content from "./Components/Content.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="page">
                  <Sidebar />
                  <Content page={"home"} />
                </div>
              </>
            }
          />
          <Route
            path="/breakfast"
            element={
              <>
                <div className="page">
                  <Sidebar />
                  <Content page={"breakfast"} />
                </div>
              </>
            }
          />
          <Route
            path="/lunch"
            element={
              <>
                <div className="page">
                  <Sidebar />
                  <Content page={"lunch"} />
                </div>
              </>
            }
          />
          <Route
            path="/snacks"
            element={
              <>
                <div className="page">
                  <Sidebar />
                  <Content page={"snacks"} />
                </div>
              </>
            }
          />
          <Route
            path="/dinner"
            element={
              <>
                <div className="page">
                  <Sidebar />
                  <Content page={"dinner"} />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
