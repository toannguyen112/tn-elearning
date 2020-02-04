import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Checkout from "../Component/Checkout/Checkout";
import Loader from "../Component/Loader/Loader";
import Viewing from "../Component/Viewing/Viewing";
export default class CheckoutPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.loading ? <Loader /> : <Checkout history={this.props.history} />}
        <Viewing/>
        <Footer />
      </div>
    );
  }
}
