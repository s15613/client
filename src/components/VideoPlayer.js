import React from "react";
import { connect } from 'react-redux'
import { getOne } from '../actions'
import "../App.css";

class VideoPlayer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getOne(id)
  }
  render() {
    const { toPlay } = this.props
    return (
      <>
        <h4 className="abc mb-3">{toPlay.title}</h4>
        <div className="container1">
          <iframe 
            title={toPlay.title}
            className="a" 
            src={toPlay.url} 	
            allow="encrypted-media" 
            allowFullScreen >
          </iframe>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  toPlay: state.toPlay
})

export default connect(mapStateToProps, { getOne })(VideoPlayer);
