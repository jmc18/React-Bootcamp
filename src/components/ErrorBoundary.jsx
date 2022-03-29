import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log(this.state)
  }

  render() {
    if (this.state.errorInfo)
      return (
        <section className="not-found-section">
          <span>{this.props.text}</span>
        </section>
      )

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  text: PropTypes.string.isRequired
}

export default ErrorBoundary
