import React, { Component } from 'react';
import { Button, FormGroup, Input, Modal } from 'reactstrap';

class ModalComp extends Component {
  state = {
    title: '',
    poster: '',
    rating: 0
  };
  changeHandler = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  clickHandler = () => {
    this.props.handleClick(this.state);
    this.props.toggle();
  };
  componentDidMount() {
    this.props.movie &&
      this.setState({
        id: this.props.movie.id,
        title: this.props.movie.title,
        poster: this.props.movie.poster,
        rating: this.props.movie.rating
      });
  }
  render() {
    const { isOpen, toggle } = this.props;
    console.log('hello from modal');
    return (
      <Modal
        isOpen={isOpen}
        toggle={() => toggle()}
        modalClassName='modal-register'
      >
        <div className='modal-header no-border-header text-center'>
          <button
            aria-label='Close'
            className='close'
            data-dismiss='modal'
            type='button'
            onClick={() => toggle()}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className='text-muted'>Add new movie</h6>
        </div>
        <div className='modal-body'>
          <FormGroup>
            <label>Title</label>
            <Input
              defaultValue={this.state.title}
              name='title'
              placeholder='Enter a title for the movie...'
              type='text'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Poster</label>
            <Input
              defaultValue={this.state.poster}
              placeholder='Enter a poster link...'
              type='text'
              name='poster'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Rating</label>
            <Input
              defaultValue={this.state.rating}
              placeholder='Enter a poster rating...'
              type='text'
              name='rating'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button
            block
            className='btn-round'
            color='default'
            onClick={() => this.clickHandler()}
          >
            {this.props.movie ? 'Save' : 'ADD'}
          </Button>
          <Button block className='btn-round' color='danger'>
            cancel
          </Button>
        </div>
      </Modal>
    );
  }
}
export default ModalComp;
