import "./App.css";
import HomepageScreen from "./views/screens/HomeScreen/HomepageScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageScreen />} />
    </Routes>
  );
}

export default App;
