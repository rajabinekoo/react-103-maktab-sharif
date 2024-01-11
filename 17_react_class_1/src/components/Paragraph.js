import React from "react";

// class based component
export class Paragraph extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.title1}</p>
        {this.props.children}
        <p>lorem ipsum</p>
      </>
    );
  }
}
