import React from "react";
class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.link}
        alt={this.props.descr}
        style={{ height: this.props.altezza }}
      />
    );
  }
}
export default ImageComponent;
