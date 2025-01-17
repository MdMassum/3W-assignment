import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import AdminDashboard from "./components/AdminDashboard";
import LoginForm from "./components/Login";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <Header isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} />
      <Routes>
        <Route path="/submit" element={<UserForm />} />
        <Route path="/dashboard" element={isAdminLoggedIn ? <AdminDashboard /> : <p>Login required</p>} />
        <Route path="/login" element={<LoginForm setIsAdminLoggedIn={setIsAdminLoggedIn}/>} />
      </Routes>
    </Router>
  );
};

export default App;
