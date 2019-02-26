import React from 'react';
import './Card.scss';

export const Card = (props) => {
  console.log('card??',props)
  return (
    <div className='card'>
      <h4>Number: {props.number}</h4>
      <h4>Name: {props.president}</h4>
      <p>Born: {props.birth_year}</p>
      <p>Died: {props.death_year}</p>
      <p>Took office: {props.took_office}</p>
      <p>Left office: {props.left_office}</p>
      <p>Party: {props.party}</p>
    </div>
  )
}

export default Card;