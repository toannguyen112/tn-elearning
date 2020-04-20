import React, { Component } from "react";
import HomePage from "./Screen/HomePage";
import CoursesPage from "./Screen/CoursePage";
import LoginPage from "./Screen/LoginPage";
import CourseDetailPage from "./Screen/CourseDetailPage";
import CartPage from "./Screen/CartPage";
import CheckoutPage from "./Screen/CheckoutPage";
import SignUpPage from "./Screen/SignUpPage";
import UserPage from "./Screen/UserPage";
import AdminPage from "./Screen/AdminPage";
import Auth from "./Component/Auth/auth";
import FavoritesPage from "./Screen/FavoritesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./sass/main.scss";
import "./App.css"


class App extends Component {
  componentDidMount() { }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route
              exact
              path="/coursedetail/:courseid"
              component={CourseDetailPage}
            />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/favorites" component={FavoritesPage} />

            <Auth path="/user" Component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect()(App);
