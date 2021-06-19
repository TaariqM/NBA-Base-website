//import logo from './logo.svg';
//import './App.css';
//import Header from './components/Header'
// import HomePage from './components/HomePage'
import Header from "./components/Header";
//import Button from "./components/Button";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "./css/App.css";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search/:page">
          {" "}
          {/*The '?' means that this variable is optional*/}
          <SearchPage />
        </Route>
      </BrowserRouter>

      {/* <Button /> */}
    </div>
  );
}

export default App;
