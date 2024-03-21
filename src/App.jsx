import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Single from "./pages/Single";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="*" element={<Error />} />
      <Route exact path="/detail/post/:id" element={<Single />} />
      <Route exact path="/create/post" element={<Create />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
