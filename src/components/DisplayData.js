import React from "react"


export default class DisplayData extends React.Component {
  render() {
    return (
      <div>
      {this.props.data.firstname}
      <br />
      {this.props.data.lastname}
      </div>
    )
  }
}
