import "./App.css";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";
import { Component } from "react";

class App extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <nav>
            <img src={logo} alt="logo" className="logo" />
            <div
              id="nav-links"
              className={
                this.state.clicked ? "#nav-links sidebar" : "#nav-links"
              }
            >
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Our Services</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div id="menuIcons" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
          <div className="hero-section">
            <div className="row">
              <div className="col1">
                <img
                  src={illustration}
                  alt="illustration"
                  className="illustrationImg"
                />
              </div>
              <div className="col2">
                <h1 className="title">
                  Build The Community Your Fans Will Love
                </h1>
                <p>
                  Huddle re-imagines the way we build communities.You have a
                  voice, but so does your audience. Create connections with your
                  users as you engage in genuine discussions.{" "}
                </p>
                <div>
                  <button>Register</button>
                </div>
              </div>
            </div>
            <footer>
              <div className="socialIcons">
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
