import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopScreen from "./views/screens/ShopScreen/ShopScreen";
import HomepageScreen from "./views/screens/HomeScreen/HomepageScreen";
import Header from "./views/components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomepageScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
    </div>
  );
}

export default App;
