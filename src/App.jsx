import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import HomePage from "./pages/Home/HomePage";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Layout />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
