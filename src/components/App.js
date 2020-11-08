import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData"

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  addData = (data) => {
  console.log(data)
    this.setState({
    data: data
    })
  }


  render() {
    return (
      <div>
      <Form addData = {this.addData} />
      <DisplayData data = {this.state.data} />
      </div>
    )
  }
}
