import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Context from "./constants/Context";
import "./App.css";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}
