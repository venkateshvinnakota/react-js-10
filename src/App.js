import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn ? <button type="button">Logout</button> : null}
      </div>
    )
  }
}

export default App
