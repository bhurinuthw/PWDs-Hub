import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', padding: '20px' }}>
        <h1>
          ERROR 404!
        </h1>
        <h2>
          The page you requested does not exist or has moved.
        </h2>
      </div>
    )
  }
}
