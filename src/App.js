import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from './Components/Sidebar.jsx'
import Content from './Components/Content.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page">
      <Sidebar />
      <Content />
      </div>
    </div>
  );
}

export default App;
