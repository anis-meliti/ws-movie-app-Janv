import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  trailer: state.movieReducer.movieList
});
const Description = props => {
  console.log('props', props.match.params.id);
  const [trailer] = props.trailer.filter(el => el.id == props.match.params.id);
  console.log('trailer', trailer);
  return (
    <div>
      <iframe
        title='trailer'
        width='1303'
        height='480'
        src={trailer.trailer}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default connect(mapStateToProps)(Description);
