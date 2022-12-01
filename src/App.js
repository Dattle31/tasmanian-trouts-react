import React from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
