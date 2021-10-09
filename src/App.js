import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return(
    <main>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />

      </Router>
    </main>
  )
}
