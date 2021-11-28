import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopScreen from "./views/screens/ShopScreen/ShopScreen";
import HomepageScreen from "./views/screens/HomeScreen/HomepageScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
    </Routes>
  );
}

export default App;
