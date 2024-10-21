import React from "react";
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Read from '../components/Read';
import Create from '../components/Create';
import Update from '../components/Update';


const AppRouter = ()=> {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Read />} />
      <Route path="/create" element={<Create/>} />
      <Route path="/update/:id" element={<Update/>} />
    </Routes>
  </Router> 
  )
};

export default AppRouter;