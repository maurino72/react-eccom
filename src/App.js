import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import ShopScreen from "./views/screens/ShopScreen/ShopScreen";
import HomepageScreen from "./views/screens/HomeScreen/HomepageScreen";
import Header from "./views/components/Header/Header";
import AuthenticationScreen from "./views/screens/AuthenticationScreen/AuthenticationScreen";
import { auth } from "./config/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
          <Route path="/users/signin" element={<AuthenticationScreen />} />
        </Routes>
      </div>
    );
  }
}

export default App;
