import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App  bg-black bg-cover h-screen">
        <Toaster position="top-right" />
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
