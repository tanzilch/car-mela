import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/index.jsx";
import Index from "./View/Index.jsx";
import LoginStepper from "./View/loginView/Login.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login completion

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Index />
        </Layout>
      ) : (
        <LoginStepper onComplete={() => setIsAuthenticated(true)} />
      )}
    </BrowserRouter>
  );
}

export default App;
