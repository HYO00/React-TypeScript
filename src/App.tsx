import "./App.css";
import { GlobalStyle } from "styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/main";
import Report from "./pages/report";
import Passenger from "./pages/passenger";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </div>
  );
}

export default App;
