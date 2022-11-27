import { Outlet } from "react-router-dom";
import Header from "./components/Header";
export default function App() {
    return(
        <div className="App">
          <Header/>
          <div className="container">
            <Outlet />
          </div>
        </div>
      )  
}


