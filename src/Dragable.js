import React from "react";
import PropTypes from "prop-types";
import Dropable from "./Dropable";

export default class Dragable extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        dragable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
  drag = (e) => {
    e.dataTransfer.setData("transfer", e.target.id);
  };

  noAllowDrop = (e) => {
    e.stopPropagation();
  };
}
Dropable.PropTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
