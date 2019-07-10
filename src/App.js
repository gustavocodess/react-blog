import React, { Component } from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'
import routes from './routes'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <Navbar />
          <br />
          {
            routes.map(route => (
              <Route
                key={route.path}
                {...route}
              />
            ))
          }
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Footer />
        </div>
      </HashRouter>
    )
  }
}
