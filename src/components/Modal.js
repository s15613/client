import React from "react";
import { NavLink } from "react-router-dom"

class Modal extends React.Component {
  render() {
    const { video } = this.props
    return (
      <div className="card col-sm-6 col-md-4 col-xl-3 p-2 border-0">
            <NavLink to={`/all/${video._id}`}>
              <img
                src={video.poster}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h6 className="card-title">{video.title}</h6>
              </div>
            </NavLink>
          </div>
    );

  }
}

export default Modal;
