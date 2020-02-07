import React from 'react'
import {  Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({  isOpen: !this.state.isOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render () {
    return <div>
      <Link to="/">Photobook</Link>
    </div>
  }
}

export default withRouter(Navbar)