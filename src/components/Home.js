import React from "react";
import Modal from "./Modal"
import { connect } from 'react-redux'
import { getAll } from '../actions'
import Loading from "./Loading"

class Home extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    const { videos, loading } = this.props;
    videos.sort((a,b) => new Date(b.date) - new Date(a.date));

    if( loading )
    return (
      <Loading />    
    ) 

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
    videos: state.videos,
    loading: state.loading
})

export default connect(mapStateToProps, { getAll })(Home);
