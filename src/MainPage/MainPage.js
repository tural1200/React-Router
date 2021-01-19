import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact"
import FAQ from "../FAQ/FAQ"
import "./css/style.css";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
        showNavbar: false,
      };
  }

  handleClick() {
    this.setState({ showNavbar: !this.state.showNavbar })};

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left-col">
              <NavLink to="/">Burnham</NavLink>
              <div className="menu-icon" onClick={this.handleClick}>
                <i
                  className={
                    this.state.showNavbar ? "fas fa-times" : "fas fa-bars"
                  }
                />
              </div>
            </div>
            <div className="col-md-6 right-col">
              <nav
                className={this.state.showNavbar ? "navbar active" : "navbar"}
              >
                <NavLink exact to="/" activeClassName="active-menu">Home</NavLink>
                <NavLink exact to="/Contact" activeClassName="active-menu">Contact</NavLink>
                <NavLink exact to="/About" activeClassName="active-menu">About</NavLink>
                <NavLink exact to="/FAQ" activeClassName="active-menu">FAQ</NavLink>
              </nav>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/FAQ" component={FAQ} />

        </Switch>
      </div>
    );
  }
}

export default MainPage