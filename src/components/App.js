import React from "react"
import "../styles/base.css"
import Form from "./Form"
import ThankYou from "./ThankYouPage"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Form} />
      <Route exact path="/thankyou" component={ThankYou} />
    </Router>
  )
}

export default App
