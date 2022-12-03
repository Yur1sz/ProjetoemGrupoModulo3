import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./global.css"
export default function App() {
    return(
        <div className="App">
          <Header/>
          <Outlet/>
        </div>
      )  
}

