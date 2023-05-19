import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact";

export default function App() {
  return (
    <ChakraProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      </ChakraProvider>
  );
}