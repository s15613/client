import React from "react";
import Modal from "./Modal"
import { connect } from 'react-redux'
import { getAll } from '../actions'

class Home extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    const { videos } = this.props;
    videos.sort((a,b) => new Date(b.date) - new Date(a.date));
    return (
      <div className="container mt-3">
        <h1 className="late">Latest ></h1>
        <div className="container-fluid">
          <div className="row">
            {videos.map((video,index) => <Modal key = {index} video = {video} />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    videos: state.videos
})

export default connect(mapStateToProps, { getAll })(Home);
