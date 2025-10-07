import "./App.css";
import { Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Text fontSize="3xl" textAlign="center" mt={10}>
        Welcome to the Prometheus Frontend!
      </Text>
      <Footer />
    </>
  );
}

export default App;
