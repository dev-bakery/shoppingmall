import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./components/context/AuthContext";
import Header from "./components/Header";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
