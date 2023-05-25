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
import './Fonts.css';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AdminLogin from "./pages/AdminLogin";
import ContactMessages from "./pages/ContactMessages";
import ContactForm from "./pages/Contact";
import Reviews from "./pages/Reviews";

// extends theme to use custom-css settings for components in
const theme = extendTheme(customTheme);

// const httpLink = createHttpLink({uri: '/graphql',});
const httpLink = createHttpLink({uri: 'http://localhost:3001/graphql',});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {headers: { ...headers, authorization: token ? `Bearer ${token}` : '',},};
  });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <div>
          <Router>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/login" element={<AdminLogin />} />
              <Route path="/messages" element={<ContactMessages />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}
