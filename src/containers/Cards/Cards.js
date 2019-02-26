import React, { Component } from 'react';
import Card from '../../components/Card/Card'
import './Cards.scss';

class Cards extends Component {
  render() {
    let cards = this.props.presidents.map(pres => <Card key={pres.number} {...pres}/>)
    return (
      <div className='card-cont'>
        {cards}
      </div>
    )
  }
}

export default Cards;