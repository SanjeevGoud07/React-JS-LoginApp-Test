// Write your code here
import './index.css'

import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

class Home extends Component {
  state = {isLogged: false}

  onLogout = () => {
    this.setState(prevState => ({isLogged: false}))
  }

  onLogin = () => {
    this.setState(prevState => ({isLogged: true}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="container">
        <div className="Box">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.onLogout} />
          ) : (
            <Login login={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
