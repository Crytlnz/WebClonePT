import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import MainLayout from "./MainLayout";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Default false
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(loggedInStatus);
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);  // Update the state to reflect that the user is logged out
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout handleLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
