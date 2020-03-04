import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';

import './MovieCard.css';
import Rating from '../Rating/Rating';
import { deleteMovie } from '../../Js/actions/actions';

const MovieCard = props => {
  const { title, poster, rating, id } = props.movie;
  return (
    <Card style={{ width: '20rem' }}>
      <CardImg top src={poster} alt={title} className='Card' />
      <CardBody>
        <CardTitle>
          <h6 className='title'> {title}</h6>
        </CardTitle>
        <Rating count={rating} />
        <Button className='btn-round' color='outline-primary'>
          Edit
        </Button>
        <Button
          className='btn-round'
          color='outline-danger'
          onClick={() => props.deleteMovie(id)}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default connect(null, { deleteMovie })(MovieCard);
