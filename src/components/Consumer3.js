import React, { Component } from 'react'
import { UserConsumer } from './UserContex'

class Consumer3 extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {username => {
                return <h2>Hello {username}</h2>
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default Consumer3