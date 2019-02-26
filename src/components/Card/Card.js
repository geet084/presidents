import React from 'react';

export const Card = (props) => {
  console.log('card??',props)
  return (
    <div>
      <h4>{props.number}</h4>
      <h4>{props.president}</h4>
      <h4>{props.birth_year}</h4>
      <h4>{props.death_year}</h4>
      <h4>{props.took_office}</h4>
      <h4>{props.left_office}</h4>
      <h4>{props.party}</h4>
    </div>
  )
}

export default Card;