import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MyRouter from "./router/MyRouter";


function App() {
  return (
       <BrowserRouter>
        <Header/>
        <MyRouter/>
        <Footer/>
       </BrowserRouter>
  )
}

export default App;
