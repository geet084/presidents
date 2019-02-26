import React, { Component } from 'react';
import Card from '../../components/Card/Card'

class Cards extends Component {
  render() {
    let cards = this.props.presidents.map(pres => <Card {...pres}/>)
    return (
      <div>{cards}</div>
    )
  }
}

export default Cards;