import React from 'react'
import { connect } from 'react-redux'

import InitAction from '../action/InitAction'

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.changeStatus('good')
  }

  render() {
    return (
      <h1>{this.props.init.status.toString()}</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    init: state.init
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: (status) => dispatch(InitAction.changeStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
