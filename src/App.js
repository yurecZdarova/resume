
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import { ChakraProvider} from "@chakra-ui/react";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <ChakraProvider>
            <Navbar  />

<AppRouter/>
        </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
