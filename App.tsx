import * as React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
