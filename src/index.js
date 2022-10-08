import React  from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Formulario from "./components/formulario";
import LoginForm from "./components/loginform";
import Apps from "./App";
import "./components/loginform.css";
 
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
 // Use this after the variable declaration

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="Formulario" element={<Formulario />} />
          <Route path="Apps" element={<Apps/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);