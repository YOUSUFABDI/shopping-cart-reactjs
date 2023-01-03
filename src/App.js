import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
