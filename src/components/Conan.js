import React from "react";
import Modal from "./Modal"
import { connect } from 'react-redux'
import { getCategory } from '../actions'
import Loading from "./Loading"

class Conan extends React.Component {
  componentDidMount() {
    const { url } = this.props.match
    this.props.getCategory(url)
  }
  render() {
    const { videos, loading } = this.props
    videos.sort((a,b) => new Date(b.date) - new Date(a.date));

    if( loading )
    return (
      <Loading />      
    ) 

    return (
      <div className="container">
        <div className="container-fluid">
          <div className="row mt-5">
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

export default connect(mapStateToProps, { getCategory })(Conan);
