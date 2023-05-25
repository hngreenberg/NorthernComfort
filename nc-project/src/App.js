import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./customTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import './App.css';
import About from "./pages/About";
import Services from "./pages/Services";
import './Fonts.css'
import Reviews from "./pages/Reviews";

// extends theme to use custom-css settings for components in
const theme = extendTheme(customTheme);

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ChakraProvider>
  );
}
