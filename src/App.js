import "./App.css";
import { Route, Routes } from "react-router-dom";

import ShopScreen from "./views/screens/ShopScreen/ShopScreen";
import HomepageScreen from "./views/screens/HomeScreen/HomepageScreen";
import Header from "./views/components/Header/Header";
import AuthenticationScreen from "./views/screens/AuthenticationScreen/AuthenticationScreen";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomepageScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/users/signin" element={<AuthenticationScreen />} />
      </Routes>
    </div>
  );
}

export default App;
